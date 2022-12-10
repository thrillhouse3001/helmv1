import React from "react";
import Head from "next/head";
import Buybar from "../components/Buybar";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Images from "../components/Images";
import About from "../components/About";
import Download from "../components/Download";
import Holder from "../components/Holder";
import Gamenotes from "../components/Gamenotes.js";

const App = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  return (
    <div>
      <Head>
        <title>HELM - Cops Kissing Each Other</title>
        <meta name="content" content="game info" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <div className="place-content-center">
        {/* <Walletnavbar /> */}
        <Navbar />
      </div>

      <div className="w-full h-[95px]"></div>

      <div className="flex justify-center">
        <div className="bg-black border border-pink-500 rounded-lg max-w-5xl h-auto justify-items-center p-[30px]">
          <div className="grid grid-cols-3 grid-rows-9 gap-4">
            <div className="box col-start-1 col-end-5">
              <Title />
            </div>
            <div className="box col-start-1 col-end-5">
              <Images />
            </div>
            <div className="w-[735px] box col-start-1 col-end-4">
              <Buybar />
              <About />
            </div>
            <div className="w-[210px] box col-start-4 col-end-5">
              <div className="box h-[95px] space-y-[20px]">
                <Download />
                <Holder />
                <Gamenotes />
              </div>
            </div>
          </div>
          <div>{/* <Comments /> */}</div>
        </div>
      </div>
      <div className="w-full h-[50px]"></div>
      <div className=" text-white text-center font-sans font-thin text-xs w-full h-[30px] bg-neutral-900 border-t border-purple-500 pt-[6px]">
        <a href="https://twitter.com/W3Kasper">Made by @W3Kasper</a>
      </div>
    </div>
  );
};

export default App;

/*
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

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
    <div className="button-container">
      <WalletMultiButton className="cta-button connect-wallet-button" />
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        <main>
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>
      </div>
    </div>
  );
};

export default App;
*/
