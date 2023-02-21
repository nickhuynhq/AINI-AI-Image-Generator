import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../utils/api";
import { CustomError } from "../utils/types";

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    try {
      
      const response = await logInUser({
        email: target.email.value,
        password: target.password.value,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("profile", JSON.stringify(response.data.profile));

      setUser("");
      setPwd("");
      toast.success("Log in successful!");
      navigate("/", { replace: true });

    } catch (error) {

      const customError = error as CustomError;

      if (!customError?.response) {
        setErrMsg("No Server Response");
      } else if (customError?.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (customError?.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef?.current?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center min-h-screen pt-10 md:pt-28 sm:pt-0 bg-gray-50">
      <div>
        <h3 className="text-4xl font-bold text-black">Log In</h3>
      </div>
      <div className="w-full px-6 py-8 gap-4 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        {/* Error Message Box */}
        <div
          ref={errRef}
          className={
            errMsg
              ? "flex gap-3 items-center mt-3 mb-3 px-2 py-1 w-full border bg-yellow-200 rounded-md shadow-md"
              : "hidden"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          <p>Error: {errMsg}</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className=" text-sm font-medium text-gray-700 undefined"
            >
              Email
            </label>
            <div className="flex flex-col items-start">
              <input
                id="email"
                type="email"
                name="email"
                className=" px-2 py-1 w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className=" text-sm font-medium text-gray-700 undefined"
            >
              Password
            </label>
            <div className="flex flex-col items-start">
              <input
                id="password"
                type="password"
                name="password"
                className=" px-2 py-1 w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <a
              className="text-sm text-gray-600 underline hover:text-gray-900"
              href="/register"
            >
              Create an account
            </a>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
