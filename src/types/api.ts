export interface IListResponse<T extends object> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
