import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Shield, Zap, 
  Gauge, Target, Radio, Cpu, Layers, ArrowLeft, Menu, X
} from 'lucide-react';

const LOGO_URL = "https://scontent-lga3-2.cdninstagram.com/v/t51.82787-19/552655747_17859761040498300_8466435795470956048_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gEcS_DnZ4ikSswmWoISSK6GfudAKdJknZNnH7-XxZjuRRlND3ynbCal6GdEVAdhIAMGhlIi_iCaTM1OWWcLK5n3&_nc_ohc=bRDCYn8J4hYQ7kNvwHn3ITL&_nc_gid=ckIpAWsXWJcSMMHlRLDCFw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af6lKgh8y2iJoMwaSi9zsTB5rSYR1gM5UpUIGAwQ22cvUg&oe=6A06B9FB&_nc_sid=7a9f4b";

const Nav = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 mix-blend-difference font-syne">
    <div className="flex items-center gap-4">
      <img src={LOGO_URL} alt="VLF Logo" className="w-10 h-10 rounded-full border border-white/20 grayscale" />
      <span className="text-xs font-black uppercase tracking-[0.4em] text-white">VibeLuxForeigns NYC</span>
    </div>
    <div className="flex items-center gap-8">
      <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">EST 2024 // NYC 🗽</span>
      <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-accent-red hover:text-white transition-colors cursor-pointer group">
        <Menu size={20} className="group-hover:scale-110 transition-transform" />
      </div>
    </div>
  </nav>
);

const MinimalHero = () => (
  <section className="relative h-screen w-full flex items-center border-y border-white/5 px-8 md:px-24 overflow-hidden bg-black text-white font-syne">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-15 grayscale" alt="" />
    </div>
    <div className="grid lg:grid-cols-2 w-full max-w-[1440px] mx-auto items-end gap-24 relative z-10 mt-20">
      <div className="flex flex-col">
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-[9vw] font-black leading-[0.75] mb-12 tracking-[-0.08em] italic"
        >
          PURE <br /> LOGIC <span className="text-accent-red">.</span>
        </motion.h2>
        <p className="max-w-md text-white/40 text-lg font-light leading-relaxed mb-16 uppercase tracking-[0.2em]">
          Stripped down to the essential. The hardware, the road, and nothing else.
        </p>
        <button className="flex items-center gap-8 group">
          <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center transition-all group-hover:bg-accent-red group-hover:border-accent-red group-hover:scale-110">
            <ArrowRight className="text-white" size={32} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.6em] group-hover:text-accent-red transition-colors">Initialize Protocol</span>
        </button>
      </div>
    </div>
  </section>
);

const FleetGridHero = () => (
  <section className="relative min-h-screen w-full p-8 md:p-12 overflow-hidden bg-black text-white font-outfit">
    <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.6em] text-white/40">The Collection</span>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic font-syne text-accent-red">CURATED FLEET</h2>
      </div>
      <button className="text-xs font-bold uppercase border-b border-white text-white pb-2 hover:text-accent-red transition-all">Browse All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[60vh]">
      <div className="col-span-1 md:col-span-2 row-span-2 bg-zinc-950 border border-white/5 relative group overflow-hidden min-h-[400px]">
        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-70 transition-all duration-700" alt="Porsche GT3 RS" />
        <div className="absolute bottom-8 left-8">
           <span className="text-5xl font-black italic font-syne tracking-tighter">GT 3 RS</span>
        </div>
      </div>
      <div className="col-span-1 bg-zinc-950 border border-white/5 p-8 flex flex-col justify-between min-h-[200px] hover:bg-accent-red hover:text-white transition-colors group">
         <span className="text-[10px] opacity-20 uppercase tracking-widest group-hover:opacity-100 font-bold">Available</span>
         <span className="text-2xl font-black uppercase italic font-syne">Aventador SVJ</span>
      </div>
      <div className="col-span-1 bg-white text-black p-8 flex flex-col justify-between min-h-[200px] border-l-4 border-accent-red">
         <span className="text-[10px] font-bold uppercase tracking-widest text-accent-red">New Arrival</span>
         <span className="text-2xl font-black uppercase italic font-syne">SF90 Stradale</span>
      </div>
      <div className="col-span-1 md:col-span-2 bg-zinc-950 border border-white/5 p-8 flex items-center justify-between min-h-[150px]">
         <div className="flex flex-col">
            <span className="text-[10px] opacity-20 uppercase tracking-widest">Performance</span>
            <span className="text-2xl font-black uppercase italic font-syne">Hybrid V12 Architecture</span>
         </div>
         <ArrowRight size={32} className="opacity-20 text-accent-red" />
      </div>
    </div>
  </section>
);

