import mongoose, { Model, ObjectId, Schema, model } from "mongoose"

interface ICard {
  title: string
  details: string
  user: Schema.Types.ObjectId
}

interface ICardMethods {}
const cardSchema = new Schema<ICard>(
  {
    title: {
      type: String,
      required: [true, "A card must contain the title"],
    },
    details: {
      type: String,
      required: [true, "A card must contain the details or information"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
)

type CardModel = Model<ICard, {}, ICardMethods>

cardSchema.pre(["find", "findOne", "findOneAndUpdate"], function (next) {
  this.select("-__v")
  this.populate("user", "email -_id")
  next()
})

export default model<ICard, CardModel>("Card", cardSchema)
