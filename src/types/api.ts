export type BaseResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type Pagination = {
  total: number;
  page: number;
  limit: number;
};
