import mongoose from "mongoose"
import app from "./app"
import "dotenv/config"
const PORT = process.env.PORT
const DB = process.env.DATABASE?.replace(
  "<password>",
  `${process.env.DATABASE_PASSWORD}`
)

mongoose.connect(`${DB}`).then(() => console.log("Connected to the Database"))

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
})
