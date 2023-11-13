import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        className="fill-current h-8 w-8 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 5.172a6 6 0 018.656 0l1.414-1.414a8 8 0 00-11.314 0l1.244 1.414zm9.656 9.656a6 6 0 01-8.656 0l-1.414 1.414a8 8 0 0011.314 0l-1.244-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span className="font-semibold text-xl tracking-tight">
        Issue Tracker
      </span>
    </div>
  );
};

export default Logo;
