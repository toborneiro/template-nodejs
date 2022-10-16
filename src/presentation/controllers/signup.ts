import { HttpRequest, HttpResponse } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
export class SignUpController {
  handle(httpResquest: HttpRequest): HttpResponse {
    const requiredField = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requiredField) {
      if (!httpResquest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
