import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Table as ReactTable, flexRender } from "@tanstack/react-table";

interface DataTableBodyProps<TData> {
  table: ReactTable<TData>;
}

export const DataTableBody = <TData,>({ table }: DataTableBodyProps<TData>) => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={table.getAllColumns().length}
            className="h-24 text-center"
          >
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
