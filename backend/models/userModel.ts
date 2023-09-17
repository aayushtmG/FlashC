import bcrypt from "bcrypt"
import { Model, model, Schema } from "mongoose"
import AppError from "../utils/appError"
import crypto from "crypto"

export interface IUser {
  photo?: string | undefined
  passwordResetToken?: string | undefined
  passwordResetTokenExpires?: Date
  name?: string | undefined
  email?: string | undefined
  password?: string | undefined
  passwordConfirm?: string | undefined
  cards: Schema.Types.ObjectId[]
}

interface IUserMethods {
  getName(): string
  compareWithHashedPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean>
  generateResetTokenOn(user: IUser): string
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "User must have a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: {
        validator: function (v: string) {
          return v.match(/([a-z0-9]{3,})@([a-z])+\.([a-z]{1,})/)
        },
        message: "Invalid Email",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: 6,
      max: 15,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm the password"],
    },
    photo: String,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Card",
      },
    ],
  },
  {
    timestamps: true,
  }
)

type UserModel = Model<IUser, {}, IUserMethods>

//MIDDLEWARE FOR PASSWORD VALIDATION
userSchema.pre("save", async function (next) {
  if (this.password !== this.passwordConfirm) {
    return next(new AppError("Passwords doesnt match", 400))
  }
  if (this.password != undefined) {
    this.password = await bcrypt.hash(this.password, 12)
  }
  this.passwordConfirm = undefined
  next()
})
userSchema.pre("findOne", function (next) {
  this.populate("cards", "-_id  title details")
  next()
})

//INSTANCE METHODS
userSchema.methods.compareWithHashedPassword = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword)
}
userSchema.methods.generateResetTokenOn = (user: IUser) => {
  const resetToken = crypto.randomBytes(32).toString("hex")
  user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")
  user.passwordResetTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)

  return resetToken
}

export default model<IUser, UserModel>("User", userSchema)
