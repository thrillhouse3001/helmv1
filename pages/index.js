import React from "react";
import Head from "next/head";
import Buybar from "../components/Buybar";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Images from "../components/Images";
import About from "../components/About";

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

      <div className="w-full h-[80px]"></div>
      <div>
        <Title />
      </div>
      <div>
        <Images />
      </div>
      <div>
        <Buybar />
      </div>
      <div>
        <About />
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
