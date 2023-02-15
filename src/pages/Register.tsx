const Register = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 md:pt-28 sm:pt-0 bg-gray-50">
      <div>
        <h3 className="text-4xl font-bold text-black">Sign Up</h3>
      </div>
      <div className="w-full px-6 py-8 mt-6 gap-4 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Name *
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="name"
                className="block px-2 py-1 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Username *
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="username"
                className="block px-2 py-1 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Email *
            </label>
            <div className="flex flex-col items-start">
              <input
                type="email"
                name="email"
                className="block px-2 py-1 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Password *
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password"
                className="block px-2 py-1 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Confirm Password *
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password_confirmation"
                className="block px-2 py-1 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <a
              className="text-sm text-gray-600 underline hover:text-gray-900"
              href="#"
            >
              Already registered?
            </a>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
