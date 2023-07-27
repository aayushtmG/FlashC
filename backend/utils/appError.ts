import { Request } from "express"

export default class AppError extends Error {
  statusCode: number
  status: string
  errors?: object
  code?: number
  keyValue?: object
  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith("4") ? "FAIL" : "ERROR"

    Error.captureStackTrace(this, this.constructor)
  }
}
