
import {Routes , Route} from "react-router-dom";
import Entrance from "./components/Entrance";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login"
import ProfileSetup from "#components/profile-setup";
import ProtectedRoute from "./ProtectedRoute";
import AuthRedirect from "./authRedirect";
import Home from "#components/home";
function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Entrance/>}/>
     <Route path="/auth" element={
   <AuthRedirect>
    <SignUp/>
   </AuthRedirect>
        
      
     }/>
     <Route path="/sign-in" element={
      <AuthRedirect>
        <Login/>
      </AuthRedirect>
    }
      />
     <Route path="/profile-setup" element={
      <ProtectedRoute>
        <ProfileSetup/>
      </ProtectedRoute> 
      }/>
      <Route path="/home" element={<Home/>}></Route>
   </Routes>
   
   </>
  )
}
export default App
