
// import Spline from '@splinetool/react-spline/next';
// import { useEffect } from 'react';

// export default function Home() {
//   useEffect(() => {
//     const star = document.getElementById('orangeStar');
//     const timer = setTimeout(() => {
//       star?.classList.add('pulsing');
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main>
//       {/* Spline Section */}
//       <section className="spline-section">
//         <Spline scene="https://prod.spline.design/tPeDmDhmx76U-J2Q/scene.splinecode" />

//         {/* Quarter-Circle Bubble */}
//         <div className="quarter-bubble">

//           <span className="bubble-default-text">
//             {"over here!".split("").map((char, index) => (
//               <span
//                 key={index}
//                 className="wave-letter"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </span>
//             ))}
//           </span>

//           <svg className="bubble-svg" viewBox="0 0 400 400">
//             <defs>
//               <path id="arc1" d="M 40 390 A 340 340 0 0 1 390 40" />
//               <path id="arc2" d="M 100 390 A 280 280 0 0 1 390 100" />
//               <path id="arc3" d="M 170 390 A 210 210 0 0 1 390 170" />
//             </defs>

//             <a href="#about">
//               <text className="arc-link arc-blue">
//                 <textPath href="#arc1" startOffset="50%" textAnchor="middle">
//                   . . . . . . . . . . . . . . . . About Me . . . . . . . . . . . . . . . .
//                 </textPath>
//               </text>
//             </a>
//             <a href="#timeline">
//               <text className="arc-link arc-magenta">
//                 <textPath href="#arc2" startOffset="50%" textAnchor="middle">
//                   . . . . . . . . . . . . . . . Timeline . . . . . . . . . . . . . . . .
//                 </textPath>
//               </text>
//             </a>
//             <a href="#current">
//               <text className="arc-link arc-orange">
//                 <textPath href="#arc3" startOffset="50%" textAnchor="middle">
//                   . . . . . . . Currently Working On . . . . . . .
//                 </textPath>
//               </text>
//             </a>
//           </svg>
//         </div>
//       </section>

//       {/* Scrollable Sections */}
//       <section id="about" className="about-section">
//         <div className="about-heading-wrapper">
//           <span className="orange-circle" />
//           <h2 className="about-heading">About Me</h2>
//         </div>
            
//         {/* Top Left */}
//         <div className="about-box top-left">
//           <img src="/about_me_description.png" alt="Description" className="about-img large" />
//           <div className="overlay-text">I am Bhavya, a junior studying computer science at Columbia University</div>
//         </div>

//         {/* Top Right */}
//         <div className="about-box top-right">
//           <img src="/about_me_lists.png" alt="Lists" className="about-img" />
//           <div className="overlay-text">&lt;linked lists&gt;</div>
//         </div>

//         {/* Bottom Right */}
//         <div className="about-box bottom-right">
//           <img src="/about_me_extra.png" alt="Extra" className="about-img large" />
//           <div className="overlay-text">Here is some extra text for now, YAY!</div>
//         </div>

//         {/* Bottom Left */}
//         <div className="about-box bottom-left">
//           <img src="/about_me_gallery.png" alt="Gallery" className="about-img" />
//           <div className="overlay-text">gallery →</div>
//         </div>
//       </section>

//       <section id="timeline" className="content-section">Timeline</section>
//       <section id="current" className="content-section">Currently Working On</section>
//     </main>
//   );
// }


import Spline from '@splinetool/react-spline/next';
import AboutSection from '@/app/AboutSection'; // Adjust if path differs

export default function Home() {
  return (
    <main>
      {/* Spline Section */}
      <section className="spline-section">
        <Spline scene="https://prod.spline.design/tPeDmDhmx76U-J2Q/scene.splinecode" />

        {/* Quarter-Circle Bubble */}
        <div className="quarter-bubble">
          <span className="bubble-default-text">
            {"over here!".split("").map((char, index) => (
              <span
                key={index}
                className="wave-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

          <svg className="bubble-svg" viewBox="0 0 400 400">
            <defs>
              <path id="arc1" d="M 40 390 A 340 340 0 0 1 390 40" />
              <path id="arc2" d="M 100 390 A 280 280 0 0 1 390 100" />
              <path id="arc3" d="M 170 390 A 210 210 0 0 1 390 170" />
            </defs>

            <a href="#about">
              <text className="arc-link arc-blue">
                <textPath href="#arc1" startOffset="50%" textAnchor="middle">
                  . . . . . . . . . . . . . . . . About Me . . . . . . . . . . . . . . . .
                </textPath>
              </text>
            </a>
            <a href="#timeline">
              <text className="arc-link arc-magenta">
                <textPath href="#arc2" startOffset="50%" textAnchor="middle">
                  . . . . . . . . . . . . . . . Timeline . . . . . . . . . . . . . . . .
                </textPath>
              </text>
            </a>
            <a href="#current">
              <text className="arc-link arc-orange">
                <textPath href="#arc3" startOffset="50%" textAnchor="middle">
                  . . . . . . . Currently Working On . . . . . . .
                </textPath>
              </text>
            </a>
          </svg>
        </div>
      </section>

      {/* ✅ Now client-side About Section works */}
      <AboutSection />

      <section id="timeline" className="content-section">Timeline</section>
      <section id="current" className="content-section">Currently Working On</section>
    </main>
  );
}
