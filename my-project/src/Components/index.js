import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";



import ContactPage from "./Contact.js";
// import About from "./About";
import Home from "./Home";
// import Properties from '../Properties/Properties.js';
import PropertiesList from '../Properties/Properties.js';
import PropertyDetail from '../Properties/PropertyDetails.js';
import About from '../LandingPage/About.js';

import MarketPlace from '../LandingPage/MarketPlace.js';
import TeamPage from '../LandingPage/TeamPage.js';
import UserProfiles from '../LandingPage/UserProfiles.js';
import BoughtPropertiesHistory from '../Properties/BoughtPropertiesHistory.js';






function IndexPage() {
    return (
        <div>
            {/* <h1>This is the index page</h1> */}
            <div>


                <BrowserRouter>
                    <Routes>

                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactPage />} />
                        {/* <Route path="/properties" element={<Properties />} /> */}
                        <Route path="/team" element={<TeamPage />} />
                        {/* Contact Page Route */}
                     
                        <Route path="/userprofile" element={<UserProfiles />} />
                        <Route path="/marketplace" element={<MarketPlace />} />


                        <Route path="/propertiesList" element={<PropertiesList />} />
                        <Route path="/property/:propertyId" element={<PropertyDetail />} />
                     
                  
                        <Route path="/purchased properties history" element={<BoughtPropertiesHistory />} />
                   </Routes>
                </BrowserRouter>

                <ul>




                    {/* <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default IndexPage;