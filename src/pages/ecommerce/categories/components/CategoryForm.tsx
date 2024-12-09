import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CategorySchema, CategorySchemaType } from "@/schema/category";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";

interface CategoryFormProps {
  onSubmit: (values: CategorySchemaType) => void;
  loading: boolean;
  value?: object;
}
export const CategoryForm = ({
  onSubmit,
  loading,
  value = {},
}: CategoryFormProps) => {
  const defaultValues = {
    name: "",
    description: "",
    ...value,
  };

  const form = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
    defaultValues,
  });

  const { handleSubmit, control, reset } = form;

  const handleFormSubmit = (values: CategorySchemaType) => {
    onSubmit(values);
    reset({
      name: "",
      description: "",
    });
  };

  return (
    <Form {...form} data-testid="create-form">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-2"
      >
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="description">Description</FormLabel>
              <FormControl>
                <Textarea {...field} rows={5} id="description" />
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
        {!loading && <span>Save</span>}
        {loading && (
          <LoaderCircle className="animate-spin" data-testid="spinner-icon" />
        )}
      </Button>
    </Form>
  );
};
