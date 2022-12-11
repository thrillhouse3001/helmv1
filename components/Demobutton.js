import React from "react";
import useIPFS from "../hooks/useIPFS";

const Demobutton = ({ demohash, demofile }) => {
  const file = useIPFS(demohash, demofile);

  return (
    <div>
      {file ? (
        <div>
          <button className="w-[130px] h-[24px] bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 hover:from-purple-300 hover:via-purple-300 hover:to-purple-300 rounded-full font-sans font-semibold text-sm  text-purple-300 hover:text-neutral-800  ">
            <a href={file} download="demo">
              Download Demo
            </a>
          </button>
        </div>
      ) : (
        <button
          className="w-[130px] h-[24px] bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 hover:from-purple-300 hover:via-purple-300 hover:to-purple-300 rounded-full font-sans font-semibold text-sm  text-purple-300 hover:text-neutral-800 "
          disabled
        >
          Downloading...
        </button>
      )}
    </div>
  );
};

export default Demobutton;
