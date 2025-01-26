import { Category } from "@/types/ecommerce";
import { CategoryListItem } from "@/pages/ecommerce/categories/components/CategoryListItem";

interface CategoryListProps {
  categories: Category[];
  lastCategoryRef: (node: HTMLDivElement | null) => void;
}

export const CategoryList = ({
  categories,
  lastCategoryRef,
}: CategoryListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category, index) => {
        const isLastCategory = index === categories.length - 1;

        return (
          <div ref={isLastCategory ? lastCategoryRef : null} key={category.id}>
            <CategoryListItem category={category} />
          </div>
        );
      })}
    </div>
  );
};
