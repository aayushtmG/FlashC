import express from "express"
import { getDeckCards } from "../controllers/deckController"

const router = express.Router()

router.get("/:deckId/cards", getDeckCards)

export default router
