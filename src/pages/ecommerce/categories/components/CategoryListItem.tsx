import { Category } from "@/types/ecommerce";
import { EditCategoryButtonDialog } from "@/pages/ecommerce/categories/components/EditCategoryButtonDialog";

interface CategoryListItemProps {
  category: Category;
}

export const CategoryListItem = ({
  category: { name, description },
  category,
}: CategoryListItemProps) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-md font-medium text-gray-800">{name}</span>
        <span className="text-sm text-gray-600">{description}</span>
      </div>
      <EditCategoryButtonDialog category={category} />
    </div>
  );
};
