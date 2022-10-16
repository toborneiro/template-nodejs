export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Missing parma: ${paramName}`);
    this.name = 'MissingParamError';
  }
}
