import React from "react";
import useIPFS from "../hooks/useIPFS";

const IPFSDownload = ({ hash, filename }) => {
  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div>
          <button className="w-[130px] h-[24px] bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 hover:from-purple-300 hover:via-purple-300 hover:to-purple-300 rounded-full font-sans font-semibold text-sm  text-purple-300 hover:text-neutral-800 ">
            <a href={file} download={filename}>
              Download
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

export default IPFSDownload;
