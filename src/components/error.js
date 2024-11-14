export default class ComponentError extends Error {
  constructor(message) {
    super(message);
    this.name = "ComponentError";
  }
}
