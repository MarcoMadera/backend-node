import { BaseError } from "./error";

export class InvalidInfo extends BaseError {
  constructor(message?: string) {
    super("Invalid info" + message);
    this.name = "InvalidInfo";
  }
}

export class InvalidMessageData extends BaseError {
  constructor(message?: string) {
    super("Invalid message data" + message);
    this.name = "InvalidMessageData";
  }
}

export class InvalidId extends BaseError {
  constructor(message?: string) {
    super("Invalid id" + message);
    this.name = "InvalidId";
  }
}