const ProcessHero = () => (
  <section className="relative min-h-screen w-full flex flex-col p-8 md:p-24 overflow-hidden bg-white text-black font-grotesk">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 flex-1">
      <div className="col-span-1 md:col-span-4 md:border-r border-black/10 md:pr-12 flex flex-col justify-between">
        <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.8] tracking-tighter mb-8 italic font-syne">THE <br /> PATH.</h2>
        <p className="text-sm font-bold uppercase tracking-widest leading-relaxed opacity-40">Systematic procedures for absolute performance.</p>
      </div>
      <div className="col-span-1 md:col-span-8 grid grid-rows-3 gap-1 relative">
         {[ {n: "01", t: "IDENTITY VERIFICATION", d: "Secure biometrics and documentation approval via our encrypted NYC vault." },
            {n: "02", t: "FLEET SELECTION", d: "Select your desired apparatus from our live-status Manhattan inventory." },
            {n: "03", t: "HANDOVER PROTOCOL", d: "GPS-synchronized delivery to your precise global coordinates." }
         ].map((step, i) => (
           <div key={i} className="flex items-center gap-12 group hover:bg-black hover:text-white transition-all p-8 border-b border-black/5">
              <span className="text-4xl md:text-7xl font-black italic opacity-5 group-hover:opacity-100 transition-opacity font-syne">{step.n}</span>
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-black uppercase mb-2 italic font-syne">{step.t}</span>
                <p className="max-w-md text-[10px] opacity-40 uppercase tracking-[0.3em] font-bold group-hover:opacity-60">{step.d}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const TestimonialHero = () => (
  <section className="relative min-h-[60vh] w-full flex items-center justify-center p-8 md:p-24 overflow-hidden bg-black text-white font-syne">
    <div className="relative z-10 text-center max-w-5xl">
       <span className="text-[10vw] font-black italic opacity-5 mb-0 block leading-none select-none">TRUST</span>
       <h2 className="text-2xl md:text-4xl font-black leading-tight tracking-tight mb-16 italic uppercase -mt-8">"The transition from the flight deck to the driver's seat was absolutely seamless. Precision manifested in metal."</h2>
       <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-px bg-white/20" />
          <span className="text-[10px] font-bold uppercase tracking-[1em] text-white/40">Julian Vane // CEO ARCH</span>
       </div>
    </div>
  </section>
);

const ConciergeHero = () => (
  <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white text-black font-syne">
    <div className="flex-1 p-8 md:p-24 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/5">
      <div>
        <span className="text-sm font-bold uppercase tracking-[0.5em] opacity-40 mb-8 block">At Your Service</span>
        <h2 className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase mb-12 italic">THE <br /> CONCIERGE.</h2>
      </div>
      <div className="flex flex-col gap-12 not-italic">
        <p className="max-w-md text-lg font-bold uppercase opacity-60 leading-relaxed tracking-tight">Human expertise driving digital precision. Our specialists are available 24/7 for bespoke mission planning in Manhattan.</p>
        <button className="w-fit text-2xl border-b-4 border-accent-red pb-2 font-black italic hover:opacity-50 transition-opacity">Request Call</button>
      </div>
    </div>
    <div className="w-full md:w-1/3 bg-black text-white p-12 md:p-24 flex flex-col justify-between font-grotesk">
      <div className="flex flex-col gap-4">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-pulse"><Radio size={24} className="text-accent-red" /></div>
        <span className="text-[10px] uppercase font-black tracking-widest opacity-40 italic">Active Live Feed</span>
      </div>
      <div className="flex flex-col gap-4 text-center mt-12 md:mt-0">
         <span className="text-8xl md:text-[10vw] font-black italic font-syne">24/7</span>
         <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-bold">Operational Readiness</span>
      </div>
    </div>
  </section>
);

const FAQHero = () => (
  <section className="relative min-h-screen w-full flex flex-col p-8 md:p-12 overflow-hidden bg-black text-white font-syne">
    <div className="flex justify-between items-start mb-16 border-b border-white pb-8">
      <h2 className="text-6xl md:text-[9vw] uppercase tracking-tighter font-black italic">I N F O.</h2>
      <span className="text-xs opacity-20 font-mono tracking-widest">SYS DTA V7.2</span>
    </div>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1">
      {[ {q: "MINIMUM AGE?", a: "Operational clearance requires 25+ with verified credentials." },
         {q: "INSURANCE?", a: "Comprehensive shield protocols active on all sorties. Self Drive Insurance + Deposit Required." },
         {q: "DELIVERY?", a: "Synchronized drop-off within NYC (Manhattan, Queens, Brooklyn) included." },
         {q: "DEPOSIT?", a: "Refundable security hold applied via prioritized wire or digital asset." }
      ].map((item, i) => (
        <div key={i} className="border border-white/5 p-8 md:p-12 hover:bg-white hover:text-black transition-all group flex flex-col justify-between">
           <span className="text-2xl md:text-4xl uppercase italic font-black">{item.q}</span>
           <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] leading-loose mt-4 opacity-40 group-hover:opacity-100">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const StatsHero = () => (
  <section className="relative min-h-screen w-full flex flex-col p-8 md:p-12 overflow-hidden bg-white text-black font-syne font-black italic">
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 border-t-[12px] border-black">
       {[ {l: "ACTIVE FLEET", v: "142"}, {l: "TOTAL SORTIES", v: "8,941"}, {l: "AVERAGE BHP", v: "640"}, {l: "CLIENT SAT", v: "99.8%"} ].map((s, i) => (
         <div key={i} className="border-r-[1px] md:border-r-[12px] border-black p-8 md:p-12 flex flex-col justify-between hover:bg-black hover:text-white transition-all transform hover:skew-x-[-2deg] group">
            <span className="text-[10px] uppercase tracking-widest leading-none font-bold italic group-hover:text-accent-red transition-colors">{s.l}</span>
            <span className="text-4xl md:text-[5vw] leading-none tracking-tighter">{s.v}</span>
         </div>
       ))}
    </div>
    <div className="h-24 bg-black text-white flex items-center justify-between px-12 overflow-hidden mt-8 md:mt-0">
       <div className="flex gap-24 whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => <span key={i} className="text-[10px] font-bold tracking-[1.2em]">VibeLuxForeigns SYSTEM STABLE OPERATIONAL FLOWING NYC 🗽 DYNAMIC FLT MGMT <span className="text-accent-red">///</span></span>)}
       </div>
    </div>
  </section>
);

const LibraryGridHero = () => (
  <section className="relative min-h-screen w-full p-8 md:p-24 overflow-hidden bg-black text-white font-grotesk">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4 gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Active Archive</span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-syne italic">THE COLLECTION <span className="text-accent-red">.</span></h2>
      </div>
      <div className="flex gap-4">
        <button className="px-6 md:px-10 py-4 bg-zinc-900 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-accent-red hover:border-accent-red transition-all">Filter V1</button>
        <button className="px-6 md:px-10 py-4 bg-accent-red text-white text-[10px] font-black uppercase tracking-widest hover:opacity-80 transition-all">Launch Sortie</button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {[
         {n: "GT3 RS 992", s: "4.0L HIGH RPM"},
         {n: "P DTA PISTA", s: "V8 TTURBO 710"},
         {n: "SF90 NYC", s: "HYBRID STRADALE"},
         {n: "720S L TAIL", s: "ACTIVE AERO V8"},
         {n: "VNTG V12 M", s: "MANUAL PROTOCOL"},
         {n: "911 TURBO S", s: "ALL RAD DRIVE"}
       ].map((car, i) => (
         <div key={i} className="bg-zinc-950 border border-white/5 p-12 flex flex-col justify-between group hover:border-accent-red transition-all cursor-pointer min-h-[300px]">
            <span className="text-[10px] opacity-20 group-hover:opacity-100 uppercase tracking-widest font-black transition-opacity text-accent-red">SYSTEM SPEC {car.s}</span>
            <div className="flex flex-col">
               <span className="text-4xl md:text-5xl font-black italic font-syne tracking-tighter leading-none">{car.n}</span>
               <div className="flex items-center gap-4 mt-4">
                  <div className="w-10 h-px bg-white/20 group-hover:w-full transition-all group-hover:bg-accent-red" />
                  <span className="text-[8px] font-black uppercase tracking-[0.5em] whitespace-nowrap">SECURE SLOT</span>
               </div>
            </div>
         </div>
       ))}
    </div>
  </section>
);

const HeroVisual = () => (
  <section className="min-h-screen w-full flex flex-col items-center pt-32 pb-12 px-6 bg-black text-white font-syne">
    <div className="max-w-4xl w-full text-center mb-24">
       <span className="text-[10px] tracking-[1em] text-white/40 uppercase font-bold mb-6 block">V12 ARCHITECTURE NYC</span>
       <h1 className="text-5xl md:text-7xl font-black italic leading-[0.85] tracking-tighter mb-8 uppercase">FUTURE <br /> ANALOGUE <span className="text-accent-red">.</span></h1>
       <p className="text-lg opacity-40 max-w-xl mx-auto font-bold uppercase tracking-tight mb-12">Precision engineered for the discerning few. Explore the mechanical limits of the internal combustion engine.</p>
       <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="px-10 py-5 bg-accent-red text-white font-black uppercase text-[10px] tracking-[0.4em] hover:scale-105 transition-all">Request Access</button>
          <button className="px-10 py-5 border border-white text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all">Protocol Info</button>
       </div>
    </div>
    <div className="w-full max-w-7xl aspect-video bg-zinc-950 border border-white/5 overflow-hidden relative group">
       <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" alt="Supercar detail" />
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
       <div className="absolute bottom-12 left-12 flex flex-col gap-2">
          <span className="text-[8px] font-black tracking-[1em] uppercase bg-black/80 px-4 py-2 border border-white/10">CHASSIS SCAN 0921</span>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white p-8 md:p-24 border-t border-white/10 font-syne">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <img src={LOGO_URL} alt="VLF Logo" className="w-20 h-20 rounded-full grayscale border border-white/10 shadow-2xl" />
          <h3 className="text-5xl font-black italic tracking-tighter uppercase leading-none text-accent-red">VLF.</h3>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] leading-loose opacity-30 max-w-xs">
          The Youngest Legend in NYC 🗽<br />
          Daily / Weekly / Monthly <br />
          Manhattan . Queens . Brooklyn . Bronx
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Services</span>
          <ul className="text-xs uppercase tracking-[0.3em] font-bold flex flex-col gap-4 opacity-40">
            <li className="hover:text-accent-red cursor-pointer transition-opacity italic">Car Rentals 🚘</li>
            <li className="hover:text-accent-red cursor-pointer transition-opacity italic">Photo Shoots 📸</li>
            <li className="hover:text-accent-red cursor-pointer transition-opacity italic">Video Shoots 🎥</li>
            <li className="hover:text-accent-red cursor-pointer transition-opacity italic">Chauffeur 🤵🏾‍♂️</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Legal</span>
          <ul className="text-xs uppercase tracking-[0.3em] font-bold flex flex-col gap-4 opacity-40">
            <li className="hover:text-accent-red cursor-pointer transition-opacity italic">Insurance Req</li>
            <li className="hover:text-accent-red cursor-pointer transition-opacity italic">Deposit Hold</li>
            <li className="hover:text-accent-red cursor-pointer transition-opacity italic">System Auth</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start md:items-end">
        <button className="text-4xl md:text-5xl font-black italic border-b-8 border-accent-red pb-2 hover:bg-accent-red hover:text-white transition-all px-4">BOOK NOW 📞</button>
        <div className="flex flex-col items-end gap-2 mt-12 md:mt-0">
          <span className="text-[8px] font-bold opacity-20 uppercase tracking-[1em]">SYSTEM VERSION 2024.1.2</span>
          <span className="text-[10px] opacity-20 uppercase tracking-[0.5em]">© VibeLuxForeigns OPERATIONS GLOBAL</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Nav />
      <main className="relative">
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
