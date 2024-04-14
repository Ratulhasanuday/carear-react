import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl text-center my-auto">Opps!!!</h1>            
            <Link className="btn " to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPages;