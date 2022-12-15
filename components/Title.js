import React, { useState } from "react";
import Image from "next/image";
import titleimage from "../public/images/title.svg";

const Title = () => {
  return (
    <>
      <div className="text-white">
        <Image src={titleimage} className="" alt="/" />
      </div>
    </>
  );
};

export default Title;
