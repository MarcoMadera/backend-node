export class BaseError extends Error {
  static isThisError<T extends BaseError = BaseError>(
    error: unknown
  ): error is T {
    return error instanceof this;
  }
}
