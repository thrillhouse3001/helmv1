import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Image from "next/image";
import profileIconRed from "../public/images/profileiconRED.svg";
import profileIconGreen from "../public/images/profileiconGREEN.svg";
import helmNavBarLogo from "../public/images/helm.svg";

// Constants

const Navbar = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const [publicKeyString, setPublicKeyString] = useState([]); //set useState variables

  //set useeffect to "mount" the variable on refresh/reload of item when its updated
  useEffect(() => {
    publicKey ? setPublicKeyString(publicKey.toBase58()) : "NOT CONNECTED/NULL";
  }, [publicKey]);

  //console.log(publicKeyString.toString());

  const renderConnectedContainer = () => (
    <>
      <div className="flex justify-between pl-8 pt-[16px]">
        <div className="item ">
          <div className="rounded-full bg-neutral-800 p-[4px] px-[24px] text-center font-sans font-semibold text-md text-purple-300 hover:bg-purple-800">
            + Create Project
          </div>
        </div>
        <div className="item">
          <Image
            src={profileIconGreen}
            height={35}
            width={35}
            className=""
            alt="/"
          />
        </div>
        <div className="item pt-[1px]">
          <p className="h-[30px] rounded-md p-[4px]  px-4 font-sans font-semibold text-md text-center  bg-purple-800 text-purple-300 ">
            {publicKeyString.toString().substring(0, 10) + "..."}
          </p>
        </div>
      </div>
    </>
  );

  const renderNotConnectedContainer = () => (
    <div className="flex justify-between pl-8 pt-[16px]">
      <div className="item ">
        <button className="rounded-full bg-neutral-800 p-[4px] px-[24px] text-center font-sans font-semibold text-md text-purple-300 hover:bg-purple-800 ">
          + Create Project
        </button>
      </div>
      <div className="item">
        <Image
          src={profileIconRed}
          height={35}
          width={35}
          className=""
          alt="/"
        />
      </div>
      <div className="item ">
        <WalletMultiButton className="h-[30px] rounded-md bg-purple-300 p-[4px] px-4 font-sans font-semibold text-md text-center text-neutral-900 hover:bg-purple-800 hover:text-purple-300 " />
      </div>
    </div>
  );

  return (
    <div>
      <div className="grid w-full shadow-xl z-[100] fixed bg-neutral-900 border-b border-purple-800 justify-items-center">
        <div className="grid overflow-visible grid-cols-8 grid-rows-1 gap-0 w-[1024px] h-[70px] pt-[6px]">
          <div className="box col-start-1 col-end-5">
            <div className="grid overflow-auto grid-cols-4 grid-rows-1 gap-4">
              <div className="box pt-[7px]">
                <Image
                  src={helmNavBarLogo}
                  width={112}
                  height={50}
                  className=""
                  alt="/"
                />
              </div>
              <div className="box pt-[16px]">
                <div className="rounded-full bg-purple-300 p-[4px] text-center font-sans font-semibold text-md text-neutral-900 hover:bg-purple-800 hover:text-purple-300">
                  Marketplace
                </div>
              </div>
              <div className="box pt-[16px]">
                <div className="rounded-full bg-neutral-800 p-[4px] text-center font-sans font-semibold text-md text-purple-300  hover:bg-purple-800">
                  Publishers
                </div>
              </div>
              <div className="box pt-[16px]">
                <div className="rounded-full bg-neutral-800 p-[4px] text-center font-sans font-semibold text-md text-purple-300 hover:bg-purple-800">
                  Funding
                </div>
              </div>
            </div>
          </div>

          <div className="box col-start-6 col-end-9">
            {publicKey
              ? renderConnectedContainer()
              : renderNotConnectedContainer()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*
import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Image from "next/image";
import profileIconRed from "../public/images/profileiconRED.svg";
import profileIconGreen from "../public/images/profileiconGREEN.svg";
import helmNavBarLogo from "../public/images/helm.svg";

// Constants

const Navbar = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const [publicKeyString, setPublicKeyString] = useState([]); //set useState variables

  //set useeffect to "mount" the variable on refresh/reload of item when its updated
  useEffect(() => {
    publicKey ? setPublicKeyString(publicKey.toBase58()) : "NOT CONNECTED/NULL";
  }, [publicKey]);

  //console.log(publicKeyString.toString());

  const renderConnectedContainer = () => (
    <div className="flex top-0 right-[10px] py-[9px]">
      <button className="w-[124px] h-[24px] bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 outline outline-1 rounded-full font-sans font-thin text-sm text-slate-400 text-center cursor-not-allowed">
        Create Project
      </button>
      <Image src={profileIconGreen} className="" alt="/" />
      <p className="w-[145px] h-[30px] bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase py-[5px]">
        {publicKeyString.toString().substring(0, 12) + "..."}
      </p>
    </div>
  );

  const renderNotConnectedContainer = () => (
    <div className="flex top-0 right-[10px] py-[9px]">
      <button className="w-[124px] h-[24px] bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 outline outline-1 rounded-full font-sans font-thin text-sm text-slate-400 text-center cursor-not-allowed">
        Create Project
      </button>
      <Image src={profileIconRed} className="" alt="/" />
      <WalletMultiButton className="w-[145px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 font-sans font-thin text-sm text-white uppercase" />
    </div>
  );

  return (
    <div>
      <div class="grid overflow-hidden grid-cols-12 grid-rows-1 gap-0 w-full h-[60px] shadow-xl z-[100] fixed bg-neutral-900 border-b border-purple-500 text-white">
        <div class="box col-start-1 col-end-2 justify-self-start pt-[4px] px-3">
          <Image
            src={helmNavBarLogo}
            width={112}
            height={50}
            className=""
            alt="/"
          />
        </div>
        <div class="box col-start-2 col-end-12 pt-4">
          Marketplace Creators My Projects Support
        </div>
        <div class="box col-start-12 col-end-16 justify-self-end">
          {publicKey
            ? renderConnectedContainer()
            : renderNotConnectedContainer()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
*/

/*
import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Image from "next/image";
import profileIconRed from "../public/images/profileiconRED.svg";
import profileIconGreen from "../public/images/profileiconGREEN.svg";

// Constants

const Navbar = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const [publicKeyString, setPublicKeyString] = useState([]); //set useState variables

  //set useeffect to "mount" the variable on refresh/reload of item when its updated
  useEffect(() => {
    publicKey ? setPublicKeyString(publicKey.toBase58()) : "NOT CONNECTED/NULL";
  }, [publicKey]);

  //console.log(publicKeyString.toString());

  const renderConnectedContainer = () => (
    <div className="flex top-0 right-[10px] py-[9px]">
      <Image src={profileIconGreen} className="" alt="/" />
      <p className="w-[145px] h-[30px] bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase py-[5px]">
        {publicKeyString.toString().substring(0, 12) + "..."}
      </p>
    </div>
  );

  const renderNotConnectedContainer = () => (
    <div className="flex top-0 right-[10px] py-[9px]">
      <Image src={profileIconRed} className="" alt="/" />
      <WalletMultiButton className="w-[145px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 font-sans font-thin text-sm text-white uppercase" />
    </div>
  );

  return (
    <div>
      <div className="flex fixed justify-end pr-4 w-full h-[50px] shadow-xl z-[100] bg-neutral-900 border-b border-purple-500">

        {publicKey ? renderConnectedContainer() : renderNotConnectedContainer()}
      </div>
    </div>
  );
};

export default Navbar;
*/
