'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <section id="about" className="about-section">
      {/* Hoverable wrapper → triggers star pulse + motion path */}
      <div
        className="about-heading-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={`orange-circle ${hovering ? 'pulsing' : ''}`} />
        <h2 className="about-heading">About Me</h2>
      </div>

      {/* Static Ellipse Outline (stays on screen, but only visible if star pulses) */}
      <div className={`big-ellipse ${hovering ? 'show-ellipse' : ''}`} />

      {/* 4 images: each uses offset-path to trace the same ellipse */}
      <div className={`corner-box top-left ${hovering ? 'orbit-active' : ''}`}>
        <img src="/about_me_description.png" alt="Description" className="about-img large" />
        <div className="image-text">
          I am Bhavya, a junior studying computer science at Columbia University
        </div>
      </div>

      <div className={`corner-box top-right ${hovering ? 'orbit-active' : ''}`}>
        <img src="/about_me_lists.png" alt="Lists" className="about-img medium" />
        <div className="image-text">&lt;linked lists&gt;</div>
      </div>

      <div className={`corner-box bottom-right ${hovering ? 'orbit-active' : ''}`}>
        <img src="/about_me_extra.png" alt="Extra" className="about-img large" />
        <div className="image-text">Here is some extra text for now, YAY!</div>
      </div>

      <div className={`corner-box bottom-left ${hovering ? 'orbit-active' : ''}`}>
        <img src="/about_me_gallery.png" alt="Gallery" className="about-img small" />
        <div className="image-text">gallery →</div>
      </div>
    </section>
  );
}


// 'use client';

// import { useState } from 'react';

// export default function AboutSection() {
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };
//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <section id="about" className="about-section">
//       {/* Hoverable wrapper → star pulses + orbit triggers on hover */}
//       <div
//         className="about-heading-wrapper"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <span className={`orange-circle ${isHovering ? 'pulsing' : ''}`} />
//         <h2 className="about-heading">About Me</h2>
//       </div>

//       {/* Ellipse only shows while hovering */}
//       <div className={`big-ellipse ${isHovering ? 'show-ellipse' : ''}`} />

//       {/* Orbit container → rotates images if isHovering */}
//       <div className={`orbit-container ${isHovering ? 'orbit-active' : ''}`}>
//         {/* Top side of ellipse */}
//         <div className="orbit-box top-side">
//           <div className="image-container large-size">
//             <img src="/about_me_description.png" alt="Description" className="about-img" />
//             <div className="image-text">
//               I am Bhavya, a junior studying computer science at Columbia University
//             </div>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="orbit-box right-side">
//           <div className="image-container medium-size">
//             <img src="/about_me_lists.png" alt="Lists" className="about-img" />
//             <div className="image-text">&lt;linked lists&gt;</div>
//           </div>
//         </div>

//         {/* Bottom side */}
//         <div className="orbit-box bottom-side">
//           <div className="image-container large-size">
//             <img src="/about_me_extra.png" alt="Extra" className="about-img" />
//             <div className="image-text">Here is some extra text for now, YAY!</div>
//           </div>
//         </div>

//         {/* Left side */}
//         <div className="orbit-box left-side">
//           <div className="image-container small-size">
//             <img src="/about_me_gallery.png" alt="Gallery" className="about-img" />
//             <div className="image-text">gallery →</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { useEffect } from 'react';

// export default function AboutSection() {
//   useEffect(() => {
//     const star = document.getElementById('orangeStar');
//     const ellipse = document.querySelector('.big-ellipse');
//     const timer = setTimeout(() => {
//       // Star begins pulsing
//       star?.classList.add('pulsing');
//       // Ellipse becomes visible
//       ellipse?.classList.add('show-ellipse');
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section id="about" className="about-section">
//       {/* Centered Star + Heading */}
//       <div className="about-heading-wrapper">
//         <span className="orange-circle" id="orangeStar" />
//         <h2 className="about-heading">About Me</h2>
//       </div>

//       {/* Big White Ellipse (hidden by default, appears when star pulses) */}
//       <div className="big-ellipse" />

//       {/* 4 Images in 4 Corners */}
//       <div className="corner-box top-left">
//         <div className="image-container large-size">
//           <img src="/about_me_description.png" alt="Description" className="about-img" />
//           <div className="image-text">
//             I am Bhavya, a junior studying computer science at Columbia University
//           </div>
//         </div>
//       </div>

//       <div className="corner-box top-right">
//         <div className="image-container medium-size">
//           <img src="/about_me_lists.png" alt="Lists" className="about-img" />
//           <div className="image-text">&lt;linked lists&gt;</div>
//         </div>
//       </div>

//       <div className="corner-box bottom-right">
//         <div className="image-container large-size">
//           <img src="/about_me_extra.png" alt="Extra" className="about-img" />
//           <div className="image-text">Here is some extra text for now, YAY!</div>
//         </div>
//       </div>

//       <div className="corner-box bottom-left">
//         <div className="image-container small-size">
//           <img src="/about_me_gallery.png" alt="Gallery" className="about-img" />
//           <div className="image-text">gallery →</div>
//         </div>
//       </div>
//     </section>
//   );
// }
