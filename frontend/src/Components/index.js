import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";



import ContactPage from "./Contact.js";
import About from "./About";
import Home from "./Home";


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