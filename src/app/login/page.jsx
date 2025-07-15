
import { FcGoogle} from "react-icons/fc";
import { FaGithub, FaLock, FaMailBulk } from "react-icons/fa";
import { Lock } from "lucide";
import { FaArrowRightFromBracket } from "react-icons/fa6";


// Main App component for the Login page
const LoginPage = () => {
 



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 lg:p-10 max-w-md w-full transform transition-all duration-300 hover:scale-105">
        <FaArrowRightFromBracket className=" text-4xl text-black cursor-pointer"/>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Login
        </h1>
        <p className="text-sm text-gray-600 mb-2 text-center">
          Welcome back! Please enter your credentials to access your account.
        </p>
        {/* Login Form */}

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMailBulk className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5"
          >
            Log In
          </button>
        </form>


        {/* Separator */}
        <div className="relative mt-8 mb-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <span className="relative text-gray-500 px-2 bg-white"></span>

          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FcGoogle className="h-5 w-5 mr-3" />
            Sign in with Google
          </button>

          <button
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-150 ease-in-out transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FaGithub className="h-5 w-5 mr-3" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
