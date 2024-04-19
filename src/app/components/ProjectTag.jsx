import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-red-100 border-red-200 bg-red-800"
    : "text-red-700 border-red-800 bg-red-300 hover:border-red-500 hover:text-white hover:bg-red-500 transition ease-in-out hover:scale-110 duration-300";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
