import { NextFunction, Request, RequestHandler, Response } from "express"
import { Schema, get } from "mongoose"
import Card from "../models/cardModel"
import User, { IUser } from "../models/userModel"
import catchError from "../utils/catchError"
import FilterQuery from "../utils/filterQuery"

//Getting all cards
export const getAllCards: RequestHandler = catchError(async (req, res) => {
  let query = new FilterQuery(Card.find(), req.query).sort().query
  const cards = await query
  res.status(200).json({
    status: "successs",
    results: cards.length,
    data: cards,
  })
})

//Get a specific card
export const getCard: RequestHandler = catchError(async (req, res) => {
  const card = await Card.findOne({ _id: req.params.id })
  res.status(200).json({
    status: "successs",
    card,
  })
})

// Creating new card
export const createCard: RequestHandler = catchError(
  async (
    req: Request & { user?: IUser & { _id: Schema.Types.ObjectId } },
    res: Response,
    next: NextFunction
  ) => {
    if (!req.body.user) req.body.user = req.user?._id

    const card = await Card.create(req.body)

    const user = await User.findByIdAndUpdate(
      { _id: req.user?._id },
      {
        $push: { cards: card.id },
      }
    )

    res.status(201).json({
      status: "successs",
      newCard: card,
    })
  }
)

//Deleting a card
export const deleteCard: RequestHandler = async (req, res) => {
  await Card.findByIdAndDelete(req.params.id)
  res.status(204)
}

//updating a card
export const updateCard: RequestHandler = catchError(async (req, res) => {
  const updatedCard = await Card.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  )
  res.status(200).json({
    status: "SUCCESS",
    updatedCard,
  })
})
