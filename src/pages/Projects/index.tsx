import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    num: '01',
    title: 'Smart Expense Reporting Terminal',
    tags: ['SaaS', 'Hardware', 'Enterprise B2B'],
    year: '2022 – 2023',
    desc: 'A one-stop self-service expense reporting kiosk for enterprise employees — supports receipt capture, OCR scanning, verification, and archiving. Available 24/7, solving receipt submission pain points during business travel, reducing manual review workload and significantly shortening reimbursement cycles.',
    wip: false,
  },
  {
    num: '02',
    title: 'Project Two',
    tags: ['Mobile App', 'B2C'],
    year: '2021 – 2022',
    desc: 'Case study in preparation.',
    wip: true,
  },
  {
    num: '03',
    title: 'Project Three',
    tags: ['Mini Program', 'SaaS'],
    year: '2020 – 2021',
    desc: 'Case study in preparation.',
    wip: true,
  },
];

const WorksPage = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }, []);

  return (
    <main className="works-page page-enter">
      <div className="container">
        {/* Header */}
        <div className="works-header">
          <span className="label">Selected Works</span>
          <span className="works-count">{PROJECTS.length} Projects</span>
        </div>

        {/* Project List */}
        <div ref={listRef}>
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.num}>
              <div className="project-num">{p.num}</div>
              <div className="project-body">
                {p.wip && <div className="wip-badge">In Progress</div>}
                <div className="project-meta">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                  <span className="project-tag">{p.year}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                {!p.wip && (
                  <div className="project-link">
                    View Case Study
                    <span className="project-link-arrow">→</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
