// PropertyContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';


import Web3 from 'web3';
import PropertyContract from '../Contracts/Property.json';


const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {




  // eslint-disable-next-line
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  // const [quantity, setQuantity] = useState(1);
  const [numTokens, setNumTokens] = useState(1);
  const [booksOrdered, setBooksOrdered] = useState(0);
  const [bookPrice, setBookPrice] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);

  const [Loader, setLoader] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Errors, setErrors] = useState(false);



  // useEffect(() => {


  //   initWeb3();
  // }, [account]);




  const initWeb3 = async () => {
    // Provider injection for web3.js v4+
    const web3Instance = new Web3(window.ethereum);
    setWeb3(web3Instance);

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      // Use the retrieved accounts for interaction with the Goerli network
    } catch (error) {
      console.error('Error requesting accounts:', error);
    }
  };





  // const handlePurchase = async () => {
  //   const tokenPriceWei = await contract.methods.bookPrice().call();
  //   console.log(quantity);
  //   console.log(tokenPriceWei);
  //   const BookPrice = Number(tokenPriceWei);
  //   console.log(BookPrice);
  //   const totalPrice = BookPrice * quantity;

  //   try {

  //     console.log("Before Purchase Books Function");
  //     await contract.methods.purchaseBook(quantity).send({ from: account, value: totalPrice });
  //     console.log("After Purchase Books Function");
  //     const updatedBooksOrdered = await contract.methods.getBooksOrdered().call({ from: account });
  //     console.log("After Get Books Ordered Function");
  //     setBooksOrdered(updatedBooksOrdered);
  //     console.log("After setBooksOrdered(updatedBooksOrdered) Function");
  //     const updatedBalance = await contract.methods.getContractBalance().call();

  //     console.log("After getContractBalance Function");
  //     setContractBalance( Web3.utils.fromWei(updatedBalance, 'ether'));
  //     console.log(" setContractBalance");
  //   } catch (error) {
  //     console.error('Error purchasing book:', error);
  //   }
  // };

  // numTokens, setNumTokens





  useEffect(() => {

    initWeb3();
  }, [account]);




  const handleBuyToken = async (addressOfContract) => {
    try {

      setLoader(true);

      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
  
      try {
        // Request account access using enable() for legacy compatibility
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        // Use the retrieved accounts for interaction with the Goerli network
        // Specify Goerli network ID
  
      } catch (error) {
        console.error('Error connecting to Ethereum:', error);
      }

      


      const networkId = 5;
      const networkData = PropertyContract.networks[networkId];
      if (networkData) {
        const contractInstance = new web3Instance.eth.Contract(
          PropertyContract.abi,
          addressOfContract
        );
        setContract(contractInstance);
      } else {
        console.error('Smart contract not deployed to the detected network.');
      }


      console.log("before contract calling ")
      console.log(await contract.methods);

      const tokenPriceWei = await contract.methods.getTokenPrice().call();
      console.log("after contract calling ")
      console.log(numTokens);
      console.log(tokenPriceWei);
      const TokenPrice = Number(tokenPriceWei);
      console.log(TokenPrice);
      const totalPrice = TokenPrice * numTokens;
      console.log(totalPrice);

      console.log("Before Buy Token  Function");
      await contract.methods.buyTokens(numTokens).send({ from: account, value: totalPrice });
      console.log("After Buy Token Function");


      setNumTokens(1);

      // const UpdatedTokenBought = await contract.methods.buyTokens().call({ from: account });
      // console.log("After Succesfull buy token Function");
      // setBooksOrdered(UpdatedTokenBought);
      // console.log("After setBooksOrdered(UpdatedTokenBought) Function");
      // const updatedBalance = await contract.methods.getContractBalance().call();

      // console.log("After getContractBalance Function");
      // setContractBalance( Web3.utils.fromWei(updatedBalance, 'ether'));
      // console.log(" setContractBalance");
      setLoader(false);
      setSuccess(true);

      return true; // Indicate success
    } catch (error) {
      setNumTokens(1);
      setLoader(false);
      setErrors(true);
      console.error('Error Buying Token:', error);
      return false; // Indicate failure
    }
  }



  return (
    <PropertyContext.Provider value={{   Loader  ,  Success ,  Errors, setLoader, setSuccess, setErrors,   account, initWeb3, setAccount, handleBuyToken, booksOrdered, setBooksOrdered, contract, setContract, numTokens, setNumTokens, bookPrice, setBookPrice, contractBalance, setContractBalance }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  return useContext(PropertyContext);
};
