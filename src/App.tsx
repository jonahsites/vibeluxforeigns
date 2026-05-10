import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Shield, Zap, 
  Gauge, Target, Radio, Cpu, Layers, ArrowLeft, Menu, X
} from 'lucide-react';

const LOGO_URL = "https://scontent-lga3-2.cdninstagram.com/v/t51.82787-19/552655747_17859761040498300_8466435795470956048_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gEcS_DnZ4ikSswmWoISSK6GfudAKdJknZNnH7-XxZjuRRlND3ynbCal6GdEVAdhIAMGhlIi_iCaTM1OWWcLK5n3&_nc_ohc=bRDCYn8J4hYQ7kNvwHn3ITL&_nc_gid=ckIpAWsXWJcSMMHlRLDCFw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af6lKgh8y2iJoMwaSi9zsTB5rSYR1gM5UpUIGAwQ22cvUg&oe=6A06B9FB&_nc_sid=7a9f4b";

const Nav = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
    <div className="flex items-center gap-4">
      <img src={LOGO_URL} alt="LSOP Logo" className="w-10 h-10 rounded-full border border-white/20" />
      <span className="text-xs font-black uppercase tracking-[0.4em] text-white">LSOP_NYC</span>
    </div>
    <div className="flex items-center gap-8">
      <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">EST_2024 // NYC 🗽</span>
      <Menu className="text-white cursor-pointer" size={24} />
    </div>
  </nav>
);

const MinimalHero = () => (
  <section className="relative h-screen w-full flex items-center border-y border-white/5 px-8 md:px-24 overflow-hidden bg-black text-white font-mono">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-10 grayscale" alt="" />
    </div>
    <div className="grid lg:grid-cols-2 w-full max-w-[1440px] mx-auto items-end gap-24 relative z-10 mt-20">
      <div className="flex flex-col">
        <h2 className="text-[10vw] font-black leading-[0.8] mb-12 tracking-[-0.06em] font-syne">PURE <br /> LOGIC</h2>
        <p className="max-w-md text-white/40 text-lg font-light leading-relaxed mb-16 uppercase tracking-[0.2em] font-syne">
          Stripped down to the essential. The hardware, the road, and nothing else.
        </p>
        <button className="flex items-center gap-8 group">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <ArrowRight className="text-black" size={32} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.6em]">Initialize</span>
        </button>
      </div>
    </div>
  </section>
);

const FleetGridHero = () => (
  <section className="relative min-h-screen w-full p-8 md:p-12 overflow-hidden bg-[#050505] text-white font-outfit">
    <div className="flex justify-between items-end mb-12">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A47E]">The Collection</span>
        <h2 className="text-6xl font-black tracking-tighter uppercase">CURATED_FLEET</h2>
      </div>
      <button className="text-xs font-bold uppercase border-b border-[#C5A47E] text-[#C5A47E] pb-2">View All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[auto] md:h-[60vh]">
      <div className="col-span-1 md:col-span-2 row-span-2 bg-white/5 border border-white/5 relative group overflow-hidden min-h-[400px]">
        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Porsche GT3 RS" />
        <div className="absolute bottom-8 left-8">
           <span className="text-4xl font-black italic">GT_3_RS</span>
        </div>
      </div>
      <div className="col-span-1 bg-white/5 border border-white/5 p-8 flex flex-col justify-between min-h-[200px]">
         <span className="text-[10px] opacity-20 uppercase tracking-widest">Available</span>
         <span className="text-2xl font-bold uppercase">Aventador SVJ</span>
      </div>
      <div className="col-span-1 bg-[#C5A47E] text-black p-8 flex flex-col justify-between min-h-[200px]">
         <span className="text-[10px] font-bold uppercase tracking-widest">New Arrival</span>
         <span className="text-2xl font-bold uppercase">SF90 Stradale</span>
      </div>
      <div className="col-span-1 md:col-span-2 bg-white/5 border border-white/5 p-8 flex items-center justify-between min-h-[150px]">
         <div className="flex flex-col">
            <span className="text-[10px] opacity-20 uppercase tracking-widest">Performance</span>
            <span className="text-xl font-bold uppercase">Hybrid V12 Architecture</span>
         </div>
         <ArrowRight size={32} className="opacity-20" />
      </div>
    </div>
  </section>
);

