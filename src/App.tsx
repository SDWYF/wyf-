import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { 
  ArrowUpRight, 
  BarChart3, 
  BookOpenText, 
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
  Github
} from 'lucide-react';
import GradientText from './components/GradientText';
import BlurText from './components/react-bits/BlurText';
import SpotlightCard from './components/react-bits/SpotlightCard';

const focusTags = [
  '智慧税务实践', 'AI 应用落地', 'RAG 知识库', '政务数据大屏',
  '服务质效分析', '风险图谱探索', '内网离线部署', 'AI Agent 工作流'
];

const navItems = [
  { label: '项目', href: '#projects' },
  { label: '技术栈', href: '#stack' },
  { label: '文章', href: '#articles' },
  { label: '合作', href: '#collaboration' },
  { label: '联系', href: '#contact' },
];

const heroMetrics = [
  { label: 'AI 原型', value: '08' },
  { label: '业务链路', value: '24+' },
  { label: '离线部署', value: 'INTRA' },
];

type ProjectAccent = 'sky' | 'indigo' | 'blue' | 'purple' | 'cyan' | 'emerald' | 'slate' | 'amber';

type Project = {
  title: string;
  tag: string;
  icon: LucideIcon;
  status: string;
  accent: ProjectAccent;
  description: string;
  points: string[];
};

const projects: Project[] = [
  {
    title: '翔宇析税：税费服务质效智能分析系统',
    tag: 'Flagship / AI Analysis',
    icon: BarChart3,
    status: '已落地',
    accent: 'sky',
    description: '面向热线、互动、办税服务等场景，探索数据资产管理、AI 辅助分析、热点诉求归集与质效治理闭环。',
    points: ['数据导入与资产化', '满意度风险识别', '分析台账沉淀', 'Docker 离线部署'],
  },
  {
    title: '12366 与征纳互动满意度风险分析',
    tag: 'Service Quality / NLP',
    icon: ShieldAlert,
    status: '运行中',
    accent: 'indigo',
    description: '围绕咨询文本和服务过程记录，识别潜在不满意触发点，辅助发现共性诉求、高频问题和差评风险。',
    points: ['风险等级判断', '共性诉求归集', '报告模板生成', '防差评指引'],
  },
  {
    title: '征纳服务质量态势感知大屏',
    tag: 'Dashboard / Visualization',
    icon: Monitor,
    status: '已上线',
    accent: 'blue',
    description: '以“健康度、风险点、热点趋势、处置跟踪”为主线，构建服务质效监控与展示驾驶舱。',
    points: ['ECharts 可视化', '1920×1080 适配', '风险预警体系', '趋势监控'],
  },
  {
    title: '税务风险图谱检索智能体',
    tag: 'Research / Graph + LLM',
    icon: Network,
    status: '实验性',
    accent: 'purple',
    description: '探索将案例结构化、知识图谱、相似检索和大模型分析结合，用于辅助发现风险线索和相似案例。',
    points: ['实体关系抽取', '相似案例检索', '图模式匹配', '可解释输出'],
  },
  {
    title: 'RAG 智能问税 / 智能导税原型',
    tag: 'RAG / Knowledge Base',
    icon: MessageSquareText,
    status: '内测中',
    accent: 'cyan',
    description: '基于政策、指引和流程材料，构建可溯源、可复核的智能问答与办税路径推荐系统。',
    points: ['政策知识库', '引用依据输出', '多轮问答', 'Dify 工作流'],
  },
  {
    title: '智慧税务月报自动生成 Agent',
    tag: 'Agent / Content Automation',
    icon: FileJson,
    status: '生产力',
    accent: 'emerald',
    description: '通过多 Agent 流程完成资讯搜集、知识整合、主题制定、撰写、审稿、排版和推送。',
    points: ['资讯搜集 Agent', '撰写审稿协同', '内容数据库', '自动排版'],
  },
  {
    title: '内网离线部署与国产化适配实践',
    tag: 'Deployment / Intranet',
    icon: HardDriveDownload,
    status: '技术栈',
    accent: 'slate',
    description: '面向无外网、内网、国产化环境，整理前后端、AI 工具、Docker 镜像与依赖包的交付方案。',
    points: ['麒麟 V10 适配', 'Docker 镜像迁移', 'Nginx 静态服务', '一键启动脚本'],
  },
  {
    title: 'AI 模型评测与接口压测实践',
    tag: 'Evaluation / Reliability',
    icon: Zap,
    status: '工程化',
    accent: 'amber',
    description: '面向内网大模型接口，设计模型效果测试、并发压测、响应稳定性评估和多模型横向对比。',
    points: ['并发压测', '错误率统计', '指数回退', '输出样例记录'],
  },
];

