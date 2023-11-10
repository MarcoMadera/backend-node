import { Response } from "express";
import { AnyObject } from "mongoose";

import { BaseError } from "../errors/error";

export function success(
  res: Response,
  message: string | AnyObject,
  status: number
): void {
  res.status(status || 200).send({ error: "", body: message });
}

export function error(
  res: Response,
  message: string | AnyObject,
  status: number,
  details: unknown
): void {
  if (BaseError.isThisError(details)) {
    console.error(`[Response error]: ${details.message}`);
  } else {
    console.error(details);
  }
  res.status(status || 500).send({ error: message, body: "" });
}
