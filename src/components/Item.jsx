import React from "react";

const item = () => {
  return (
    <div>
      <div className="m-5 flex bg-white border-2 border-black px-4 py-3 justify-between">
        <div className="text-xl leading-10">text</div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="btn bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 font-medium rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default item;
