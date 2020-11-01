export class MissingIdError extends Error {
  constructor() {
    super('Id query param is missing');
    this.name = 'MissingIdError';
  }
}
