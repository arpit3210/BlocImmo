// PropertiesList.js



import React from 'react';
import { Link } from 'react-router-dom';
// import PropertiesCard from './PropertiesCard'; // Import PropertiesCard component
import propertiesData from '../PropertiesFiles/Properties.json';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const PropertiesList = () => {
  return (
<>
<Navbar></Navbar>

<div className='h-52'>

</div>

<div className='flex flex-col gap-10 rounded-3xl py-5 px-10'>
      {propertiesData.properties.map((property) => (
        <div key={property.id}>
          <PropertiesCard property={property} />
     
        </div>
      ))}
    </div>



<Footer></Footer>
</>
  );
};

export default PropertiesList;

// PropertiesCard.js


const PropertiesCard = ({ property }) => {
  const { highlights, financials, PropertyImages } = property;

  return (
  

    <div className="flex flex-col md:flex-row bg-gray-100 p-8 shadow-lg rounded-lg">
    <div className="md:w-1/2 mb-4 md:mb-0">
      <img
        src={PropertyImages.PropertyImage1}
        alt="Property"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    <div className="md:w-1/2 md:ml-4">
      <h2 className="text-2xl font-bold mb-4">COMING SOON!</h2>
      <div className="mb-4">
        <p className="text-lg font-bold">7H 19M 26S</p>
        <p className="text-gray-600">USA</p>
        <p className="text-gray-600">{highlights.source}</p>
      </div>

      <address className="mb-4">
        <p>{highlights.fullAddress}</p>
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

      <Link to={`/property/${property.id}`} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          VIEW PROPERTY
        </Link>

      {/* <Link to={`/property/${property.identifier}`} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        VIEW PROPERTY
      </Link> */}
    </div>
  </div>

  );
};


