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

  const handleSubmit = () => {};

  const handleChange = (e: any) => {};

  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] lg:max-w-[60%]">
          Create imaginative and visually stunning images thorugh DALL-E AI and
          share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Type your name here..."
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="ie. an armchair in the shape of an avocado..."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePosts;
