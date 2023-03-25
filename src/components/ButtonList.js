import React from "react";

const ButtonList = ({ name }) => {
  return (
    <button className="mx-2 text-[0.7rem] px-2 py-1 bg-slate-100 hover:text-white hover:bg-black rounded-md transition`">
      {name}
    </button>
  );
};

export default ButtonList;
