// PropertyDetails.js

import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import propertiesData from '../PropertiesFiles/Properties.json';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import { useProperty } from '../Contexts/PropertyContext';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Loaders from '../Components/Loaders';

import { GrStatusGood } from "react-icons/gr";

import { getFirestore, collection, addDoc } from "firebase/firestore";

// import ConnectWallet from '../LandingPage/ConnectWallet';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import ConnectWalletButton from '../LandingPage/ConnectWalletButton';







const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');







const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [currentTime, setCurrentTime] = useState(new Date());

  const { isSignedIn, user } = useUser();
  //   const senderUserId = user ? user.id : null;
  // console.log("this is sender user id", senderUserId);

  // console.log(user);




  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {

    setLoader(false);
    setSuccess(false);
    setErrors(false);


    setIsOpen(false);
  }




  const UserEmailAddress = user?.primaryEmailAddress.emailAddress;
  const UserFirstName = user?.firstName;
  const UserLastName = user?.lastName;
  const UserFullName = user?.fullName;
  const UserID = user?.primaryEmailAddress.id;

  // console.log(UserEmailAddress);
  // console.log(UserID);
  useEffect(() => {
    if (!user || !user.primaryEmailAddress) {
      console.log("User or primaryEmailAddress is not defined.");
      return;
    }

    // const receiverEmail = user.primaryEmailAddress.emailAddress;
    const UserEmailAddress = user?.primaryEmailAddress.emailAddress;
    console.log("User Email Address:", UserEmailAddress);
  }, []);




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);



  const { Loader, Success, Errors, setLoader, setSuccess, setErrors, account, initWeb3, handleBuyToken, numTokens, setNumTokens, AddDataToFirebase } = useProperty();

  const property = propertiesData.properties.find((prop) => prop.id === propertyId);

  const { highlights, financials, id, details, blockchain, offering, PropertyImages, type, address, country, source, neighborhood, constructionYear, bedroomBath, rentalType, isRented, rentSubsidy } = property;

  // console.log(id);

  const [propertyImg, setpropertyImg] = useState(PropertyImages.PropertyImage1)

  const [selectedImage, setSelectedImage] = useState(PropertyImages.PropertyImage1);

  if (!property) {
    return <div>Property not found</div>;
  }





  const NumberOfToken = numTokens;
  // console.log(highlights);

  const PropertyData = {
    Unique_Identifier_Property: id,
    PropertyType: type,
    PropertyAddress: address,
    PropertyCountry: country,
    PropertySource: source,
    TimeOfTransaction: currentTime,
    YearOfConstruction: constructionYear,
    PropertyType: property.type,
    PropertyCountryLocation: property.country,
    PropertySource: property.source,
    Number_of_Token: NumberOfToken,
    Email: UserEmailAddress,
    Full_Name: UserFullName,
    First_Name: UserFirstName,
    Last_Name: UserLastName,
    WalletAddress: account,
    PricePerToken: highlights.tokenPrice,
    TotalNumberOfTokens: blockchain.totalTokens,
    Highlights: highlights,
    Financials: financials,
    Details: details,
    BlockChain: blockchain,
    Offering: offering,
    propertyImages: PropertyImages,
  }


  // console.log(PropertyData);

  // const { highlights, offering } = property;

  const senderUserId = user ? user.id : null;
  const AddToFirebaseTransaction = async (senderUserId, PropertyData) => {
    try {
      const db = getFirestore();
      const TransactionId = uuidv4();
      // Reference to the user's gifts collection
      console.log(senderUserId);
      const userPropertyRef = collection(db, `users/${senderUserId}/purchased_property_history`);
      // Add a new document to the gifts collection
      console.log(PropertyData);
      const PropertyDocRef = await addDoc(userPropertyRef, { ...PropertyData, TransactionId });;
      console.log("Property added with ID:", PropertyDocRef.id);
    } catch (error) {
      console.error("Error adding Property:", error);
      toast.error("Error adding Property:", error);
    }
  };




  const BuyTokenOfProperty = async () => {
    initWeb3();

    openModal();


    const value = blockchain.ethereum.contractAddress;
    console.log("this is the smartcontract", value)

    if (await handleBuyToken(value)) {
      handleAddToFirebase();
      toast.success("Transaction Completed Successfully!");
    }



  }

  const handleAddToFirebase = () => {
    // Call the AddDataToFirebase function as needed
    AddToFirebaseTransaction(senderUserId, PropertyData);
  };

  const handlechangeImage = (param) => {
    setpropertyImg(param);
    setSelectedImage(param);
  };

  const handleTokenChange = (event) => {
    const inputTokens = parseInt(event.target.value, 10);
    setNumTokens(inputTokens >= 0 ? inputTokens : 0);
  };

  const calculateTotalPrice = () => {
    return numTokens * parseFloat(offering.minInvestmentAmount.replace('$', ''));
  };

  // const handleBuyToken = () => {

  //   // Implement the logic to handle buying tokens
  //   // You can perform actions like updating user data, making API calls, etc.
  //   alert(`Successfully bought ${numTokens} tokens for ${property.address}`);
  // };




  const AccordionSection = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div className="mb-4">
        <p className="text-lg font-bold cursor-pointer" onClick={handleToggle}>
          {title}
        </p>
        {isOpen && <div>{content}</div>}
      </div>
    );
  };

  return (

    <>



      <SignedOut>

        <RedirectToSignIn />

      </SignedOut>


      <SignedIn>


        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={{ customStyles }}

            contentLabel="Example Modal"
          >

            <div className='flex flex-col justify-center h-full items-center'>



              {/* Loader Modal  */}

              <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>


              {/* Loader */}

              {Loader ? (<Loaders />) : (
                <div></div>
              )
              }



              {/* Success */}
              {Success &&

                <div className='flex flex-col justify-center items-center '>
                  <div className='flex flex-row justify-between place-items-end '>
                    <div />
                    {/* <button className='py-3 px-6 font-semibold  bg-blue-400 hover:bg-blue-500 text-white text-xl rounded-2xl ' onClick={closeModal}>Close</button> */}
                  </div>
                  <div className='flex flex-col bg-white max-md:w-[90vw] w-[50vw] h-[50vh] justify-center items-center'>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    {/* <Loader></Loader> */}
                    <div>
                      <h1 className='text-green-500  text-2xl font-bold  '>Your Transaction Successfully Completed</h1>
                    </div>
                    <GrStatusGood className='text-7xl text-green-500 my-4' />
                  </div>

                  {/* <Link to="/purchased properties history">
<button className='py-3 px-6 font-semibold hover:bg-green-600 bg-green-500 my-5 text-white text-xl mx-4 rounded-2xl'>Transaction History ✅ </button>
</Link> */}



                  <button onClick={closeModal} className='py-3 px-6 font-semibold my-5 hover:bg-green-600 bg-green-500 mx-4 text-white text-xl rounded-2xl'>Okay</button>
                </div>
              }

              {/* Error Modal */}

              {Errors ? (

                <div className='flex flex-col justify-center items-center '>
                  <div className='flex flex-row justify-between place-items-end '>
                    <div />
                    {/* <button className='py-3 px-6 font-semibold  bg-blue-400 hover:bg-blue-500 text-white text-xl rounded-2xl ' onClick={closeModal}>Close</button> */}
                  </div>
                  <div className='flex flex-col bg-white max-md:w-[90vw] w-[50vw] h-[50vh] justify-center items-center'>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    {/* <Loader></Loader> */}
                    <div>
                      <h1 className='text-red-500  text-2xl font-bold  '>Your Transaction Failed</h1>
                    </div>
                    <GrStatusGood className='text-7xl text-red-500 my-4' />
                  </div>
                  <button onClick={closeModal} className='py-3 px-6 font-semibold hover:bg-red-600 bg-red-500 text-white text-xl rounded-2xl'>Try Again</button>
                </div>

              ) : (
                <div></div>

              )



              }












            </div>



          </Modal>
        </div>









        <div  >

          <div className='pb-20'><Navbar></Navbar></div>

          <div className='flex justify-between items-center mx-6'>

            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            <ConnectWalletButton></ConnectWalletButton>

          </div>
          <div className="flex flex-col  md:flex-row  bg-gray-100 p-8 shadow-lg rounded-lg">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src={propertyImg}
                alt="Property"
                className="object-cover w-full aspect-w-1 aspect-h-1 lg:max-w-[550px] lg:max-h-[550px]  rounded-lg"
              />


              <div className='flex flex-wrap-reverse justify-start gap-4 items-center p-3'>
                {[
                  PropertyImages.PropertyImage1,
                  PropertyImages.PropertyImage2,
                  PropertyImages.PropertyImage3,
                  PropertyImages.PropertyImage4,
                  PropertyImages.PropertyImage5
                ].map((imageSrc, index) => (
                  <div
                    key={index}
                    onClick={() => handlechangeImage(imageSrc)}
                    className='lg:w-20 cursor-pointer w-14 lg:h-20 h-14'
                    style={{ flexShrink: 0 }}
                  >
                    <img
                      src={imageSrc}
                      alt={`PropertyImage${index + 1}`}
                      className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${selectedImage === imageSrc ? 'opacity-100' : 'opacity-50'
                        }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2  text-gray-600 md:ml-4">
              <div className="mb-4">
                <p className="text-lg text-gray-600 font-bold">{property.type}</p>
                <p className="text-gray-600">{property.country}</p>
                <p className="text-gray-600">{property.source}</p>
              </div>

              <address className="mb-4">
                <p>{property.address}</p>
              </address>

              <div className="mb-4">
                <p className="text-lg font-bold">TOTAL PRICE</p>
                <p className="text-xl font-bold">{financials.totalInvestment}</p>
              </div>

              <div className="mb-4">
                <p className="text-lg font-bold">TOKEN PRICE</p>
                <p className="text-xl font-bold">{highlights.tokenPrice}</p>
              </div>

              <div className="mb-4">
                <p className="text-lg font-bold">Expected Income</p>
                <p>{highlights.expectedIncome} Not including capital appreciation</p>
                <p className="text-lg font-bold">Rent per Token</p>
                <p>{highlights.rentPerToken}</p>
                <p className="text-lg font-bold">Rent Start Date</p>
                <p>{highlights.rentStartDate}</p>
              </div>

              <AccordionSection title="Property Details" content={
                <>
                  <p>Construction Year: {property.constructionYear}</p>
                  <p>Bedrooms/Baths: {property.bedroomBath}</p>
                  <p>Rental Type: {property.rentalType}</p>
                  <p>Rent Status: {property.isRented}</p>
                  <p>Rent Subsidy: {property.rentSubsidy}</p>
                </>
              } />
              <AccordionSection title="Financials" content={
                <>
                  <p>Gross Rent (Year): {financials.grossRentYear}</p>
                  <p>Net Rent (Year): {financials.netRentYear}</p>
                  <p>Monthly Costs: {financials.monthlyCosts}</p>
                </>
              } />

              <AccordionSection title="Property Details" content={
                <>
                  <p>Lot Size: {details.lotSizeSqft} sqft</p>
                  <p>Foundation: {details.foundation}</p>
                  <p>Exterior Walls: {details.exteriorWalls}</p>
                  <p>Roof Type: {details.roofType}</p>
                  <p>Interior Size: {details.interiorSizeSqft} sqft</p>
                  <p>Heating: {details.heating}</p>
                  <p>Building Class: {details.buildingClass}</p>
                  <p>Renovated: {details.renovated}</p>
                </>
              } />


              <AccordionSection title="Blockchain Details" content={
                <>
                  <p>Identifier: {blockchain.identifier}</p>
                  <p>Total Tokens: {blockchain.totalTokens}</p>
                  <p>Contract Address (Ethereum Chain): {blockchain.EthereumChain.contractAddress}</p>
                  <p>Owner Wallet (Ethereum Chain): {blockchain.EthereumChain.ownerWallet}</p>
                </>
              } />

              <AccordionSection title="Offering Details" content={
                <>
                  <p>Offering Date: {offering.offeringDate}</p>
                  <p>Issuer: {offering.issuer}</p>
                  <p>Min Investment Amount: {offering.minInvestmentAmount}</p>
                  <p>Max Investment Amount: {offering.maxInvestmentAmount}</p>
                  <p>Amount Raised: {offering.amountRaised}</p>
                  <p>Offering Percent: {offering.offeringPercent}</p>
                </>
              } />


              <div className="mb-4">
                <p className="text-lg font-bold">Buy Tokens</p>
                <label htmlFor="numTokens" className="block mb-2">
                  Number of Tokens:
                </label>
                <input
                  type="number"
                  id="numTokens"
                  name="numTokens"
                  value={numTokens}
                  onChange={handleTokenChange}
                  className="border p-2 mb-2"
                />
                <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
                <button onClick={BuyTokenOfProperty} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Buy Tokens
                </button>

                {/* <button onClick={handleAddToFirebase} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Add To Firebase
                </button> */}

              </div>

            </div>
          </div>


          <Footer></Footer>
        </div>


      </SignedIn>

    </>



  );
};

export default PropertyDetails;
