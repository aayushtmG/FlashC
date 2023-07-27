import express from "express"
import cardRouter from "../Routes/cardRoutes"
import userRouter from "../Routes/userRoutes"
import errorHandler from "../controllers/errorContoller"

const app = express()
app.use(express.json())

app.use("/api/v1/cards", cardRouter)
app.use("/api/v1/users", userRouter)
app.use(errorHandler)
export default app
