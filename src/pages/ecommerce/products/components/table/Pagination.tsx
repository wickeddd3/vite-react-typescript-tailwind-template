import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Meta, PaginatedQuery } from "@/types/table";

interface PaginationProps {
  meta: Meta;
  onUpdateMeta: (meta: Meta) => void;
  onPaginate: (query: PaginatedQuery) => void;
}

export const Pagination = ({
  meta,
  meta: { page, size, total, totalPages },
  onUpdateMeta = () => {},
  onPaginate = () => {},
}: PaginationProps) => {
  const handleUpdateMeta = (value: string) => {
    onUpdateMeta({ ...meta, size: Number(value) });
  };

  const handleFirstPage = (meta: Meta) => {
    onPaginate({
      page: 1,
      size: meta.size,
      orderBy: "createdAt",
      order: "desc",
    });
  };

  const handleLastPage = () => {
    onPaginate({
      page: meta.totalPages,
      size: meta.size,
      orderBy: "createdAt",
      order: "desc",
    });
  };

  const handlePreviousPage = () => {};

  const handleNextPage = () => {};

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        Total of {total} items
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select value={String(size)} onValueChange={handleUpdateMeta}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={size} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {page} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => handleFirstPage(meta)}
            disabled={false}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={handlePreviousPage}
            disabled={false}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={handleNextPage}
            disabled={false}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={handleLastPage}
            disabled={false}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
