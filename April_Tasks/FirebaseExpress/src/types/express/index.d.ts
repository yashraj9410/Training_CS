import express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: Record<string,any>,
      admin?: Record<string,any>
    }
  }
}