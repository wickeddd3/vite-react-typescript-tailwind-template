import { Row } from "@tanstack/react-table";
import { CopyPlus, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useAlertDialog } from "@/contexts/AlertDialogContext";
import { deleteProductThunk } from "@/store/slices/products";

interface RowActionsProps<TData> {
  row: Row<TData & { id: string | number }>;
}

export function RowActions<TData>({
  row: {
    original: { id },
  },
}: RowActionsProps<TData>) {
  const dispatch: AppDispatch = useDispatch();

  const { showDialog } = useAlertDialog();

  const handleDelete = (id: number) => {
    dispatch(deleteProductThunk(id));
  };

  const handleDeleteDialog = (id: number) => {
    showDialog({
      title: "Are you sure?",
      description:
        "This action cannot be undone. This will permanently delete the selected item.",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      onConfirm: () => handleDelete(id),
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem asChild>
          <Link to={`/products/${id}/edit`}>
            Edit
            <DropdownMenuShortcut>
              <Pencil className="w-4 h-4" />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Clone
          <DropdownMenuShortcut>
            <CopyPlus className="w-4 h-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleDeleteDialog(Number(id))}>
          Delete
          <DropdownMenuShortcut>
            <Trash className="w-4 h-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
