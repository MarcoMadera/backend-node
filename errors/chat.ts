import { BaseError } from "./error";

export class InvalidUserList extends BaseError {
  constructor(message?: string) {
    super("Invalid user list" + message);
    this.name = "InvalidUserList";
  }
}

export class InvalidChatData extends BaseError {
  constructor() {
    super("Invalid chat data");
    this.name = "InvalidChatData";
  }
}

export class InvalidId extends BaseError {
  constructor() {
    super("Invalid id");
    this.name = "InvalidId";
  }
}
