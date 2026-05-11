import { ArrowUpRight, BookOpenText, Layers3, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import GradientText from './components/GradientText';
import BlurText from './components/react-bits/BlurText';
import SpotlightCard from './components/react-bits/SpotlightCard';

const focusTags = [
  '智慧税务实践',
  'AI 应用落地',
  'RAG 知识库',
  '政务数据大屏',
  '服务质效分析',
  '风险图谱探索',
  '内网离线部署',
  'AI Agent 工作流',
];

const projects = [
  {
    title: '翔宇析税：税费服务质效智能分析系统',
    tag: 'Flagship / AI Analysis',
    description:
      '面向热线、互动、办税服务等场景，探索数据资产管理、AI 辅助分析、热点诉求归集与质效治理闭环。',
    points: ['数据导入与资产化', '满意度风险识别', '分析台账沉淀', 'Docker 离线部署'],
  },
  {
    title: '12366 与征纳互动满意度风险分析',
    tag: 'Service Quality / NLP',
    description:
      '围绕咨询文本和服务过程记录，识别潜在不满意触发点，辅助发现共性诉求、高频问题和差评风险。',
    points: ['风险等级判断', '共性诉求归集', '报告模板生成', '防差评指引'],
  },
  {
    title: '征纳服务质量态势感知大屏',
    tag: 'Dashboard / Visualization',
    description:
      '以“健康度、风险点、热点趋势、处置跟踪”为主线，构建服务质效监控与展示驾驶舱。',
    points: ['ECharts 可视化', '1920×1080 适配', '风险预警体系', '趋势监控'],
  },
  {
    title: '税务风险图谱检索智能体',
    tag: 'Research / Graph + LLM',
    description:
      '探索将案例结构化、知识图谱、相似检索和大模型分析结合，用于辅助发现风险线索和相似案例。',
    points: ['实体关系抽取', '相似案例检索', '图模式匹配', '可解释输出'],
  },
  {
    title: 'RAG 智能问税 / 智能导税原型',
    tag: 'RAG / Knowledge Base',
    description:
      '基于政策、指引和流程材料，构建可溯源、可复核的智能问答与办税路径推荐系统。',
    points: ['政策知识库', '引用依据输出', '多轮问答', 'Dify 工作流'],
  },
  {
    title: '智慧税务月报自动生成 Agent',
    tag: 'Agent / Content Automation',
    description:
      '通过多 Agent 流程完成资讯搜集、知识整合、主题制定、撰写、审稿、排版和推送。',
    points: ['资讯搜集 Agent', '撰写审稿协同', '内容数据库', '自动排版'],
  },
  {
    title: '内网离线部署与国产化适配实践',
    tag: 'Deployment / Intranet',
    description:
      '面向无外网、内网、国产化环境，整理前后端、AI 工具、Docker 镜像与依赖包的交付方案。',
    points: ['麒麟 V10 适配', 'Docker 镜像迁移', 'Nginx 静态服务', '一键启动脚本'],
  },
  {
    title: 'AI 模型评测与接口压测实践',
    tag: 'Evaluation / Reliability',
    description:
      '面向内网大模型接口，设计模型效果测试、并发压测、响应稳定性评估和多模型横向对比。',
    points: ['并发压测', '错误率统计', '指数回退', '输出样例记录'],
  },
];

const stacks = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'ECharts', '大屏可视化'],
  },
  {
    title: 'Backend & Data',
    items: ['Python', 'FastAPI', 'Node.js', 'SQLite', 'REST API', '数据清洗', '文件解析'],
  },
  {
    title: 'AI Application',
    items: ['Prompt Engineering', 'RAG', 'Dify Workflow', 'AI Agent', '结构化 JSON 输出', '智能报告'],
  },
  {
    title: 'Deployment & Automation',
    items: ['Docker', 'Nginx', 'Windows / Linux', '麒麟 V10', '离线部署', 'PowerShell', 'curl'],
  },
];

const articles = [
  'AI 如何辅助税费服务质效提升',
  'RAG 知识库在政策问答中的价值与边界',
  '内网环境如何部署可运行的 AI 应用',
  '大模型接口测试、压测与稳定性评估方法',
  '从业务需求到系统原型的 AI 协同工作流',
];

const collaborations = [
  'AI + 政务 / 税务应用原型',
  '财税政策问答与内部知识库',
  '数据大屏与可视化驾驶舱',
  'AI 自动化报告与月报工作流',
  '教育类 AI 小工具原型',
  'RPA / 自动化采集与监控实践',
];

