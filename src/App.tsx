
import {Routes , Route} from "react-router-dom";
import Entrance from "./components/Entrance";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login"
function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Entrance/>}/>
     <Route path="/auth" element={<SignUp/>}/>
     <Route path="/SignIn" element={<Login/>}/>
   </Routes>
   </>
  )
}
export default App
