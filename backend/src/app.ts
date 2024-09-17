import express from "express"
import cardRouter from "../Routes/cardRoutes"
import userRouter from "../Routes/userRoutes"
import deckRouter from "../Routes/deckRoutes"
import errorHandler from "../controllers/errorContoller"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/cards", cardRouter)
app.use("/api/users", userRouter)
app.use("/api/decks", deckRouter)
app.use(errorHandler)
export default app
