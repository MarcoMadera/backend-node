import { BaseError } from "./error";

export class IncorrectInfo extends BaseError {
  constructor(message?: string) {
    super("Incorrect info" + message);
    this.name = "IncorrectInfo";
  }
}

export class InvalidUserData extends BaseError {
  constructor(message?: string) {
    super("Incorrect user data" + message);
    this.name = "InvalidUserData";
  }
}
export class InvalidId extends BaseError {
  constructor(message?: string) {
    super("Invalid id" + message);
    this.name = "InvalidId";
  }
}
