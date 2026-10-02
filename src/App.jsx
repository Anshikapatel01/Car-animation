import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car.jsx";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "WELCOME ITZFIZZ".split("");

// `at` = scroll progress (0-1) at which each card appears, following the car
const STATS = [
  { value: "58%", label: "Increase in pick up point use", at: 0.35, pos: "left-[46vw] top-[12vh]", color: "bg-[#d6e82c] text-[#1d2200]" },
  { value: "27%", label: "Increase in pick up point use", at: 0.5, pos: "left-[66vw] top-[16vh]", color: "bg-[#1f2233] text-white" },
  { value: "23%", label: "Decreased in customer phone calls", at: 0.62, pos: "left-[30vw] top-[66vh]", color: "bg-[#bfe6f2] text-[#0b3442]" },
  { value: "40%", label: "Decreased in customer phone calls", at: 0.78, pos: "left-[52vw] top-[70vh]", color: "bg-[#f58a3d] text-[#3a1700]" },
];

export default function App() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const W = () => window.innerWidth;
      const start = () => W() * 0.1; // car centre at start / end of the scroll

      gsap.set(".car", { yPercent: -50, xPercent: -50, x: start });
      gsap.set(".reveal", { xPercent: -90 });
      gsap.set(".reveal-inner", { xPercent: 90 });

      // Initial load: road + car slide in, then the hint pulses
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".road", { scaleX: 0, transformOrigin: "left center", duration: 1 })
        .from(".car", { opacity: 0, x: -200, duration: 1 }, "-=0.6")
        .from(".hint", { opacity: 0, y: 10, duration: 0.6 });

      // Scroll-scrubbed: car drives left -> right, green band + headline are
      // revealed in its wake, stat cards pop in one by one (transforms only)
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          pin: ".hero",
          invalidateOnRefresh: true,
        },
      });

      tl.to(".car", { x: () => W(), duration: 1 }, 0)
        .to(".reveal", { xPercent: 0, duration: 1 }, 0)
        .to(".reveal-inner", { xPercent: 0, duration: 1 }, 0)
        .fromTo(".letter", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.035 }, 0.1)
        .to(".hint", { opacity: 0, duration: 0.1 }, 0);

      STATS.forEach((s, i) => {
        tl.fromTo(`.stat-${i}`, { opacity: 0, y: 40, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: "power2.out" }, s.at);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="h-[400vh]">
      <section className="hero relative h-screen overflow-hidden">
        {/* road strip */}
        <div className="road absolute left-0 top-1/2 h-[22vh] w-full -translate-y-1/2 bg-[#23262d]" />

        {/* green band + headline, revealed by the moving mask */}
        <div className="absolute left-0 top-1/2 h-[22vh] w-full -translate-y-1/2 overflow-hidden">
          <div className="reveal h-full w-full overflow-hidden will-change-transform">
            <div className="reveal-inner flex h-full w-full items-center justify-center bg-gradient-to-r from-[#1fd37a] to-[#35e39a] will-change-transform">
              <h1 className="px-4 text-center text-[clamp(1.2rem,6.4vw,5.5rem)] font-extrabold tracking-[0.12em] text-[#0f2418]" aria-label="Welcome Itzfizz">
                {HEADLINE.map((c, i) => (
                  <span key={i} className="letter inline-block">
                    {c === " " ? "\u00A0" : c}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>

        <Car className="car absolute left-0 top-1/2 z-10 w-[clamp(120px,18vw,260px)] will-change-transform drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]" />

        {STATS.map((s, i) => (
          <div key={i} className={`stat-${i} absolute z-20 w-[clamp(130px,19vw,260px)] rounded-xl p-[clamp(.6rem,1.4vw,1.2rem)] opacity-0 shadow-lg will-change-transform ${s.pos} ${s.color}`}>
            <b className="block text-[clamp(1.5rem,3.6vw,3rem)] leading-none">{s.value}</b>
            <p className="mt-1 text-[clamp(.6rem,1.1vw,.9rem)] opacity-80">{s.label}</p>
          </div>
        ))}

        <div className="hint absolute bottom-[4vh] left-1/2 -translate-x-1/2 text-[.7rem] tracking-[0.3em] text-slate-500">SCROLL</div>
      </section>
    </div>
  );
}
