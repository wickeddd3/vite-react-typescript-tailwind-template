import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, LoaderCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteCategoryThunk } from "@/store/slices/categories";
import { Category } from "@/types/ecommerce";

interface DeleteCategoryButtonDialogProps {
  category: Category;
}

export const DeleteCategoryButtonDialog = ({
  category,
}: DeleteCategoryButtonDialogProps) => {
  const dispatch: AppDispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteCategory = (id: number) => {
    setLoading(true);
    dispatch(deleteCategoryThunk(id))
      .unwrap()
      .then(() => {
        toast({
          title: "Success",
          description: "Category deleted successfully",
        });
        setLoading(false);
        setIsDialogOpen(false);
      })
      .catch((error) => {
        toast({
          title: "Deleting category failed",
          description: error,
          variant: "destructive",
        });
        setLoading(false);
      });
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-md">
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center py-4 text-pretty">
            This action cannot be undone. This will permanently delete selected
            category.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={() => handleDeleteCategory(category?.id)}
          >
            {!loading && <span>Confirm</span>}
            {loading && (
              <LoaderCircle
                className="animate-spin"
                data-testid="spinner-icon"
              />
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
