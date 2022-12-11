import React, { useEffect, useState } from "react";
import Image from "next/image";

import holderNFT from "../public/images/holder.gif";

import { FaDiscord } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GrTwitter } from "react-icons/gr";
import { BsDot } from "react-icons/bs";

import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";

//Connect
const connection = new Connection("https://api.metaplex.solana.com/");
const mx = Metaplex.make(connection);

const Holder = () => {
  const { publicKey } = useWallet();
  const [address, setAddress] = useState(""); //address of public key to check nfts with

  //if public key exists setaddress to it on refresh/reload of publicKey when its updated
  useEffect(() => {
    publicKey ? setAddress(publicKey.toBase58()) : "NULL";
  }, [publicKey]);

  const [nftList, setNftList] = useState(null); //used to look at list
  const [holder, setHolder] = useState(null); //used to look at list

  ///ON LOAD NFT LIST
  // declare the data fetching function
  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const list = await mx
          .nfts()
          .findAllByOwner({ owner: new PublicKey(address) });
        setNftList(list);

        //list through short
        const listItems = list.map((nftlist) => {
          //console.log(nftlist.name);
          if (
            nftlist.updateAuthorityAddress.toBase58() ==
            "Fz1NzfYcHEGBJCRhkTDJRjxMgbMrZsRSTas1iVnFnK7w"
          ) {
            //console.log("set a useeffect to load ");
            setHolder("is holding"); //is holding
            //console.log(holder);
          }
        });

        //.updateAuthorityAddress.toBase58()
      } catch (e) {
        //console.log("download.js try catch");
        //console.log(e);
      }
    };

    // call the function
    fetchNFTs();
  }, [address]);

  const openWebsiteInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-neutral-900 border border-purple-800 rounded-lg px-4 pt-[4px] pb-[10px] space-y-0">
      <h1 className="text-white font-sans font-semibold text-lg text-center">
        Lost Boy Club
      </h1>
      <p className="text-white font-sans font-thin text-xs text-center">
        -nft founder group-
      </p>

      <div className="pt-[10px]">
        <Image src={holderNFT} className="" alt="/" />
      </div>
      <div className="justify-items-center px-12 pt-1 pb-[12px]">
        <div className="grid justify-items-center grid-cols-3 grid-rows-1 rounded-full bg-neutral-800 h-[20px]">
          <div className="box">
            <button
              onClick={() =>
                openWebsiteInNewTab(
                  "https://magiceden.io/marketplace/lostboyclub"
                )
              }
            >
              <TbWorld className="text-white" />
            </button>
          </div>
          <div className="box pt-[0px]">
            <button
              onClick={() =>
                openWebsiteInNewTab("https://discord.com/invite/QVtmvPBfrg")
              }
            >
              <FaDiscord className="text-white" />
            </button>
          </div>
          <div className="box pt-[0px]">
            <button
              onClick={() =>
                openWebsiteInNewTab("https://twitter.com/LOSTBOY_CLUB")
              }
            >
              <GrTwitter className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid justify-items-center grid-cols-1 grid-rows-1 ">
        <div className="text-white font-sans font-thin text-xs text-center rounded-full bg-neutral-900 pb-[4px] h-[20px] w-[140px] border border-purple-700">
          {address ? "connected" : "unconnected"}
          {holder ? " + holder" : address ? " + nonholder" : ""}
        </div>
      </div>

      <div className="grid justify-items-center grid-cols-1 grid-rows-1 pt-[14px] pb-[6px]">
        <div className="w-[148px] rounded-full bg-neutral-800 p-[9px]">
          {holder ? (
            <button className="w-[130px] h-[24px] bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 hover:from-purple-300 hover:via-purple-300 hover:to-purple-300   rounded-full font-sans font-semibold text-sm text-purple-300 text-center hover:text-neutral-800 ">
              Collect Revenue
            </button>
          ) : (
            <button className="w-[130px] h-[24px] bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 rounded-full font-sans font-semibold text-sm text-purple-300 text-center cursor-not-allowed">
              Collect Revenue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Holder;
