// PropertyDetails.js

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../PropertiesFiles/Properties.json';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import { useProperty } from '../Contexts/PropertyContext';

import { getFirestore, collection, addDoc } from "firebase/firestore";

// import ConnectWallet from '../LandingPage/ConnectWallet';
import { v4 as uuidv4 } from 'uuid';
const PropertyDetails = () => {
  const { propertyId } = useParams();


  const { isSignedIn, user } = useUser();
//   const senderUserId = user ? user.id : null;
// console.log("this is sender user id", senderUserId);

console.log(user);

  const UserEmailAddress = user?.primaryEmailAddress.emailAddress;
  const UserFirstName = user?.firstName;
  const UserLastName = user?.lastName;
  const UserFullName = user?.fullName;
  const UserID = user?.primaryEmailAddress.id;

  console.log(UserEmailAddress);

  useEffect(() => {
      if (!user || !user.primaryEmailAddress) {
        console.log("User or primaryEmailAddress is not defined.");
        return;
      }
      
      // const receiverEmail = user.primaryEmailAddress.emailAddress;
      const UserEmailAddress = user?.primaryEmailAddress.emailAddress;
      console.log("User Email Address:", UserEmailAddress);
    }, []);
  



  const { account,   initWeb3, handleBuyToken, numTokens, setNumTokens } = useProperty();

  const property = propertiesData.properties.find((prop) => prop.id === propertyId);

  const { highlights, financials, details, blockchain, offering, PropertyImages } = property;

  const [propertyImg, setpropertyImg] = useState(PropertyImages.PropertyImage1)

  const [selectedImage, setSelectedImage] = useState(PropertyImages.PropertyImage1);

  if (!property) {
    return <div>Property not found</div>;
  }


  const NumberOfToken = numTokens;
console.log( highlights);

  const PropertyData = {
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
    Highlights: highlights ,
    Financials:financials ,
    Details: details,
    BlockChain:blockchain ,
    Offering:  offering,
  propertyImages: PropertyImages,


  }

  console.log(PropertyData );

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
      const PropertyDocRef = await addDoc(userPropertyRef, {...PropertyData, TransactionId});;
      console.log("Property added with ID:", PropertyDocRef.id);
    } catch (error) {
      console.error("Error adding Property:", error);
    }
  };


  const  handleSubmit = ()=>{

    AddToFirebaseTransaction(senderUserId, PropertyData);

  }

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

        <div  >

          <div className='pb-20'><Navbar></Navbar></div>

          <div className='flex justify-between items-center mx-6'>

            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            {/* <ConnectWallet></ConnectWallet> */}

          </div>
          <div className="flex flex-col md:flex-row  bg-gray-100 p-8 shadow-lg rounded-lg">
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

            <div className="md:w-1/2 md:ml-4">
              <div className="mb-4">
                <p className="text-lg font-bold">{property.type}</p>
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
                <button onClick={handleBuyToken} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Buy Tokens
                </button>

                <button onClick={ handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
             Add To Firebase
                </button>

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
