export type ApiResponse<T = null> = {
  data?: T;
  message: string;
  success: boolean;
  code: string;
};
