import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <p className="font-bold text-9xl">404</p>
        <p className="font-bold text-5xl">Page Not Found</p>
        <Link to="/" className="mt-5">
          <span className="text-blue-500 hover:text-blue-800">
            Back to Home
          </span>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
