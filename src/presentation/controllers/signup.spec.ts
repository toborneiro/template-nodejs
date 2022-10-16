import { SignUpController } from './signup';
import { MissingParamError } from '../errors/missing-param-error';

describe('Signup Controller', () => {
  test('Should Return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpResquest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpResquest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });
});

describe('Signup Controller', () => {
  test('Should Return 400 if no email is provided', () => {
    const sut = new SignUpController();
    const httpResquest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpResquest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  });
});
