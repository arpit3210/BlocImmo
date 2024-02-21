
import React, { useEffect, useState } from 'react';
import KYCForm from './KycForm'; // Assuming the KYCForm component is in the same directory
import Verification from '../Assets/Images/undraw_certification_re_ifll.svg'; // Import the SVG image
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import KYCWaitingScreen from './KYCWaitingScreen';
import { Navigate } from 'react-router-dom';

import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import { useUser } from '@clerk/clerk-react';
import moment from 'moment'; // Import moment.js for date formatting



const KYCPage = () => {
    const { user } = useUser();
    const [kycCompleted, setKycCompleted] = useState(false);

    const [UserExist, setUserExist] = useState(false)

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
                }
            }
        };

        fetchKycCompletedStatus();
    }, [user]);




    return (
        <div className='bg-black'>
            <Navbar></Navbar>

            <div className='py-10'></div>

            <div>

                <div className="flex flex-col md:flex-row">
                    {/* Left side with KYC form */}
                    <div className="md:w-1/2 p-8 ">




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




                        {/* <KYCWaitingScreen/> */}



                    </div>

                    {/* Right side with SVG illustration */}
                    <div className="md:w-1/2 p-8 bg-white flex max-md:hidden justify-center items-center">
                        <div className="max-w-lg   ">
                            <img src={Verification} alt="Verification" className="w-full h-auto" />
                        </div>
                    </div>
                </div>


            </div>



            <Footer></Footer>

        </div>

    );
};

export default KYCPage;
