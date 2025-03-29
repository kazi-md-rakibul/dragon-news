import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center py-4 px-4 rounded-md bg-base-200">
      <div className="font-poppins font-extrabold text-xl">
        {user ? user.email : "The Dragon News"}
      </div>
      <div className="space-x-5 ">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login">
        <div className="flex gap-3 items-center">
          <div>
            <img className="rounded-full" src={userIcon} alt="" />
          </div>
          {user && user?.email ? (
            <Link to="/auth/login" className="btn btn-neutral">
              <button onClick={logOut} className="btn btn-neutral">
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link to="/auth/login" className="btn btn-neutral">
                Login
              </Link>
              <Link to="/auth/register" className="btn btn-neutral">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
