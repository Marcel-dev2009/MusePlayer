//#Fix the things you can first
import { /* useEffect, */ useRef  , useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../PageShell";
import Logo from "../logo";
import { GENRES } from "#lib/data";
import { ARTISTS } from "#lib/data";
import { STEPS } from "#lib/data";
import logo from "/Static-assets/logo.png";
import axios from "axios";
const cx = (...classes: string[]) => classes.filter(Boolean).join(" ")
function ProfileSetup() {
  const [step , setStep] = useState<number>(0);
  const [photoPreview , setPhotoPreview] = useState<string | undefined>();
  const [selectedGenres , setSelectedGenres] = useState<string[]>([]);
  const [selectedArtists ,setSelectedArtists] = useState<string[]>([]);
  const [done , setDone] = useState<boolean>(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const handleMainApp = () => {
    navigate("/home");
  }
 const handlePhoto = (e:ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if(!file) return; 
  const reader = new FileReader();
  reader.onload = (ev) => {
   const result = ev.target?.result;
   if(typeof result === "string"){
    setPhotoPreview(result);
  /*    localStorage.setItem("photo" , result); */
   } 
  };
  reader.readAsDataURL(file);

 };
/*  useEffect(() => {
  const savedPhoto = localStorage.getItem('photo');
  if(savedPhoto){
    setPhotoPreview(savedPhoto);
  }
 }, []); */

 const toggleGenre = (id:string) => 
  setSelectedGenres((prev) => 
   prev.includes(id) ? prev.filter((g) => g !== id) : prev.length < 5 ?
  [...prev , id] : prev
  );
  const toggleArtist = (id:string) => setSelectedArtists((prev) => prev.includes(id) ? prev.filter((g) => g !== id) : prev.length < 6 ? [...prev , id] : prev);

   const canContinue = step === 0 ? true : 
   step === 1 ? selectedGenres.length >= 1: selectedArtists.length >= 1;
   const handleSubmitProfile = async () => {
   try{
     const token = localStorage.getItem("muse_token");
     await axios.patch(`${import.meta.env.VITE_API_URL}/api/auth/profile` , {
      photoUrl : photoPreview || "",
      genres : selectedGenres,
      artists : selectedArtists,
     },
    {
      headers : {
        Authorization : `Bearer ${token}`,
      }
    });
    setDone(true)
   }catch(error){
     console.error(error)
   } 
   }
   // done page
   if(done){
    return (
       <PageShell>
        <main className="flex justify-center items-center mt-12">
                <div className="relative z-10 flex flex-col items-center gap-4 text-center p-12 rounded-3xl backdrop-blur-2xl max-w-sm mx-4"
          style={{ background: "rgba(12,14,28,0.75)", border: "0.5px solid rgba(99,102,241,0.18)" }}>
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-2"
            style={{ background: "linear-gradient(135deg,rgba(59,63,204,0.3),rgba(109,40,217,0.25))", border: "0.5px solid rgba(139,92,246,0.3)" }}>
            <span className="text-5xl"><Logo/></span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            You're all set  <span className="animate-bounce">✅</span>.
          </h1>
          <p className="text-sm font-light text-slate-400/75 leading-relaxed">
            Your sharp profile is ready. Welcome to Muse Streamer.
          </p>
          <button onClick={handleMainApp} disabled={false}> Open the App  <span className="animate-pulse"> → </span></button>
        </div>
        </main>
      </PageShell>
    )
   };
   //Main-flow
   return (
    <PageShell>
      {/* Card */}
      <main className="flex justify-center items-center mt-2">

        <div
        className=" w-fit max-w-xl min-w-[18rem] mt-8 mx-4 flex flex-1 flex-col rounded-3xl backdrop-blur-2xl overflow-hidden"
        style={{ background: "rgba(12,14,28,0.72)", border: "0.5px solid rgba(99,102,241,0.18)" }}
      >

        {/* ── Header ──────────────────────────────────── */}
        <div className="flex items-center justify-between px-7 py-5" style={{ borderBottom: "0.5px solid rgba(99,102,241,0.1)" }}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-xl leading-none" style={{ background:"linear-gradient(135deg,#818cf8,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
               <img src={logo} alt="Muse-Streamer logo" className="max-w-4" />
            </div>
            <span className="text-[clamp(0.5rem , 1rem , 0rem)] font-bold text-slate-200">Muse Streamer</span>
          </div>

          {/* Step dots */}
          <div className="flex items-center gap-1.5">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-1.5">
                <div
                  className="h-2 transition-all duration-300"
                  style={{
                    width:        i === step ? 15 : 8,
                    borderRadius: i === step ? 6 : "50%",
                    background:
                      i === step ? "linear-gradient(135deg,#3b3fcc,#7c3aed)" :
                      i <  step  ? "rgba(139,92,246,0.5)" :
                                   "rgba(255,255,255,0.08)",
                  }}
                />
                {i < STEPS.length - 1 && (
                  <div className="w-5 h-px transition-colors duration-300"
                    style={{ background: i < step ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.07)" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Scrollable content ──────────────────────── */}
        <div className="flex-1 overflow-y-auto px-7 py-8" style={{ maxHeight: "calc(100vh - 200px)" }}>

          {/* STEP 0 — Photo */}
          {step === 0 && (
            <section>
              <form>
              <div className="flex flex-col items-center gap-6">
                {/* Upload circle */}
              
                          <div
                  className="relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer overflow-hidden transition-colors duration-200 hover:border-violet-400/60"
                  style={{ border:"1.5px dashed rgba(99,102,241,0.35)", background:"rgba(30,32,60,0.5)" }}
                  onClick={() => fileRef.current?.click()}
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Profile" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="flex flex-col items-center gap-1.5">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(139,92,246,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span className="text-[11px] text-violet-400/70">Upload photo</span>
                    </div>
                  )}
                  {/* Edit badge */}
                  <div className="absolute bottom-1.5 right-1.5 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background:"linear-gradient(135deg,#3b3fcc,#7c3aed)", border:"2px solid #080a14" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </div>
                  <input type="file" ref={fileRef} accept="image/*" className="hidden" onChange={handlePhoto} />
                </div>
                

                {!photoPreview && (
                  <button type="submit"
                    className="bg-transparent border-none cursor-pointer text-[13px] text-slate-400/60 underline underline-offset-[3px] transition-colors hover:text-slate-300/80"
            
                  >
                    Skip for now
                  </button>
                ) /* : (
                     <button type="submit"
                    className="bg-transparent border-none cursor-pointer text-[clamp(10px,13px,14px)] text-slate-400/60 underline underline-offset-[3px] transition-colors hover:text-slate-300/80"
                 
                  >
                    Save Profile
                  </button>
                ) */}
               
              </div>
             </form>
            </section>
          )}






          {/* STEP 1 — Genres */}
          {step === 1 && (
            <section>
              <form> 
              <div className="flex flex-1  gap-2 justify-end mb-2">
                <p className="text-sm"> Your own sound pallete</p>
                <p className="text-sm">
                  {selectedGenres.length < 5 ? `${selectedGenres.length}/5 selected` : (
                    <span className="text-sm text-red-600"> Your genre pallete is full !!</span>
                  )}
                </p>
              </div>
             {/*  */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {GENRES.map((g) => {
                  const sel = selectedGenres.includes(g.id);
                  return (
                    <>
                    
                  <div className="flex flex-col">
                           <div
                      key={g.id}
                      onClick={() => toggleGenre(g.id)}
                      className={cx(
                        "flex items-center gap-2 px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 text-left relative",
                        "hover:-translate-y-px",
                        sel ? "text-violet-100" : "text-slate-300/85 hover:border-indigo-400/30"
                      )}
                      style={{
                        border: sel ? "0.5px solid rgba(139,92,246,0.6)" : "0.5px solid rgba(99,102,241,0.15)",
                        background: sel
                          ? "linear-gradient(135deg,rgba(59,63,204,0.9),rgba(109,40,217,0.85))"
                          : "rgba(20,22,45,0.7)",
                      }}
                    >
                      <span className="text-lg leading-none">{g.icon}</span>
                      <span className="text-[13px] flex-1 font-semibold">{g.label}</span>
                      {sel && <span className="text-[11px] font-semibold text-violet-300">✓</span>}
                    </div>
               
                  </div>
                      
                 
                    </>
                  );
                })}
                  {/* {selectedGenres.length === 5 && (
                      
                       <button type="submit"
                    className="cursor-pointer  text-white underline underline-offset-[3px] transition-colors hover:text-slate-300/80"
                    
                  >
                   <span className="text-[clamp(10px,13px,14px)]">Save Genres</span>
                  </button>
                     )} */}
              </div> 
              </form>
              {/*  */}
            </section>
          )}

          {/* STEP 2 — Artists */}
          {step === 2 && (
            <section /* eyebrow="Step 3 of 3" title="Artists you love" sub={`Follow up to 6 artists. ${selectedArtists.length}/6 selected. */>  
               <form>
              <div className="flex flex-1 justify-end space-x-1.5 mb-2">
                <p className="text-sm">Step 3 of 3</p>
                <p className="text-sm">Artists You love   </p> 
                <p className="text-sm">
                 {
                   selectedArtists.length <= 5 ? `${selectedArtists.length}/6 selected` : (<span className="text-sm text-red-600">
                     You have selected maximum artists
                   </span>)
                  }
                </p>
              </div>
        
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {ARTISTS.map((a) => {
                  const sel = selectedArtists.includes(a.id);
                  return (
                    <div
                      key={a.id}
                      onClick={() => toggleArtist(a.id)}
                      className={cx(
                        "flex flex-col items-center gap-2 px-2.5 py-4 rounded-2xl cursor-pointer transition-all duration-200 relative text-center",
                        "hover:-translate-y-0.5"
                      )}
                      style={{
                        border: sel ? "0.5px solid rgba(139,92,246,0.5)" : "0.5px solid rgba(99,102,241,0.15)",
                        background: sel
                          ? "linear-gradient(135deg,rgba(30,36,160,0.8),rgba(91,33,182,0.75))"
                          : "rgba(20,22,45,0.7)",
                      }}
                    >
                      {/* Avatar */}
                        <div
                          className=" flex items-center justify-center flex-shrink-0"
                        >
                         <img src={a.image} alt={a.name} 
                          className="h-15 w-15 object-contain rounded-full"
                         loading="lazy" />
                        </div>

                      <span
                        className={cx("text-[12.5px] font-medium leading-snug transition-colors", sel ? "text-violet-100" : "text-slate-200/90")}
                      >
                        {a.name}
                      </span>
                      <span
                        className={cx("text-[11px] font-light transition-colors", sel ? "text-violet-300" : "text-slate-400/55")}
                      >
                        {a.genre}
                      </span>

                      {sel && (
                        <span className="absolute top-2 right-2.5 text-[11px] font-bold text-violet-300">✓</span>
                      )}
                    </div>
                  );
                })}
               {/*   {selectedArtists.length === 6 && (
                      
                       <button type="submit"
                    className="cursor-pointer  text-white underline underline-offset-[3px] transition-colors hover:text-slate-300/80"
                  >
                   <span className="text-[clamp(10px,13px,14px)]">Save Artists</span>
                  </button>
                     )} */}
              </div>
             </form>
            </section>
          )}
        </div>

        {/* ── Footer ──────────────────────────────────── */}
        <div className="flex items-center justify-between px-7 pt-4 pb-6" style={{ borderTop:"0.5px solid rgba(99,102,241,0.1)" }}>
          <button
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
            className="bg-transparent border-none text-sm text-slate-400/50 transition-colors hover:text-violet-400/90 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
            
          >
            ← Back
          </button>

          <button    // #CtaShouts
            disabled={!canContinue}
            onClick={() => {
              if(step < 2) setStep((s) => s + 1); else handleSubmitProfile();
            }}
          >
            {step === 2 ? "Let's go →" : "Continue →"}
          </button>
        </div>
      </div>
      </main>
    </PageShell>
  );
}

export default ProfileSetup