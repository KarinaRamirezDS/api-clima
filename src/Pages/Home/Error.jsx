import React from "react";

const error = ({ message }) => {
  return (
    <>
    <div className="flex items-center justify-center">
    <div className="w-2/3 text-center p-2 ">
      <h1>{message}</h1>
    </div>
    </div>
    </>
  );
};

export default error;