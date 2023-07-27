import express from "express"
import {
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController"
import {
  logIn,
  signUp,
  protect,
  forgotPassword,
  resetPassword,
  updatePassword,
} from "../controllers/authController"
const router = express.Router()

router.route("/").get(protect, getAllUsers)
router.post("/signup", signUp)
router.post("/login", logIn)
router.post("/forgotPassword", forgotPassword)
router.post("/resetPassword/:id", resetPassword)
router.patch("/updatePassword", protect, updatePassword)
router.route("/:id").delete(deleteUser).patch(updateUser)

export default router
