// PropertyDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../PropertiesFiles/Properties.json';

const PropertyDetail = () => {
  const { id } = useParams(); // Change identifier to id

  console.log(id)
  // Check if the property with the given identifier exists
  if (!propertiesData.properties.hasOwnProperty(id)) {
    return <div>Property not found</div>;
  }

  // Access the property using the identifier
  const property = propertiesData.properties[id][0];

  const {
    highlights,
    financials,
    details,
    blockchain,
    offering,
  } = property;

  return (
    <div>
      {/* Render detailed information about the property here */}
      <h2>{highlights.fullAddress}</h2>
      {/* Display other details as needed */}
    </div>
  );
};

export default PropertyDetail;
