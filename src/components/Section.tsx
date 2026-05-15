// Why did it work
/* Can you call a tsx component you just created inside it?? */

interface sectionProps {
     eyebrow : string;
    title : string;
    sub : string ,
    children : React.ReactNode
}
function Section({ eyebrow, title , sub , children} : sectionProps) {
     <div>
        {eyebrow && (
         <p>{eyebrow}</p>   
        )};
        {title && (
            <h5>{title}</h5>
        )}
        {sub && (
          <p>{sub}</p>  
        )}
        <div>{children}</div>
     </div>
}
export default Section