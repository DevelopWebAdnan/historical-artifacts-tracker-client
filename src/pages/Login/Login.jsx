import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // reset error and status
        setErrorMessage("");
        setSuccess(false);


        signInUser(email, password)
            .then(result => {
                console.log('Sign in', result.user)
                setSuccess(true);
            })
            .catch(error => {
                setErrorMessage(error.message)
                setSuccess(false);
            });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <p className="ml-4 mt-4">
                            New to this website? Please <Link to="/register">Register</Link>
                        </p>
                    <SocialLogin></SocialLogin>
                    </div>
                    {
                        errorMessage && <p className="text-red-600">{errorMessage}</p>
                    }
                    {
                        success && <p className="text-green-600">Sign in is successful.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;