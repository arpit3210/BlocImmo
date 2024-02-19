import {  useEffect } from "react"

import IndexPage from "../src/Components/index.js"
//  import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import "./index.css"
import { getAuth} from "firebase/auth";
import { useAuth } from "@clerk/clerk-react";

import {getDatabase} from "firebase/database"
import { app } from "./firebase.js"
import { PropertyProvider } from "./Contexts/PropertyContext.js";

import { Provider } from 'react-redux';

import store from "./redux/store.js";




function App() {

  const db= getDatabase(app);
  const { getToken } = useAuth();
 
  useEffect(() => {
    const auth = getAuth();
    

    console.log(auth);
    // Access Firebase auth features with `auth.currentUser`
    const user = auth.currentUser;
    console.log("Current user:", user);
  }, []);




  // useEffect(() => {
  //   const signInWithClerk = async () => {
  //     const auth = getAuth();
  //     const token = await getToken({ template: "integration_firebase" });
  //     const userCredentials = await signInWithCustomToken(auth, token);
 
  //     /**
  //      * The userCredentials.user object will call the methods of
  //      * the Firebase platform as an authenticated user.
  //      */
  //     console.log("user ::", userCredentials.user);
  //   };
 
  //   signInWithClerk();
  // }, []);
 
  return (
    <div>


      {/* <SignedOut> */}
        {/* <SignInButton /> */}



        {/* <LocomotiveScrollProvider
  options={
    {
      smooth: true,
  }
  }
  watch={
    [
   ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
 
    <IndexPage/>
  </main>
</LocomotiveScrollProvider> */}


<PropertyProvider>

<Provider store={store}>
<IndexPage/>
  </Provider>



</PropertyProvider>

     
        {/* <p>This content is public. Only signed out users can see the SignInButton above this text.</p> */}
      {/* </SignedOut> */}


      {/* <SignedIn> */}
        {/* <SignOutButton aftersignouturl="/" /> */}
  
        {/* <IndexPage/> */}
        {/* <p>This content is private. Only signed in users can see the SignOutButton above this text.</p> */}
      {/* </SignedIn> */}
    </div>
  )
}
 
export default App