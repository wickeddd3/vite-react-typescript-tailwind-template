import { Category } from "@/types/ecommerce";
import { CategoryListItem } from "@/pages/ecommerce/categories/components/CategoryListItem";

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category) => (
        <CategoryListItem key={category.id} category={category} />
      ))}
    </div>
  );
};
