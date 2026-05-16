import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Camera,
  CheckCircle2,
  CircleDot,
  GitBranch,
  Globe2,
  Mail,
  Moon,
  Orbit,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Zap,
} from "lucide-react";
import { Toaster, toast } from "sonner";

const navItems = [
  { id: "about", label: "About" },
  { id: "thinking", label: "Thinking" },
  { id: "systems", label: "Systems" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

const solvingItems = [
  "지식재산권 도메인에서의 정보 비대칭",
  "보험시장에서의 정보 비대칭",
  "정보 비대칭과 구조적 비효율",
  "고협업 환경에서의 워크플로우 자동화",
];

const hashtags = [
  "#SportsAI",
  "#SystemsThinking",
  "#GlobalBuilder",
  "#ExecutionDriven",
  "#ComputerVision",
];

const frameworks = [
  {
    title: "Deconstruct",
    body: "겉으로 보이는 현상이 아니라, 그 뒤의 이해관계·데이터 흐름·구조적 마찰까지 분해해 본질을 정의합니다.",
  },
  {
    title: "Reframe",
    body: "기존 전제와 관성을 의심하고, 더 단순하면서도 확장 가능한 구조로 문제를 다시 설계합니다.",
  },
  {
    title: "Systemize",
    body: "아이디어를 반복 가능하고 실행 가능한 시스템으로 전환합니다. 자동화·워크플로우·데이터 구조화를 중요하게 생각합니다.",
  },
  {
    title: "Validate & Iterate",
    body: "빠르게 검증하고, 피드백을 기반으로 지속적으로 수정하며 실제로 작동하는 구조를 만듭니다.",
  },
];

const stats = [
  ["9+", "Years Global Experience"],
  ["7500", "Community Growth Reached"],
  ["10+", "Projects & Research Built"],
];

const iconMap = { Target, Search, Brain, GitBranch, Zap };

const projects = [
  {
    status: "Validated",
    title: "STECH — 스포츠 데이터 접근성 문제",
    description:
      "고가의 분석 솔루션에 접근하기 어려운 팀들을 위해, Computer Vision 기반 스포츠 분석 시스템을 구축하고 있습니다.",
    focus: [
      "Player Tracking",
      "Object Detection",
      "AI-assisted Coaching Workflow",
      "Sports Intelligence",
    ],
    icon: "Target",
  },
  {
    status: "Research",
    title: "Monocular Player Tracking Research",
    description:
      "“CBY: Monocular Player Tracking in American Football via Domain-Adapted Detection and Vision-Language Labeling” 논문의 2저자로 참여했습니다.",
    focus: [
      "Computer Vision",
      "Sports Tracking",
      "Domain Adaptation",
      "Vision-Language Labeling",
    ],
    icon: "Search",
  },
  {
    status: "Exploring",
    title: "지식재산권 도메인의 정보 비대칭",
    description:
      "특허·상표·저작권 영역에서 전문가와 창작자 사이에 발생하는 정보 격차를 줄이기 위한 의사결정 인프라를 탐구하고 있습니다.",
    focus: [
      "IP Intelligence",
      "Information Architecture",
      "Decision Support",
      "Legal Workflow",
    ],
    icon: "Search",
  },
  {
    status: "Exploring",
    title: "보험 시장의 정보 비대칭",
    description:
      "보험 설계사와 소비자 간 정보 격차로 인해 발생하는 구조적 비효율 문제를 탐구하고 있습니다.",
    focus: [
      "Decision Infrastructure",
      "Recommendation System",
      "Workflow Simplification",
    ],
    icon: "Brain",
  },
  {
    status: "Exploring",
    title: "조직 내 지식 단절 문제",
    description:
      "대규모 조직에서 인수인계와 온보딩이 비효율적으로 이루어지는 이유를 지식 구조와 운영 시스템 관점에서 탐구하고 있습니다.",
    focus: [
      "Knowledge Mapping",
      "Workflow Infrastructure",
      "Operational Systems",
    ],
    icon: "GitBranch",
  },
  {
    status: "Past Work",
    title: "탄소배출권 신뢰 인프라",
    description:
      "탄소배출권의 이중 사용 및 신뢰성 문제를 해결하기 위한 블록체인 기반 환경 시스템 프로젝트에 참여했습니다.",
    focus: ["Climate Tech", "Carbon Credits", "Blockchain Infrastructure", "ESG Systems"],
    icon: "Zap",
  },
];

const timeline = [
  ["2026", ["Computer Vision 논문 2저자", "한국연구재단 특허 프로젝트 참여", "HVC 창업연합동아리 회장"]],
  [
    "2025",
    [
      "한양대학교 창업중심대학 정부지원사업 선정",
      "HVC 창업연합동아리 부회장",
      "스포츠 데이터 분석 서비스 대표",
      "글로벌 챌린저 실리콘밸리 선정",
      "한양스타트업 아카데미 22기 수료",
      "한양대학교 벤처창업경진대회 본선 진출",
      "RISE 글로벌 산학협력 프로그램 선정",
      "SK A.Dot 서포터즈 수료",
    ],
  ],
  [
    "2024",
    [
      "ESG 블록체인 스타트업 마케팅 및 해외영업",
      "블록체인 커뮤니티 7500 팔로워 성장",
      "한양벤처클럽 최우수상",
    ],
  ],
  ["2023", ["COP28 한국관 전시 책임자"]],
  ["2022", ["육군창업경진대회 인사사령관 표창", "한미연합훈련 통역"]],
  ["2020", ["요양병원 매칭 플랫폼 마케팅 인턴"]],
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" &&
          "bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-slate-200",
        variant === "outline" &&
          "border border-slate-300/80 bg-white/40 text-slate-800 hover:border-slate-500 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-white/25",
        variant === "ghost" &&
          "text-slate-700 hover:bg-slate-200/70 dark:text-slate-200 dark:hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

function SectionLabel({ eyebrow, title, children }) {
  return (
    <div className="mb-8 grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-8">
      <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
        {eyebrow}
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
          {title}
        </h2>
        {children && (
          <div className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function NodeDiagram() {
  const nodes = [
    { x: 50, y: 92, label: "DATA" },
    { x: 178, y: 42, label: "VISION" },
    { x: 304, y: 92, label: "MODEL" },
    { x: 236, y: 178, label: "OPS" },
    { x: 94, y: 188, label: "COACH" },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-200/80 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.035]">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
          sports intelligence graph
        </div>
        <CircleDot className="h-4 w-4 text-amber-500" />
      </div>
      <svg viewBox="0 0 360 230" className="h-64 w-full" role="img" aria-label="Animated system node diagram">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-amber-500/80" />
          </marker>
        </defs>
        <motion.path
          d="M70 92 C110 60 136 44 178 42 C225 42 263 58 304 92 C290 132 274 160 236 178 C183 206 139 205 94 188 C76 155 64 126 70 92Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate-300 dark:text-white/15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {[0, 1, 2, 3, 4].map((index) => {
          const from = nodes[index];
          const to = nodes[(index + 1) % nodes.length];
          return (
            <motion.line
              key={`${from.label}-${to.label}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              markerEnd="url(#arrow)"
              className="stroke-slate-400/70 dark:stroke-white/25"
              strokeWidth="1"
              strokeDasharray="5 6"
              animate={{ strokeDashoffset: [18, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
          );
        })}
        {nodes.map((node, index) => (
          <g key={node.label}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="24"
              className="fill-white stroke-slate-300 dark:fill-[#0f0f16] dark:stroke-white/15"
              strokeWidth="1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.18 }}
            />
            <circle cx={node.x} cy={node.y} r="4" className="fill-amber-500" />
            <text
              x={node.x}
              y={node.y + 40}
              textAnchor="middle"
              className="fill-slate-500 font-mono text-[9px] dark:fill-slate-400"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function FounderPortfolio() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("about");
  const [solvingIndex, setSolvingIndex] = useState(0);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const dotX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const dotY = useSpring(mouseY, { stiffness: 80, damping: 22 });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSolvingIndex((index) => (index + 1) % solvingItems.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMove = (event) => {
      mouseX.set(event.clientX - 96);
      mouseY.set(event.clientY - 96);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const observers = navItems.map((item) => {
      const element = document.getElementById(item.id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.id);
        },
        { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const yearCount = useMemo(() => timeline.reduce((sum, [, items]) => sum + items.length, 0), []);

  const submitContact = (event) => {
    event.preventDefault();
    toast.success("Signal received.", {
      description: "Josh에게 전달할 협업 메시지 초안이 준비되었습니다.",
    });
    event.currentTarget.reset();
  };

  return (
    <main
      className={cn(
        dark ? "dark bg-[#0A0A0F] text-slate-100" : "bg-[#FAFAFA] text-slate-900",
        "relative min-h-screen overflow-hidden selection:bg-amber-300 selection:text-neutral-950",
      )}
    >
      <Toaster richColors theme={dark ? "dark" : "light"} position="bottom-right" />
      <motion.div
        className="pointer-events-none fixed z-50 hidden h-48 w-48 rounded-full bg-amber-400/20 blur-3xl md:block"
        style={{ x: dotX, y: dotY }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.45] dark:opacity-[0.24]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(71,85,105,0.34) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(250,250,250,0.66),rgba(250,250,250,0.92)_34%,rgba(250,250,250,1))] dark:bg-[linear-gradient(to_bottom,rgba(10,10,15,0.68),rgba(10,10,15,0.92)_34%,rgba(10,10,15,1))]" />

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#FAFAFA]/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#0A0A0F]/76">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-md border border-slate-300 bg-white font-mono text-xs font-semibold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
              JL
            </div>
            <div className="hidden leading-none sm:block">
              <div className="text-sm font-semibold tracking-tight text-neutral-950 dark:text-white">
                Josh Lee
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                founder systems lab
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-md px-3 py-2 text-xs font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white",
                  active === item.id && "text-slate-950 dark:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-[13px] h-px origin-center scale-x-0 bg-amber-500 transition-transform",
                    active === item.id && "scale-x-100",
                  )}
                />
              </a>
            ))}
          </nav>
          <Button
            aria-label="Toggle dark mode"
            variant="outline"
            className="h-9 w-9 px-0"
            onClick={() => setDark((value) => !value)}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
            >
              <Orbit className="h-3.5 w-3.5 text-amber-500" />
              Founder / Sports AI Builder / Systems Thinker
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="max-w-5xl text-[clamp(2.8rem,8.2vw,7.6rem)] font-semibold leading-[0.92] tracking-tight text-neutral-950 dark:text-white"
            >
              이상원
              <span className="block text-slate-500 dark:text-slate-400">(Josh Lee)</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
            >
              글로벌 감각과 실행력을 기반으로 복잡한 문제를 구조로 해체하고, 실행 가능한 시스템을 만드는 설계자
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-[auto_1fr]"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                Currently Solving
              </div>
              <div className="min-h-12 overflow-hidden rounded-lg border border-slate-200 bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.045] dark:text-white sm:text-base">
                <motion.div
                  key={solvingIndex}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  {solvingItems[solvingIndex]}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {hashtags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200 bg-white/50 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="lg:pb-2"
          >
            <NodeDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-200/80 bg-white/55 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.035]"
                >
                  <div className="font-mono text-2xl font-semibold text-neutral-950 dark:text-white">
                    {value}
                  </div>
                  <div className="mt-2 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel eyebrow="01 / profile" title="About">
            안녕하세요. 스포츠, AI, 데이터, 시스템 설계에 관심을 가지고 있는 이상원입니다.
          </SectionLabel>
        </Reveal>
        <Reveal className="grid gap-8 lg:grid-cols-[180px_1fr]">
          <div className="hidden lg:block" />
          <div className="grid gap-4 border-l border-slate-200 pl-6 text-[15px] leading-8 text-slate-700 dark:border-white/10 dark:text-slate-300 sm:text-lg sm:leading-9">
            <p>저는 단순히 문제를 해결하는 것보다, 왜 이런 구조가 생겼는지부터 다시 정의하는 과정에 더 큰 흥미를 느낍니다.</p>
            <p>9년간의 해외 경험과 다양한 문화권에서의 협업 경험을 바탕으로, 커뮤니케이션 문제·정보 비대칭·운영 비효율 같은 구조적 문제에 자연스럽게 관심을 가지게 되었습니다.</p>
            <p>미식축구 선수 경험과 스타트업 실무 경험을 통해, 엘리트 수준의 데이터 분석 시스템이 극소수에게만 접근 가능한 현실을 직접 체감했고, 현재는 STECH를 통해 스포츠 분석의 접근성을 확장하는 AI 시스템을 만들었습니다.</p>
            <p>Computer Vision, workflow automation, data infrastructure를 기반으로, 복잡한 조직과 시스템이 더 효율적으로 작동할 수 있는 구조를 탐구하고 있습니다.</p>
          </div>
        </Reveal>
      </section>

      <section id="thinking" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel eyebrow="02 / method" title="How I Think">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
              // systems & execution
            </span>
          </SectionLabel>
        </Reveal>
        <div className="grid gap-3 lg:grid-cols-4">
          {frameworks.map((item, index) => (
            <Reveal key={item.title}>
              <div className="group h-full rounded-lg border border-slate-200/80 bg-white/58 p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-400/70 dark:border-white/10 dark:bg-white/[0.035]">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                  <CheckCircle2 className="h-4 w-4 text-slate-400 transition group-hover:text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="systems" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel eyebrow="03 / portfolio" title="Selected Problems & Systems">
            기술적 호기심을 실제 문제 구조에 연결하고, 리서치와 제품 사이에서 작동하는 시스템을 설계합니다.
          </SectionLabel>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon];
            return (
              <Reveal key={project.title} className={index === 0 ? "lg:col-span-2" : ""}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className={cn(
                    "group h-full rounded-lg border border-slate-200/80 bg-white/62 p-5 shadow-sm backdrop-blur transition-colors hover:border-amber-400/80 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-amber-400/50",
                    index === 0 && "grid gap-5 sm:grid-cols-[1fr_0.65fr] sm:p-7",
                  )}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        {project.status}
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-7 flex flex-wrap content-start gap-2 sm:mt-0">
                    {project.focus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-md border border-slate-200 bg-white/55 px-2.5 py-1.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel eyebrow="04 / record" title="Experience Timeline">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
              {yearCount} signals across startups, research, sports, and global programs
            </span>
          </SectionLabel>
        </Reveal>
        <div className="grid gap-4">
          {timeline.map(([year, items]) => (
            <Reveal key={year}>
              <div className="grid gap-4 rounded-lg border border-slate-200/80 bg-white/54 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.032] sm:grid-cols-[110px_1fr]">
                <div className="font-mono text-2xl font-semibold text-neutral-950 dark:text-white">{year}</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {items.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 pb-10 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 rounded-lg border border-slate-200/80 bg-white/66 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-8 lg:grid-cols-[1fr_0.82fr]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
                05 / contact
              </div>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Let’s Build Something Meaningful For a Better World
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
                복잡한 문제를 구조적으로 해결하는 일, 그리고 새로운 시스템을 만드는 사람들과의 협업에 관심이 있습니다.
              </p>
              <div className="mt-8 grid gap-3 text-sm">
                <a className="group flex items-center gap-3 text-slate-700 hover:text-neutral-950 dark:text-slate-300 dark:hover:text-white" href="mailto:ethos614@gmail.com">
                  <Mail className="h-4 w-4 text-amber-500" />
                  ethos614@gmail.com
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </a>
                <a className="group flex items-center gap-3 text-slate-700 hover:text-neutral-950 dark:text-slate-300 dark:hover:text-white" href="https://www.linkedin.com/in/josh-sangwon-lee/">
                  <Globe2 className="h-4 w-4 text-amber-500" />
                  LinkedIn / josh-sangwon-lee
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </a>
                <a className="group flex items-center gap-3 text-slate-700 hover:text-neutral-950 dark:text-slate-300 dark:hover:text-white" href="https://www.instagram.com/strange_1e/">
                  <Camera className="h-4 w-4 text-amber-500" />
                  Instagram / strange_1e
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </a>
              </div>
            </div>
            <form onSubmit={submitContact} className="grid content-start gap-3">
              <input
                required
                placeholder="Name"
                className="h-11 rounded-md border border-slate-200 bg-white/70 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 dark:border-white/10 dark:bg-black/20 dark:text-white"
              />
              <input
                required
                inputMode="email"
                placeholder="Email"
                className="h-11 rounded-md border border-slate-200 bg-white/70 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 dark:border-white/10 dark:bg-black/20 dark:text-white"
              />
              <textarea
                required
                placeholder="What system should exist?"
                rows={6}
                className="resize-none rounded-md border border-slate-200 bg-white/70 px-3 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 dark:border-white/10 dark:bg-black/20 dark:text-white"
              />
              <Button type="submit" className="mt-2">
                Send Signal <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Reveal>
        <footer className="flex flex-col gap-3 border-t border-slate-200/80 py-8 text-xs text-slate-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 이상원. Built with curiosity and systems thinking.</span>
          <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.18em]">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
            systems in motion
          </span>
        </footer>
      </section>
    </main>
  );
}
