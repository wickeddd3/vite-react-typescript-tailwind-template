import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable/DataTable";
import { Product } from "@/types/ecommerce";
import { Meta, PaginatedQuery } from "@/types/table";

interface ProductsTableProps {
  columns: ColumnDef<Product>[];
  data: Product[];
  meta: Meta;
  fetchData: (query: PaginatedQuery) => void;
}

export const ProductsTable = ({
  columns,
  data,
  meta,
  fetchData,
}: ProductsTableProps) => {
  return (
    <div className="space-y-4">
      <DataTable
        columns={columns}
        data={data}
        meta={meta}
        fetchData={fetchData}
      />
    </div>
  );
};
