
import { Navigate } from "react-router-dom";
 interface protectedRouteProp  {
    children : React.ReactNode ;      
 }
 const ProtectedRoute = ({children} : protectedRouteProp) => {
    
    const token = localStorage.getItem("muse_token");
    if(!token){
      return <Navigate to="/login" replace/>
    }      
     return <>
     {children}
     </>;
 }

 export default ProtectedRoute;