const projectAccentClasses: Record<ProjectAccent, { icon: string; status: string; glow: string }> = {
  sky: { icon: 'text-sky-400', status: 'bg-sky-500/10 text-sky-400', glow: 'shadow-[0_0_20px_rgba(56,189,248,0.2)]' },
  indigo: { icon: 'text-indigo-400', status: 'bg-indigo-500/10 text-indigo-400', glow: 'shadow-[0_0_20px_rgba(129,140,248,0.2)]' },
  blue: { icon: 'text-blue-400', status: 'bg-blue-500/10 text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]' },
  purple: { icon: 'text-purple-400', status: 'bg-purple-500/10 text-purple-400', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]' },
  cyan: { icon: 'text-cyan-400', status: 'bg-cyan-500/10 text-cyan-400', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]' },
  emerald: { icon: 'text-emerald-400', status: 'bg-emerald-500/10 text-emerald-400', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]' },
  slate: { icon: 'text-slate-400', status: 'bg-slate-500/10 text-slate-400', glow: 'shadow-[0_0_20px_rgba(100,116,139,0.2)]' },
  amber: { icon: 'text-amber-400', status: 'bg-amber-500/10 text-amber-400', glow: 'shadow-[0_0_20px_rgba(245,158,11,0.2)]' },
};

const contactEmail = 'hello@example.com';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const popIn = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
    >
      <div className="space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-sky-400/80">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-black tracking-tight md:text-5xl lg:text-6xl">
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

