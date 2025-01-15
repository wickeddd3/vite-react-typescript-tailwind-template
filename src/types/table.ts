export type Meta = {
  page: number;
  size: number;
  total: number;
  totalPages: number;
  orderBy: string;
  order: string;
};

export type PaginatedQuery = {
  page: number;
  size: number;
  orderBy: string;
  order: string;
};
