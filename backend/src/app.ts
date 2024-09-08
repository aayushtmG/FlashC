import express from "express"
import cardRouter from "../Routes/cardRoutes"
import userRouter from "../Routes/userRoutes"
import errorHandler from "../controllers/errorContoller"

const app = express()
app.use(express.json())

app.use("/api/cards", cardRouter)
app.use("/api/users", userRouter)
app.use(errorHandler)
export default app
