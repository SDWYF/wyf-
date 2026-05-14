import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import DataNexus from './components/DataNexus';
import {
  Activity,
  BarChart3,
  BookOpenText,
  BrainCircuit,
  ChartNoAxesCombined,
  ChevronRight,
  Code2,
  DatabaseZap,
  Gamepad2,
  Hexagon,
  Mail,
  Map,
  Menu,
  Moon,
  NotebookText,
  Phone,
  Sparkles,
  Sun,
  Target,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '知识空间', href: '#knowledge' },
  { label: '项目经历', href: '#projects' },
  { label: '联系我', href: '#contact' },
];

const selfTags = [
  { icon: BookOpenText, text: '复旦大学电子信息在读', color: 'text-rose-400' },
  { icon: DatabaseZap, text: '智慧税务与数字化实践', color: 'text-sky-400' },
  { icon: BrainCircuit, text: 'AI × Tax 探索者', color: 'text-fuchsia-400' },
  { icon: ChartNoAxesCombined, text: '数据分析与可视化表达', color: 'text-emerald-400' },
];

const currentFocus = [
  '在国家税务总局—复旦大学智慧税务创新实验室中持续学习与实践',
  '关注 LLM、Agent、RAG 等 AI 技术在真实业务场景中的落地应用',
  '参与税务数字化建设、AI 场景测评与智能分析相关工作',
  '尝试将一线业务痛点转化为真正可落地、可使用的数字化工具',
  '努力备考税务师，夯实基本业务知识',
];

const capabilitiesData = [
  { icon: Target, color: 'bg-rose-500', desc: '洞察一线业务痛点，并转化为系统设计逻辑' },
  { icon: Sparkles, color: 'bg-fuchsia-500', desc: '围绕各类复杂业务场景，设计智能分析流与提示词' },
  { icon: Terminal, color: 'bg-emerald-500', desc: '基于全栈技术，快速完成轻量级系统的原型落地' },
  { icon: BarChart3, color: 'bg-sky-500', desc: '沉淀海量离散数据，输出可视化报告与决策参考' },
];

const futurePlans = [
  '持续探索 AI 与税务业务深度融合的可能性',
  '沉淀智慧税务、数字治理与智能分析相关方法论',
  '打造更多真正解决实际问题的数字化产品',
  '逐步形成自己的项目作品集与知识体系',
  '做出真正属于自己的事业与长期价值',
];

const hobbiesData = [
  { icon: Hexagon, color: 'bg-slate-600', desc: '围棋「沉淀策略与大局观」' },
  { icon: Map, color: 'bg-sky-500', desc: '旅行「感受不同城市的节奏与烟火」' },
  { icon: Trophy, color: 'bg-amber-500', desc: '羽毛球「菜鸟级爱好者」' },
  { icon: Activity, color: 'bg-emerald-500', desc: '足球「纯粹的团队运动」' },
  { icon: Target, color: 'bg-rose-500', desc: 'CS:GO「团队竞技与枪法练习」' },
  { icon: Gamepad2, color: 'bg-indigo-500', desc: '云顶之弈「版本理解与运气游戏」' },
];

const knowledgeSpaces = [
  {
    title: '项目复盘',
    desc: '记录项目如何被发现、如何推进、如何失败或落地，以及之后还能沉淀下什么。',
    icon: NotebookText,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    href: '#project-review'
  },
  {
    title: 'AI 与税务',
    desc: '思考 AI 如何辅助纳税服务质效分析、政策问答、风险识别与流程重构。',
    icon: BrainCircuit,
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-400/10'
  },
  {
    title: '技术实践',
    desc: '沉淀 React、FastAPI、Docker、提示词工程和本地模型部署等实践记录。',
    icon: Code2,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: '个人成长',
    desc: '记录体制内年轻人如何建立技术能力，在规则、创新和自我价值之间寻找平衡。',
    icon: Sparkles,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10'
  },
];

