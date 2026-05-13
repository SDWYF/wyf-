import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import DataNexus from './components/DataNexus';
import {
  BookOpenText,
  BrainCircuit,
  ChartNoAxesCombined,
  ChevronRight,
  Code2,
  DatabaseZap,
  Mail,
  Menu,
  Moon,
  NotebookText,
  Phone,
  Sparkles,
  Sun,
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
  { icon: BookOpenText, text: '复旦大学电子信息在读' },
  { icon: DatabaseZap, text: '税务数字化实践' },
  { icon: BrainCircuit, text: 'AI 应用探索' },
  { icon: ChartNoAxesCombined, text: '数据分析与可视化' },
];

const currentFocus = [
  '复旦大学非全日制电子信息专业在读',
  '持续学习税务、AI、数据分析和系统开发',
  '在税务工作中参与 AI 应用、数字化系统建设和智能测评',
  '尝试把一线业务问题转化为可落地的数字化工具',
];

const strengths = [
  '业务问题抽象：从一线场景中发现真实问题，并转化为系统需求',
  'AI 应用设计：围绕质检分析、政策问答、风险识别等场景设计提示词和分析流程',
  '系统原型开发：使用 React、FastAPI、SQLite、Docker 等技术完成轻量系统建设',
  '数据分析表达：将分散数据转化为可视化结果、分析报告和决策参考',
  '材料与汇报能力：围绕项目价值、业务逻辑和落地路径形成汇报材料',
];

const futurePlans = [
  '推动 AI 与税务业务的深度结合',
  '探索智慧税务、财税数字化和企业端智能化改造',
  '沉淀数据分析和智能质检方法',
  '形成自己的项目作品集和知识体系',
  '做出一番真正属于自己的事业',
];

const hobbies = ['围棋', '旅游', '羽毛球', '足球', 'CSGO', '云顶之弈'];

const knowledgeSpaces = [
  {
    title: '项目复盘',
    desc: '记录项目如何被发现、如何推进、如何失败或落地，以及之后还能沉淀下什么。',
    icon: NotebookText,
  },
  {
    title: 'AI 与税务',
    desc: '思考 AI 如何辅助纳税服务质效分析、政策问答、风险识别与流程重构。',
    icon: BrainCircuit,
  },
  {
    title: '技术实践',
    desc: '沉淀 React、FastAPI、Docker、提示词工程和本地模型部署等实践记录。',
    icon: Code2,
  },
  {
    title: '个人成长',
    desc: '记录体制内年轻人如何建立技术能力，在规则、创新和自我价值之间寻找平衡。',
    icon: Sparkles,
  },
];

const projects = [
  {
    title: '翔宇析税：税费服务质效智能分析系统',
    desc: '面向 12366 热线、征纳互动质检、满意度风险识别和热点诉求归集的智能分析系统。',
    tags: ['核心项目', 'AI 分析', '智能报告'],
  },
  {
    title: '翔宇看税：办税服务厅运行与取叫号分析系统',
    desc: '来源于办税服务厅一线管理中的真实问题，将分散服务过程数据进行归集、统计和分析。',
    tags: ['核心项目', '大厅运行', '复盘反思'],
  },
  {
    title: '税务风险图谱：案例相似检索与智能分析项目',
    desc: '围绕税务风险案例结构化、关系建模、相似检索和大模型辅助分析进行方法探索。',
    tags: ['核心项目', '知识图谱', '风险分析'],
  },
  {
    title: '智能导引 / 翔宇问税：面向办税咨询与政策指引的 AI 助手',
    desc: '面向办税事项导引、常见问题问答、政策查询和办理流程指引的 AI 应用原型。',
    tags: ['核心项目', 'RAG', '智能导引'],
  },
];

const moreProjects = [
  { title: '办税驿站智慧大屏', desc: '围绕驿站运行数据展示、数据同步清洗和可视化驾驶舱的前端展示实践。' },
  { title: '一键享申报脚本', desc: '面向重复性申报流程的自动化脚本探索，用小工具解决小问题。' },
  { title: '小切口项目合集', desc: '沉淀工作流优化、提示词模板、数据处理小工具和 AI 辅助办公实践。' },
];

const contactMethods = [
  { label: 'QQ', value: '1530551381', action: 'copy', icon: Phone },
  { label: '微信', value: '15896165168', action: 'copy', icon: Phone },
  { label: '邮箱', value: '1530551381@qq.com', action: 'mail', icon: Mail },
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
        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{title}</span>
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const copyText = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(''), 1800);
  };

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
                  <tag.icon size={15} className="text-sky-400 opacity-80" />
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

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <GlassCard delay={0.1}>
              <h3 className="mb-10 text-3xl font-black text-white">🤯 我正在做什么</h3>
              <NumberList items={currentFocus} />
            </GlassCard>
            <GlassCard delay={0.2} className="lg:mt-16">
              <h3 className="mb-10 text-3xl font-black text-white">🧩 我的能力方向</h3>
              <NumberList items={strengths} />
            </GlassCard>
          </div>

          <div className="mt-8 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:items-start">
            <GlassCard delay={0.1}>
              <h3 className="mb-10 text-3xl font-black text-white">💫 我未来想做什么</h3>
              <NumberList items={futurePlans} />
            </GlassCard>
            <GlassCard delay={0.2} className="lg:mt-16">
              <h3 className="mb-10 text-3xl font-black text-white">🏸 工作之外 / 兴趣爱好</h3>
              <p className="text-lg leading-relaxed text-slate-300">工作和学习之外，我喜欢围棋、旅游、羽毛球、足球，也会打 CSGO 和云顶之弈。它们让我在技术和业务之外，保持对生活、策略和节奏的感知。</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200 shadow-sm">{hobby}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle emoji="⛳️" title="知识空间" desc="这里记录我在 AI、税务数字化、项目实践和个人成长中的思考。相比于展示结果，我更希望保留过程：问题是如何被发现的，方案是如何形成的，项目是如何推进的，以及失败之后还能沉淀下什么。" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {knowledgeSpaces.map((space, i) => (
              <GlassCard key={space.title} delay={i * 0.1} className="min-h-[260px] flex flex-col">
                <div className="mb-8 inline-flex rounded-2xl bg-sky-400/10 p-4">
                  <space.icon className="text-sky-400" size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-black text-white">{space.title}</h3>
                <p className="text-base font-medium leading-relaxed text-slate-400 flex-1">{space.desc}</p>
              </GlassCard>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-xl"
          >
            <p className="text-lg font-medium text-slate-300">前期没有文章也没关系，这里会先作为项目复盘、AI 与税务、技术实践和个人成长的长期沉淀入口。</p>
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
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-bold text-sky-200">{tag}</span>
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
                <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-b from-sky-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm" />
                <div className="relative rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.04]">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-400/20">
                    <method.icon className="text-sky-400" size={32} />
                  </div>
                  <p className="text-2xl font-black text-white">{method.label}</p>
                  <p className="mt-3 text-base font-semibold text-slate-400">{method.value}</p>
                  <p className="mt-6 text-sm font-bold text-sky-400 opacity-80 transition-opacity group-hover:opacity-100">
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
                '如果是 AI 应用或数据项目，我会优先确认业务流程、数据来源和验收标准。',
                '欢迎指出不清楚、不准确或不适合真实环境的地方，我们一起校准。'
              ]} />
            </GlassCard>
            <GlassCard className="lg:mt-12">
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
