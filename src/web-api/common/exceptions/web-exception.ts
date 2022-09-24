import {StatusType} from '../response/response';

// eslint-disable-next-line require-jsdoc
class WebException extends Error {
  private StatusType: StatusType;
  // eslint-disable-next-line require-jsdoc
  constructor(message: string, public statusType: StatusType) {
    super(message);
    this.StatusType = statusType;
  }
}

export {WebException};
