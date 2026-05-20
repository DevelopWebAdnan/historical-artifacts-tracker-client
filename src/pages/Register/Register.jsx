import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);
        const updatedData = {
            displayName: name,
            photoURL: photo
        }

        // reset error and status
        setErrorMessage("");
        setSuccess(false);

        // Password validation:
        if (password.length < 6) {
            setErrorMessage("Password should be 6 characters or longer.");
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!regex.test(password)) {
            setErrorMessage("Password must have an Uppercase letter and a Lowercase letter.");
            return;
        }
        // Password validation error


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true);
                updateUserProfile(updatedData)
                    .then(() => {
                        console.log("Profile updated")
                    })
                    .catch(error => {
                        setErrorMessage(error.message)
                    });
            })
            .catch(error => {
                setErrorMessage(error.message)
                setSuccess(false);
            });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Register now!</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" required />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" required />
                            <label className="label">Photo URL</label>
                            <input type="text" name="photo" className="input" placeholder="Photo URL" required />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" required />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="mt-4 ml-4">
                        Already have an account? Please <Link to="/login">Login</Link>.
                    </p>
                </div>
                {
                    errorMessage && <p className="text-red-600">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600">Sign up is successful.</p>
                }
            </div>
        </div>
        </div>
    );
};

export default Register;