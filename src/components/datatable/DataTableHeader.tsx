import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Table as ReactTable, flexRender } from "@tanstack/react-table";

interface DataTableHeaderProps<TData> {
  table: ReactTable<TData>;
}

export const DataTableHeader = <TData,>({
  table,
}: DataTableHeaderProps<TData>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};
