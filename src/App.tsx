
import {Routes , Route} from "react-router-dom";
import Entrance from "./components/Entrance";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login"
import Home from "#components/home";
function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Entrance/>}/>
     <Route path="/auth" element={<SignUp/>}/>
     <Route path="/sign-in" element={<Login/>}/>
     <Route path="/home" element={<Home/>}/>
   </Routes>
   </>
  )
}
export default App
