import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../utils/api";
import { CustomError } from "../utils/types";

const Register = () => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const userRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const validate1 = USER_REGEX.test(username);
    const validate2 = PWD_REGEX.test(pwd);

    const target = event.target as typeof event.target & {
      name: { value: string };
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };

    if (!validate1 || !validate2) {
      toast.error("Please check if fields are valid");
    } else {
      try {
        const response = await signUpUser({
          name: target.name.value,
          username: target.username.value,
          password: target.password.value,
          email: target.email.value,
        });
        toast.success(response.data.message);
        navigate("/login");
      } catch (error) {
        const customError = error as CustomError;
        toast.error(`${customError?.response?.data?.message}`);
      }
    }
  };

  // Use effects for validation
  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  return (
    <div className="flex flex-col items-center min-h-screen pt-10 md:pt-28 sm:pt-0 bg-gray-50">
      <div>
        <h3 className="text-4xl font-bold text-black">Sign Up</h3>
      </div>
      <div className="w-full px-6 py-8 mt-6 gap-4 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                className="px-2 py-1 w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className=" text-sm font-medium text-gray-700 undefined"
            >
              Username *
            </label>
            <div className="flex flex-col items-start">
              <input
                id="username"
                type="text"
                name="username"
                className="px-2 py-1 w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                required
              />
            </div>
            <div
              className={
                userFocus && username && !validName
                  ? "flex items-center gap-3 px-4 py-2 w-full mt-1 text-[14px] border-gray-300 bg-yellow-200 rounded-md shadow-md"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <p>
                4 to 24 characters. Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className=" text-sm font-medium text-gray-700 undefined"
            >
              Email *
            </label>
            <div className="flex flex-col items-start">
              <input
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
              Password *
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password"
                className=" px-2 py-1 w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                required
              />
            </div>
            <div
              className={
                pwdFocus && pwd && !validPwd
                  ? "flex items-center gap-3 px-4 py-2 w-full mt-1 text-[14px] border-gray-300 bg-yellow-200 rounded-md shadow-md"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <p>
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="password_confirmation"
              className=" text-sm font-medium text-gray-700 undefined"
            >
              Confirm Password *
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password_confirmation"
                className=" px-2 py-1 w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                autoComplete="off"
                onChange={(e) => setMatchPwd(e.target.value)}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                required
              />
            </div>
            <p
              className={
                matchFocus && !validMatch
                  ? "flex items-center gap-3 px-4 py-2 w-full mt-1 text-[14px] border-gray-300 bg-yellow-200 rounded-md shadow-md"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} /> Must match the first
              password input field.
            </p>
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
