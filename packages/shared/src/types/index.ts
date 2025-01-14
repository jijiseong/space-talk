export type ApiResponse<T = null> = {
  data: T;
  message: string;
  code: number;
};
