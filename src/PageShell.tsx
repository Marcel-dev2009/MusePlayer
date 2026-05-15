import logo from "/Static-assets/logo.png"

 interface LayoutProps {
   children : React.ReactNode;       
 }
function PageShell({ children }: LayoutProps) {
  return (
 
    <>
      

        <div className="relative p-6 overflow-hidden min-h-screen"
      style={{ background:"#080a14"}}> 
       <div>
        <img src={logo} alt="Image" className='w-auto max-w-6 absolute left-3'/>
       </div>
      {/* Ambient orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        {[
          { w:420, h:420, style:"top:-180px;left:-100px", color:"rgba(59,63,204,0.22)" },
          { w:320, h:320, style:"bottom:-80px;right:-60px", color:"rgba(124,58,237,0.18)" },
          { w:200, h:200, style:"top:40%;right:5%",         color:"rgba(99,102,241,0.12)" },
        ].map((o, i) => (
          <div key={i} className="absolute rounded-full"
            style={{ width:o.w, height:o.h, filter:"blur(40px)", background:`radial-gradient(circle,${o.color} 0%,transparent 70%)`, ...Object.fromEntries(o.style.split(";").map(s => { const [k,v]=s.split(":"); return [k.trim().replace(/-([a-z])/g,(_,c)=>c.toUpperCase()), v?.trim()]; }).filter(([k])=>k)) }} />
        ))}
      </div>
      { children }
      </div>
    </>
     
  );
}

export default PageShell;