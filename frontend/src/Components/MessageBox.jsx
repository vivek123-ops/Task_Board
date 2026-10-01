import React from "react";

export const MessageBox = ({ message }) => {
  return (
    <div className="w-[90%] h-[10vh] border rounded-2xl mt-5 ml-3 flex justify-center items-center">
      {message}
    </div>
  );
};
