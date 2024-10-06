import { RequestHandler, Request } from "express"
import catchError from "../utils/catchError"
import AppError from "../utils/appError"
import { connectionPool } from "../src/server"

export const getUserDecks = catchError(async (req, res, next) => {
  try {
    const { userId } = req.params
    const [decks] = await connectionPool.query(
      `select * from Decks where user_id = ${userId}`
    )
    return res.status(200).json({
      status: "success",
      decks,
    })
  } catch (e) {
    console.log(e)
  }
})

export const getDeckCards = catchError(async (req, res, next) => {
  try {
    const { deckId } = req.params
    const [cards] = await connectionPool.query(
      `select * from Cards where deck_id = ${deckId}`
    )
    return res.status(200).json({
      status: "success",
      cards,
    })
  } catch (e) {
    console.log(e)
  }
})
