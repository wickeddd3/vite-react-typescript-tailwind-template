import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  PaginationState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Updater,
} from "@tanstack/react-table";
import { Table } from "@/components/ui/table";
import { DataTableHeader } from "@/components/datatable/DataTableHeader";
import { DataTableBody } from "@/components/datatable/DataTableBody";
import { DataTablePagination } from "@/components/datatable/DataTablePagination";
import { Meta, PaginatedQuery } from "@/types/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  meta: Meta;
  fetchData: (query: PaginatedQuery) => void;
}

export const DataTable = <TData, TValue>({
  columns,
  data,
  meta,
  fetchData,
}: DataTableProps<TData, TValue>) => {
  const [tableState, setTableState] = useState({
    rowSelection: {},
    columnVisibility: {} as VisibilityState,
    columnFilters: [] as ColumnFiltersState,
    sorting: [] as SortingState,
    pagination: {
      pageIndex: meta?.page - 1,
      pageSize: meta?.size ?? 10,
    } as PaginationState,
  });

  const handleOnPaginationChange = (pagination: Updater<PaginationState>) => {
    const resolvedPagination =
      typeof pagination === "function"
        ? pagination(tableState.pagination)
        : pagination;
    setTableState((prev) => ({
      ...prev,
      pagination: resolvedPagination as PaginationState,
    }));
    fetchData({
      page: resolvedPagination.pageIndex + 1,
      size: resolvedPagination.pageSize,
      orderBy: meta?.orderBy ?? "createdAt",
      order: meta?.order ?? "desc",
    });
  };

  const handleOnSortingChange = (sorting: Updater<SortingState>) => {
    const resolvedSorting =
      typeof sorting === "function" ? sorting(tableState.sorting) : sorting;
    setTableState((prev) => ({
      ...prev,
      sorting: resolvedSorting as SortingState,
    }));
    fetchData({
      page: meta?.page ?? 1,
      size: meta?.size ?? 10,
      orderBy: resolvedSorting[0]?.id ?? "createdAt",
      order: resolvedSorting[0]?.desc ? "desc" : "asc",
    });
  };

  const table = useReactTable({
    data,
    columns,
    state: tableState,
    manualPagination: true,
    rowCount: meta?.total ?? 0,
    onPaginationChange: handleOnPaginationChange,
    onSortingChange: handleOnSortingChange,
    onColumnFiltersChange: (columnFilters) =>
      setTableState((prev) => ({
        ...prev,
        columnFilters: columnFilters as ColumnFiltersState,
      })),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} />
        </Table>
      </div>
      <DataTablePagination table={table} />
    </>
  );
};
