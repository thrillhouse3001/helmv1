import React from "react";
import useIPFS from "../hooks/useIPFS";

const IPFSDownload = ({ hash, filename }) => {
  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div>
          <a
            className="w-[80px] h-[24px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded-full font-sans font-thin text-sm text-white text-center"
            href={file}
            download={filename}
          >
            Download
          </a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;
