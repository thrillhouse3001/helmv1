import React, { useEffect, useState } from "react";

import Demobutton from "./Demobutton";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

//check if you have NFT then show play button

const Download = () => {
  const renderNotConnectedContainer = () => (
    <>
      <div>
        <div>
          <Demobutton
            demohash="QmapHivzpzxvKfeu93JcmH9md73gXsJuVsr4o11zUPsM78"
            demofile="demo"
          />
        </div>
      </div>

      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        -downloadable .zip file-
      </div>
    </>
  );

  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-3 pt-4">
      <main>{renderNotConnectedContainer()}</main>
    </div>
  );
};

export default Download;
