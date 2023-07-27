import express from "express"
import {
  getAllCards,
  createCard,
  deleteCard,
  updateCard,
  getCard,
} from "../controllers/cardController"
const router = express.Router()

router.route("/").get(getAllCards).post(createCard)
router.route("/:id").delete(deleteCard).patch(updateCard).get(getCard)

export default router
