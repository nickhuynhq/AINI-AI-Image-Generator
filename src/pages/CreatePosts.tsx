import { useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";
import { getRandomPrompt } from "../utils/index";
import { FormField, Loader } from "../components";
import toast from "react-hot-toast";

const CreatePosts = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
    story: [],
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [formError, setformError] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        setformError(false);
        window.scrollTo(0, 0); 

        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        const separateLines = data.story.split(/\r?\n|\r|\n/g);

        setForm({
          ...form,
          photo: `data:image/jpeg;base64,${data.photo}`,
          story: separateLines,
        });

        toast.success("Image generated! ❤️");

      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      toast.error("Please add a prompt!");
      setformError(true);
    }
  };

  const handleSubmit = () => {};

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="w-full h-full flex flex-col">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] lg:max-w-[60%]">
          Create imaginative and visually stunning images thorugh DALL-E AI and
          share them with the community
        </p>
      </div>

      <form
        className="flex mt-10 w-full flex-col gap-6"
        onSubmit={handleSubmit}
      >
        {/* Form Fields */}
        <div className="flex gap-12 flex-col lg:flex-row">
          {/* Preview Placeholder/Box */}
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-[300px] sm:w-[420px] sm:h-[420px] md:w-[512px] md:h-[512px] p-4 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt={preview}
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {/* Loading State */}
            {generatingImg && (
              <div className="absolute animate-pulse inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 lg:w-1/2">
            {/* Story Placeholder Desktop */}
            <div className="flex flex-col gap-3 h-[320px] ">
              <h2 className="block text-md font-medium text-gray-900 ">
                Story
              </h2>
              <div className="h-full overflow-y-scroll text-gray-600 bg-gray-200 border border-gray-300 text-sm rounded-lg flex flex-col px-4 py-3 gap-1">
                {form.story.length !== 0
                  ? form.story.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))
                  : "Please generate an image to view a story..."}
              </div>
            </div>

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
              formError={formError}
              handleSurpriseMe={handleSurpriseMe}
            />

            {/* Generate Image Button */}
            <div className="mt-2 flex w-full justify-between gap-5 lg:self-end">
              <button
                type="submit"
                className="hidden md:flex text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {loading ? "Sharing..." : "Share with the community"}
              </button>

              <button
                type="button"
                onClick={generateImage}
                className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {generatingImg ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className=" md:hidden pb-12">
          <p className="mt-2  text-[#666e75] text-md">
            * Once you have created the image you want, you can share it with
            others in the community!
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePosts;
