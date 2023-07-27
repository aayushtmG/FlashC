import { InferSchemaType, Schema, model } from "mongoose"

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "A card must contain the title"],
    },
    details: {
      type: String,
      required: [true, "A card must contain the details or information"],
    },
    date: {
      type: Date,
      default: Date.now,
      select: true,
    },
    lastUpdated: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

type Card = InferSchemaType<typeof cardSchema>

cardSchema.pre(["find", "findOne", "findOneAndUpdate"], function (next) {
  this.select("-__v")
  next()
})

export default model<Card>("card", cardSchema)
