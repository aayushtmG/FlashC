import { NextFunction, RequestHandler, Request, Response } from "express"

const catchError = (func: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err))
  }
}
export default catchError
