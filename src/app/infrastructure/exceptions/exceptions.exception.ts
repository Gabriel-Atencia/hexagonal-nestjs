import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomPCOException extends HttpException {
  constructor(
    readonly resultMsg: string,
    readonly resultCode: string,
    readonly httpStatus: number,
  ) {
    super(resultMsg, httpStatus);
  }
}

export class BadRequestPCOException extends CustomPCOException {
  constructor(readonly resultMsg = 'BadRequest') {
    super(resultMsg, 'BAD_REQUEST', HttpStatus.BAD_REQUEST);
  }
}
export class UnAuthorizedPCOException extends CustomPCOException {
  constructor(readonly resultMsg = 'UnAuthorized') {
    super(resultMsg, 'UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
  }
}

export class ForbiddenPCOException extends CustomPCOException {
  constructor(readonly resultMsg = 'Forbidden') {
    super(resultMsg, 'FORBIDDEN', HttpStatus.FORBIDDEN);
  }
}

export class NotFoundPCOException extends CustomPCOException {
  constructor(readonly resultMsg = 'NotFound') {
    super(resultMsg, 'NOT_FOUND', HttpStatus.NOT_FOUND);
  }
}
export class TooManyRequestPCOException extends CustomPCOException {
  constructor(readonly resultMsg = 'Too Many Requests') {
    super(resultMsg, 'TOO_MANY_REQUESTS', HttpStatus.TOO_MANY_REQUESTS);
  }
}

export class InternalServerPCOException extends CustomPCOException {
  constructor(readonly resultMsg = 'Internal Server Error') {
    super(resultMsg, 'INTERNAL_SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
