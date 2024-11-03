import { Suspense, ReactNode } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface PageLoaderProps {
  children: ReactNode;
}

export const PageLoader = ({ children }: PageLoaderProps) => {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
};
