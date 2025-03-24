
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      {/* Spline Section */}
      <section className="spline-section">
        <Spline scene="https://prod.spline.design/tPeDmDhmx76U-J2Q/scene.splinecode" />

        {/* Quarter-Circle Bubble */}
        <div className="quarter-bubble">
          <span className="bubble-default-text">over here!</span>

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

      {/* Scrollable Sections */}
      <section id="about" className="content-section">About Me</section>
      <section id="timeline" className="content-section">Timeline</section>
      <section id="current" className="content-section">Currently Working On</section>
    </main>
  );
}
