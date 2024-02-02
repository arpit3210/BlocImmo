import React from 'react'
import { Link } from 'react-router-dom'; // Import Link for navigation
import propertiesData from '../PropertiesFiles/Properties.json'; // Import JSON data

// console.log(propertiesData.properties);


const PropertiesList = () => {
  return (
    <div className='flex flex-col gap-10 rounded-3xl py-5 px-10'>
      {propertiesData.properties && Object.keys(propertiesData.properties).map(propertyKey => (
        <PropertiesCard key={propertyKey} property={propertiesData.properties[propertyKey][0]} />
      ))}
    </div>
  );
};

export default PropertiesList;



// PropertiesCard.js



const PropertiesCard = ({ property }) => {
  const {
    highlights,
    financials,
    details,
    blockchain,
    offering,
  } = property;

  // Check if property or identifier is undefined
  if (!property || !property.identifier) {
    return null; // or handle the case when property is undefined
  }
  // console.log(property);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 shadow-lg rounded-lg">
      {/* Left Side - Picture */}
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img
          src="your_image_url_here"
          alt="Property"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Property Details */}
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
          <p className="text-xl font-bold">{highlights.propertyHighlights.tokenPrice}</p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-bold">Expected Income</p>
          <p>{highlights.propertyHighlights.expectedIncome} Not including capital appreciation</p>
          <p className="text-lg font-bold">Rent per Token</p>
          <p>{highlights.propertyHighlights.rentPerToken}</p>
          <p className="text-lg font-bold">Rent Start Date</p>
          <p>{highlights.propertyHighlights.rentStartDate}</p>
        </div>

        <Link to={`/property/${property.identifier}`} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
  VIEW PROPERTY
</Link>


      </div>
    </div>
  );
};






// const PropertiesCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row bg-gray-100 p-8 shadow-lg rounded-lg">
//       {/* Left Side - Picture */}
//       <div className="md:w-1/2 mb-4 md:mb-0">
//         <img
//           src="your_image_url_here"
//           alt="Property"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </div>

//       {/* Right Side - Property Details */}
//       <div className="md:w-1/2 md:ml-4">
//         <h2 className="text-2xl font-bold mb-4">COMING SOON!</h2>
//         <div className="mb-4">
//           <p className="text-lg font-bold">7H 19M 26S</p>
//           <p className="text-gray-600">USA</p>
//           <p className="text-gray-600">RealT</p>
//         </div>

//         <address className="mb-4">
//           <p>1174 Chalmers St, Detroit, MI 48123</p>
//         </address>

//         <div className="mb-4">
//           <p className="text-lg font-bold">TOTAL PRICE</p>
//           <p className="text-xl font-bold">$ 152,940</p>
//         </div>

//         <div className="mb-4">
//           <p className="text-lg font-bold">TOKEN PRICE</p>
//           <p className="text-xl font-bold">$ 50.98</p>
//         </div>

//         <div className="mb-4">
//           <p className="text-lg font-bold">Expected Income</p>
//           <p>10.16% Not including capital appreciation</p>
//           <p className="text-lg font-bold">Rent per Token</p>
//           <p>$ 5.18 / year</p>
//           <p className="text-lg font-bold">Rent Start Date</p>
//           <p>May 15, 2024</p>
//         </div>

//         <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//           VIEW PROPERTY
//         </button>
//       </div>
//     </div>
//   );
// };


