import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionCode } from '@repo/shared';

interface IBaseException {
  code: string;
}

export class BaseException extends HttpException implements IBaseException {
  code: string;

  constructor({
    code,
    statusCode,
    message,
  }: {
    code: string;
    statusCode: number;
    message: string;
  }) {
    super(message, statusCode);
    this.code = code;
  }

  getCode(): string {
    return this.code;
  }
}

export class UnknownException extends BaseException {
  constructor() {
    super({
      code: ExceptionCode.unknown,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Unknown exception',
    });
  }
}
