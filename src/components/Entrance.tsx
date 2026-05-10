
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
    <main className='overflow-x-hidden'>
       
     <div className='mt-2 bg-transparent'>
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
      
      <div className='mt-2'>
         <ArtistGrid/>
      </div>
      <div className='flex justify-center mt-4'>
          <motion.button
          initial={{y:100 , opacity:0}}
          animate={{y:0 , opacity:1}}
          onClick={handleEnterApp}
          className='bg-gray-800 px-8 py-2 rounded-md font-semibold text-[clamp(1rem, 1.2rem , 3rem)]' 
          >
              Launch App
          </motion.button>
      </div>
    </main>
    {/* <div
    
    >
       <div  className='overflow-x-hidden'>


     

         
       
           
           
       </div>
    </div>
       */}
    </>
   )
}
export default Entrance;