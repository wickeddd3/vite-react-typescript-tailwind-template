import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProductSchema, ProductSchemaType } from "@/schema/product";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Category, Product } from "@/types/ecommerce";
import { useEffect, useMemo } from "react";

interface ProductFormProps {
  onSubmit: (values: ProductSchemaType) => void;
  loading: boolean;
  value?: Product | null;
  categories: Category[];
  submitText?: string;
}

export const ProductForm = ({
  onSubmit,
  loading,
  value = null,
  categories = [],
  submitText = "Save",
}: ProductFormProps) => {
  const defaultValues = useMemo(
    () => ({
      categoryId: 1,
      name: value?.name ?? "",
      brand: value?.brand ?? "",
      supplier: value?.supplier ?? "",
      model: value?.model ?? "",
      serialNumber: value?.serialNumber ?? "",
      barcode: value?.barcode ?? "",
      price: value?.price ?? 0,
    }),
    [value]
  );

  const form = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
    defaultValues,
  });

  const { handleSubmit, control, reset } = form;

  const handleFormSubmit = (values: ProductSchemaType) => {
    onSubmit(values);
    reset(defaultValues);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return (
    <Form {...form} data-testid="create-form">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="categoryId">Category</FormLabel>
              <FormControl>
                <Select
                  value={String(field.value)}
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>List of categories</SelectLabel>
                      {categories.map(({ id, name }) => (
                        <SelectItem value={String(id)} key={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input {...field} id="name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="brand">Brand</FormLabel>
              <FormControl>
                <Input {...field} id="brand" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="supplier"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="supplier">Supplier</FormLabel>
              <FormControl>
                <Input {...field} id="supplier" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="model">Model</FormLabel>
              <FormControl>
                <Input {...field} id="model" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="serialNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="serialNumber">Serial No.</FormLabel>
              <FormControl>
                <Input {...field} id="serialNumber" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="barcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="barcode">Barcode</FormLabel>
              <FormControl>
                <Input {...field} id="barcode" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="price">Price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  id="price"
                  type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <Button
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
        className="w-full mt-4"
      >
        {!loading && <span>{submitText}</span>}
        {loading && (
          <LoaderCircle className="animate-spin" data-testid="spinner-icon" />
        )}
      </Button>
    </Form>
  );
};
