import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable/DataTable";
import { Product } from "@/types/ecommerce";

interface ProductsTableProps {
  columns: ColumnDef<Product>[];
  data: Product[];
}

export const ProductsTable = ({ columns, data }: ProductsTableProps) => {
  return (
    <div className="space-y-4">
      {/* <Toolbar table={table} /> */}
      <DataTable columns={columns} data={data} />
      {/* <Pagination table={table} /> */}
    </div>
  );
};
