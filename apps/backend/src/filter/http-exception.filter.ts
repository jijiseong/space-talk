import {
  BaseException,
  UnknownException,
} from '@/lib/exceptions/base.exception';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ApiResponse } from '@repo/shared';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    const exceptionInstance =
      exception instanceof BaseException ? exception : new UnknownException();

    const apiResponse: ApiResponse<unknown> = {
      message: exceptionInstance.message,
      code: exceptionInstance.code,
      success: false,
    };

    response.status(status).json(apiResponse);
  }
}