const featuredArticle = {
  href: '#project-review',
  category: '项目复盘',
  readTime: '约 8 分钟',
  title: '停用后的“翔宇看税”：一次关于创新、规则与价值的复盘',
  desc: '从一个真实的一线数字化尝试出发，复盘轻量工具如何回应业务痛点，也反思创新进入组织运行体系前必须面对的授权、边界与协同。',
  tags: ['翔宇看税', '项目复盘', '基层数字化', '规则边界']
};

const articleSections = [
  {
    title: '一、它不是从技术开始的，而是从现场开始的',
    paragraphs: [
      '做“翔宇看税”时，我最初关注的是一个很朴素的问题：一线服务现场有很多真实存在的管理细节，能不能通过一个轻量工具，把它们更清楚地记录下来、呈现出来、分析出来。',
      '那时的想法并不复杂。办税服务厅每天都在运行，取号、叫号、等待、办理、窗口承载、业务分流，这些环节看似普通，却共同构成了基层服务的真实秩序。很多时候，现场并不是没有经验，也不是没有努力，而是缺少一种稳定的数据表达方式：哪些时段压力最大，哪些环节容易滞留，哪些窗口承载较重，哪些业务变化值得关注。',
      '于是，我开始尝试做一个工具，把这些原本分散在服务过程中的信息归集起来，让大厅运行状态能够被看见，让管理判断有更直观的数据支撑。这就是“翔宇看税”最初的起点。',
      '回头看，这个项目真正给我的第一层训练，并不是代码能力，而是观察能力。',
      '在一线工作中，很多问题并不会以“需求文档”的形式出现。它可能是一次排队秩序的波动，可能是窗口人员的一句反馈，可能是管理人员对当天服务压力的临时判断，也可能是某个指标背后难以解释的细节。',
      '如果只是停留在经验层面，这些问题很容易被当作“现场情况”一笔带过。但如果把它们拆开，就会发现其中有很多可以被结构化的内容：时间、业务、窗口、人员、等候、办理结果、异常情况、台账记录。这些要素并不复杂，但只要能够稳定沉淀下来，就能帮助我们更接近真实。',
      '“翔宇看税”就是在这样的背景下出现的。它不是一个宏大的平台，也不是一个成熟的产品，而是一次从真实场景出发的数字化尝试：用尽可能轻量的方式，把一线运行中的关键信息组织起来，让服务现场不再只依赖感受和经验，而能够多一层数据化的观察。'
    ]
  },
  {
    title: '二、项目带来的价值是真实的',
    paragraphs: [
      '这个项目让我第一次强烈感受到，技术的价值不一定来自复杂架构，也不一定来自多么先进的概念。有时，一个小工具只要能准确嵌入真实场景，帮助一线减少重复劳动、提升管理可见性、沉淀过程数据，它就已经具备了实际价值。',
      '在这个过程中，我逐渐理解了基层数字化的几个特点。',
      '第一，真正有用的系统，往往不是从“功能清单”开始，而是从“现场问题”开始。现场需要的不是一个看起来很完整的平台，而是一个能解决某个关键堵点的工具。',
      '第二，数据不是天然有价值的。只有当数据能够被归集、被解释、被比较、被用于管理判断时，它才会从记录变成资产。',
      '第三，系统建设不是单纯的技术问题。一个工具能不能运行起来，取决于它是否符合现场工作方式，是否降低了使用门槛，是否让使用者感到“这确实帮到了我”。',
      '“翔宇看税”在这些方面给了我很多正反馈。它让我看到，自己并不是只能被动完成岗位上的既定任务，也可以主动观察、主动设计、主动把业务问题转化为数字化工具。这种经历对一个刚进入组织不久的年轻人来说，是很重要的。',
      '它让我相信：在基层工作中，创新并不一定要从宏大命题开始。很多有价值的改变，都来自对一个具体问题的长期观察和持续打磨。'
    ]
  },
  {
    title: '三、停用之后，我重新理解了“有用”和“合适”的区别',
    paragraphs: [
      '后来，这个工具没有继续作为日常运行方式保留下来。',
      '坦白说，在刚知道结果的时候，我是失落的。一个自己投入了很多时间和精力、也确实解决过实际问题的东西，突然停下来，很难完全没有情绪。尤其是当我仍然相信它有现实价值时，那种落差会更明显。',
      '但经过一段时间复盘，我开始意识到：在公共服务和组织治理场景中，“有用”并不等于“合适”，“解决问题”也并不等于“可以进入正式运行体系”。',
      '一个工具能解决局部问题，是它的价值；但它能否进入组织运行体系，还取决于更多因素：数据口径是否统一，流程是否合规，系统边界是否清晰，管理授权是否明确，责任归属是否可追溯，与既有平台之间是否形成协同，而不是形成新的割裂。',
      '这些问题，在做项目的早期，我并没有想得足够充分。',
      '我更关注的是：这个问题能不能解决，系统能不能跑起来，数据能不能呈现出来，现场能不能用起来。现在回头看，这些当然重要，但还不够。对于组织中的数字化项目来说，技术实现只是第一步，能不能被正式理解、被规范使用、被持续维护、被制度接纳，才是更难也更关键的部分。',
      '这次经历让我真正理解了一个道理：技术创新如果没有进入清晰的规则体系，就很容易停留在“个人努力”或“局部经验”层面。它可能有效，但不一定稳；它可能有价值，但不一定走得远。'
    ]
  },
  {
    title: '四、这不是一次失败，而是一次必要的训练',
    paragraphs: [
      '如果只从结果看，“翔宇看税”是一个被停用的项目。但如果从成长看，它并不是一次失败。',
      '它训练了我如何从真实场景中发现问题，如何把模糊的业务感受转化为结构化需求，如何设计数据指标，如何搭建轻量系统，如何把运行结果用可视化方式表达出来，也训练了我如何面对一个项目从产生、运行到停用的完整周期。',
      '更重要的是，它让我看到数字化工作的复杂性。',
      '一个数字化工具不是孤立存在的。它背后连接着业务流程、管理规则、责任体系、数据口径、使用习惯和组织信任。只要其中任何一个环节没有被充分考虑，系统就可能在局部有效的同时，面临整体运行上的不确定性。',
      '这也是我后来重新理解“创新”的原因。',
      '过去我会更强调“能不能做出来”。现在我会更早追问：这个项目的授权边界是什么？它服务的是临时性问题，还是可持续机制？它产生的数据是否能被正式认可？它和既有系统之间是什么关系？谁来使用，谁来维护，谁来解释，谁来承担责任？如果要推广，它需要哪些制度、流程和组织协同作为支撑？',
      '这些问题看起来不像代码那样直接，却决定了一个项目能否真正从“工具”走向“体系”。'
    ]
  },
  {
    title: '五、我从中留下的，是下一次做得更稳的能力',
    paragraphs: [
      '现在再看“翔宇看税”，我不想把它写成一个单纯遗憾的故事。它确实有遗憾，但它留下的东西远比遗憾更重要。',
      '它让我更清楚地认识到，真正成熟的创新，既要有解决问题的热情，也要有尊重规则的耐心；既要敢于从现场出发，也要能够回到组织逻辑中去；既要相信技术的力量，也要理解治理场景中的边界和约束。',
      '这次经历之后，我不会因此否定继续做事的意义。相反，它让我更加明确：未来如果再做类似项目，不能只把重点放在功能实现上，而要从一开始就同步考虑规则、授权、流程、数据、责任和可持续性。',
      '好的数字化项目，不只是“我把它做出来了”，而是“它能被正确地使用、稳定地运行、持续地产生价值”。',
      '这可能就是“翔宇看税”真正留给我的东西。',
      '它曾经是一个工具，后来成为一次复盘。它曾经服务于一个具体场景，后来帮助我理解了更大的边界。它曾经让我感到失落，后来也让我获得了一种更成熟的判断力。',
      '对我来说，这段经历不是终点，而是一次提醒：继续做事，但要把事情做得更稳；继续创新，但要让创新更能被组织理解和承接；继续相信技术的价值，但也要学会在规则之内，让价值走得更远。'
    ]
  }
];

