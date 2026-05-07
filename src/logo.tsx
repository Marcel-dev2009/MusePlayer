
 import logo from '/Static-assets/logo.png';
export default function Logo() {
  return(
    <>
     <div>
      <div className='shadow-lg transition-all duration-300 ease-in-out hover:-tranlate-y-3 hover:scale-105 hover:shadow-2xl
      hover:translate-x-3'>
              <img src={logo} alt="Image" className='w-full max-w-8'/>
      </div>
         </div>

    </>
  )
}