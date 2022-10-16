import React from "react";

const Posterror = ({ error, setError }) => {
  return (
    <div className="authorize_err absolute top-0 left-0 w-full h-full bg-[rgba(242,_242,_242,_.7)] z-[9999] flex items-center justify-center">
      <div className="flex items-center gap-3">
        <p className="text-red font-primary text-lg font-regular">{error}</p>
        <button
          onClick={() => setError(false)}
          className="bg-blue hover:bg-[#1870d5] transition-all ease-linear duration-100 px-3 py-2 rounded-md text-white font-primary text-base font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Posterror;
