import React from "react";

const Checklist = (props) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-6xl font-extralight text-amber-700 pt-10">todos</h1>
        <form className="p-10 flex">
          <label className="flex flex-col-reverse relative focus group w-full">
            <input
              type="text"
              name="todo"
              className="border-2 border-black px-4 py-3 leading-9"
            />
            <span className="absolute text-xl transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-16 text-zinc-300">
              What needs to be done?
            </span>
          </label>
          <button className="px-8 rounded-r-lg bg-amber-500  text-gray-800 font-bold p-4 uppercase border-amber-600 border-t border-b border-r">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checklist;