const projects = [
  {
    title: '翔宇析税：税费服务质效智能分析系统',
    desc: '面向 12366 热线、征纳互动质检、满意度风险识别和热点诉求归集的智能分析系统。',
    tags: [
      { text: '核心项目', classes: 'text-rose-300 border-rose-400/20 bg-rose-400/10' },
      { text: 'AI 分析', classes: 'text-fuchsia-300 border-fuchsia-400/20 bg-fuchsia-400/10' },
      { text: '智能报告', classes: 'text-sky-300 border-sky-400/20 bg-sky-400/10' }
    ],
  },
  {
    title: '翔宇看税：办税服务厅运行与取叫号分析系统',
    desc: '来源于办税服务厅一线管理中的真实问题，将分散服务过程数据进行归集、统计和分析。',
    tags: [
      { text: '核心项目', classes: 'text-rose-300 border-rose-400/20 bg-rose-400/10' },
      { text: '大厅运行', classes: 'text-amber-300 border-amber-400/20 bg-amber-400/10' },
      { text: '复盘反思', classes: 'text-emerald-300 border-emerald-400/20 bg-emerald-400/10' }
    ],
  },
  {
    title: '税务风险图谱：案例相似检索与智能分析项目',
    desc: '围绕税务风险案例结构化、关系建模、相似检索和大模型辅助分析进行方法探索。',
    tags: [
      { text: '核心项目', classes: 'text-rose-300 border-rose-400/20 bg-rose-400/10' },
      { text: '知识图谱', classes: 'text-purple-300 border-purple-400/20 bg-purple-400/10' },
      { text: '风险分析', classes: 'text-indigo-300 border-indigo-400/20 bg-indigo-400/10' }
    ],
  },
  {
    title: '翔宇问税：面向办税咨询与政策指引的 AI 助手',
    desc: '面向办税事项导引、常见问题问答、政策查询和办理流程指引的 AI 应用原型。',
    tags: [
      { text: '核心项目', classes: 'text-rose-300 border-rose-400/20 bg-rose-400/10' },
      { text: 'RAG', classes: 'text-cyan-300 border-cyan-400/20 bg-cyan-400/10' },
      { text: '智能导引', classes: 'text-teal-300 border-teal-400/20 bg-teal-400/10' }
    ],
  },
];

