import React from "react";
import { FaUserCircle } from "react-icons/fa";

const LiveMessage = ({ name, message }) => {
  return (
    <div className=" px-2 py-2 shadow-md my-1">
      <div className="flex items-center">
        <span className="mr-2">
          <FaUserCircle />
        </span>
        <span className="font-bold mr-2">{name}</span>
      </div>
      <span className="ml-2 "> {message}</span>
    </div>
  );
};

export default LiveMessage;
