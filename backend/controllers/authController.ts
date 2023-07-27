import crypto from "crypto"
import "dotenv/config"
import { Request, RequestHandler } from "express"
import jwt, { Secret } from "jsonwebtoken"
import User, { IUser } from "../models/userModel"
import AppError from "../utils/appError"
import catchError from "../utils/catchError"
import sendEmail from "../utils/email"

export const signUp: RequestHandler = catchError(async (req, res, next) => {
  const user = await User.create(req.body)
  res.status(201).json({
    status: "SUCCESS",
    user,
  })
})

export const logIn: RequestHandler = catchError(async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next(new AppError("Please provide both EMAIL and PASSWORD", 400))
  }
  const { email, password } = req.body

  const user = await User.findOne({ email }).select("+password")
  if (
    !user ||
    !(await user.compareWithHashedPassword(password, user.password as string))
  ) {
    return next(
      new AppError("Incorrect Credentials! Please check your password?", 403)
    )
  }
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRETKEY as string,
    {
      expiresIn: process.env.JWT_EXPIRESIN,
    }
  )

  res.status(200).json({
    status: "SUCCESS",
    token,
    user,
  })
})

//creating user property in request to track current logged in user
// declare global {
//   namespace Express {
//     interface Request {
//       user?: IUser
//     }
//   }
// }

export const protect: RequestHandler = async (
  req: Request & { user?: IUser },
  res,
  next
) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]
  }
  if (!token) {
    return next(new AppError("You are not logged in!!!", 403))
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRETKEY as Secret
  ) as jwt.JwtPayload
  const currentUser = await User.findById(decoded.id)

  if (!currentUser) {
    return next(new AppError("user doesnt exist", 400))
  }

  req.user = currentUser
  next()
}

const generateResetTokenOn = (user: IUser) => {
  const resetToken = crypto.randomBytes(32).toString("hex")
  user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")
  user.passwordResetTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)

  return resetToken
}

export const forgotPassword: RequestHandler = catchError(
  async (req, res, next) => {
    //get the user according to the provided email
    const user = await User.findOne({ email: req.body.email })

    //if the user doesnt exist return error
    if (!user) {
      return next(new AppError("The user doesnt exist", 403))
    }
    //create a random reset token and save it to the user
    const resetToken = generateResetTokenOn(user)
    await user.save({
      validateBeforeSave: false,
    })
    //create and send reseturl using the reset token created previously
    const resetUrl = `${req.protocol}://${req.hostname}:${process.env.PORT}/api/v1/resetPassword/${resetToken}`
    //create a message that will be attached in the mail and it contains the reseturl
    const message = `Reset your password on the following link ${resetUrl}`
    //sendmail and if error delete the password reset token stored in the user's document
    try {
      sendEmail({
        subject: "Password Reset Link",
        email: req.body.email,
        message,
      })
      res.json({
        status: "SUCCESS",
        message: `Sent mail in your mail`,
      })
    } catch (e) {
      return next(new AppError(`Couldn't sent the reset link`, 500))
    }
  }
)

export const resetPassword: RequestHandler = catchError(
  async (req, res, next) => {
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.id)
      .digest("hex")

    let user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetTokenExpires: { $gt: Date.now() },
    })

    if (!user) {
      return next(new AppError("Incorrect Token or Token alread expired", 400))
    }
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    user.passwordResetToken = undefined
    user.passwordResetTokenExpires = undefined
    await user.save()

    res.json({
      status: "SUCCESS",
      message: "Password succesfully reseted",
    })
  }
)

export const updatePassword: RequestHandler = catchError(
  async (req: Request & { user?: IUser }, res, next) => {
    const user = await User.findOne({ email: req.user?.email }).select(
      "+password"
    )
    if (!req.user) {
      return next(new AppError("You are not logged in!", 403))
    }
    if (
      !(await user?.compareWithHashedPassword(
        req.body.currentPassword,
        user.password as string
      ))
    ) {
      return next(new AppError("Your old password doesnt match", 403))
    }

    if (!user) {
      return next(new AppError("No such user found", 403))
    }

    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    await user.save()
    res.json({
      status: "SUCCESS",
      message: "Succesfully updated your password",
    })
  }
)
