import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "@/components/ui/table";
import { DataTableHeader } from "@/components/datatable/DataTableHeader";
import { DataTableBody } from "@/components/datatable/DataTableBody";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [tableState, setTableState] = useState({
    rowSelection: {},
    columnVisibility: {} as VisibilityState,
    columnFilters: [] as ColumnFiltersState,
    sorting: [] as SortingState,
  });

  const table = useReactTable({
    data,
    columns,
    state: tableState,
    enableRowSelection: true,
    onRowSelectionChange: (rowSelection) =>
      setTableState((prev) => ({ ...prev, rowSelection })),
    onSortingChange: (sorting) =>
      setTableState((prev) => ({ ...prev, sorting: sorting as SortingState })),
    onColumnFiltersChange: (columnFilters) =>
      setTableState((prev) => ({
        ...prev,
        columnFilters: columnFilters as ColumnFiltersState,
      })),
    onColumnVisibilityChange: (columnVisibility) =>
      setTableState((prev) => ({
        ...prev,
        columnVisibility: columnVisibility as VisibilityState,
      })),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <DataTableHeader table={table} />
        <DataTableBody table={table} />
      </Table>
    </div>
  );
};
