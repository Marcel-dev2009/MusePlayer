import { Navigate } from "react-router-dom";
interface AuthRedirectProp {
   children : React.ReactNode;       
}
const AuthRedirect = ({children} : AuthRedirectProp) => {
   const token = localStorage.getItem("muse_token");
   if(token){
     return <Navigate to="/profile-setup" replace/>      
   }       
   return <>{children}</>;       
}

export default AuthRedirect;