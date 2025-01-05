import { ColumnDef } from "@tanstack/react-table";
import { ColumnHeader } from "./ColumnHeader";
import { DollarSign } from "lucide-react";
import { RowActions } from "./RowActions";
import { Product } from "@/types/ecommerce";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "barcode",
    header: ({ column }) => <ColumnHeader column={column} title="Barcode" />,
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("barcode")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column} title="Name" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-normal">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "model",
    header: ({ column }) => <ColumnHeader column={column} title="Model" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-normal">
            {row.getValue("model")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "serialNumber",
    header: ({ column }) => <ColumnHeader column={column} title="Serial No." />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-normal">
            {row.getValue("serialNumber")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <ColumnHeader
        column={column}
        title="Price"
        className="flex justify-center items-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex gap-1 items-center justify-end">
          <DollarSign className="h-3 w-3 text-muted-foreground" />
          <span className="max-w-[500px] truncate font-normal">
            {row.getValue("price")}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <RowActions row={row} />
      </div>
    ),
  },
];
