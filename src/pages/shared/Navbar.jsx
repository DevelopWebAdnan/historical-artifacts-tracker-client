import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/historical-50.png";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Sign out is successful.');
            })
            .catch(() => {
                console.log("Sign out is unsuccessful. Please do not leave me alone.");
            })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className="w-12" src={logo} alt="" />
                    <h3 className="text-xl md:text-2xl lg:text-3xl">H A Tracker</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        // <div title={user?.displayName}>
                        // <img src={user?.photoURL} alt="User photo" />
                        // </div> 
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div
                                title={user?.displayName} 
                                className="w-12 md:w-16 lg:w-20 rounded-4xl md:rounded-3xl lg:rounded-2xl">
                                    <img
                                        alt="User photo"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        :
                        // <img src="" alt="Default photo" />
                        <div className="w-10 rounded-full">
                            <img
                                alt="Default photo"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                }

                {
                    user ? <>
                        <button onClick={handleSignOut} className="btn ml-2">Sign out</button>
                    </>
                        :
                        <>
                            {/* <Link to="/register">Register</Link> */}
                            <Link to="/login">
                                <button className="btn ml-2">Sign In</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;