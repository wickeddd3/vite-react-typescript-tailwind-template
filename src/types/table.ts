export type Meta = {
  page: number;
  size: number;
  total: number;
  totalPages: number;
};

export type PaginatedQuery = {
  page: number;
  size: number;
  orderBy: string;
  order: string;
};