function NeuralBackground() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="h-full w-full opacity-20" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Animated Lines */}
        <motion.path
          d="M100,200 Q400,100 700,300 T400,600 T100,400"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,10"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
        {/* Floating Nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 800}
            cy={Math.random() * 800}
            r={1 + Math.random() * 2}
            fill="url(#nodeGradient)"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-50 font-sans selection:bg-sky-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(3,7,18,0.5)_100%)]" />
      </div>

      {/* Header */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 shadow-xl' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-sky-500/20 transition-all"
            >
              <span className="text-black font-black text-xl italic">W</span>
            </motion.div>
            <span className="text-xl font-bold tracking-tighter uppercase">WYF</span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://github.com/SDWYF" target="_blank" rel="noreferrer" className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10"
            >
              {isMenuOpen ? <X /> : <Menu />}
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
            className="fixed inset-0 z-[101] bg-[#030712] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 mt-20">
              {navItems.map((item, i) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-5xl font-black tracking-tighter uppercase hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        <NeuralBackground />
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 font-bold text-sm backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              AI × 智慧税务 × 数字化实践
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter uppercase">
              <span className="block text-slate-400 opacity-50">AI & Smart</span>
              <GradientText className="from-sky-400 via-indigo-400 to-sky-400 drop-shadow-2xl">Taxation</GradientText>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-xl md:text-2xl text-slate-400 leading-relaxed font-medium"
            >
              将大语言模型与税务实务结合，探索 RAG 知识库、智能智能体与自动化流水线。
            </motion.p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#projects" className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
                浏览项目
              </a>
              <a href="#contact" className="px-10 py-5 border border-white/10 hover:bg-white/5 font-black uppercase tracking-widest rounded-2xl transition-all">
                合作咨询
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative aspect-square hidden lg:block"
          >
            {/* Orbit Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute inset-20 border border-dashed border-sky-500/20 rounded-full animate-spin-slow direction-reverse" />
            <div className="absolute inset-40 border border-white/5 rounded-full animate-spin-slow" />
            
            {/* Floating Stats */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
              <div className="absolute flex flex-col items-center">
                <span className="text-9xl font-black italic tracking-tighter text-white/10">AI</span>
              </div>
            </div>

            {heroMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1.5 }}
                className={`absolute p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl ${
                  i === 0 ? 'top-0 right-0' : i === 1 ? 'bottom-20 left-0' : 'top-1/2 -right-10'
                }`}
              >
                <p className="text-4xl font-black italic">{m.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-40 mt-1">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Portfolio" 
            title="核心项目" 
            description="基于真实税务痛点，构建可落地的 AI 解决方案。从 RAG 知识库到 Agent 自动化工作流。"
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((p) => (
              <motion.div key={p.title} variants={popIn}>
                <SpotlightCard className="group h-full bg-white/[0.02] border-white/5 hover:border-sky-500/30 transition-all p-10 rounded-[3rem]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-5 rounded-3xl bg-white/5 ring-1 ring-white/10 ${projectAccentClasses[p.accent].icon} ${projectAccentClasses[p.accent].glow}`}>
                        <p.icon size={32} />
                      </div>
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400">
                          <ShieldCheck size={12} /> 已脱敏
                        </span>
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${projectAccentClasses[p.accent].status}`}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black mb-4 group-hover:text-sky-400 transition-colors">
                      {p.title}
                    </h3>
                    
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      {p.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {p.points.map(pt => (
                        <span key={pt} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-slate-300">
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Capabilities" title="技术雷达" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'ECharts'], icon: Monitor },
              { title: 'AI Engineering', items: ['RAG', 'Agent', 'Dify', 'Prompt'], icon: Zap },
              { title: 'Backend', items: ['Python', 'FastAPI', 'SQLite', 'Docker'], icon: Layers3 },
              { title: 'Deployment', items: ['Nginx', 'KylinOS', 'PowerShell', 'CI/CD'], icon: HardDriveDownload },
            ].map((stack, i) => (
              <motion.div 
                key={stack.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                  <stack.icon size={24} />
                </div>
                <h4 className="text-xl font-black mb-6 uppercase tracking-tighter">{stack.title}</h4>
                <div className="space-y-3">
                  {stack.items.map(item => (
                    <div key={item} className="flex items-center gap-2 text-slate-400">
                      <ChevronRight size={14} className="text-sky-500" />
                      <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration / CTA */}
      <section id="collaboration" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle eyebrow="Let's Build" title="共创未来" description="正在寻找 AI × 财税场景的共创机会，从小切口切入，构建高价值应用。" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {collaborations.map((c, i) => (
              <motion.div 
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-left group"
              >
                <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Sparkles size={24} />
                </div>
                <h5 className="text-xl font-black italic">{c}</h5>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">提供从原型设计、技术实现到私有化部署的全流程支持。</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-sky-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-12">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Start a <br /><span className="text-sky-400">Conversation</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(contactEmail);
                  alert('邮箱已复制！');
                }}
                className="flex items-center gap-4 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] rounded-[2rem] hover:scale-105 transition-all shadow-2xl shadow-white/10"
              >
                <Mail /> 复制联系方式
              </button>
              <a href="https://github.com/SDWYF" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-12 py-6 border border-white/10 hover:bg-white/5 font-black uppercase tracking-[0.2em] rounded-[2rem] transition-all">
                <Github /> GitHub
              </a>
            </div>
          </div>
          
          <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <p>© 2026 WYF - SMART TAXATION PRACTITIONER</p>
            <div className="flex gap-8">
              <a href="#top" className="hover:text-white transition-colors">BACK TO TOP</a>
              <span>CRAFTED WITH AI</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
