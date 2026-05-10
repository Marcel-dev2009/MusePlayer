interface InputProps  {
 type : string,
 placeholder : string,
 id? : string,
 onChange : React.ChangeEventHandler<HTMLInputElement>,
 value : string;
}
function Input( {  type= 'text' ,  placeholder , id , onChange , value}: InputProps) {
  return (
    <>
     <div>
         <input value={value} onChange={onChange} type={type} placeholder={placeholder} id={id}  className="placeholder-gray-300  py-2 px-2 rounded-md  bg-gray-800
        flex-1 w-full md:w-fit max-w-max
         "/> 
     </div>
     </>
  )
}
export default Input

/* 
  /* w-fit max-w-max  
*/