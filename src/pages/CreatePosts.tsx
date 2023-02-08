import { useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";
import { getRandomPrompt } from "../utils/index";
import { FormField, Loader } from "../components";

const CreatePosts = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] lg:max-w-[60%]">
          Create imaginative and visually stunning images thorugh DALL-E AI and
          share them with the community
        </p>
      </div>
    </section>
  );
};

export default CreatePosts;
