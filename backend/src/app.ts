import express from "express"
import cardRouter from "../Routes/cardRoutes"
import userRouter from "../Routes/userRoutes"
import errorHandler from "../controllers/errorContoller"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/cards", cardRouter)
app.use("/api/users", userRouter)
app.use(errorHandler)
export default app
