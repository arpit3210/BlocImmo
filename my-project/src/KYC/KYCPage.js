
import React, { useEffect, useState } from 'react';
import KYCForm from './KycForm'; // Assuming the KYCForm component is in the same directory

import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import KYCWaitingScreen from './KYCWaitingScreen';


import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import { useUser } from '@clerk/clerk-react';

import { TokenizationPIC } from '../Assets/Images';
import Loaders from '../Components/Loaders';



const KYCPage = () => {
    const { user } = useUser();
    const [kycCompleted, setKycCompleted] = useState(false);

    const [UserExist, setUserExist] = useState(false)
    const [loading, setLoading] = useState(true); // State variable for loading status

    useEffect(() => {
        const fetchKycCompletedStatus = async () => {
            if (user) {
                const db = getFirestore();
                try {
                    // Construct a query to fetch only the KYC_Completed field
                    const q = query(collection(db, 'UsersKYCList', user.id, 'KYCData'), where('KYC_Completed', '==', true));
                    const querySnapshot = await getDocs(q);


                    const q_second = query(collection(db, 'UsersKYCList', user.id, 'KYCData'), where('USER_ID', '==', user.id));
                    const querySnapshot_second = await getDocs(q_second);

                    if (!querySnapshot_second.empty) {
                        setUserExist(true); // User doesn't exist, so set UserExist to false
                    } else {
                        setUserExist(false); // User exists, so set UserExist to true
                    }


                    // Check if there are any documents returned
                    if (!querySnapshot.empty) {

                        // Here you can set the KYC_Completed field value
                        // Assuming there's only one document, so we access it using querySnapshot.docs[0]
                        const kycData = querySnapshot.docs[0].data();
                        setKycCompleted(kycData.KYC_Completed);

                    }
                } catch (error) {


                    console.error("Error fetching USER KYC Data", error);
                } finally {
                    setLoading(false); // Set loading to false after fetching data
                }
            }
        };

        fetchKycCompletedStatus();
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




                    <div className=' bg-gradient-to-r from-gray-800 via-gray-900 to-black '>
                        <Navbar></Navbar>
                        {/* <div className='py-10'></div> */}
                        <div className=''>
                            <div className="flex flex-col  md:flex-row">
                                {/* Left side with KYC form */}
                                <div className="md:w-1/2 p-8 my-14 ">
                                    <>
                                        {UserExist ? (
                                            <>
                                                {kycCompleted ? (
                                                    <></>
                                                    // <Navigate to="/propertiesList" replace />
                                                ) : (
                                                    <KYCWaitingScreen />
                                                )}
                                            </>
                                        ) : (
                                            <KYCForm />
                                        )}
                                    </>
                                    {/* <KYCWaitingScreen/> */}
                                </div>
                                {/* Right side with SVG illustration */}
                                <div className="md:w-1/2 flex max-md:hidden justify-center items-center">
                                    {/* <div className="max-w-md"> */}
                                    <img
                                        src={TokenizationPIC}
                                        alt="Verification"
                                        className="object-none w-full h-full"
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>

                )}
            </>



        </>


    );
};

export default KYCPage;
