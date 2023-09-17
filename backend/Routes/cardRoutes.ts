import express from "express"
import {
  getAllCards,
  createCard,
  deleteCard,
  updateCard,
  getCard,
} from "../controllers/cardController"
import { protect } from "../controllers/authController"
const router = express.Router()

router.route("/").get(getAllCards).post(protect, createCard)
router.route("/:id").delete(deleteCard).patch(updateCard).get(getCard)

export default router
