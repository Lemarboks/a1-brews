import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';

const FB = 'https://www.facebook.com/profile.php?id=61576917570189';
const MAP = 'https://www.google.com/maps/search/?api=1&query=No.+4+Monte+Vista+Boulevard,+Cape+Town';
const hero900 = './assets/a1-expressionist-cafe-900.webp';
const hero1536 = './assets/a1-expressionist-cafe-1536.webp';
const menuData = {
  COFFEE: ['Espresso classics', 'Silky milk coffee', 'Black coffee'],
  ICED: ['Iced espresso', 'Cold coffee', 'Seasonal cooler'],
  MATCHA: ['Matcha with milk', 'Iced matcha', 'Ask about today’s serve'],
  TEA: ['Classic tea', 'Herbal cup', 'Seasonal infusion'],
};

function ArrowLink({ href, children, primary = false }) {
  return <a className={`button-link ${primary ? 'primary' : ''}`} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const links = [['MENU','#menu'],['OUR SPACE','#story'],['VISIT','#visit']];
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const focusable = [...dialogRef.current.querySelectorAll('a, button')];
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    focusable[0]?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key !== 'Tab' || focusable.length < 2) return;
      const [first] = focusable;
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = priorOverflow; (previous instanceof HTMLElement ? previous : triggerRef.current)?.focus(); };
  }, [open]);
  return <header className="navbar">
    <a className="logo" href="#top"><b>A1</b> BREWS</a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}<a href={FB} target="_blank" rel="noreferrer">FACEBOOK ↗</a></nav>
    <button ref={triggerRef} className="menu-trigger" onClick={()=>setOpen(true)} aria-expanded={open} aria-controls="mobile-menu">MENU</button>
    <AnimatePresence>{open && <motion.div ref={dialogRef} id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <button className="menu-close" onClick={()=>setOpen(false)}>CLOSE</button>
      <nav>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a href={FB} target="_blank" rel="noreferrer">FACEBOOK ↗</a></nav>
    </motion.div>}</AnimatePresence>
  </header>;
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return <section className="hero" id="top">
    {reduceMotion
      ? <img src={hero1536} srcSet={`${hero900} 900w, ${hero1536} 1536w`} sizes="100vw" width="1536" height="1024" fetchPriority="high" alt="Expressionist concept artwork of a lively café" />
      : <motion.video autoPlay muted loop playsInline preload="metadata" poster={hero1536} aria-hidden="true" initial={{scale:1.025}} animate={{scale:1}} transition={{duration:1.1,ease:[.16,1,.3,1]}}><source src="./assets/a1-hero-motion.mp4" type="video/mp4" /></motion.video>}
    <div className="hero-shade" />
    <motion.div className="hero-copy" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.12,ease:[.16,1,.3,1]}}>
      <p className="script">Coffee, colour, community.</p>
      <h1>A CREATIVE<br/>CUP OF<br/><span>CAPE TOWN.</span></h1>
      <p>Neighbourhood coffee and art in Monte Vista. Made for slow mornings, bright ideas, and good company.</p>
      <div><ArrowLink href={MAP} primary>GET DIRECTIONS</ArrowLink><a className="text-link" href="#story">OUR SPACE ↓</a></div>
    </motion.div>
    <p className="art-label">A1 BREWS / MOTION STUDY</p>
  </section>;
}

function Story() {
  return <section className="story section" id="story">
    <span className="section-no">01 / THE SPACE</span>
    <figure className="real-photos">
      <img src="./assets/a1-facebook-entrance.webp" width="980" height="600" loading="lazy" decoding="async" alt="Entrance walkway and clothing displays at A1 Brews and The Hive Thrift Shop"/>
      <img src="./assets/a1-facebook-counter.webp" width="960" height="390" loading="lazy" decoding="async" alt="Coffee and cake counter inside A1 Brews"/>
      <img src="./assets/a1-facebook-thrift.webp" width="990" height="450" loading="lazy" decoding="async" alt="Pre-loved clothing and homeware inside The Hive Thrift Shop"/>
      <figcaption>FIG. 01–03 — REAL VIEWS / VIA A1 BREWS FACEBOOK</figcaption>
    </figure>
    <div className="story-copy"><p className="script">More than coffee</p><h2>A ROOM FOR<br/><span>CREATIVE PEOPLE.</span></h2><p className="story-lead">A1 Brews brings coffee, local art, thrift finds and conversation together in one neighbourhood space.</p><p>Come to pause, browse, make, listen—or simply feel at home.</p><ul><li>Fresh coffee</li><li>Local art and thrift finds</li><li>Creative community events</li></ul><ArrowLink href={FB}>FOLLOW OUR STORY</ArrowLink></div>
  </section>;
}

function MenuSection() {
  const [cat,setCat] = useState('COFFEE');
  return <section className="menu-section section" id="menu">
    <span className="section-no">02 / THE COUNTER</span>
    <header><p className="script">From the counter</p><h2>WHAT WE’RE<br/><span>POURING.</span></h2><p>Our selection changes. Ask in store or check Facebook for current items and prices.</p></header>
    <div className="menu-browser"><div className="categories" aria-label="Drink categories">{Object.keys(menuData).map((item,index)=><button key={item} aria-pressed={cat===item} onClick={()=>setCat(item)}><small>0{index+1}</small>{item}</button>)}</div><AnimatePresence mode="wait"><motion.div className="menu-list" key={cat} aria-live="polite" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>{menuData[cat].map((item,index)=><div key={item}><b>{String(index+1).padStart(2,'0')}</b><span>{item}</span><i>ASK IN STORE</i></div>)}</motion.div></AnimatePresence><ArrowLink href={FB} primary>SEE THE LATEST</ArrowLink></div>
  </section>;
}

function Visit() {
  return <section className="visit section" id="visit"><span className="section-no">03 / VISIT</span><div className="visit-copy"><p className="script">Come say hello</p><h2>FIND US IN<br/><span>MONTE VISTA.</span></h2><address>No. 4 Monte Vista Boulevard<br/>Cape Town, South Africa</address><p>Opening times and contact details may change. Please check Facebook before visiting.</p><div className="visit-actions"><ArrowLink href={MAP} primary>GET DIRECTIONS</ArrowLink><ArrowLink href={FB}>CHECK FACEBOOK</ArrowLink></div></div><div className="map-mark" aria-hidden="true"><b>A1</b><span>MONTE VISTA<br/>CAPE TOWN</span></div><p className="visit-note">NO. 4 / THE NEIGHBOURHOOD CORNER</p></section>;
}

function Footer() { return <footer><a className="footer-logo" href="#top"><b>A1</b> BREWS</a><p>COFFEE · ART · COMMUNITY<br/>MONTE VISTA, CAPE TOWN</p><a href={FB} target="_blank" rel="noreferrer">FACEBOOK ↗</a><small>© {new Date().getFullYear()} A1 BREWS</small></footer>; }

export default function App(){return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><Story/><MenuSection/><Visit/></main><Footer/></MotionConfig>}
