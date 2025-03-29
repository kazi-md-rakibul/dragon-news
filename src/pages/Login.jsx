import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password})
    userLogin(email,password)
    .then((result)=>{
      const user = result.user
      setUser(user);
    })
    .catch((error)=>{
      alert(error.code)
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Please sign in to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-800">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-800">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-black border-zinc-300 rounded transition-all duration-300"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-700">
                Remember me
              </label>
            </div>

            <Link to="/forgot-password" className="text-sm text-black hover:text-zinc-700 transition-colors duration-300">
              Forgot password?
            </Link>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-black hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300"
            >
              Sign in
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-zinc-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-zinc-300 rounded-lg text-zinc-700 bg-white hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 transition-all duration-300 hover:shadow-md"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-zinc-300 rounded-lg text-zinc-700 bg-white hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 transition-all duration-300 hover:shadow-md"
              >
                <FcGoogle className="text-xl" />
                <span>Google</span>
              </button>
            </div>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-zinc-600">
            Don't have an account?{" "}
            <Link to="/auth/register" className="font-medium text-black hover:text-zinc-700 transition-colors duration-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;