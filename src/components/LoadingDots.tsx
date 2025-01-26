export const LoadingDots = () => {
  return (
    <div className="flex w-full h-fit space-x-2 justify-center items-center bg-white dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-2 w-2 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-gray-900 rounded-full animate-bounce"></div>
    </div>
  );
};
