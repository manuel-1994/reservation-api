import type { Response } from 'express';
import { startSession } from 'mongoose';

const enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUETS = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

const httpResponse = {
  Ok(res: Response, data: any) {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMsg: 'OK',
      data,
    });
  },
  Created(res: Response, data: any) {
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      statusMsg: 'Created',
      data,
    });
  },
  NoContent(res: Response) {
    return res.status(HttpStatus.NO_CONTENT).json({});
  },
  BadRequest(res: Response, errorMessage: string) {
    return res.status(HttpStatus.BAD_REQUETS).json({
      status: HttpStatus.BAD_REQUETS,
      statusMsg: 'Bad Request',
      errorMessage,
    });
  },
  Unauthorized(res: Response, errorMessage: string) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMsg: 'Unauthorized',
      errorMessage,
    });
  },
  Forbidden(res: Response, errorMessage: string) {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMsg: 'Forbidden',
      errorMessage,
    });
  },
  NotFound(res: Response, errorMessage: string) {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMsg: 'Not Found',
      errorMessage,
    });
  },
  InternalServerError(res: Response, errorMessage: string) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMsg: 'Internal Server Error',
      errorMessage,
    });
  },
};

export default httpResponse;
