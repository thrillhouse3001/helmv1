import React, { useEffect, useState } from "react";

import Demobutton from "./Demobutton";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

//check if you have NFT then show play button

const Download = () => {
  const renderNotConnectedContainer = () => (
    <>
      <div className="pl-[20px]">
        <div className="w-[142px] rounded-full bg-neutral-800 p-[9px]">
          <div className="pl-[2px]">
            <Demobutton
              demohash="QmapHivzpzxvKfeu93JcmH9md73gXsJuVsr4o11zUPsM78"
              demofile="demo"
            />
          </div>
        </div>
      </div>

      <div className="text-white text-center font-sans font-thin text-xs pt-[6px]">
        -downloadable .zip file-
      </div>
    </>
  );

  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-3 pt-[8px]">
      <main>{renderNotConnectedContainer()}</main>
    </div>
  );
};

export default Download;
