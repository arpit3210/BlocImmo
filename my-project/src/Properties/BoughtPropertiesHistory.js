import React, { useEffect, useState } from 'react';
import Navbar from '../LandingPage/Navbar';
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { useUser } from '@clerk/clerk-react';
import moment from 'moment'; // Import moment.js for date formatting
import Loaders from '../Components/Loaders';

const BoughtPropertiesHistory = () => {
    const { user } = useUser();
    const [boughtProperties, setBoughtProperties] = useState([]);

    const [loading, setLoading] = useState(true); // State variable for loading status


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
                } finally {
                    setLoading(false); // Set loading to false after fetching data
                }
            }
        };

        fetchPropertyPurchaseHistory();
    }, [user]);

    return (


        <>


            <>
                {loading ? (
                    <>
                        <Navbar></Navbar>
                        <div className='flex justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen' >
                            <div className='flex justify-center items-center'>
                                <Loaders />
                            </div>
                        </div>
                        {/* <Footer></Footer> */}
                    </>

                ) : (

                    <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
                        <div className='pb-20'><Navbar /></div>
                        <div className="container mx-auto px-4 py-8">
                            <h1 className="text-3xl text-gray-400 font-bold mb-4">Property Purchase History</h1>
                            <p className="text-gray-200 mb-4">Latest Transaction on top 🔝</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
                                {boughtProperties.map(property => (
                                    <div key={property.TransactionId} className="bg-black text-white rounded-lg p-6 shadow-md">
                                        <h2 className="text-xl text-gray-500 font-semibold mb-2">Transaction Id:</h2>
                                        <p className="text-green-600 mb-4">{property.TransactionId}</p>
                                        <p className="text-green-600 font-semibold mb-2">Tokens Wallet Address:</p>
                                        <p className="text-green-600 mb-4">{property.WalletAddress}</p>
                                        <p className="text-gray-500 font-semibold mb-2">Blockchain Identifier:</p>
                                        <p className="text-gray-100 mb-4">{property.BlockChain.identifier}</p>
                                        <p className="text-gray-500 font-semibold mb-2">Property Type:</p>
                                        <p className="text-gray-100 mb-4">{property.PropertyType}</p>
                                        <p className="text-gray-500 font-semibold mb-2">Property Address:</p>
                                        <p className="text-gray-100 mb-4">{property.PropertyAddress}</p>
                                        <p className="text-gray-500 font-semibold mb-2">Property Country:</p>
                                        <p className="text-gray-100 mb-4">{property.PropertyCountry}</p>
                                        <p className="text-gray-500 font-semibold mb-2">Property Source:</p>
                                        <p className="text-gray-100 mb-4">{property.PropertySource}</p>
                                        <p className="text-gray-500 font-semibold mb-2">Purchase Date:</p>
                                        <p className="text-gray-100 mb-4">{moment(property.TimeOfTransaction.toDate()).format('MM/DD/YYYY HH:mm:ss')}</p>
                                        <p className="text-gray-500 font-semibold mb-2">Token Price:</p>
                                        <p className="text-gray-100 mb-4">{property.PricePerToken}</p>
                                        <p className="text-green-600 font-semibold mb-2">Tokens Bought:</p>
                                        <p className="text-green-600 mb-4">{property.Number_of_Token}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                )}
            </>



        </>

    );
};

export default BoughtPropertiesHistory;
