import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { 
  ArrowUpRight, 
  BarChart3, 
  FileJson, 
  HardDriveDownload, 
  Layers3, 
  Mail, 
  Menu, 
  MessageSquareText, 
  Monitor, 
  Network, 
  ShieldAlert, 
  ShieldCheck, 
  Sparkles, 
  X, 
  Zap,
  ChevronRight,
  Database,
  Code2,
  Terminal,
  Settings,
  Cpu,
  Layout,
  MessageCircle,
  Lightbulb,
  UserCircle
} from 'lucide-react';
import GradientText from './components/GradientText';
import SpotlightCard from './components/react-bits/SpotlightCard';

// --- Types ---
type ProjectAccent = 'sky' | 'indigo' | 'blue' | 'purple' | 'cyan' | 'emerald' | 'slate' | 'amber';

interface Project {
  title: string;
  tag: string;
  icon: LucideIcon;
  status: string;
  accent: ProjectAccent;
  description: string;
  value: string;
  problem?: string;
  role?: string;
  path?: string[];
  points: string[];
  isFlagship?: boolean;
}

// --- Constants & Data ---
const navItems = [
  { label: '关于我', href: '#about' },
  { label: '能力地图', href: '#capabilities' },
  { label: '项目经历', href: '#projects' },
  { label: '文章博客', href: '#articles' },
  { label: '未来方向', href: '#future' },
  { label: '联系我', href: '#contact' },
];

const roleTags = [
  '业务技术翻译器',
  '上下文压缩员',
  'AI 工程化实践者',
  '智能系统搭建者',
];