const ProcessHero = () => (
  <section className="relative min-h-screen w-full flex flex-col p-8 md:p-24 overflow-hidden bg-white text-black font-grotesk">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 flex-1">
      <div className="col-span-1 md:col-span-4 md:border-r border-black/10 md:pr-12 flex flex-col justify-between">
        <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8">THE <br /> PATH.</h2>
        <p className="text-sm opacity-40 uppercase tracking-widest leading-relaxed">Three stages to absolute performance.</p>
      </div>
      <div className="col-span-1 md:col-span-8 grid grid-rows-3 gap-1 relative">
         {[ {n: "01", t: "IDENTITY VERIFICATION", d: "Secure biometrics and documentation approval via our encrypted vault." },
            {n: "02", t: "FLEET SELECTION", d: "Select your desired apparatus from our live-status NYC inventory." },
            {n: "03", t: "HANDOVER PROTOCOL", d: "GPS-synchronized delivery to your precise global coordinates." }
         ].map((step, i) => (
           <div key={i} className="flex items-center gap-12 group hover:bg-black/5 transition-all p-8 border-b border-black/5">
              <span className="text-4xl md:text-6xl font-black italic opacity-10 group-hover:opacity-100 transition-opacity">{step.n}</span>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold uppercase mb-2">{step.t}</span>
                <p className="max-w-md text-[10px] opacity-40 uppercase tracking-widest">{step.d}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const TestimonialHero = () => (
  <section className="relative min-h-screen w-full flex items-center justify-center p-8 md:p-24 overflow-hidden bg-[#0a0a0a] text-white font-fashion">
    <div className="relative z-10 text-center max-w-5xl">
       <span className="text-7xl font-serif italic opacity-10 mb-12 block leading-none">“</span>
       <h2 className="text-3xl md:text-6xl font-light leading-tight tracking-tight mb-20 italic">"The transition from the flight deck to the driver's seat was absolutely seamless. Precision manifested in metal."</h2>
       <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-[1px] bg-[#C5A47E]" />
          <span className="text-xs font-bold uppercase tracking-[0.8em] text-[#C5A47E]">Julian_Vane // CEO_ARCH</span>
       </div>
    </div>
  </section>
);

const ConciergeHero = () => (
  <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#f3e9d9] text-[#1a1a1a] font-expressive">
    <div className="flex-1 p-8 md:p-24 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#c5a47e]/20">
      <div>
        <span className="text-xl italic text-[#c5a47e] mb-8 block">At Your Service</span>
        <h2 className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase mb-12 font-fashion">THE <br /> CONCIERGE.</h2>
      </div>
      <div className="flex flex-col gap-12 font-sans not-italic">
        <p className="max-w-md text-lg opacity-60">Human expertise driving digital precision. Our specialists are available 24/7 for bespoke mission planning in Manhattan and beyond.</p>
        <button className="w-fit text-xl border-b-2 border-[#1a1a1a] pb-2 font-bold italic">Request Call</button>
      </div>
    </div>
    <div className="w-full md:w-1/3 bg-[#1a1a1a] text-white p-12 md:p-24 flex flex-col justify-between font-sans not-italic">
      <div className="flex flex-col gap-4">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"><Radio size={24} /></div>
        <span className="text-xs uppercase tracking-widest opacity-40 italic">Active Now</span>
      </div>
      <div className="flex flex-col gap-4 text-center mt-12 md:mt-0">
         <span className="text-6xl md:text-8xl font-black italic font-syne">24/7</span>
         <span className="text-[10px] uppercase tracking-[0.5em] opacity-40">Operational Readiness</span>
      </div>
    </div>
  </section>
);

const FAQHero = () => (
  <section className="relative min-h-screen w-full flex flex-col p-8 md:p-12 overflow-hidden bg-black text-white font-syne">
    <div className="flex justify-between items-start mb-16 border-b border-white pb-8">
      <h2 className="text-6xl md:text-9xl uppercase tracking-tighter font-black">I N F O.</h2>
      <span className="text-xs opacity-40">System_Data_V6</span>
    </div>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1 px-1">
      {[ {q: "MINIMUM AGE?", a: "Operational clearance requires 25+ with verified credentials." },
         {q: "INSURANCE?", a: "Comprehensive shield protocols active on all sorties. Self Drive Insurance + Deposit Required." },
         {q: "DELIVERY?", a: "Synchronized drop-off within 50km of NYC hub included." },
         {q: "DEPOSIT?", a: "Refundable security hold applied to crypto or fiat." }
      ].map((item, i) => (
        <div key={i} className="border border-white/10 p-8 md:p-12 hover:bg-white hover:text-black transition-all group flex flex-col justify-between">
           <span className="text-xl md:text-2xl uppercase italic font-black">{item.q}</span>
           <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-loose mt-4 opacity-40 group-hover:opacity-100">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const StatsHero = () => (
  <section className="relative min-h-screen w-full flex flex-col p-8 md:p-12 overflow-hidden bg-[#fdf200] text-black font-syne font-black italic">
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 border-t-8 border-black">
       {[ {l: "ACTIVE_FLEET", v: "142"}, {l: "TOTAL_SORTIES", v: "8,941"}, {l: "AVERAGE_BHP", v: "640"}, {l: "CLIENT_SAT", v: "99.8%"} ].map((s, i) => (
         <div key={i} className="border-r-8 border-black p-8 md:p-12 flex flex-col justify-between hover:bg-black hover:text-[#fdf200] transition-colors">
            <span className="text-[10px] uppercase tracking-widest leading-none">{s.l}</span>
            <span className="text-6xl md:text-[8vw] leading-none tracking-tighter">{s.v}</span>
         </div>
       ))}
    </div>
    <div className="h-24 bg-black text-[#fdf200] flex items-center justify-between px-12 overflow-hidden mt-8 md:mt-0">
       <div className="flex gap-24 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => <span key={i} className="text-xs tracking-[1em]">SYSTEM_STABLE_DATA_FLOWING_NYC_🗽</span>)}
       </div>
    </div>
  </section>
);

const LibraryGridHero = () => (
  <section className="relative min-h-screen w-full p-8 md:p-24 overflow-hidden bg-black text-white font-grotesk">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4 gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A47E]">Active_Archive</span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-syne">THE_COLLECTION.</h2>
      </div>
      <div className="flex gap-4">
        <button className="px-6 md:px-8 py-3 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">Filter_01</button>
        <button className="px-6 md:px-8 py-3 bg-[#C5A47E] text-black text-[10px] font-black uppercase tracking-widest">Sort_Alpha</button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {[
         {n: "GT3_RS", s: "4.0L FLAT 6"},
         {n: "488_PISTA", s: "V8_BTURBO"},
         {n: "SF90_STRD", s: "HYBRID_V8"},
         {n: "720S_LT", s: "4.0L_V8"},
         {n: "VANTAGE_V12", s: "TWIN_TURBO"},
         {n: "911_TURBO", s: "TWIN_FLAT_6"}
       ].map((car, i) => (
         <div key={i} className="bg-white/5 border border-white/5 p-12 flex flex-col justify-between group hover:bg-[#C5A47E] hover:text-black transition-all cursor-pointer min-h-[250px]">
            <span className="text-[10px] opacity-40 group-hover:text-black uppercase tracking-widest font-bold">SPEC_{car.s}</span>
            <div className="flex flex-col">
               <span className="text-4xl font-black italic font-syne">{car.n}</span>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] mt-2 group-hover:text-black">Secure_Slot</span>
            </div>
         </div>
       ))}
    </div>
  </section>
);

const HeroVisual = () => (
  <section className="min-h-screen w-full flex flex-col items-center pt-32 pb-12 px-6 bg-[#0a0a0a] text-white font-fashion">
    <div className="max-w-4xl w-full text-center mb-24">
       <span className="text-[10px] tracking-[0.8em] text-[#C5A47E] uppercase font-bold mb-6 block">V12_Architecture</span>
       <h1 className="text-4xl md:text-8xl font-light italic leading-[0.9] tracking-tighter mb-8">THE FUTURE OF <br /> ANALOGUE FAST.</h1>
       <p className="text-lg opacity-40 max-w-xl mx-auto italic mb-12">Precision engineered for the discerning few. Explore the limits of the internal combustion engine.</p>
       <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#C5A47E] text-black font-black uppercase text-[10px] tracking-widest hover:opacity-90 transition-all font-syne">Request Access</button>
          <button className="px-8 py-3 border border-white/20 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all font-syne">Protocol_Info</button>
       </div>
    </div>
    <div className="w-full max-w-7xl aspect-video bg-white/5 border border-white/10 overflow-hidden relative group">
       <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt="Supercar detail" />
       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white p-8 md:p-24 border-t border-white/10 font-syne">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <img src={LOGO_URL} alt="LSOP Logo" className="w-16 h-16 rounded-full grayscale" />
          <h3 className="text-4xl font-black italic tracking-tighter">LSOP.</h3>
        </div>
        <p className="text-xs uppercase tracking-widest leading-loose opacity-40 max-w-xs">
          Youngest NYC 🗽<br />
          Daily / Weekly / Monthly <br />
          NYC Manhattan Queens Brooklyn
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A47E]">Services</span>
          <ul className="text-xs uppercase tracking-widest flex flex-col gap-2 opacity-60">
            <li>Car Rentals 🚘</li>
            <li>Photo Shoots 📸</li>
            <li>Video Shoots 🎥</li>
            <li>Chauffeur 🤵🏾‍♂️</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A47E]">Legal</span>
          <ul className="text-xs uppercase tracking-widest flex flex-col gap-2 opacity-60">
            <li>Insurance Required</li>
            <li>Deposit Needed</li>
            <li>Protocols</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start md:items-end">
        <button className="text-4xl font-black italic border-b-4 border-[#C5A47E] pb-2 hover:text-[#C5A47E] transition-colors">BOOK NOW 📞</button>
        <span className="text-[10px] opacity-20 uppercase tracking-[0.5em] mt-8 md:mt-0">© 2024 LSOP_OPERATIONS</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#050505] text-white selection:bg-[#C5A47E] selection:text-black">
      <Nav />
      <main>
        <MinimalHero />
        <StatsHero />
        <HeroVisual />
        <FleetGridHero />
        <ProcessHero />
        <TestimonialHero />
        <LibraryGridHero />
        <ConciergeHero />
        <FAQHero />
      </main>
      <Footer />
    </div>
  );
}
