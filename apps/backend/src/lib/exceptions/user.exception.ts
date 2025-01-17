import { UserExceptionCode } from '@repo/shared';
import { BaseException } from './base.exception';
import { HttpStatus } from '@nestjs/common';

export class GoogleLoginFailedException extends BaseException {
  constructor() {
    super({
      code: UserExceptionCode.GoogleLoginFailed,
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Google login failed',
    });
  }
}

export class GoogleEmailNotVerifiedException extends BaseException {
  constructor() {
    super({
      code: UserExceptionCode.GoogleEmailNotVerified,
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Google email is not verified',
    });
  }
}
