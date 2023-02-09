import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import openai from "./assets/logo.svg";
import { Home, CreatePosts } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 md:px-10 lg:px-12 py-4 border-b border-b-[#e6ebf4]">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2 transition duration-300 hover:scale-105">
              <img src={logo} alt="logo" className="w-8 object-contain" />
              <h1 className="font-bold text-2xl">AINI</h1>
            </div>
          </Link>
          <div className="flex gap-1 ml-2">
            <p className="text-xs">powered by</p>
            <a href="https://openai.com/dall-e-2/" target="_blank" rel="noopener noreferrer">
              <img src={openai} alt="openai" className="w-16 object-contain transition duration-300 hover:scale-105" />
            </a>

          </div>
        </div>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePosts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
