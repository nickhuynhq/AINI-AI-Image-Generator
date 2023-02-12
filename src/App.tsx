import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home, CreatePosts } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="sm:p-8 px-8 md:px-12 lg:px-16 xl:px-24 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePosts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
