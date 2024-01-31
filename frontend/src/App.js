import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import IndexPage from "../src/Components/index.js"
 



function App() {
 
  return (
    <div>

<IndexPage/>






      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton aftersignouturl="/" />
        <p>This content is private. Only signed in users can see the SignOutButton above this text.</p>
      </SignedIn>
    </div>
  )
}
 
export default App