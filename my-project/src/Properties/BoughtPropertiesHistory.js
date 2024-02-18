import React from 'react'
import Navbar from '../LandingPage/Navbar'

const BoughtPropertiesHistory = () => {


   // Sample list of properties already bought
   const boughtProperties = [
    {
        id: 1,
        address: '123 Main Street',
        city: 'New York',
        state: 'NY',
        purchaseDate: '2023-01-15',
        price: '$500,000',
        tokensBought: 1500 // Number of tokens bought for this property
    },
    {
        id: 2,
        address: '456 Oak Avenue',
        city: 'Los Angeles',
        state: 'CA',
        purchaseDate: '2023-03-20',
        price: '$750,000',
        tokensBought: 2000 // Number of tokens bought for this property
    },
    // Add more properties as needed
];


    return (
        <div>
   <div className='pb-20'><Navbar></Navbar></div>


<div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Property Purchase History</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {boughtProperties.map(property => (
                    <div key={property.id} className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">{property.address}</h2>
                        <p className="text-gray-600 mb-2">{property.city}, {property.state}</p>
                        <p className="text-gray-600 mb-2">Purchase Date: {property.purchaseDate}</p>
                        <p className="text-gray-600 mb-2">Price: {property.price}</p>
                        <p className="text-gray-600 mb-2">Tokens Bought: {property.tokensBought}</p>
                    </div>
                ))}
            </div>
        </div>

        </div>
    )
}

export default BoughtPropertiesHistory