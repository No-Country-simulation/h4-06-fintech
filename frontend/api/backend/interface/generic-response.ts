export interface GenericResponse<T> {
  message: string;
  code: number;
  data: T;
}
