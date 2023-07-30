 export class ApiError extends Error {
    constructor(message, code) {
      super();
      this.message = message;
      this.code = code;
    }
  }
  
  export class BadRequestException extends ApiError {
    constructor(message){
      super(message, 400)
    }
  };
  
  export class UnauthorizedException extends ApiError {
    constructor(message){
      super(message, 401)
    }
  }
  
  export class ForbiddenException extends ApiError {
    constructor(message){
      super(message, 403)
    }
  }
  
  export class NotFoundException extends ApiError {
    constructor(message){
      super(message, 404)
    }
  };
  
  export class ConflictException extends ApiError {
    constructor(message){
      super(message, 409)
    }
  };
  
  export class InternalServerErrorException extends ApiError {
    constructor(message){
      super(message, 500)
    }
  };
  
