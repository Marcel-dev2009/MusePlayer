import { useNavigate } from "react-router-dom";
import  {motion} from "framer-motion";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logo from "/Static-assets/logo.png"
import axios from "axios";
import PageDivider from "./AuthComponents/PageDivider";
function Login() {
  const navigate = useNavigate();
 const AuthNavigator = () => {
   navigate('/auth')
 }
 const [email  , setEmail] = useState<string>("");
 const [password  , setPassword] = useState<string>("");
 const [error  , setError] = useState<string>("");
 const [loading , setLoading] = useState<boolean>(false);
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const validEmail = (email:string):boolean => {
  return emailRegex.test(email);
 }
   async function loginHandler(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
     if(!email || !password){
      setError("All fields are required !");
      return;
     }
     if(!validEmail){
      setError("Please Enter a Valid Email");
      return;
     }
     setError("")
    setLoading(true);
    try{
     const res = await  axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
      email,
      password
     });
      console.log(res.data);
      localStorage.setItem("muse_token" , res.data.token);
      navigate("/profile-setup");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err:any){
      setError(err.response.data.message || "Something Went Wrong")
      console.log(err.response.data.message)
    } finally{
      setLoading(false);
    }
   }
  return (
    <>
    <main  
     className='w-screen overflow-x-hidden overflow-y-hidden'
     style={{
      background : "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
     }}
      
    >
          <div className="flex justify-between max-w-4xl mx-auto px-4 gap-12">
         <div className="hidden md:block h-screen max-h-[40rem] flex-1 rounded-4xl w-full max-w-full min-w-[21rem]
          bg-[#020617]  mt-5" 
          style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139,91,246,0.4), transparent)`,}}>
          <div>
          
             <img src={logo} alt="Image" className=" w-auto max-w-12 mx-auto transform translate-y-10"/>
             <motion.p
             initial={{ x : -100, opacity:0}}
             animate={{x:0 , opacity:1}}
             transition={{duration:2}}
              className="text-center font-bold text-2xl mt-12">Muse Streamer</motion.p>
          </div>
               <div className="text-center mt-36"> 
                 <h4 className="text-2xl font-bold animate-bounce">Welcome back !</h4>
                 <p>Sign in to your account to continue your experience with us </p>
                  
                  <div className="flex flex-col gap-4 mt-10">
                     
                     <div
                     className="min-w-64 cursor-pointer mx-auto bg-gray-800 p-2 rounded-md hover:bg-white transition-all duration-300 hover:text-black font-medium"
                     >
                     Log in to your account
                     </div>
                  </div>
                </div>   
          </div>
          
          <div className=" flex flex-col flex-1 mt-10 md:mt-24 md:ml-8 w-full max-w-max mx-auto p-2">
           <div className="flex flex-col">
            <p className=" text-xl md:text-2xl font-bold text-center">Log in to your Account</p>
            <p className="text-center">Enter Your Personal Data to Login</p>
           </div>
         
             <div className="flex gap-8 md:gap-12 mt-5 cursor-pointer w-auto mx-auto">
              
              <button className="flex gap-1.5 cursor-pointer border-1 border-white px-4 py-2   rounded-md"> 
              <span className="mt-1"> <FcGoogle/></span> Google
              </button>

               <button className=" inline-flex gap-1.5 cursor-pointer border-1 border-white px-4 py-2 rounded-md "> 
                   <span className="mt-1"><FaGithub/></span>
                   Github</button>
               
             </div> {/* OAuth Buttons */}
                <PageDivider/>
              <div>
                 <form onSubmit={loginHandler}>

                  <div className="mt-2">
                   <label htmlFor="email"  className="font-bold"> Email</label> 
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className=" mt-4 w-full bg-gray-800 rounded-md py-2 px-4 placeholder-gray-300" placeholder="eg.johnmarc@gmail.com"/> 
                 <br /><br />
                     <label htmlFor="password" className=" font-bold"> Password</label> 
                 <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className=" mt-4 w-full bg-gray-800 rounded-md py-2 px-2 placeholder-gray-300" placeholder="Enter Your password"/> <br />
                 {error && (
                    <div className="text-sm text-red-600">
                       {error} 
                    </div>
                  )}
                 </div>
                <div className="mt-4">
                   <button type="submit" className=" font-semibold w-full md:min-w-72 py-2 rounded-md bg-white text-black  hover:bg-blue-800 transition duration-300">

                      {loading ? (
                    <div className=" border-black border-1 w-5 h-5 rounded-full animate-ping mx-auto"></div>
                  ) : "Log In"}
                        
                   </button>
                </div>
                 </form>


                <div>
                   <div className="text-sm text-center mt-5">
                    Don't Have an Account Yet? <button className=" hover:text-blue-800 transition duration-300 cursor-pointer font-bold"
                    onClick={AuthNavigator}
                    >Create an Account</button>
                   </div>
                </div>
              </div>
           </div> 
             
      </div> {/* Main Container div */}
    </main>
 
    </>
  )
}
export default Login


