export class HTMLError extends Error {
  constructor(errorMessage) {
    super(errorMessage);
    this.name = "HTMLError";
  }
}
