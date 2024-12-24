export type Category = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  supplier: string;
  model: string;
  serialNumber: string;
  barcode: string;
  price: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  category: Category;
};
