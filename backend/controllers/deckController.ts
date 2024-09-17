import { RequestHandler, Request } from "express"
import catchError from "../utils/catchError"
import AppError from "../utils/appError"
import { connectionPool } from "../src/server"

export const getUserDecks = catchError(async (req, res, next) => {
  try {
    console.log(req.params)
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
