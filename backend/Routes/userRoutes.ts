import express from "express"
import {
  deleteUser,
  getAllUsers,
  updateUser,
  getCards,
} from "../controllers/userController"
import { getUserDecks } from "../controllers/deckController"
import {
  logIn,
  signUp,
  protect,
  forgotPassword,
  resetPassword,
  updatePassword,
} from "../controllers/authController"
const router = express.Router()

router.route("/").get(getAllUsers)
router.get("/cards", protect, getCards)
router.post("/signup", signUp)
router.post("/login", logIn)
router.post("/forgotPassword", forgotPassword)
router.post("/resetPassword/:id", resetPassword)
router.patch("/updatePassword", protect, updatePassword)
router.route("/:id").delete(deleteUser).patch(updateUser)
router.get("/:userId/decks", getUserDecks)

export default router
