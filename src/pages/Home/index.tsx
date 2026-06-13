import { useEffect, useRef } from 'react';
import BorderGlow from '../../components/BorderGlow';

const INFO_ROWS = [
  { label: 'Education', value: 'XXXXXX University · Bachelor\'s' },
  { label: 'Experience', value: '6+ Years Industry Experience' },
  { label: 'Location', value: 'Shenzhen, China' },
  { label: 'Email', value: '617266805@qq.com' },
  { label: 'Phone', value: '+86 136 1291 6897' },
];

const HomePage = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [cardRef.current, heroRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <main className="home-page page-enter">
      <div className="home-shell">

        {/* ── Left Sidebar — Info Card ── */}
        <aside ref={cardRef} className="home-sidebar">
          <BorderGlow
            edgeSensitivity={35}
            glowColor="358 72 47"
            backgroundColor="#0f0d0d"
            borderRadius={4}
            glowRadius={48}
            glowIntensity={0.9}
            coneSpread={30}
            animated={false}
            colors={['#c8102e', '#7f1d1d', '#1a0a0a']}
            fillOpacity={0.12}
          >
            <div className="info-card" style={{ border: 'none' }}>
              <div className="info-card-name">LY Ping</div>
              {INFO_ROWS.map(({ label, value }) => (
                <div className="info-row" key={label}>
                  <span className="info-label">{label}</span>
                  <span className="info-value">{value}</span>
                </div>
              ))}
            </div>
          </BorderGlow>
        </aside>

        {/* ── Right Main — Hero Text ── */}
        <div ref={heroRef} className="home-main">
          <div className="hero-text">
            <div className="label" style={{ marginBottom: '20px' }}>
              Available for Opportunities
            </div>
            <h1 className="hero-heading">
              Senior<br />
              Product<br />
              <span>Experience</span><br />
              Designer
            </h1>
            <div className="divider-red" />
            <p className="hero-role" style={{ marginTop: '20px' }}>
              Seeking · Product Design&nbsp;&nbsp;/&nbsp;&nbsp;UX Design Roles
            </p>
            <div className="hero-scroll-hint">
              <span className="hero-scroll-line" />
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default HomePage;
