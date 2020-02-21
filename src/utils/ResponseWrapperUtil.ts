import { IApiResponse } from "../models/interfaces/IApiResponse";
import HttpStatus from 'http-status-codes';
import { Request, Response } from "express";
export class ResponseWrapperUtil {

    static sendSuccessResponse(res: Response, data: IApiResponse) {
        res.status(HttpStatus.OK).send({
            response: {
                code: data.responseCode,
                message: data.message,
                data: data.data
            }
        });
    }

    static sendListingsResponse(res: Response, data: IApiResponse) {
        res.status(HttpStatus.OK).send({
            response: {
                code: data.responseCode,
                message: data.message,
                data: data.data
            }
        });
    }

    static sendResourceNotFoundResponse(res: Response, data: IApiResponse) {
        res.status(HttpStatus.NOT_FOUND).send({
            response: {
                code: data.responseCode,
                message: data.message
            }
        });
    }

    static sendBadRequestResponse(res: Response, data: IApiResponse) {
        res.status(HttpStatus.BAD_REQUEST).send({
            response: {
                code: data.responseCode,
                message: data.message,
                error: data.error
            }
        });
    }

    static sendAuthErrorResponse(res: Response, data: IApiResponse) {
        res.status(HttpStatus.UNAUTHORIZED).send({
            response: {
                code: data.responseCode,
                message: data.message,
                error: data.error
            }
        });
    }

    static sendErrorResponse(res: Response, data: IApiResponse) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            response: {
                code: data.responseCode,
                message: data.message,
                error: data.error
            }
        });
    }

}