import { Category } from "@/types/ecommerce";
import { EditCategoryButtonDialog } from "@/pages/ecommerce/categories/components/EditCategoryButtonDialog";
import { DeleteCategoryButtonDialog } from "@/pages/ecommerce/categories/components/DeleteCategoryButtonDialog";

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
      <div className="flex items-center gap-2">
        <DeleteCategoryButtonDialog category={category} />
        <EditCategoryButtonDialog category={category} />
      </div>
    </div>
  );
};