const moreProjects = [
  { title: '办税驿站智慧大屏', desc: '围绕驿站运行数据展示、数据同步清洗和可视化驾驶舱的前端展示实践。' },
  { title: '一键零申报脚本', desc: '面向重复性申报流程的自动化脚本探索，用小工具解决小问题。' },
  { title: '小切口项目合集', desc: '沉淀工作流优化、提示词模板、数据处理小工具和 AI 辅助办公实践。' },
];

const contactMethods = [
  { label: 'QQ', value: '1530551381', action: 'copy', icon: Phone, color: 'text-sky-400', bg: 'bg-sky-400/10', gradient: 'from-sky-400/20' },
  { label: '微信', value: '15896165168', action: 'copy', icon: Phone, color: 'text-emerald-400', bg: 'bg-emerald-400/10', gradient: 'from-emerald-400/20' },
  { label: '邮箱', value: '1530551381@qq.com', action: 'mail', icon: Mail, color: 'text-amber-400', bg: 'bg-amber-400/10', gradient: 'from-amber-400/20' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function SectionTitle({ emoji, title, desc }: { emoji: string; title: string; desc?: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-black tracking-tight text-slate-50 md:text-6xl">
        <span className="mr-4 inline-block origin-bottom">{emoji}</span>
        <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">{title}</span>
      </h2>
      {desc && <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">{desc}</p>}
    </motion.div>
  );
}

function GlassCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.03] bg-white/[0.01] p-8 backdrop-blur-xl transition-colors hover:border-white/[0.08] hover:bg-white/[0.02] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function NumberList({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item} className="group/item flex items-start gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-white/[0.04]">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sm font-black text-sky-300 ring-1 ring-sky-400/20 transition-all group-hover/item:scale-110 group-hover/item:bg-sky-400/20 group-hover/item:text-sky-200">
            {index + 1}
          </span>
          <p className="pt-0.5 text-sm font-medium leading-7 text-slate-300 transition-colors group-hover/item:text-slate-100 md:text-base">{item}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectReviewPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-50 selection:bg-sky-400/30">
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] animate-pulse-glow rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] animate-pulse-glow rounded-full bg-amber-500/10 blur-[120px]" />
      </div>
      <div className="noise-overlay" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.03] bg-[#020617]/70 backdrop-blur-3xl">
        <nav className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
          <a href="#home" className="group flex items-center gap-3" aria-label="返回主页">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black text-slate-950 transition-transform group-hover:scale-105">W</div>
            <p className="text-xl font-bold tracking-widest text-white">WYF</p>
          </a>
          <a href="#knowledge" className="group inline-flex h-11 items-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm font-bold text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
            返回知识空间
            <ChevronRight size={16} className="ml-2 rotate-180 transition-transform group-hover:-translate-x-1" />
          </a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-32">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/5 bg-white/[0.025] p-8 backdrop-blur-xl md:p-12"
        >
          <div className="mb-10 border-b border-white/10 pb-10">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1.5 text-sm font-black text-amber-200">公开表达版</span>
              <span className="text-sm font-semibold text-slate-500">项目复盘 · 个人成长</span>
            </div>
            <h1 className="text-3xl font-black leading-tight text-white md:text-5xl">{featuredArticle.title}</h1>
            <p className="mt-6 max-w-4xl text-lg font-medium leading-8 text-slate-300">
              做项目时，我曾经更看重“能不能把问题解决”。现在回头看，我更想记录的是：一个来自真实场景的数字化尝试，如何在价值、规则和组织协同之间找到更成熟的位置。
            </p>
          </div>

          <div className="space-y-10">
            {articleSections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/5 bg-slate-950/30 p-6 md:p-8">
                <h2 className="mb-5 text-2xl font-black text-white">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base font-medium leading-8 text-slate-300 md:text-lg">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-sky-300/15 bg-sky-300/[0.06] p-6 md:p-8">
            <h2 className="mb-4 text-xl font-black text-sky-100">复盘后的结论</h2>
            <p className="text-base font-medium leading-8 text-slate-300 md:text-lg">
              “翔宇看税”适合被放进知识空间，但它不应该被写成情绪化的得失记录，而应成为一次关于基层数字化、组织规则和个人成长的克制复盘。它真正留下的，是继续做事的能力，以及下一次把事情做得更稳、更远的判断力。
            </p>
          </div>
        </motion.article>
      </section>
    </main>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState('');
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (currentHash === featuredArticle.href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentHash]);

  const copyText = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(''), 1800);
  };

  if (currentHash === featuredArticle.href) {
    return <ProjectReviewPage />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-50 selection:bg-sky-400/30">
      {/* Background Effects */}
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] animate-pulse-glow rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] animate-pulse-glow rounded-full bg-indigo-500/10 blur-[120px]" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[40%] left-[50%] h-[30%] w-[30%] animate-pulse-glow rounded-full bg-emerald-500/5 blur-[120px]" style={{ animationDelay: '2s' }} />
      </div>
      <div className="noise-overlay" />

      {/* Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/70 backdrop-blur-3xl border-b border-white/[0.03]' : 'bg-transparent'}`}>
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="group flex items-center gap-3" aria-label="返回首页">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black text-slate-950 transition-transform group-hover:scale-105">W</div>
            <p className="text-xl font-bold tracking-widest text-white">WYF</p>
          </a>

          <div className="hidden flex-1 items-center justify-end gap-8 pr-12 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium tracking-wide text-slate-300 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:bg-white/10 hover:text-white" aria-label="浅色模式占位">
              <Sun size={20} />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:bg-white/10 hover:text-white" aria-label="深色模式占位">
              <Moon size={20} />
            </button>
            <button onClick={() => setMenuOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden" aria-label="打开菜单">
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#020617]/95 p-6 backdrop-blur-3xl lg:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white" aria-label="关闭菜单">
                <X />
              </button>
            </div>
            <div className="mt-16 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-3xl border border-white/5 bg-white/[0.02] px-6 py-6 text-2xl font-black text-white active:bg-white/10"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-8"
          >
            <motion.div variants={fadeInUp} className="text-sm font-medium tracking-widest text-sky-400/80">
              AI × 智慧税务 × 数字化实践
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl font-black leading-snug tracking-normal text-white md:text-6xl lg:text-7xl">
              AI × 智慧税务 <br />
              <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-emerald-300 bg-clip-text text-transparent opacity-90">数字化实践</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="max-w-xl space-y-6 text-lg font-medium leading-relaxed md:text-xl">
              <p className="text-white">一名在税务一线拥抱 AI 的年轻人，持续探索技术、业务与个人成长的结合。</p>
              <p className="text-base text-slate-300">我长期关注 AI 技术在税务服务、数据分析、风险识别和基层治理中的应用，尝试将业务痛点转化为系统工具和可沉淀的方法。</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {selfTags.map((tag) => (
                <span key={tag.text} className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white">
                  <tag.icon size={15} className={`${tag.color} opacity-90`} />
                  {tag.text}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-6">
              <a href="#about" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold tracking-wide text-slate-950 shadow-lg shadow-white/10 transition-transform hover:-translate-y-0.5 hover:shadow-white/20">
                了解我是谁
              </a>
              <a href="#projects" className="group inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/[0.02] px-8 text-sm font-medium tracking-wide text-slate-200 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/[0.06] hover:text-white">
                查看项目经历 <ChevronRight size={16} className="ml-2 opacity-80 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

          </motion.div>

          {/* High-End Dynamic Visual Anchor */}
          <div className="hidden lg:flex w-full justify-end">
            <DataNexus />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle emoji="🧭" title="关于我" desc="这里展开个人背景、当前状态、能力方向、未来规划和生活侧面。" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-[2rem] border border-sky-500/20 bg-sky-500/5 p-8 backdrop-blur-xl md:p-10"
          >
            <p className="text-xl font-semibold leading-relaxed text-sky-50 md:text-2xl">
              目前，我在税务工作中持续参与数字化、智能化相关实践，同时就读于复旦大学电子信息专业，关注人工智能、数据分析与公共服务场景的结合。
            </p>
          </motion.div>

          <GlassCard className="mb-8 p-6 md:p-10">
            <h3 className="mb-8 text-center text-3xl font-black text-white">🧩 我的能力方向</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {capabilitiesData.map((item, i) => (
                <div key={i} className="flex items-center gap-6 rounded-2xl border border-white/5 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-slate-800/60">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.color} shadow-lg`}>
                    <item.icon className="text-white" size={26} />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="mb-8 grid gap-8 lg:grid-cols-2 lg:items-start">
            <GlassCard delay={0.1}>
              <h3 className="mb-10 text-3xl font-black text-white">🤯 我正在做什么</h3>
              <NumberList items={currentFocus} />
            </GlassCard>
            <GlassCard delay={0.2}>
              <h3 className="mb-10 text-3xl font-black text-white">💫 我未来想做什么</h3>
              <NumberList items={futurePlans} />
            </GlassCard>
          </div>

          <GlassCard delay={0.4} className="mt-8">
            <h3 className="mb-10 text-center text-3xl font-black text-white">🏸 我的兴趣爱好</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hobbiesData.map((item, i) => (
                <div key={i} className="flex items-center gap-5 rounded-2xl border border-white/5 bg-slate-900/50 p-5 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-slate-800/50">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.color} shadow-lg`}>
                    <item.icon className="text-white" size={26} />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle emoji="⛳️" title="知识空间" desc="这里记录我在 AI、税务数字化、项目实践和个人成长中的思考。相比于展示结果，我更希望保留过程：问题是如何被发现的，方案是如何形成的，项目是如何推进的，以及失败之后还能沉淀下什么。" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {knowledgeSpaces.map((space, i) => {
              const href = 'href' in space ? space.href : undefined;
              const card = (
                <GlassCard key={space.title} delay={i * 0.1} className="min-h-[260px] flex flex-col">
                  <div className={`mb-8 inline-flex rounded-2xl ${space.bg} p-4`}>
                    <space.icon className={space.color} size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-white">{space.title}</h3>
                  <p className="flex-1 text-base font-medium leading-relaxed text-slate-400">{space.desc}</p>
                  {href && (
                    <div className="mt-8 inline-flex items-center text-sm font-black tracking-wide text-amber-200">
                      进入复盘界面
                      <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </GlassCard>
              );

              return href ? (
                <a key={space.title} href={href} className="block outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] rounded-2xl">
                  {card}
                </a>
              ) : card;
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-xl"
          >
            <p className="text-lg font-medium text-slate-300">这里会先从真实项目复盘开始，逐步沉淀 AI 与税务、技术实践和个人成长相关内容。</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle emoji="🤩" title="项目经历" desc="这些项目大多来自真实业务场景中的问题：有的是一线服务中的秩序问题，有的是数据分析中的效率问题，有的是 AI 应用落地中的方法问题。" />

          <div className="mb-12 flex items-center gap-4">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-sky-400">重点项目</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-sky-400/20 to-transparent"></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <GlassCard key={project.title} delay={index * 0.1} className={index % 2 === 1 ? 'lg:translate-y-12' : ''}>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-slate-300 text-xl font-black text-slate-900 shadow-lg">{index + 1}</span>
                </div>
                <h3 className="mb-4 text-2xl font-black leading-snug text-white">{project.title}</h3>
                <p className="mb-8 text-lg leading-relaxed text-slate-400">{project.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag.text} className={`rounded-full border px-4 py-1.5 text-sm font-bold ${tag.classes}`}>{tag.text}</span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mb-12 mt-32 flex items-center gap-4">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-500">更多实践</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {moreProjects.map((project, i) => (
              <GlassCard key={project.title} delay={i * 0.1} className="p-8">
                <h3 className="mb-4 text-xl font-black leading-snug text-white">{project.title}</h3>
                <p className="text-base leading-relaxed text-slate-400">{project.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle emoji="🔍" title="联系我" desc="如果你也关注 AI 应用、智慧税务、财税数字化、数据分析或个人项目建设，欢迎和我交流。" />

          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, i) => (
              <motion.button
                key={method.label}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => method.action === 'copy' ? void copyText(method.value, method.label) : window.location.href = `mailto:${method.value}`}
                className="group relative block w-full text-left outline-none"
              >
                <div className={`absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-b ${method.gradient} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm`} />
                <div className="relative rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.04]">
                  <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${method.bg} transition-transform duration-300 group-hover:scale-110`}>
                    <method.icon className={method.color} size={32} />
                  </div>
                  <p className="text-2xl font-black text-white">{method.label}</p>
                  <p className="mt-3 text-base font-semibold text-slate-400">{method.value}</p>
                  <p className={`mt-6 text-sm font-bold ${method.color} opacity-80 transition-opacity group-hover:opacity-100`}>
                    {copied === method.label ? '已复制 ✓' : method.action === 'copy' ? `点击复制 ${method.label}` : '发送邮件'}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">
            <GlassCard>
              <h3 className="mb-10 text-3xl font-black text-white">💼 工作沟通</h3>
              <NumberList items={[
                '请直接说明目标、背景、约束和期望输出，文档先行效率最高。',
                '如果是 AI 应用项目，我会优先确认业务流程和验收标准。',
                '欢迎指出不准确或不适合真实环境的地方，我们一起校准。'
              ]} />
            </GlassCard>
            <GlassCard>
              <h3 className="mb-10 text-3xl font-black text-white">🤞 交流方向</h3>
              <NumberList items={[
                'AI 应用落地、智慧税务与财税数字化。',
                '数据分析与可视化、大模型提示词与智能分析。',
                '个人项目与技术成长、系统建设与内网部署。'
              ]} />
            </GlassCard>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 bg-[#020617]/50 px-6 py-12 text-center text-sm font-semibold text-slate-500 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-base">© 2026 WYF · AI × 智慧税务个人主页</p>
          <a href="#home" className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 transition-colors hover:bg-white/10 hover:text-white">
            回到顶部
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </footer>
    </main>
  );
}
