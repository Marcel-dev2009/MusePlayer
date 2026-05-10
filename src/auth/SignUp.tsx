import { useNavigate } from "react-router-dom"
import  {motion} from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from 'axios'
import logo from "/Static-assets/logo.png"
import { useState } from "react";
import Input from "./AuthComponents/Input";
import PageDivider from "./AuthComponents/PageDivider";
function SignUp() {

  const navigate = useNavigate();
  const LoginNavigator = () => {
    navigate('/sign-in')
  }

   const [firstname , setFirstName] = useState<string>("");
   const [lastname , setLastName] = useState<string>("");
   const [email , setEmail] = useState<string>("");
   const [password , setPassword] = useState<string>("");
   const [loading , setLoading] = useState<boolean>(false);
   const [error , setError] = useState<string>("");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmail = (email:string):boolean => {
        return emailRegex.test(email)
      }
    async function signupHandler(e:React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if(!email || !password){
        setError("All fields are necessary");
        return;
      };
      if(!validEmail(email)){
        setError("Please Enter a valid email address");
        return;
      }
      setError("");
      setLoading(true);
      try{
       const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup` , {
        firstname,
        lastname,
        email,
        password
       });
       console.log(res.data)
       localStorage.setItem("token" , res.data.token);
       navigate('/home')
      }
      catch(err){
        console.log(err)
      } 
      finally{
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
          <div className="flex justify-between max-w-4xl mx-auto px-4">
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
                 <h4 className="text-2xl font-bold"> Get Started With Us</h4>
                 <p>Complete these easy steps to register your account. </p>
                  
                  <div className="flex flex-col gap-4 mt-10">
                     <div className="min-w-64 cursor-pointer mx-auto bg-gray-800 p-2 rounded-md hover:bg-white transition-all duration-300 hover:text-black font-medium">
                      1 : Sign up  your account 
                     </div>
                     <div
                     className="min-w-64 cursor-pointer mx-auto bg-gray-800 p-2 rounded-md hover:bg-white transition-all duration-300 hover:text-black font-medium"
                     >
                      2 : Set up Your preferences
                     </div>

                     <div
                     className="min-w-64 cursor-pointer mx-auto bg-gray-800 p-2 rounded-md hover:bg-white transition-all duration-300 hover:text-black font-medium"
                     >
                      3 : Complete your profile
                     </div>
                  </div>
                </div>   
          </div>
          
         <form  onSubmit={signupHandler}>
           <div className=" flex flex-col flex-1 mt-10 md:mt-24 md:ml-8 w-full max-w-max mx-auto p-2">
           <div className="flex flex-col">
            <p className=" text-xl md:text-2xl font-bold text-center">Create Your Account </p>
            <p className="text-center">Enter Your Personal Data To Create Your Account</p>
           </div>
         
             <div className="mt-12 flex flex-1 justify-center gap-6 md:gap-12">
              
              <button className=" inline-flex gap-1.5 cursor-pointer border-1 border-white px-4 py-2   rounded-md"> 
              <span className="mt-1"> <FcGoogle/></span> Google
              </button>

               <button className=" inline-flex gap-1.5 cursor-pointer border-1 border-white px-4 py-2 rounded-md "> 
                   <span className="mt-1"><FaGithub/></span>
                   Github</button>
               
             </div> {/* OAuth Buttons */}
                <PageDivider/>
              <div className="mt-4 flex flex-1 gap-2  md:gap-12">
                 {/*   <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="e.g John"   className="placeholder-gray-300  py-2 px-2 rounded-md  bg-gray-800
        flex-1 w-full md:w-fit max-w-max
         "/> 
                   <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="e.g Frances"   className="placeholder-gray-300  py-2 px-2 rounded-md  bg-gray-800
        flex-1 w-full md:w-fit max-w-max
         "/>  */}
                  <Input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder=" e.g John"/>
                  <Input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder=" e.g Frances"/>
              </div>
              <div>
                 <div className="mt-2">
                     <label htmlFor="email"  className="font-bold"> Email</label> 
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className=" mt-4 w-full bg-gray-800 rounded-md py-2 px-4 placeholder-gray-300" placeholder="eg.johnmarc@gmail.com"/> 
                 <br /><br />
                     <label htmlFor="password"  className=" font-bold"> Password</label> 
                 <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className=" mt-4 w-full bg-gray-800 rounded-md py-2 px-2 placeholder-gray-300" placeholder="Enter Your password"/> <br />
                  {error && (
                    <div className="text-sm text-red-600">
                       {error} 
                    </div>
                  )}
                 </div>
                <div className="mt-4">
                   <button type="submit" className=" font-semibold w-full py-2 rounded-md bg-white text-black  hover:bg-blue-800 transition duration-300">
                          {loading ? (
                    <div className=" border-black border-1 w-5 h-5 rounded-full animate-ping mx-auto"></div>
                  ) : "Sign Up"}
                            
                   </button>
                </div>
                <div>
                   <div className="text-sm text-center mt-5">
                    Already Have an Account? <button className=" hover:text-blue-800 transition duration-300 cursor-pointer font-bold" onClick={LoginNavigator}>Log In</button>
                   </div>
                </div>
              </div>
           </div> 
         </form>
             
      </div> {/* Main Container div */}
    </main>
 
    </>
  )
}
export default SignUp


