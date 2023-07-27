import { ErrorRequestHandler, Response } from "express"
import AppError from "../utils/appError"

const handleValidationError = (err: AppError) => {
  let errors: string[]
  let message: string = "Invalid Input"
  if (err.errors) {
    errors = Object.values(err.errors).map((el) => el.message)
    message = errors.join(". ")
  }
  return new AppError(message, 404)
}
const handleDuplicateKey = (err: AppError) => {
  const [key, value] = Object.entries(err.keyValue as object)[0]
  let message: string = `${key.toUpperCase()} already exists => ${value}`
  return new AppError(message, 404)
}
const sendError = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  })
}

export default ((err: AppError, req, res, next) => {
  err.statusCode = err.statusCode || 500
  if (err.name === "ValidationError") {
    err = handleValidationError(err)
  }
  if (err.code === 11000) {
    err = handleDuplicateKey(err)
  }

  sendError(err, res)
}) as ErrorRequestHandler
