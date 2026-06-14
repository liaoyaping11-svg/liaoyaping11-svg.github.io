import { useEffect, useRef, Suspense, lazy } from 'react';
import BorderGlow from '../../components/BorderGlow';
import GradientText from '../../components/GradientText';

const FluidGlass = lazy(() => import('../../components/FluidGlass'));

const INFO_ROWS = [
  { label: 'Education', value: '某某大学 · 本科' },
  { label: 'Experience', value: '6年+ 产品设计经验' },
  { label: 'Location', value: '深圳' },
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
            glowColor="220 90 60"
            backgroundColor="#0a0d14"
            borderRadius={4}
            glowRadius={48}
            glowIntensity={0.85}
            coneSpread={30}
            animated={false}
            colors={['#0F5EFA', '#0a3a8f', '#060d1a']}
            fillOpacity={0.1}
          >
            <div className="info-card" style={{ border: 'none' }}>
              <div className="info-card-name">LY 萍</div>
              {INFO_ROWS.map(({ label, value }) => (
                <div className="info-row" key={label}>
                  <span className="info-label">{label}</span>
                  <span className="info-value">{value}</span>
                </div>
              ))}
            </div>
          </BorderGlow>
        </aside>

        {/* ── Right Main — Hero Text + FluidGlass overlay ── */}
        <div ref={heroRef} className="home-main">
          {/* FluidGlass: transparent canvas, lens follows cursor */}
          <div className="fluid-glass-layer" aria-hidden="true">
            <Suspense fallback={null}>
              <FluidGlass
                mode="lens"
                lensProps={{
                  scale: 0.25,
                  ior: 1.18,
                  thickness: 5,
                  chromaticAberration: 0.08,
                  anisotropy: 0.01,
                }}
              />
            </Suspense>
          </div>

          <div className="hero-text">
            <div className="label" style={{ marginBottom: '20px' }}>
              开放求职 · 期望岗位：产品设计 / 体验设计
            </div>
            <h1 className="hero-heading">
              <GradientText
                colors={['#f5f5f5', '#0F5EFA', '#f5f5f5']}
                animationSpeed={6}
                showBorder={false}
                yoyo={true}
              >
                产品体验<br />
                设计师
              </GradientText>
            </h1>
            <div className="divider-red" />
            <p className="hero-advantage">
              熟悉多互联网产品设计经验，全程主导多款核心产品从0到1建设及迭代优化，
              具备业务管理 · 用户管理 · 落地组织三端能力，偏长规型需求&业务感，
              能借产品设计手段与任何场景，热忱产研协作，持续通过用户调研分析
              驱动体验升级，掌握对人交叉设计综合思维。
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