const privacyRules = [
  '仅展示脱敏样例、模拟数据和原型系统',
  '不公开真实纳税人、企业、接口、Cookie、内网地址与内部系统截图',
  'AI 分析结果默认需要人工复核，不替代正式业务判断',
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      </div>
      {description ? <p className="max-w-md leading-7 text-slate-400">{description}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-14rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-sm font-black text-ink">W</span>
          <span>WYF</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          <a className="transition hover:text-white" href="#projects">Projects</a>
          <a className="transition hover:text-white" href="#stack">Stack</a>
          <a className="transition hover:text-white" href="#articles">Articles</a>
          <a className="transition hover:text-white" href="#collaboration">Collaboration</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] max-w-7xl flex-col justify-center px-6 py-16">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <Sparkles className="h-4 w-4 text-sky-300" />
            AI × Smart Taxation × Digital Practice
          </div>

          <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            <BlurText text="AI × 智慧税务" delay={90} animateBy="words" direction="top" />
            <br />
            <GradientText>
              <BlurText text="数字化实践者" delay={110} animateBy="words" direction="bottom" />
            </GradientText>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            关注 AI 在税务、政务服务、数据治理和基层业务场景中的落地应用，长期探索从业务问题出发，构建可用、可部署、可展示、可复用的智能化工具。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {focusTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-sky-100">
              查看代表项目
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#collaboration" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5">
              合作方向
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">About</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              既懂业务场景，也愿意把原型、页面、数据、模型和部署真正串起来。
            </h2>
            <div className="space-y-6 text-slate-300">
              <p className="leading-8">
                具备税务系统一线业务与数字化实践经验，持续学习电子信息、数学、前端工程与 AI 应用。偏好小切口、可验证、可复制的应用，不追求空泛概念，而是把模糊需求推进到可演示、可运行、可迭代。
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {['业务理解', 'AI 工程', '可视化交付'].map((item) => (
                  <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Projects"
          title="围绕真实业务场景，把 AI、数据、前端、后端和部署串起来。"
          description="首版重点展示 8 个方向，所有案例均采用脱敏描述，可逐步补充截图、架构图和演示 Demo。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <SpotlightCard key={project.title} className="min-h-[260px]">
              <p className="text-sm font-medium text-sky-300">{project.tag}</p>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.points.map((point) => (
                  <span key={point} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
                    {point}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Tech Stack" title="不是单点技术，而是一套从问题到交付的工具链。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stacks.map((stack) => (
            <div key={stack.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <Layers3 className="h-6 w-6 text-sky-300" />
              <h3 className="mt-5 text-xl font-bold">{stack.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="articles" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Articles"
          title="后续文章会沉淀 AI 落地、工程部署和业务方法论。"
          description="先把方向放上来，后续每个主题都可以扩展成项目说明、技术笔记或公开分享。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article, index) => (
            <a key={article} href="#contact" className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/[0.07]">
              <span className="flex items-center gap-4">
                <BookOpenText className="h-5 w-5 text-sky-300" />
                <span>{String(index + 1).padStart(2, '0')}. {article}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 opacity-50 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </section>

      <section id="collaboration" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Collaboration"
          title="寻找 AI 应用、财税工具、知识库与自动化方向的共创机会。"
          description="适合从小切口开始：先做原型、验证价值，再逐步产品化。"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {collaborations.map((item) => (
            <SpotlightCard key={item} spotlightColor="rgba(129, 140, 248, 0.16)">
              <h3 className="text-xl font-bold tracking-tight">{item}</h3>
              <p className="mt-4 leading-7 text-slate-400">从真实痛点出发，控制范围、快速验证、保留可部署和可维护的工程路径。</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-sky-300/20 bg-sky-300/[0.06] p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-sky-200">
                <ShieldCheck className="h-6 w-6" />
                <p className="text-sm font-semibold uppercase tracking-[0.3em]">Public Boundary</p>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">公开展示遵循脱敏、安全、可复核原则。</h2>
            </div>
            <div className="max-w-xl space-y-3">
              {privacyRules.map((rule) => (
                <p key={rule} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 leading-7 text-slate-300">
                  {rule}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-12 text-slate-300">
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p>© 2026 WYF. AI × Smart Taxation × Digital Practice.</p>
          <div className="flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://github.com/SDWYF" target="_blank" rel="noreferrer">
              <ArrowUpRight className="h-4 w-4" /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="mailto:hello@example.com">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
