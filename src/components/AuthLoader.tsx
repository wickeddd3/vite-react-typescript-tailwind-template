import { LoadingDots } from "@/components/LoadingDots";

export const AuthLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6 m-auto sm:w-[350px]">
      <h1 className="text-xl font-semibold text-center">
        Vite React Tailwind App
      </h1>
      <LoadingDots />
    </div>
  );
};
