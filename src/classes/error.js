export default class ClassError extends Error {
  constructor(message) {
    super(message);
    this.name = "ClassError";
  }
}

export class MethodError extends Error {
  constructor(message) {
    super(message);
    this.name = "MethodError";
  }
}
