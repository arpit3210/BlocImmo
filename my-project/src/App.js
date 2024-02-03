// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }


import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import IndexPage from "../src/Components/index.js"
 

import "./index.css"


function App() {
 
  return (
    <div>


      {/* <SignedOut> */}
        {/* <SignInButton /> */}
     
<IndexPage/>
     
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