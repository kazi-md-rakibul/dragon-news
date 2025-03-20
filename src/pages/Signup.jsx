import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
  const {createNewUser, setUser} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password") 
    console.log(name,email,photo,password)
    

    //creating a new user or registering a new user using email and password
    createNewUser(email,password)
    .then((result)=>{
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Create Account</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Join us and start exploring
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-800">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-zinc-800">
                Photo URL
              </label>
              <input
                id="photo"
                name="photo"
                type="url"
                required
                className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

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
                placeholder="john@example.com"
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
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-black border-zinc-300 rounded transition-all duration-300"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-zinc-700">
                I accept the <a href="#" className="text-black hover:text-zinc-700 transition-colors duration-300">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-black hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300"
            >
              Create Account
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
            Already have an account?{" "}
            <Link to="/auth/login" className="font-medium text-black hover:text-zinc-700 transition-colors duration-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;