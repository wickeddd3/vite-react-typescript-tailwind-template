import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryForm } from "@/pages/ecommerce/categories/components/CategoryForm";
import { CategorySchemaType } from "@/schema/category";
import { toast } from "@/hooks/use-toast";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createCategoryThunk } from "@/store/slices/categories";

export const AddCategoryButtonDialog = () => {
  const dispatch: AppDispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCategory = (values: CategorySchemaType) => {
    setLoading(true);
    dispatch(createCategoryThunk(values))
      .unwrap()
      .then(() => {
        toast({
          title: "Success",
          description: "Category created successfully",
        });
        setLoading(false);
        setIsDialogOpen(false);
      })
      .catch((error) => {
        toast({
          title: "Creating category failed",
          description: error,
          variant: "destructive",
        });
        setLoading(false);
      });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Category</Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby="add-category-dialog"
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="text-md">Add Category</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CategoryForm onSubmit={handleAddCategory} loading={loading} />
      </DialogContent>
    </Dialog>
  );
};
