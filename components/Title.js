import React from "react";
import Image from "next/image";
import titleimage from "../public/images/title.svg";

const Title = () => {
  return (
    <div>
      <Image src={titleimage} className="" alt="/" />
    </div>
  );
};

export default Title;
