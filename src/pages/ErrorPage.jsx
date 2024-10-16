import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="w-full h-[85vh] flex items-center justify-center flex-col px-10"
    >
      <h1 className="text-xl font-bold">Oops!</h1>
      <p className="text-lg font-semibold text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-lg font-semibold text-center">
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
