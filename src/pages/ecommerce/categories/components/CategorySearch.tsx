import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const CategorySearch = () => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" />
      </span>
      <Input type="text" placeholder="Search" className="pl-10 w-fit" />
    </div>
  );
};
