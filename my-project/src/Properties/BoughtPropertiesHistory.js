import React, { useEffect, useState } from 'react';
import Navbar from '../LandingPage/Navbar';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useUser } from '@clerk/clerk-react';
import moment from 'moment'; // Import moment.js for date formatting

const BoughtPropertiesHistory = () => {
    const { user } = useUser();
    const [boughtProperties, setBoughtProperties] = useState([]);

    useEffect(() => {
        const fetchPropertyPurchaseHistory = async () => {
            if (user) {
                const db = getFirestore();
                try {
                    const q = query(collection(db, 'users', user.id, 'purchased_property_history'));
                    const querySnapshot = await getDocs(q);

                    const properties = [];
                    querySnapshot.forEach((doc) => {
                        properties.push({ id: doc.id, ...doc.data() });
                    });

                    // Sort properties based on TimeOfTransaction in descending order (newest first)
                    properties.sort((a, b) => b.TimeOfTransaction - a.TimeOfTransaction);

                    setBoughtProperties(properties);
                } catch (error) {
                    console.error("Error fetching property purchase history:", error);
                }
            }
        };

        fetchPropertyPurchaseHistory();
    }, [user]);

    return (
        <div>
            <div className='pb-20'><Navbar /></div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl text-gray-500 font-bold mb-4">Property Purchase History</h1>
             <span className='text-gray-500'>   Latest Transaction on top 🔝</span>
                <div className="flex flex-col  gap-4">
                    {boughtProperties.map(property => (
                        <div key={property.TransactionId} className="bg-white hover:bg-gray-100 shadow-lg rounded-lg p-6">
                            <h2 className="text-xl text-gray-500  font-semibold mb-2">Transaction Id: <span className='text-green-600  font-thin '>{property.TransactionId}</span></h2>
                            <p className=" font-semibold text-gray-500 mb-2">Tokens Wallet Address: <span className='text-green-600 text-sm font-thin'>{property.WalletAddress} </span> </p>
                            <p className="text-gray-600 mb-2">{property.BlockChain.identifier} </p>
                            <p className="text-gray-600 mb-2">{property.PropertyType} </p>
                            <p className="text-gray-600 mb-2">{property.PropertyAddress} </p>
                            <p className="text-gray-600 mb-2">{property.PropertyCountry} </p>
                            <p className="text-gray-600 mb-2">{property.PropertySource} </p>
                             {/* Convert Firestore Timestamp to JavaScript Date object and format using moment.js */}
                             <p className="text-gray-600 mb-2">Purchase Date: {moment(property.TimeOfTransaction.toDate()).format('MM/DD/YYYY HH:mm:ss')}</p>
                            <p className="text-gray-600 mb-2">Token Price: {property.PricePerToken}</p>
                            <p className="text-green-600 font-semibold mb-2">Tokens Bought: {property.Number_of_Token}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoughtPropertiesHistory;
