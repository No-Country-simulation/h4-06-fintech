interface GenericResponseBase {
  message: string;
  code: number;
}

export interface ErrorResponse extends GenericResponseBase {
  statusCode: 404; // Specific status code
  error: string;
  message: string;
}

interface SuccessResponse<T> extends GenericResponseBase {
  data: T;
}

// A discriminated union for the GenericResponse
export type GenericResponse<T> = ErrorResponse | SuccessResponse<T>;
