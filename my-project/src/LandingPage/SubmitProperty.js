import React, { useState, useRef } from 'react'
import { SubmitPropertyPic } from '../Assets/PartnersLogos'

import { IoClose } from "react-icons/io5";




import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const SubmitProperty = () => {

    const [openModal, setopenModal] = useState(false)


    const formRef = useRef(null);


    const HandleModal = () => {

        if (openModal === false) {
            setopenModal(true);
        } else {
            setopenModal(false);
        }
    }


    const CloseModal = () => {


        setopenModal(false);

    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const AddToFirebaseTransaction = async (data) => {
            try {
                const db = getFirestore();
                const ID = uuidv4();
                // Reference to the user's gifts collection

                const userSubmitPropertyRef = collection(db, `submittedProperties`);
                // Add a new document to the gifts collection
                console.log(data);
                const SubmitPropertyDocRef = await addDoc(userSubmitPropertyRef, { ...data, ID });;
                console.log("Property submitted successfully!", SubmitPropertyDocRef.id);
                toast.success("Property submitted successfully!", SubmitPropertyDocRef.id);

                // Clear form fields
                formRef.current.reset();
                // Close modal
                setopenModal(false);

            } catch (error) {
                console.error("An error occurred while submitting the property. Please try again later.", error);
                toast.error("An error occurred while submitting the property. Please try again later.", error);
            }
        };


        AddToFirebaseTransaction(data);

    };









    return (

        <>



            {openModal && (
                <div className='flex fixed top-0 z-50 w-full justify-center bg-black/70 h-full items-center'>
                    <div className='max-w-lg w-full bg-white rounded-lg shadow-xl p-8'>
                        <div className='flex justify-end'>
                            <div></div>
                            <div onClick={CloseModal} className='text-2xl'>
                                <IoClose />
                            </div>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input id="firstName" name="firstName" type="text" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your first name" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input id="lastName" name="lastName" type="text" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your last name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email address" />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input id="phoneNumber" name="phoneNumber" type="tel" autoComplete="tel" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your phone number" />
                            </div>
                            <div>
                                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                                <input id="propertyType" name="propertyType" type="text" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter property type (e.g., house, apartment)" />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                <input id="location" name="location" type="text" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter property location" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea id="description" name="description" rows="3" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter property description"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}






            <div className="min-h-screen flex justify-center items-center ">

                <div className="flex max-lg:flex-col  px-10 max-md:px-2  bg-white">


                    {/* Left Side (Picture) */}
                    <div className="lg:w-1/2 lg:px-28">
                        <h1 className="lg:text-5xl text-3xl max-lg:my-7 text-gray-500 mb-4">Submit Your Commercial Real Estate Property</h1>
                        <hr className="border-b-2 border-red-500 mb-4" />
                        <p className="my-9 text-xl text-gray-400">
                            We accept Commercial Real Estate (CRE) from across the globe and we are always looking to help real estate developers/owners leverage RedSwan CRE community to raise capital.
                        </p>

                        <ul className='mb-9 text-xl text-gray-400'>

                            <div className='flex justify-start leading-9 items-start gap-10 '>
                                <div>
                                    <li>Multifamily</li>
                                    <li>Office</li>
                                    <li>Industrial</li>
                                    <li>Mixed Use</li>
                                </div>
                                <div>
                                    <li>Retail</li>
                                    <li>Hospitality</li>
                                    <li>Condominium</li>
                                    <li>Student Housing</li>
                                </div>

                            </div>

                        </ul>

                        <button onClick={HandleModal} className="bg-red-600 my-5 text-white py-3 text-xl px-6 rounded-lg  hover:bg-red-700">
                            Submit Your Property
                        </button>
                    </div>


                    <div className="lg:w-1/2">
                        <img
                            src={SubmitPropertyPic}
                            alt="Tokenized Real Estate"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side (Content) */}

                </div>

            </div>

        </>

    )
}

export default SubmitProperty