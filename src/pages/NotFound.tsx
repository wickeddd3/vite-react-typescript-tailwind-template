import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-800">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-800 md:text-4x">
          Page not found
        </p>
        <p className="mb-4 text-lg font-light text-gray-800">
          The page you were looking for doesn't exist.
        </p>
        <Button asChild>
          <Link
            to="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
