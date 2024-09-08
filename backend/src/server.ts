import app from "./app"
const PORT = 8000

const mysql = require("mysql2")

// Create a connection to the database
export const connectionPool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "secret@123",
    database: "flashc",
    waitForConnections: true,
    connectionLimit: 10,
  })
  .promise()

app.listen(PORT, () => {
  console.log("listening to ", PORT)
})
