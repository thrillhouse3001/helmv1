import React from "react";
import Image from "next/image";

import { FaDiscord } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GrTwitter } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { RiGamepadLine } from "react-icons/ri";

const Download = () => {
  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg pt-4 pb-3 px-4 space-y-0 text-white">
      <div className="grid overflow-hidden grid-cols-7 grid-rows-1">
        <div className="box col-start-1 col-end-1">
          <BsPersonCircle className="text-base" />
        </div>
        <div className="box col-start-2 col-end-8 text-xs font-thin pb-1">
          Single Player
        </div>
      </div>

      <div className="grid overflow-hidden grid-cols-7 grid-rows-1">
        <div className="box col-start-1 col-end-1">
          <RiGamepadLine className="text-lg" />
        </div>
        <div className="box col-start-2 col-end-8 text-xs font-thin pb-3">
          Controller/Keyboard Support
        </div>
      </div>
      <div className="text-xs text-center  p-1">
        <p className="pb-1 underline font-medium bg-neutral-800 rounded-lg">
          -System Requirements-
        </p>
        <p>
          <span className="font-medium">OS:</span> Windows 7 or later{" "}
        </p>
        <p>
          <span className="font-medium">Processor:</span> 1.6 Ghz or higher{" "}
        </p>
        <p>
          <span className="font-medium">Memory:</span> 4 GB RAM{" "}
        </p>
        <p>
          <span className="font-medium">Graphics:</span> 256MB
        </p>
      </div>

      <div className="box pt-3 px-7 font-light text-xs text-center">
        <p className="pb-1 text-center bg-neutral-800 rounded-lg font-medium underline">
          -Languages-
        </p>

        <div className="grid overflow-hidden grid-cols-2 grid-rows-1 pt-1 ">
          <div className="box">
            <p>
              <span className="font-medium">English</span>
            </p>
            <p>
              <span className="font-medium">German</span>
            </p>
            <p>
              <span className="font-medium">Japanese</span>
            </p>
          </div>
          <div className="box">
            <p>
              <span className="font-medium">Russian</span>
            </p>
            <p>
              <span className="font-medium">Mandarin</span>
            </p>
            <p>
              <span className="font-medium">Brazilian</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
