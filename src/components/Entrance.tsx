
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
 import ArtistGrid from './ArtistGrid';
 import Logo from '../logo';
 import logo from '/Static-assets/logo.png';

function Entrance() {
   const navigate = useNavigate();
 const handleEnterApp = () => {
    navigate('./auth');
  }
   return(
    <>
    <div className='absolute inset-0 z-0'
     style={{
      background : "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
     }}
    >
       <div  className='overflow-x-hidden'>

     <div className='mt-2'>
        <img src={logo} alt="Image" className='w-auto max-w-6 ml-2'/>
       </div>
      <div className='flex justify-center'>
            <Logo/>
      </div>
       <motion.h1
      initial={{x: -100, opacity:0}}
      animate={{x: 0 , opacity:1}}
      transition={{type:"spring", stiffness: 100, duration:2}}
      className='text-center text-[1.2rem] md:text-xl mb-0.5 p-8 md:p-0 font-semibold'
      >
        Your ultimate destination for an immersive musical experience. <br />
        Dive into a world of endless tunes, personalized playlists, <br />
         and seamless listening. Let the music move you !
      </motion.h1> 
 
           <div className='transform translate-y-2'>
               <ArtistGrid/>
           </div>
           <div className='mt-6 transform -translate-x-[26.5rem] sm:-translate-x-[15rem] md:-translate-x-[9rem] lg:-translate-x-[0.5rem] '> {/* What does Position do */} {/* 
             sm= 640 and md = 768 lg = 1024px xl = 
            */}
                  <motion.button
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:2}}
        transition={{duration:0.5, ease:'easeIn'}}
        whileTap={{scale:0.95}}
        onClick={handleEnterApp}
        className='
        px-6 py-3 bg-gray-800 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 w-auto min-w-54  margin mb-3
       lg:w-96'
        >     Launch App
        </motion.button> 
           </div>
       </div>
    </div>
      
    </>
   )
}
export default Entrance;