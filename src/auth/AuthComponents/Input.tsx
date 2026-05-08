interface InputProps  {
 type : string,
 placeholder : string,
 id? : string
}
function Input( {  type ,  placeholder , id }: InputProps) {
  return (
    <>
     <div>
         <input type={type} placeholder={placeholder} id={id}  className="placeholder-gray-300  py-2 px-2 rounded-md  bg-gray-800
         w-fit max-w-max flex-1
         "/>
     </div>
     </>
  )
}
export default Input