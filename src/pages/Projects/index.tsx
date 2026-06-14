import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    num: '01',
    title: '智能报账终端',
    tags: ['硬件产品', '企业 B2B', 'UX/UI', '0→1'],
    year: '2021 — 2023',
    desc: '智能报账机是面向企业全员报账提供票据交收、扫描、查验、存罗的一站式自助设备，支持 7×24 小时自动交票，解决员工报销途程中异地实物交收难、影像处理效率低、查验不便捷、人工审核繁琐等问题，有效缩短报账处理周期，提高员工报账效率。',
    wip: false,
  },
  {
    num: '02',
    title: '智能操控中心可视化平台',
    tags: ['数据可视化', 'B 端系统', 'SaaS'],
    year: '2020 — 2021',
    desc: '智能操控中心管理平台 2.0 产品设计——以组织功能化设计为核心，面向业务标准化编排与智能化管控，实现跨部门数据可视化联动，支撑决策层快速响应与运营效率提升。',
    wip: false,
  },
  {
    num: '03',
    title: '四维地图 ERP 管理系统',
    tags: ['ERP', 'Web 端', '物流', 'UX/UI'],
    year: '2019 — 2021',
    desc: '负责物流地图 ERP 管理系统的 UI/UX 设计，参与广告来源水迹及现场调研，结合业务情报与用户行为分析，理清多条核心业务流程，优化数据展示与操作路径，完成设计+流程管理系统的整体落地与规范化。',
    wip: false,
  },
  {
    num: '04',
    title: '品牌运动速度设计',
    tags: ['品牌设计', 'UI 设计', '视觉'],
    year: '2016 — 2019',
    desc: '负责音乐文化科技公司品牌视觉体系搭建，从品牌 VI 到产品界面的全链路视觉设计，覆盖公司官网、移动端 App 及线下物料，形成统一的品牌视觉语言与设计规范。',
    wip: false,
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
        <div className="works-header">
          <span className="label">设计作品</span>
          <span className="works-count">{PROJECTS.length} Projects</span>
        </div>

        <div ref={listRef}>
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.num}>
              <div className="project-num">{p.num}</div>
              <div className="project-body">
                <div className="project-meta">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                  <span className="project-tag">{p.year}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-link">
                  查看案例详情
                  <span className="project-link-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
