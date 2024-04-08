import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Promptform.css";
import promptCategories from "../utils/containt";

const ButtonsContainer = ({ onSelectCategory }) => {
  const handleCategoryButton = (text) => {
    onSelectCategory(text); // Pass the selected category to the parent component
  };

  return (
    <div className="flex flex-wrap justify-center">
      {Array.isArray(promptCategories) &&
        promptCategories.map((prompt, i) => (
          <div
            className="border border-violet-500 rounded-full mx-1 my-1 px-3 pt-1 pb-2  text-center text-sm text-gray-800 bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
            key={i}
            onClick={() => handleCategoryButton(prompt.category)}
          >
            <span>{prompt.category}</span>
          </div>
        ))}
    </div>
  );
};

const PromptForm = ({ selectedCategory }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="container mx-auto pt-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-flow-row space-y-2 justify-center mt-5"
      >
        {/* Set the default value of the input field to the selected category */}
        <input
          type="text"
          placeholder="Type your thought"
          {...register("mainPropmt", { required: true },watch)}
          defaultValue={selectedCategory} // Set the default value to the selected category
          // onChange={selectedCategory}
          className="border border-gray-500 rounded-md px-4 py-2 focus:outline-violet-500 lg:w-[500px] w-full"
        />
        {errors.mainPropmt && (
          <span className="text-red-500 pt-0 mt-0">please enter your text</span>
        )}

        <input
          type="submit"
          value="Submit"
          className="bg-violet-500 text-white rounded-md px-4 py-2 hover:bg-violet-600 cursor-pointer justify-center items-center  lg:w-40 w-24 mx-auto"
        />
      </form>
    </div>
  );
};

const PromptFormContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // State to hold the selected category
  // Callback function to receive the selected category from ButtonsContainer
  const handleCategorySelection = (category) => {
    setSelectedCategory(category); // Update the selected category in the state
  };

  return (
    <div className="container mx-auto pt-8">
      <ButtonsContainer onSelectCategory={handleCategorySelection} />
      <PromptForm selectedCategory={selectedCategory} />
    </div>
  );
};

export default PromptFormContainer;
