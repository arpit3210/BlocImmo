import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const KYCWaitingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <FaCheckCircle className="text-green-500  text-4xl mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Thank you for submitting your documents!</h2>
        <p className="text-gray-600"> We will review them and get back to you shortly.</p>
      </div>
    </div>
  );
};

export default KYCWaitingScreen;
