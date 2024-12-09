import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { CategoryForm } from "@/pages/ecommerce/categories/components/CategoryForm";
import { CategorySchemaType } from "@/schema/category";
import { toast } from "@/hooks/use-toast";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateCategoryThunk } from "@/store/slices/categories";
import { Category } from "@/types/ecommerce";

interface EditCategoryButtonDialogProps {
  category: Category;
}

export const EditCategoryButtonDialog = ({
  category,
}: EditCategoryButtonDialogProps) => {
  const dispatch: AppDispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateCategory = (values: CategorySchemaType) => {
    setLoading(true);
    dispatch(updateCategoryThunk({ category: values, id: category?.id }))
      .unwrap()
      .then(() => {
        toast({
          title: "Success",
          description: "Category updated successfully",
        });
        setLoading(false);
        setIsDialogOpen(false);
      })
      .catch((error) => {
        toast({
          title: "Updating category failed",
          description: error,
          variant: "destructive",
        });
        setLoading(false);
      });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby="add-category-dialog"
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="text-md">Edit Category</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CategoryForm
          onSubmit={handleUpdateCategory}
          loading={loading}
          value={category}
        />
      </DialogContent>
    </Dialog>
  );
};
