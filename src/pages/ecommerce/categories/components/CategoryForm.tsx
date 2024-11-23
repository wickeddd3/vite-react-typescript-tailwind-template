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
import { toast } from "@/hooks/use-toast";

export const CategoryForm = () => {
  const defaultValues = {
    name: "",
    description: "",
  };

  const form = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CategorySchemaType) {
    try {
      console.log(values);
      toast({
        title: "Success",
        description: "Form created successfully",
      });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form} data-testid="create-form">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <Button
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        className="w-full mt-4"
      >
        {!isSubmitting && <span>Save</span>}
        {isSubmitting && (
          <LoaderCircle className="animate-spin" data-testid="spinner-icon" />
        )}
      </Button>
    </Form>
  );
};
