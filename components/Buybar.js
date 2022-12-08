import React, { useEffect, useState } from "react";
import Image from "next/image";
import Product from "./Product";
import solLogo from "../public/icons/sol-logo.svg";
import windowsLogo from "../public/icons/windowslogo.svg";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const App = () => {
  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);

  //if public key fetch products
  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <>
      {/* NEW */}
      <div>
        <WalletMultiButton className="w-[124px] h-[24px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded-full font-sans font-thin text-sm text-white text-center " />
      </div>
    </>
  );

  const renderItemBuyContainer = () => (
    <>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className="grid overflow-hidden grid-cols-8 grid-rows-1 gap-0 w-[735px] bg-neutral-900 border border-purple-500 rounded-lg p-[3px] pt-[8px] pr-[8px]">
        <div className="box col-start-1 col-end-5">
          <div className="pt-[3px] pl-[12px] font-sans font-light text-2xl text-white">
            Cops Kissing Each Other
          </div>
        </div>
        <div className="box col-start-5 col-end-6 pb-[5px] pl-10">
          <Image
            src={windowsLogo}
            className="pb-1 text-white"
            height={35}
            width={35}
            alt="/"
          />{" "}
        </div>
        <div className="box col-start-6 col-end-9">
          <div className="flex items-center space-x-3 rounded-full bg-neutral-800 p-2 pl-[15px]">
            {" "}
            <Image
              src={solLogo}
              className=""
              height={24}
              width={24}
              alt="/"
            />{" "}
            <text className="font-sans font-bold text-white text-1xl text-center">
              1.50
            </text>
            <main>
              {publicKey
                ? renderItemBuyContainer()
                : renderNotConnectedContainer()}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
