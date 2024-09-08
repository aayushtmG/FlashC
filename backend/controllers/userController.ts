import { RequestHandler, Request } from "express"
import catchError from "../utils/catchError"
import User, { IUser } from "../models/userModel"
import AppError from "../utils/appError"
import Card from "../models/cardModel"
import { ObjectId } from "mongoose"
import { connectionPool } from "../src/server"

export const getAllUsers: RequestHandler = catchError(
  async (req: Request & { user?: IUser }, res) => {
    const [userList] = await connectionPool.query(
      "Select user_id,username, email from Users"
    )
    res.status(200).json(userList)
  }
)

export const deleteUser: RequestHandler = catchError(async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.status(204).json()
})

export const updateUser: RequestHandler = catchError(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("You cannot update password here!!", 400))
  }
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  res.status(200).json({
    status: "SUCCESS",
    updatedUser,
  })
})

export const getCards: RequestHandler = catchError(
  async (req: Request & { user?: IUser & { _id: ObjectId } }, res, next) => {
    const userId = req.user?._id
    const cards = await Card.find({
      user: userId,
    })
    res.json({
      status: "SUCCESS",
      cards,
    })
  }
)
