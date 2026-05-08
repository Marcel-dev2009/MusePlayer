import { useNavigate } from "react-router-dom"
import  {motion} from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logo from "/Static-assets/logo.png"
import Input from "./AuthComponents/Input";
import PageDivider from "./AuthComponents/PageDivider";
function SignUp() {
  const navigate = useNavigate();
  const LoginNavigator = () => {
    navigate('/SignIn')
  }
  return (
    <>
    <main  
     className='w-screen overflow-x-hidden overflow-y-hidden'
/*      style={{
      background : "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
     }} */
      
    >
          <div className="flex justify-between max-w-4xl mx-auto px-8">
         <div className="hidden md:block h-screen max-h-[40rem] flex-2 rounded-4xl w-full max-w-full min-w-[21rem]
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
                   
                  <Input type="text" placeholder=" e.g John"/>
                  <Input type="text" placeholder=" e.g Frances"/>
              </div>
              <div>
                 <div className="mt-2">
                     <label htmlFor="email" id="email" className="font-bold"> Email</label> 
                 <input type="email" id="email" className=" mt-4 w-full bg-gray-800 rounded-md py-2 px-4 placeholder-gray-300" placeholder="eg.johnmarc@gmail.com"/> 
                 <br /><br />
                     <label htmlFor="password" id="password" className=" font-bold"> Password</label> 
                 <input type="password" id="password" className=" mt-4 w-full bg-gray-800 rounded-md py-2 px-2 placeholder-gray-300" placeholder="Enter Your password"/> <br />
                  {/* Error Handler over here */}
                 </div>
                <div className="mt-4">
                   <button className=" font-semibold w-full py-2 rounded-md bg-white text-black  hover:bg-blue-800 transition duration-300">Sign Up</button>
                </div>
                <div>
                   <div className="text-sm text-center mt-5">
                    Already Have an Account? <button className=" hover:text-blue-800 transition duration-300 cursor-pointer font-bold" onClick={LoginNavigator}>Log In</button>
                   </div>
                </div>
              </div>
           </div> 
             
      </div> {/* Main Container div */}
    </main>
 
    </>
  )
}
export default SignUp


