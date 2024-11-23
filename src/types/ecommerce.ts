export type Category = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
};
