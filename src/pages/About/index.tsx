import { useEffect, useRef } from 'react';

const WORK_EXP = [
  {
    company: '家上先机网络科技有限公司',
    note: '（电商独角兽🦄）',
    role: '产品设计师',
    period: '2021.11 — 2023.12',
    bullets: [
      '负责集团核心产品综合账单及 ERP 的 UX/UI 设计工作，实现 WEB 端和小程序方案；与产品规划一起参与需求评审调研，深理可立即决策的目标各方，全程入收集用户开放系统的问题，结合网络育准确突的具体需求，从用户角度提出及优化产品组，提供高度业务场景下交互解决方案。',
      '从 0 到 1 建立符合业务的组件库，实现规范化高效的设计管理，大幅提升设计稳定性，赋能团队协作效率。',
      '主导多次设计规范整理及 AB+ 分组件数设计分享，在设计团队形成可沉淀的设计资产文档体系，持续提升产品一致性。',
    ],
  },
  {
    company: '点猫科技有限公司',
    note: 'K12 教育数字化',
    role: '体验设计师',
    period: '2021.3 — 2021.11',
    bullets: [
      '负责调研驱动的产品前后台流程梳理，逐项对比优化产品设计体验。',
      '深度参与用户行为分析，将广告整合的数据整合进用户视图，为后续需求迭代提供数据依据。',
    ],
  },
  {
    company: '优化选科技有限公司',
    note: '（上市公司）',
    role: '组织设计师',
    period: '2019.3 — 2021.3',
    bullets: [
      '负责 To B 严品合集主流设计：统筹设计当场和风格的功能设计体验，负责维护公司产品小组落，Web 全页设计工作台，完成从设计制图到执行的完整落地。',
      '独立完成 Web 多条产品线系统模块的规范化，积极推进设计团队效能建设，基于多方向工作输出产品相关设计实践。',
    ],
  },
  {
    company: '英迈思文化科技有限公司',
    note: '',
    role: 'UI 设计师',
    period: '2016.7 — 2019.3',
    bullets: [
      '主导音乐文化品牌的 UI 设计工作，参与从品牌设计到产品界面的全链路视觉落地。',
      '与开发团队协作，确保设计高质量还原，提升产品整体用户体验。',
    ],
  },
];

const SOCIALS = [
  { name: 'Zcool',    url: 'http://www.zcool.com.cn/u/1367812',           display: 'zcool.com/u/1367812' },
  { name: 'Dribbble', url: 'https://dribbble.com/liaoyaping11',            display: 'dribbble.com/liaoyaping11' },
  { name: 'Behance',  url: 'https://www.behance.net/617266805105f',         display: 'behance.net/617266805105f' },
  { name: 'UI China', url: 'http://www.ui.cn/',                            display: 'ui.cn' },
];

const STATS = [
  { num: '8', unit: '+', label: '年从业经验' },
  { num: '20', unit: '+', label: '交付项目' },
  { num: '3',  unit: '',  label: 'SaaS 产品' },
];

const AboutPage = () => {
  const bioRef  = useRef<HTMLDivElement>(null);
  const expRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [bioRef.current, expRef.current, rightRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
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

        {/* ── Top: Bio + Stats + Socials ── */}
        <div className="about-grid">
          <div ref={bioRef}>
            <div className="about-bio-label label">About Me</div>
            <h2 className="about-heading">
              产品体验设计师<span className="about-dot"> ·</span> 8年
            </h2>
            <div className="divider-red" style={{ marginBottom: '28px' }} />
            <p className="about-body">
              熟悉多互联网产品设计经验，全程主导多款核心产品从 0 到 1 建设及迭代优化，
              具备业务管理 · 用户管理 · 落地组织三端能力。偏长规型需求及业务感，
              能借产品设计手段与任何场景，热忱产研协作团队，能横跨设计规范、平面报表、
              技术方案等多个维度拉通，通过用户调研持续分析驱动体验升级，
              注重设计细节高效链路并提升用户留存与操作效率，掌握对人交叉设计综合思维。
            </p>
            <div className="about-stats">
              {STATS.map(({ num, unit, label }) => (
                <div className="stat-item" key={label}>
                  <div className="stat-num">{num}<span>{unit}</span></div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef}>
            <div className="contact-panel">
              <div className="contact-panel-label label" style={{ marginBottom: '16px' }}>Connect</div>
              <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-2)', marginBottom: '4px' }}>Email</div>
                <div style={{ fontSize: '13px', color: 'var(--text)' }}>617266805@qq.com</div>
                <div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '12px', marginBottom: '4px' }}>Phone</div>
                <div style={{ fontSize: '13px', color: 'var(--text)' }}>+86 136 1291 6897</div>
              </div>
              {SOCIALS.map(({ name, url, display }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-arrow">→</span>
                  <span className="social-name">{name}</span>
                  <span className="social-url">{display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Work Experience Timeline ── */}
        <div ref={expRef} style={{ marginTop: '80px' }}>
          <div className="label" style={{ marginBottom: '24px' }}>Work Experience</div>
          <div className="exp-timeline">
            {WORK_EXP.map((job, idx) => (
              <div className="exp-item" key={idx}>
                <div className="exp-left">
                  <div className="exp-period">{job.period}</div>
                  <div className="exp-dot" />
                </div>
                <div className="exp-right">
                  <div className="exp-company">
                    {job.company}
                    {job.note && <span className="exp-note">{job.note}</span>}
                  </div>
                  <div className="exp-role">{job.role}</div>
                  <ul className="exp-bullets">
                    {job.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default AboutPage;
