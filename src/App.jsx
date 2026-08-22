import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const FB = 'https://www.facebook.com/profile.php?id=61576917570189';
const MAP = 'https://www.google.com/maps/search/?api=1&query=No.+4+Monte+Vista+Boulevard,+Cape+Town';
const hero900 = './assets/a1-expressionist-cafe-900.webp';
const hero1536 = './assets/a1-expressionist-cafe-1536.webp';

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.16, 1, 0.3, 1] } } };
const menuData = {
  COFFEE: ['Espresso classics', 'Silky milk coffee', 'Black coffee'],
  ICED: ['Iced espresso', 'Cold coffee', 'Seasonal cooler'],
  MATCHA: ['Matcha with milk', 'Iced matcha', 'Ask about today’s serve'],
  TEA: ['Classic tea', 'Herbal cup', 'Seasonal infusion'],
  FOOD: ['Current counter selection', 'Freshly prepared bites'],
  SWEETS: ['Today’s sweet things', 'Ask at the counter'],
};

function ArrowLink({ href, children, className = '', external = false }) {
  return <a className={`arrow-link ${className}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}<span>↗</span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const links = [['HOME','#top'],['MENU','#menu'],['STORY','#story'],['EVENTS','#events'],['VISIT','#visit']];
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const dialog = dialogRef.current;
    const focusable = [...dialog.querySelectorAll('a, button')];
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    focusable[0]?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key !== 'Tab' || focusable.length < 2) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = priorOverflow;
      (previous instanceof HTMLElement ? previous : triggerRef.current)?.focus();
    };
  }, [open]);
  return <header className="navbar">
    <a className="logo" href="#top" aria-label="A1 Brews home"><b>A1</b> BREWS</a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.slice(1).map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href={FB} target="_blank" rel="noreferrer">FACEBOOK ↗</a></nav>
    <button ref={triggerRef} className="menu-trigger" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu">MENU</button>
    <AnimatePresence>{open && <motion.div ref={dialogRef} id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu" initial={{ clipPath:'inset(0 0 100% 0)' }} animate={{ clipPath:'inset(0 0 0% 0)' }} exit={{ clipPath:'inset(0 0 100% 0)' }} transition={{ duration:.48, ease:[.16,1,.3,1] }}>
      <div className="mobile-menu-head"><span>A1 / CONTENTS</span><button onClick={() => setOpen(false)}>CLOSE</button></div>
      <nav>{links.map(([label,href],i)=><motion.a key={href} href={href} onClick={()=>setOpen(false)} initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.08*i+.12}}>{label}</motion.a>)}</nav>
    </motion.div>}</AnimatePresence>
  </header>;
}

function Hero() {
  const ref = useRef(null); const reduce = useReducedMotion();
  const mx = useMotionValue(0), my = useMotionValue(0);
  const x = useSpring(mx,{stiffness:45,damping:22}), y=useSpring(my,{stiffness:45,damping:22});
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end start'] });
  const imageScale = useTransform(scrollYProgress,[0,1],[1.055,1]);
  const copyY = useTransform(scrollYProgress,[0,1],[0,-80]);
  const handleMove=e=>{if(reduce||matchMedia('(pointer: coarse)').matches)return;const r=ref.current.getBoundingClientRect();mx.set(((e.clientX-r.left)/r.width-.5)*10);my.set(((e.clientY-r.top)/r.height-.5)*8)};
  return <section ref={ref} className="hero" id="top" onMouseMove={handleMove} onMouseLeave={()=>{mx.set(0);my.set(0)}}>
    <motion.div className="hero-rule" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.8,ease:[.16,1,.3,1]}} />
    <motion.div className="hero-copy" style={{y:reduce?0:copyY}} initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.11,delayChildren:.18}}}}>
      <motion.p variants={fade} className="issue">THE NEIGHBOURHOOD ISSUE · COFFEE / ART / PEOPLE</motion.p>
      <motion.p variants={fade} className="location">MONTE VISTA · CAPE TOWN</motion.p>
      <h1>{['COFFEE.','ART.','COMMUNITY.'].map((word,i)=><span key={word} className={i===2?'red':''}><motion.i initial={{y:'105%'}} animate={{y:0}} transition={{delay:.32+i*.13,duration:.72,ease:[.16,1,.3,1]}}>{word}</motion.i></span>)}</h1>
      <motion.p variants={fade} className="tagline">Good vibes. Great brews.<br/>Where every cup feels like home.</motion.p>
      <motion.div variants={fade} className="hero-actions"><ArrowLink href={MAP} external className="primary">GET DIRECTIONS</ArrowLink><a className="underlink" href="#daily">SEE WHAT’S INSIDE ↓</a></motion.div>
    </motion.div>
    <motion.figure className="hero-image" initial={{clipPath:'inset(0 100% 0 0)'}} animate={{clipPath:'inset(0 0% 0 0)'}} transition={{delay:.42,duration:1.05,ease:[.16,1,.3,1]}} style={{x,y}}>
      <motion.img src={hero1536} srcSet={`${hero900} 900w, ${hero1536} 1536w`} sizes="(max-width: 760px) 100vw, 55vw" width="1536" height="1024" fetchPriority="high" alt="Expressionist artwork of a lively café with a large coffee cup" style={{scale:reduce?1:imageScale}} />
      <figcaption>ORIGINAL CONCEPT ARTWORK / A1 BREWS</figcaption>
    </motion.figure>
  </section>;
}

const featured = [
  ['01','ESPRESSO CLASSICS','Short, bold, and made to order'],
  ['02','MILK COFFEE','Espresso with a smooth milk finish'],
  ['03','ICED COFFEE','A colder route through the day'],
  ['04','MATCHA + TEA','Ask what is pouring today'],
];
function DailyBrew(){
  return <section className="daily editorial-section" id="daily"><motion.div className="section-title" initial="hidden" whileInView="show" viewport={{once:true,amount:.2}}><motion.p variants={fade}>A1 / THE COUNTER</motion.p><motion.h2 variants={fade}>THE DAILY<br/><span>BREW.</span></motion.h2></motion.div><div className="brew-list">{featured.map(([n,name,desc])=><motion.article key={n} whileHover="hover" initial="rest" className="brew-row"><motion.b variants={{hover:{x:10,rotate:-3}}}>{n}</motion.b><div><h3>{name}</h3><p>{desc}</p></div><motion.span variants={{hover:{x:8}}}>ASK IN STORE ↗</motion.span></motion.article>)}</div><p className="truth-note">The menu changes. Check Facebook or ask at the counter for current items and prices.</p></section>
}

function Marquee(){const text='COFFEE · ART · PEOPLE · MUSIC · COMMUNITY · CAPE TOWN · ';return <div className="marquee" aria-label={text}><div><span>{text}</span><span aria-hidden="true">{text}</span></div></div>}

function Story(){
 return <section className="story editorial-section" id="story"><motion.figure initial={{clipPath:'inset(0 0 100% 0)'}} whileInView={{clipPath:'inset(0 0 0% 0)'}} viewport={{once:true,amount:.2}} transition={{duration:.9,ease:[.16,1,.3,1]}}><img src={hero1536} alt="" /><figcaption>A CREATIVE ROOM / MONTE VISTA</figcaption></motion.figure><motion.div className="story-copy" initial="hidden" whileInView="show" viewport={{once:true,amount:.35}} variants={{show:{transition:{staggerChildren:.1}}}}><motion.p variants={fade} className="kicker">MORE THAN A COFFEE SHOP</motion.p><motion.h2 variants={fade}>COFFEE<br/>MEETS<br/><span>ART.</span></motion.h2><motion.p variants={fade}>A1 Brews is a neighbourhood space where coffee, local art, thrift finds, conversation and creative community meet. Come to pause, look, make, listen, browse—or simply feel at home.</motion.p><motion.em variants={fade}>“made for slow mornings and bright ideas”</motion.em><motion.div variants={fade}><ArrowLink href={FB} external>OUR STORY</ArrowLink></motion.div></motion.div></section>
}

const gallery=[['CONCEPT STUDY / THE CUP','54%'],['CONCEPT STUDY / THE ROOM','18%'],['CONCEPT STUDY / COFFEE + ART','72%'],['CONCEPT STUDY / MONTE VISTA','36%'],['CONCEPT STUDY / COMMUNITY','62%']];
function Gallery(){return <section className="gallery editorial-section"><header><p>CONCEPT ARTWORK / NOT DOCUMENTARY PHOTOGRAPHY</p><h2>GALLERY<br/>WALL.</h2></header><div className="collage">{gallery.map(([cap,pos],i)=><motion.figure key={cap} initial={{opacity:0,y:40+(i%2)*25,rotate:(i%2?2:-2)}} whileInView={{opacity:1,y:0,rotate:(i%2?1.5:-1.5)}} viewport={{once:true,amount:.15}} transition={{duration:.72,delay:(i%3)*.08}} whileHover={{scale:1.025,zIndex:4}}><img src={i%2?hero900:hero1536} alt="" style={{objectPosition:`${pos} center`}}/><figcaption>{cap}</figcaption></motion.figure>)}</div></section>}

function MenuSection(){const [cat,setCat]=useState('COFFEE');return <section className="menu-section editorial-section" id="menu"><div className="menu-heading"><p>CHAPTER / CURRENT POUR</p><h2>WHAT<br/>WE’RE<br/><span>POURING.</span></h2></div><div className="menu-browser"><div className="categories" role="tablist">{Object.keys(menuData).map(c=><button key={c} role="tab" aria-selected={cat===c} onClick={()=>setCat(c)}>{c}</button>)}</div><AnimatePresence mode="wait"><motion.div key={cat} className="menu-rows" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.28}}>{menuData[cat].map((item,i)=><div key={item}><b>{String(i+1).padStart(2,'0')}</b><span>{item}</span><i>ASK IN STORE</i></div>)}</motion.div></AnimatePresence><p className="truth-note">Current availability and prices are shared in store and on Facebook.</p></div></section>}

function Signature(){const ref=useRef(null);const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});const rotate=useTransform(scrollYProgress,[0,1],[-3,3]);return <section className="signature" ref={ref}><div><p>01 / SIGNATURE ENERGY</p><h2>HOUSE<br/><span>SPECIAL.</span></h2><p>A bold cup, a little colour, and nowhere else to rush to.</p><ArrowLink href={FB} external>SEE TODAY’S FEATURE</ArrowLink></div><motion.img src={hero900} alt="Painterly coffee cup detail" style={{rotate}}/></section>}

const events=[['ARTS + CRAFTS','Community gatherings and shared work'],['COMMUNAL DOODLE','A table, a line, and everyone joining in'],['LIVE MUSIC','Sound and conversation in the room']];
function Events(){return <section className="events editorial-section" id="events"><header><p>COMMUNITY DESK / NEXT DATE ON FACEBOOK</p><h2>WHAT’S<br/><span>HAPPENING.</span></h2></header><div>{events.map((e,i)=><motion.article key={e[0]} whileHover={{x:10}}><b>0{i+1}</b><h3>{e[0]}</h3><p>{e[1]}</p><span>FOLLOW FOR DATES ↗</span></motion.article>)}</div></section>}

function Quote(){const ref=useRef(null);const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});const y=useTransform(scrollYProgress,[0,1],[60,-50]);return <section className="quote" ref={ref}><motion.blockquote style={{y}}>“COME FOR<br/>THE COFFEE.<br/>STAY FOR<br/>THE <span>PEOPLE.</span>”</motion.blockquote></section>}

function Visit(){return <section className="visit editorial-section" id="visit"><div className="visit-copy"><p>BACK PAGE / FIND US</p><h2>MONTE VISTA<br/><span>CAPE TOWN.</span></h2><address>No. 4 Monte Vista Boulevard<br/>Cape Town, South Africa</address><p>Opening times and contact details may change. Check Facebook for the latest information before visiting.</p><div><ArrowLink href={MAP} external className="primary">GET DIRECTIONS</ArrowLink><ArrowLink href={FB} external>FACEBOOK</ArrowLink></div></div><div className="map-art" aria-hidden="true"><svg viewBox="0 0 600 600"><path d="M-30 100C100 20 150 160 280 100S430 30 650 90M-20 450C140 350 140 240 280 290S450 360 640 220M110-20C190 120 330 130 300 280S270 440 360 630M490-30C420 130 540 180 490 330S550 470 620 620"/></svg><motion.div className="map-pin" animate={{y:[0,-8,0]}} transition={{duration:2.2,repeat:Infinity,ease:'easeInOut'}}><b>A1</b><span>YOU’RE HERE</span></motion.div></div></section>}

function Cursor(){const [state,setState]=useState({x:-40,y:-40,label:'',show:false});useEffect(()=>{if(matchMedia('(pointer: coarse)').matches)return;const move=e=>setState(s=>({...s,x:e.clientX,y:e.clientY,show:true}));const over=e=>{const el=e.target.closest('a,button,figure,.brew-row');setState(s=>({...s,label:el?(el.matches('figure')?'VIEW':el.matches('.brew-row')?'SHOW':'↗'):''}))};addEventListener('mousemove',move);addEventListener('mouseover',over);return()=>{removeEventListener('mousemove',move);removeEventListener('mouseover',over)}},[]);return <motion.div className={`cursor ${state.label?'active':''}`} animate={{x:state.x,y:state.y,opacity:state.show?1:0}} transition={{type:'spring',stiffness:500,damping:32,mass:.2}}>{state.label}</motion.div>}

function Footer(){return <footer><div className="footer-mark"><span>A1</span><b>BREWS.</b></div><div><p>COFFEE / ART / COMMUNITY</p><p>MONTE VISTA · CAPE TOWN</p></div><nav><a href={FB} target="_blank" rel="noreferrer">FACEBOOK ↗</a></nav><strong>© {new Date().getFullYear()} A1 BREWS</strong></footer>}

export default function App(){return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><DailyBrew/><Marquee/><Story/><Gallery/><MenuSection/><Signature/><Events/><Quote/><Visit/></main><Footer/><Cursor/></MotionConfig>}
