import { useEffect, useRef } from 'react';

const SOCIALS = [
  { name: 'Zcool',     url: 'http://www.zcool.com.cn/u/1367812',              display: 'zcool.com/u/1367812' },
  { name: 'Dribbble',  url: 'https://dribbble.com/liaoyaping11',               display: 'dribbble.com/liaoyaping11' },
  { name: 'Behance',   url: 'https://www.behance.net/617266805105f',            display: 'behance.net/617266805105f' },
  { name: 'UI China',  url: 'http://www.ui.cn/',                               display: 'ui.cn' },
];

const STATS = [
  { num: '8', unit: '+', label: 'Years Experience' },
  { num: '20', unit: '+', label: 'Projects Delivered' },
  { num: '3',  unit: '',  label: 'SaaS Products' },
];

const AboutPage = () => {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.7s ease ${i * 0.18}s, transform 0.7s ease ${i * 0.18}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <main className="about-page page-enter">
      <div className="container">
        <div className="about-grid">
          {/* Left — Bio */}
          <div ref={leftRef}>
            <div className="about-bio-label label">About Me</div>
            <h2 className="about-heading">
              Product Designer<span className="about-dot"> ·</span> 8 Years
            </h2>
            <div className="divider-red" style={{ marginBottom: '28px' }} />
            <p className="about-body">
              8 years of internet industry experience. Independently delivered 0→1 product designs
              across Web, Mobile App, and Mini Program platforms. Led design upgrades for 3 SaaS
              products with extensive B2B and B2C design expertise. Capable of navigating complex
              business logic and rapidly translating core business objectives into precise interaction
              and visual solutions that drive measurable outcomes.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {STATS.map(({ num, unit, label }) => (
                <div className="stat-item" key={label}>
                  <div className="stat-num">
                    {num}<span>{unit}</span>
                  </div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact Panel */}
          <div ref={rightRef}>
            <div className="contact-panel">
              <div className="contact-panel-label label">Connect</div>
              {SOCIALS.map(({ name, url, display }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-arrow">→</span>
                  <span className="social-name">{name}</span>
                  <span className="social-url">{display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
