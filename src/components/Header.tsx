import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import openai from "../assets/logo.svg";

const Header = () => {
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

      <div className="flex gap-3">
        <Link
          to="/create-post"
          className="flex items-center font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
        <Link
          to="/login"
          className="flex items-center font-inter font-medium border-2 border-[#6469ff] text-[#6469ff] px-4 py-2 rounded-md"
        >
          Log In
        </Link>
      </div>
    </header>
  );
};

export default Header;
