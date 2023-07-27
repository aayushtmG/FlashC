import { Model, Schema, model } from "mongoose"

interface ICard {
  title: string
  details: string
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
  },
  {
    timestamps: true,
  }
)

type CardModel = Model<ICard, {}, ICardMethods>

cardSchema.pre(["find", "findOne", "findOneAndUpdate"], function (next) {
  this.select("-__v")
  next()
})

export default model<ICard, CardModel>("card", cardSchema)
