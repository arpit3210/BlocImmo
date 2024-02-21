import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaAddressCard, FaPhone } from 'react-icons/fa';
import Loaders from '../Components/Loaders';



import { useUser } from '@clerk/clerk-react';



import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";



const KYCForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    documentType: '',
    KYC_Completed: false,
    uploadedImage: null, // Added uploadedImage field to formData
  });


const initialFormData= {
    fullName: '',
    email: '',
    address: '',
    phone: '',
    documentType: '',
    KYC_Completed: false,
    uploadedImage: null, // Added uploadedImage field to formData
  }


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Read the file
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update formData with the base64 data
        setFormData({
          ...formData,
          [name]: reader.result, // Use reader.result which is the base64 string
          uploadedImage: files[0], // Keep the File object for displaying later if needed
        });
      };
      reader.readAsDataURL(files[0]); // Convert the file to base64
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  


  const {user } = useUser();





//   const senderUserId = user ? user.id : null;

//   const AddToFirebaseTransaction = async (senderUserId, UserKYCData) => {
//     try {
//       const db = getFirestore();
//       const KYCUniqueID = uuidv4();
//       // Reference to the user's gifts collection
//       console.log(senderUserId);
//       const userKYCDataRef = collection(db, `UsersKYCList/${senderUserId}/KYCData`);
//       // Add a new document to the gifts collection
//       console.log(UserKYCData);
//       const KYCDataDocRef = await addDoc(userKYCDataRef, { ...UserKYCData, KYCUniqueID });;
//       console.log("KYCData added with ID:", KYCDataDocRef.id);
//       toast.success("KYCData added with ID:", KYCDataDocRef.id);
//     } catch (error) {
//       console.error("Error adding KYCData:", error);
//       toast.error("Error adding KYCData:", error);
//     }
//   };




  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const db = getFirestore();
      const storage = getStorage();
      const senderUserId = user ? user.id : null;
      // Generate a unique filename for the image
      const imageName = uuidv4();
      const imageRef = ref(storage, `images/${senderUserId}/${imageName}`);
  
      // Upload the image to Firebase Storage
      await uploadBytes(imageRef, formData.uploadedImage);
  
      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef);
  
      // Prepare data to be added to Firestore
      const userKYCData = {
        fullName: formData.fullName,
        email: formData.email,
        address: formData.address,
        USER_ID: user.id,
        phone: formData.phone,
        documentType: formData.documentType,
        KYC_Completed: false,
        imageUrl: imageUrl, // Add the image URL to the data
      };
  
      // Add the userKYCData to Firestore
      await addDoc(collection(db, `UsersKYCList/${senderUserId}/KYCData`), userKYCData);
  
      setFormData(initialFormData); // Reset the form
      toast.success("KYCData added successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error adding KYCData:", error);
      toast.error("Error adding KYCData:", error);
    } finally {
      setIsLoading(false);
    }
  };
  



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
// AddToFirebaseTransaction(senderUserId, formData );
//     setTimeout(() => {
//       setIsLoading(false);
//       console.log('Form submitted:', formData);
//     }, 2000);
//   };

  return (
    <div className="w-full max-w-md mx-auto p-8 text-white rounded">
      <h2 className="text-2xl mb-4 font-bold text-center">Real Estate Investment KYC Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="flex items-center"><FaUser className="mr-2" /> Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 hover:bg-slate-300 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="flex items-center"><FaEnvelope className="mr-2" /> Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 hover:bg-slate-300 text-black py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="flex items-center"><FaAddressCard className="mr-2" /> Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 hover:bg-slate-300 text-black py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="flex items-center"><FaPhone className="mr-2" /> Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 hover:bg-slate-300 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="documentType" className="flex items-center">Select Document Type</label>
          <select
            id="documentType"
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            required
            className="w-full px-4 text-black hover:bg-slate-300 py-2 border rounded"
          >
            <option value="">Select Document Type</option>
            <option value="passport">Passport</option>
            <option value="driverLicense">Driver's License</option>
            <option value="idCard">ID Card</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="uploadImage" className="flex items-center">Upload Identification Picture</label>
          <input
            type="file"
            id="uploadImage"
            name="uploadedImage"
            accept="image/*" // Only accept image files
            onChange={handleChange}
            required
            className="w-full text-black px-4 hover:bg-slate-300 py-2  border rounded"
          />
        </div>
        {formData.uploadedImage && (
          <div className="mb-4">
            <label className="flex items-center">Uploaded Image</label>
            <img src={URL.createObjectURL(formData.uploadedImage)} alt="Uploaded" className="w-full  rounded-2xl" />
          </div>
        )}
        <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500  py-2 px-4 rounded-md hover:from-green-500 hover:to-blue-600 text-white font-bold ">
          {isLoading ? <Loaders /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};



export default KYCForm;
