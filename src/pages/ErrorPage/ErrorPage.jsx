import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="my-5 text-center">
            <h2 className="text-3xl">OOppss!!</h2>
            <p className="text-2xl text-red-700 my-5">{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Page Not Found</p>
                    <p>Go back to where you are from</p>
                    <Link to="/"><button className="btn btn-xl">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;