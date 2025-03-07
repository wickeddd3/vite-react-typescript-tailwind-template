import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LoaderCircle } from "lucide-react";
import { RegisterSchema, RegisterSchemaType } from "@/schema/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@/store";
import { registerThunk } from "@/store/slices/auth";
import { useState } from "react";

export const RegisterForm = ({ className = "" }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: defaultValues,
  });

  const { handleSubmit, control } = form;

  const handleRegister = (values: RegisterSchemaType) => {
    setLoading(true);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => {
        toast({
          title: "Success",
          description: "Account created successfully",
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        toast({
          title: "Account creation failed",
          description: error,
          variant: "destructive",
        });
        setLoading(false);
      });
  };

  return (
    <div className={cn("grid gap-6", className)}>
      <Form {...form} data-testid="create-form">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only" htmlFor="name">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="name"
                    autoCorrect="off"
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only" htmlFor="email">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    placeholder="johndoe@domain.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only" htmlFor="password">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    placeholder="********"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            onClick={handleSubmit(handleRegister)}
            disabled={loading}
            className="w-full mt-4"
          >
            {!loading && <span>Create account</span>}
            {loading && <LoaderCircle className="animate-spin" />}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or sign up with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={true}>
        <GitHubLogoIcon className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
};
