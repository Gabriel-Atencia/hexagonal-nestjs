import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { CustomPCOException } from '../exceptions/exceptions.exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    Logger.error(exception);
    console.error(exception);

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let resultCode = 'INTERNAL_SERVER_ERROR';
    let resultMsg = 'Internal server error';

    if (exception instanceof CustomPCOException) {
      httpStatus = exception.getStatus();
      resultCode = exception.resultCode;
      resultMsg = exception.resultMsg;
    } else if (exception?.name === 'AxiosError') {
      httpStatus = exception.response?.status || httpStatus;
      resultCode =
        exception.response?.data?.resultCode || exception.code || resultCode;
      resultMsg =
        exception.response?.data?.resultMsg ||
        exception.response?.statusText ||
        'Internal server error';
    } else if (exception instanceof BadRequestException) {
      httpStatus = exception.getStatus();
      resultCode = 'BAD_REQUEST';
      resultMsg = exception?.message || resultMsg;
    } else if (exception?.status) {
      httpStatus = exception.status;
      resultCode = exception?.name || resultCode;
      resultMsg = exception?.message || resultMsg;
    }

    // dto class validators throw badrequestexception stored errors in message
    if (Array.isArray(exception?.response?.message)) {
      resultMsg = exception?.response?.message.join(', ');
    }

    const responseBody = {
      resultCode,
      resultMsg,
    };

    Logger.error(responseBody);

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
