import {Request as ExpressRequest, Response as ExpressResponse} from 'express';

/* eslint-disable no-unused-vars */
enum StatusType{
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500,
    ServiceUnavailable = 503,
    NotImplemented = 501
}

type ErrorData = {
    messages: string[];
}

type ResponseType = {
    message?: string;
    result?: any;
    errors?: ErrorData;
}

// eslint-disable-next-line require-jsdoc
class Response {
  private req: ExpressRequest;
  private res: ExpressResponse;
  private data: ResponseType = {};

  /**
    * Initializes a response object based on the request and response objects
    * @param {ExpressRequest} req The express request object
    * @param {ExpressResponse} res The express response object
  */
  constructor(req: ExpressRequest, res: ExpressResponse) {
    this.req = req;
    this.res = res;
  }

  /**
    * Changes the response status type
    * @param {StatusType} statusType The response status type to be set
    * @return {Response} The response object
  */
  setStatus(statusType: StatusType) {
    this.res.status(statusType);
    return this;
  }

  /**
    * Changes the data to be sent in the response
    * @param {ResponseType} dataResponse The request data to be sent
    * @return {Response} The response object
  */
  setResult(dataResponse: any) {
    this.data.result = dataResponse;
    return this;
  }

  /**
    * Sets the errors list in the response
    * By default the function will set the status type to 400(Bad Request)
    * @param {string[]} errors The errors list to be sent
    * @return {Response} The response object
  */
  setErrors(errors: string[]) {
    this.data.errors = {messages: errors};
    this.data.result = null;
    return this;
  }

  /**
    * Sets the message in the response
    * @param {string} message The message to be sent
    * @return {Response} The response object
  */
  setMessage(message: string) {
    this.data.message = message;
    return this;
  }

  /**
    * Submits the response to the client
  */
  send(): void {
    this.res.send(this.data);
  }
}

export {
  ResponseType, StatusType, Response,
};
