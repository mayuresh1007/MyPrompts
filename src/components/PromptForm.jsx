import React from "react";
import { useForm } from "react-hook-form";
import "./Promptform.css";

const PromptForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  console.log(watch("mainPropmt")); // watch input value by passing the name of it

  return (
    <div className="container mx-auto pt-10">
      {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" / */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        {/* register your input into the hook by invoking the "register" function */}
        {/* <input
          defaultValue=""
          placeholder="category"
          {...register("example")}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500"
        /> */}
        {/* Category Bar */}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="text"
          placeholder="enter your thought"
          {...register("mainPropmt", { required: true })}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500"
        />
        {/* errors will return when field validation fails  */}
        {errors.mainPropmt && (
          <span className="text-red-500">please enter your idea</span>
        )}

        <input
          type="submit"
          value="Submit"
          className="bg-violet-500 text-white rounded-md px-4 py-2 hover:bg-violet-600 cursor-pointer w-52 text-center"
        />
      </form>
    </div>
  );
};

export default PromptForm;
