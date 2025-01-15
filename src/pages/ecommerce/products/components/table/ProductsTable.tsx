import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable/DataTable";
import { Product } from "@/types/ecommerce";
import { Pagination } from "./Pagination";
import { Meta, PaginatedQuery } from "@/types/table";

interface ProductsTableProps {
  columns: ColumnDef<Product>[];
  data: Product[];
  meta: Meta;
  onUpdateMeta: (meta: Meta) => void;
  onPaginate: (query: PaginatedQuery) => void;
}

export const ProductsTable = ({
  columns,
  data,
  meta,
  onUpdateMeta = () => {},
  onPaginate = () => {},
}: ProductsTableProps) => {
  return (
    <div className="space-y-4">
      {/* <Toolbar table={table} /> */}
      <DataTable columns={columns} data={data} />
      <Pagination
        meta={meta}
        onUpdateMeta={onUpdateMeta}
        onPaginate={onPaginate}
      />
    </div>
  );
};