const directorFlow = [
  {
    title: '业务输入',
    items: ['12366 热线', '征纳互动', '满意度评价', '政策材料'],
    icon: MessageSquareText,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10'
  },
  {
    title: '上下文压缩',
    items: ['目标', '约束', '流程', '输出格式'],
    icon: Network,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10'
  },
  {
    title: 'AI 协同执行',
    items: ['分析', '生成', '编程', '校准'],
    icon: Sparkles,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  },
  {
    title: '系统输出',
    items: ['分析台账', '数据大屏', '财税知识库', '自动报告'],
    icon: Monitor,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
];

const methodSteps = [
  '业务理解',
  '上下文压缩',
  'AI 协同开发',
  '结果校准',
  '可视化表达',
  '部署交付',
];

const capabilityMap = [
  {
    title: '需求拆解',
    description: '把税务业务痛点拆成流程、数据、指标和系统任务。',
    items: ['业务流程', '指标体系', '风险触发', '治理闭环'],
    icon: Network,
  },
  {
    title: '上下文压缩',
    description: '把背景、材料和约束压缩成清晰任务，方便 AI 执行与人工复核。',
    items: ['提示词编排', '知识组织', '任务边界', '输出协议'],
    icon: Layers3,
  },
  {
    title: 'AI 应用设计',
    description: '围绕知识库、智能体、结构化输出和自动流程，快速搭建应用原型。',
    items: ['RAG 架构', 'Agent 工作流', '向量库优化', '模型选型'],
    icon: Lightbulb,
  },
  {
    title: 'AI 编程监督',
    description: '指导 AI 完成高质量代码实现，确保逻辑准确、安全且符合业务规范。',
    items: ['逻辑校准', '异常处理', '代码审查', '接口联调'],
    icon: Code2,
  },
  {
    title: '数据可视化',
    description: '把运行状态、趋势、风险和处置闭环组织成一屏可读的驾驶舱。',
    items: ['ECharts', '态势感知', '风险预警', '交互逻辑'],
    icon: Monitor,
  },
  {
    title: '部署交付',
    description: '关注从原型到可运行环境的最后一公里，适配内网、离线和国产化环境。',
    items: ['Docker 容器化', '私有化部署', '性能调优', '交付文档'],
    icon: HardDriveDownload,
  },
];

const projects: Project[] = [
  // Flagship
  {
    title: '翔宇析税：税费服务质效智能分析系统',
    tag: '旗舰项目 / 智能分析',
    icon: BarChart3,
    status: '已落地',
    accent: 'sky',
    description: '把分散的咨询记录和互动文本转化为可分析、可复核、可追踪的服务治理数据资产。',
    value: '沉淀数据资产，大幅提升风险识别与治理效率。',
    problem: '数据来源分散、人工质检耗时、热点诉求发现滞后。',
    role: '需求拆解、AI 分析流程设计、可视化规划、部署交付方案整理。',
    path: ['数据导入', '清洗脱敏', 'AI 分析', '结果台账', '可视化看板', '问题跟踪'],
    points: ['私有化部署', '自动报告'],
    isFlagship: true,
  },
  {
    title: '征纳服务质量态势感知大屏',
    tag: '旗舰项目 / 可视化',
    icon: Monitor,
    status: '已上线',
    accent: 'blue',
    description: '围绕健康度、风险点、热点趋势和处置跟踪，构建质效驾驶舱。',
    value: '用一屏串联态势、波动和处置进度，减少人工汇总。',
    problem: '多维度数据无法实时关联，决策缺乏宏观视角。',
    role: '指标体系建立、交互逻辑设计、前端大屏适配、数据对接。',
    path: ['实时监测', '风险预警', '热点分析', '处置联动'],
    points: ['ECharts', '自研组件'],
    isFlagship: true,
  },
  {
    title: '智慧税务月报自动生成智能体',
    tag: '旗舰项目 / 生产力',
    icon: FileJson,
    status: '生产力',
    accent: 'emerald',
    description: '通过多智能体流程完成资讯搜集、知识整合、撰写、审稿和排版。',
    value: '把资料收集和初稿生成自动化，让人工聚焦判断与核验。',
    problem: '周期性报告撰写耗时长，材料整理繁琐且重复性高。',
    role: '多智能体工作流设计、Prompt 优化、自动排版逻辑实现。',
    path: ['搜集', '整合', '撰写', '审稿', '排版'],
    points: ['Multi-Agent', '自动生成'],
    isFlagship: true,
  },
  // Research
  {
    title: '税务风险图谱检索智能体',
    tag: '研究型项目 / 知识图谱',
    icon: Network,
    status: '实验性',
    accent: 'purple',
    description: '结合案例结构化、知识图谱和相似检索，辅助发现风险线索。',
    value: '辅助发现深层次风险关联。',
    points: ['实体抽取', '关系建模'],
  },
  {
    title: 'RAG 智能问税 / 智能导税原型',
    tag: '研究型项目 / 知识库',
    icon: MessageSquareText,
    status: '内测中',
    accent: 'cyan',
    description: '基于政策、指引和流程材料，构建可溯源、可复核的问答入口。',
    value: '提高政策检索效率。',
    points: ['知识切片', '语义检索'],
  },
  {
    title: '模型评测与接口压测实践',
    tag: '研究型项目 / 工程化',
    icon: Zap,
    status: '工程化',
    accent: 'amber',
    description: '面向内网模型接口，设计效果测试、并发压测和稳定性评估。',
    value: '选型依据客观透明。',
    points: ['并发压测', '效果评测'],
  },
  {
    title: '满意度风险分析提示词体系',
    tag: '研究型项目 / Prompt',
    icon: ShieldAlert,
    status: '运行中',
    accent: 'indigo',
    description: '设计高精度提示词体系，精准识别服务中的不满意风险。',
    value: '前置化风险预警。',
    points: ['提示词工程', '逻辑链'],
  },
  // Engineering
  {
    title: '内网离线部署与国产化适配',
    tag: '工程实践 / 交付',
    icon: HardDriveDownload,
    status: '交付实践',
    accent: 'slate',
    description: '面向内网和国产化环境，整理应用、镜像和依赖交付方案。',
    value: '实现私有化可靠交付。',
    points: ['Docker', 'Nginx'],
  },
  {
    title: '自动化脚本与接口测试',
    tag: '工程实践 / 自动化',
    icon: Terminal,
    status: '生产力',
    accent: 'blue',
    description: '通过 Python 与 Shell 脚本实现系统巡检、接口监测与自动化运维。',
    value: '提升系统稳定性。',
    points: ['Python', 'Shell'],
  },
  {
    title: '前端视觉优化与大屏适配',
    tag: '工程实践 / 前端',
    icon: Layout,
    status: '已上线',
    accent: 'sky',
    description: '针对不同分辨率大屏进行响应式适配与视觉层级重构。',
    value: '提升大屏展示一致性。',
    points: ['CSS3', '响应式'],
  },
  {
    title: 'AI 编程规范与 Skills 沉淀',
    tag: '工程实践 / 沉淀',
    icon: Code2,
    status: '进行中',
    accent: 'emerald',
    description: '总结 AI 协同编程的最佳实践、模板与自定义技能库。',
    value: '提升 AI 编程确定性。',
    points: ['方法论', '模板库'],
  },
];

const articles = [
  {
    title: '为什么很多 AI 应用停留在 Demo，而无法进入真实业务？',
    tag: 'AI 应用方法论',
    status: '写作中',
  },
  {
    title: '我如何理解“上下文压缩”：让 AI 真正听懂业务问题',
    tag: '智慧税务观察',
    status: '写作中',
  },
  {
    title: 'AI 编程不是让模型自由发挥，而是持续监督、纠偏和验收',
    tag: 'AI 编程实践',
    status: '写作中',
  },
  {
    title: '一个政务数据大屏，应该展示判断逻辑，而不是堆满图表',
    tag: '数据大屏设计',
    status: '写作中',
  },
  {
    title: 'RAG 知识库的关键不是向量库，而是知识组织方式',
    tag: 'RAG 与智能体',
    status: '写作中',
  },
  {
    title: '内网环境部署 AI 应用，真正难的是什么？',
    tag: '内网部署笔记',
    status: '写作中',
  },
];

const futureDirections = [
  {
    title: '真实场景 AI 应用',
    desc: '从税务、政务和财税服务中的小切口出发，做能真实使用的工具。',
    icon: Cpu,
  },
  {
    title: '自动化办公',
    desc: '探索资料整理、报告生成、月报撰写和流程脚本的 AI 化。',
    icon: Settings,
  },
  {
    title: '轻量产品',
    desc: '围绕财税知识库、智能问答、数据看板和分析报告做小型产品验证。',
    icon: Database,
  },
  {
    title: '副业共创',
    desc: '欢迎对 AI 副业、财税智能工具和数据可视化感兴趣的朋友交流共创。',
    icon: Sparkles,
  },
];

const contactTags = [
  'AI 应用原型',
  '财税知识库',
  '自动化办公',
  '数据大屏',
  '智能分析报告',
  '内网部署交流',
  'AI 副业共创',
];

const projectAccentClasses: Record<ProjectAccent, { icon: string; status: string; glow: string; border: string }> = {
  sky: { icon: 'text-sky-400', status: 'bg-sky-500/10 text-sky-400', glow: 'shadow-[0_0_20px_rgba(56,189,248,0.2)]', border: 'border-sky-500/20' },
  indigo: { icon: 'text-indigo-400', status: 'bg-indigo-500/10 text-indigo-400', glow: 'shadow-[0_0_20px_rgba(129,140,248,0.2)]', border: 'border-indigo-500/20' },
  blue: { icon: 'text-blue-400', status: 'bg-blue-500/10 text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]', border: 'border-blue-500/20' },
  purple: { icon: 'text-purple-400', status: 'bg-purple-500/10 text-purple-400', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]', border: 'border-purple-500/20' },
  cyan: { icon: 'text-cyan-400', status: 'bg-cyan-500/10 text-cyan-400', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]', border: 'border-cyan-500/20' },
  emerald: { icon: 'text-emerald-400', status: 'bg-emerald-500/10 text-emerald-400', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]', border: 'border-emerald-500/20' },
  slate: { icon: 'text-slate-400', status: 'bg-slate-500/10 text-slate-400', glow: 'shadow-[0_0_20px_rgba(100,116,139,0.2)]', border: 'border-slate-500/20' },
  amber: { icon: 'text-amber-400', status: 'bg-amber-500/10 text-amber-400', glow: 'shadow-[0_0_20px_rgba(245,158,11,0.2)]', border: 'border-amber-500/20' },
};

const contactEmail = '1530551381 [at] qq.com';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const popIn = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

// --- Sub Components ---

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
    >
      <div className="space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-sky-400/80">
          {eyebrow}
        </span>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-lg leading-relaxed text-slate-400 md:border-l md:border-white/10 md:pl-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function DirectorDesk() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[2.25rem] border border-sky-300/15 bg-[#07111f]/80 p-3 shadow-[0_24px_90px_rgba(2,132,199,0.18)] backdrop-blur-xl lg:p-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.20),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(99,102,241,0.20),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-sky-300/25 to-transparent" />
      <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent" />

      <div className="relative rounded-[1.8rem] border border-white/10 bg-black/20 p-5 lg:p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-[10px] font-black tracking-[0.25em] text-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
              智慧税务调度中
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">AI 工程化导演台</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">从真实业务输入，到智能系统运行</p>
          </div>
          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-right sm:block">
            <p className="text-[10px] font-black tracking-[0.25em] text-slate-500">链路</p>
            <p className="mt-1 text-lg font-black text-sky-200">4 层</p>
          </div>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/20 bg-sky-300/10 shadow-[0_0_44px_rgba(56,189,248,0.28)] sm:block" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#030712] px-4 py-3 text-center shadow-xl sm:block">
            <Sparkles className="mx-auto mb-1 h-4 w-4 text-sky-300" />
            <p className="text-[10px] font-black tracking-[0.2em] text-white">导演</p>
          </div>

          {directorFlow.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 + idx * 0.1 }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${step.bg} ${step.color} ring-1 ring-white/10`}>
                  <step.icon size={20} />
                </div>
                <span className="text-[10px] font-black tracking-[0.25em] text-white/20">0{idx + 1}</span>
              </div>
              <h4 className="text-lg font-black text-white">{step.title}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {step.items.map((item) => (
                  <span key={item} className="rounded-lg border border-white/5 bg-black/20 px-2.5 py-1 text-[11px] font-bold text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 rounded-[1.6rem] border border-sky-300/10 bg-sky-300/[0.045] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-slate-300">
            <span>业务理解</span>
            <ChevronRight size={14} className="text-sky-300" />
            <span>上下文压缩</span>
            <ChevronRight size={14} className="text-sky-300" />
            <span>应用交付</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MethodFlow() {
  return (
    <div className="w-full px-6 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/8 bg-white/[0.025] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="grid gap-2 md:grid-cols-6">
          {methodSteps.map((step, idx) => (
            <motion.div 
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl px-3 py-4 text-center transition-colors hover:bg-white/[0.04]"
            >
              <div className="mx-auto mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-sky-300/20 bg-sky-300/10 text-[10px] font-black text-sky-200">
                {idx + 1}
              </div>
              <span className="text-xs font-bold tracking-widest text-slate-400 transition-colors group-hover:text-white">{step}</span>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyContact = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail.replace(' [at] ', '@'));
      setCopyStatus('copied');
      window.setTimeout(() => setCopyStatus('idle'), 1800);
    } catch (error) {
      console.error('Failed to copy contact email.', error);
      setCopyStatus('failed');
      window.setTimeout(() => setCopyStatus('idle'), 2200);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-50 font-sans selection:bg-sky-500/30 overflow-x-hidden">
      {/* Global Decor */}
      <div className="noise-overlay" />
      <motion.div className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" style={{ scaleX }} />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-sky-900/20 blur-[120px]" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[120px]" 
        />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      {/* Header */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 shadow-xl' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-sky-500/20 transition-all"
            >
              <span className="text-black font-black text-xl italic leading-none">W</span>
            </motion.div>
            <span className="text-xl font-bold tracking-tighter uppercase">SDWYF</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sky-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://github.com/SDWYF" target="_blank" rel="noreferrer" className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-colors" aria-label="代码主页">
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[101] bg-[#030712] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 mt-16">
              {navItems.map((item, i) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-4xl font-black tracking-tighter uppercase hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-300 font-bold text-xs md:text-sm backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              体制内拥抱 AI 的先行者
            </motion.div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tighter md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem]">
                <span className="block text-white">智慧税务 AI 引擎</span>
                <GradientText className="from-sky-300 via-indigo-300 to-cyan-100 drop-shadow-sm">赋能业务工程化落地</GradientText>
              </h1>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-sky-400/20 bg-sky-400/5">
                   <ShieldCheck size={14} className="text-sky-400" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-sky-200">智慧税务</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-indigo-400/20 bg-indigo-400/5">
                   <Cpu size={14} className="text-indigo-400" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-indigo-200">AI 工程化</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-400/20 bg-emerald-400/5">
                   <Database size={14} className="text-emerald-400" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200">数据治理</span>
                </div>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-base md:text-xl text-slate-400 leading-8 font-medium"
            >
              面向 12366 热线、征纳互动、满意度风险、财税知识库与风险图谱等真实场景，我持续探索 AI 如何在真实业务、真实流程与真实约束中完成工程化落地。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {roleTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs md:text-sm font-bold text-slate-300 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#capabilities" className="px-7 py-4 bg-white text-black font-black tracking-widest rounded-2xl hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-white/5 flex items-center gap-2">
                查看能力地图 <ChevronRight size={18} />
              </a>
              <a href="#projects" className="px-7 py-4 border border-white/10 hover:bg-white/5 font-black tracking-widest rounded-2xl transition-all">
                查看项目经历
              </a>
            </div>
          </div>

          <DirectorDesk />
        </div>
      </section>

      {/* Methodology Flow */}
      <MethodFlow />

      {/* 关于我 / About Me */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="关于我"
            title="我是谁"
            description="我是一名 AI 应用实践者，专注于大语言模型、RAG 知识库、智能体与数据大屏在智慧税务场景的落地。"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: '关注场景',
                desc: '12366 热线、征纳互动、满意度风险、财税知识库和风险图谱。',
                icon: MessageCircle
              },
              {
                title: '我的角色',
                desc: '需求拆解、AI 编程监督、可视化设计、部署交付。',
                icon: UserCircle
              },
              {
                title: '边界意识',
                desc: '不把 AI 当万能答案，更关注数据来源、业务约束、人工复核和真实部署环境。',
                icon: ShieldCheck
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="h-full p-8 rounded-[2.5rem]">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{card.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 能力地图 / Capability Map */}
      <section id="capabilities" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="能力地图"
            title="核心专业能力"
            description="全链路覆盖：从模糊的税务痛点，到可用的智慧系统。"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {capabilityMap.map((capability) => (
              <motion.div 
                key={capability.title}
                variants={popIn}
              >
                <SpotlightCard className="flex min-h-[340px] flex-col p-8 rounded-[2.5rem] border-white/5 hover:border-sky-500/30 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:bg-sky-500/10 transition-all duration-500">
                    <capability.icon size={24} />
                  </div>
                  <h4 className="text-2xl font-black mb-3 tracking-tight">{capability.title}</h4>
                  <p className="mb-8 text-sm leading-6 text-slate-400">{capability.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {capability.items.map(item => (
                      <span key={item} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 项目经历 / Project Experience */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="项目经历" 
            title="实践案例" 
            description="分为旗舰项目、研究型项目与工程实践三个维度。"
          />
          
          {/* Tier 1: Flagship */}
          <div className="mb-20">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-8 ml-2">旗舰项目</h3>
            <div className="grid lg:grid-cols-1 gap-8">
              {projects.filter(p => p.isFlagship).map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard className="p-8 lg:p-12 rounded-[3.5rem]">
                    <div className="grid lg:grid-cols-[0.4fr_1fr] gap-12">
                      <div className="space-y-6">
                        <div className={`w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center ${projectAccentClasses[p.accent].icon} ${projectAccentClasses[p.accent].glow}`}>
                          <p.icon size={40} />
                        </div>
                        <div>
                          <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${projectAccentClasses[p.accent].status} mb-2`}>
                            {p.status}
                          </div>
                          <h4 className="text-3xl font-black mb-4 leading-tight">{p.title}</h4>
                          <div className="flex gap-3">
                             <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                               <ShieldCheck size={14} /> 已脱敏
                             </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-sky-400/60">一句话价值</p>
                            <p className="text-slate-200 font-bold leading-relaxed">{p.value}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">业务问题</p>
                            <p className="text-sm text-slate-400 leading-relaxed">{p.problem}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">我的角色</p>
                            <p className="text-sm text-slate-400 leading-relaxed">{p.role}</p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">解决路径</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {p.path?.map((step, sIdx) => (
                                <div key={step} className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-slate-300">{step}</span>
                                  {sIdx < (p.path?.length || 0) - 1 && <ChevronRight size={12} className="text-slate-600" />}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                             <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">关键词</p>
                             <div className="flex flex-wrap gap-2 pt-1">
                               {p.points.map(pt => (
                                 <span key={pt} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                   {pt}
                                 </span>
                               ))}
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tier 2: Research */}
          <div className="mb-20">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-8 ml-2">研究型项目</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.filter(p => p.tag.includes('研究型')).map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard className="h-full p-6 rounded-[2rem] border-white/5">
                    <div className={`w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center ${projectAccentClasses[p.accent].icon} mb-4`}>
                      <p.icon size={20} />
                    </div>
                    <h4 className="text-lg font-black mb-2 leading-tight">{p.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.description}</p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                       {p.points.map(pt => (
                         <span key={pt} className="text-[9px] font-bold text-slate-500 uppercase">{pt}</span>
                       ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tier 3: Engineering */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-8 ml-2">工程实践</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.filter(p => p.tag.includes('工程实践')).map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard className="h-full p-6 rounded-[2rem] border-white/5">
                    <div className={`w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center ${projectAccentClasses[p.accent].icon} mb-4`}>
                      <p.icon size={20} />
                    </div>
                    <h4 className="text-lg font-black mb-2 leading-tight">{p.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.description}</p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                       {p.points.map(pt => (
                         <span key={pt} className="text-[9px] font-bold text-slate-500 uppercase">{pt}</span>
                       ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 文章博客 / Articles */}
      <section id="articles" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="文章博客"
            title="思考沉淀"
            description="记录关于 AI 应用落地、业务理解与工程实践的持续思考。"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles.map((article) => (
              <motion.div
                key={article.title}
                variants={popIn}
              >
                <SpotlightCard className="group flex min-h-[220px] flex-col justify-between rounded-[2.5rem] p-8 border-white/5">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400/70">{article.tag}</span>
                      <span className="text-[10px] font-bold text-slate-500 px-2 py-0.5 rounded-full border border-white/10 bg-white/5">{article.status}</span>
                    </div>
                    <h3 className="text-xl font-black leading-tight group-hover:text-sky-300 transition-colors">{article.title}</h3>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-500">
                    即将更新 <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 未来方向 / Future Directions */}
      <section id="future" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="未来方向"
            title="持续探索"
            description="继续探索 AI 在财税知识库、自动化办公、智能分析报告和数据看板中的轻量化应用。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {futureDirections.map((dir, idx) => (
              <motion.div
                key={dir.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="h-full p-8 rounded-[2.5rem] border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                    <dir.icon size={24} />
                  </div>
                  <h3 className="text-xl font-black mb-3">{dir.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{dir.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我 / Contact */}
      <footer id="contact" className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-sky-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-start">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                保持 <br /><span className="text-sky-400">联系</span>
              </h2>
              <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
                如果你也关注 AI 应用落地、财税智能工具、数据可视化、知识库问答、自动化办公或 AI 副业共创，欢迎联系我交流。
              </p>
              
              <div className="flex flex-wrap gap-3">
                {contactTags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-10 lg:pt-10">
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">联系方式</p>
                <button
                  type="button"
                  onClick={handleCopyContact}
                  className="w-full flex items-center justify-between gap-4 px-8 py-6 bg-white text-black font-black uppercase tracking-[0.1em] rounded-3xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-white/5 group"
                >
                  <div className="flex items-center gap-4">
                    <Mail size={22} />
                    <span>{copyStatus === 'copied' ? '已复制邮件地址' : '复制电子邮箱'}</span>
                  </div>
                  <div className="text-[10px] font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                    1530551381 [at] qq.com
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/SDWYF" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 border border-white/10 hover:bg-white/5 font-black uppercase tracking-[0.1em] text-xs rounded-2xl transition-all">
                  <ArrowUpRight size={16} /> 代码主页
                </a>
                <div className="flex items-center justify-center gap-3 px-6 py-4 border border-white/10 bg-white/5 text-slate-400 font-black uppercase tracking-[0.1em] text-[10px] rounded-2xl">
                  微信联系: 邮件预约
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2026 SDWYF - AI 应用实践者</p>
            <div className="flex gap-8">
              <a href="#top" className="hover:text-white transition-colors">回到顶部</a>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-sky-500" />
                AI 协同设计与开发
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
