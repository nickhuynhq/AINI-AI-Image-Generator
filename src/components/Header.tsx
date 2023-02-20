import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import openai from "../assets/logo.svg";
import jwt_decode from "jwt-decode";
import { decodedTokenInterface } from "../utils/types";
import { toast } from "react-hot-toast";

const Header = () => {
  const token = localStorage.getItem("token");
  const userJson = JSON.parse(localStorage.getItem("profile") as string);

  const [userProfile, setUserProfile] = useState(
    userJson !== null ? userJson : { username: null, picture: null }
  );

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    navigate("/", { replace: true });
    navigate(0)
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken: decodedTokenInterface = jwt_decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        toast.error("Session expired")
        setTimeout(() => handleLogout(), 4000);
      }
    }

    if (userJson) {
      setUserProfile(userJson);
    }
  }, [token, handleLogout]);

  return (
    <header className="w-full flex justify-between items-center bg-white px-4 sm:px-8 md:px-10 lg:px-12 py-4 border-b border-b-[#e6ebf4]">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2 transition duration-300 hover:scale-105">
            <img src={logo} alt="logo" className="w-8 object-contain" />
            <h1 className="font-bold text-2xl">AINI</h1>
          </div>
        </Link>
        <div className="hidden md:flex gap-1 ml-2">
          <p className="text-xs">powered by</p>
          <a
            href="https://openai.com/dall-e-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={openai}
              alt="openai"
              className="w-16 object-contain transition duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {userProfile.username ? (
          <>
            <Link
              to="/create-post"
              className="flex items-center font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
            >
              Create
            </Link>
            <Link
              to="/profile"
              className="flex justify-center items-center w-10 h-10 rounded-full bg-green-800"
            >
              <span className="text-[16px] font-bold text-white">
                {userProfile.username[0]}
              </span>
            </Link>
            <button
              onClick={() => handleLogout()}
              className="flex items-center font-inter font-medium border-2 border-[#6469ff] text-[#6469ff] px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center font-inter font-medium border-2 border-[#6469ff] text-[#6469ff] px-4 py-2 rounded-md"
          >
            Log In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
