import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "background", label: "Background" },
  { id: "work", label: "Work" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

const education = "한양대학교 국제학부 재학";

const roles = [
  ["前", "한양대학교 창업동아리 HVC 회장"],
  ["前", "스포츠 테크 스타트업 STECH 대표"],
  ["前", "ESG 블록체인 스타트업 마케팅 파트 및 해외 영업"],
  ["前", "대학 미식축구 크리에이터 UGC 운영자"],
  ["前", "한양대학교 제53대 총학생회 디자인국 차장"],
];

const currentFocus = [
  "지식재산권 도메인에서의 정보 비대칭",
  "고협업 환경에서의 워크플로우 자동화",
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
  ["7,500", "Community Growth"],
  ["10+", "Projects & Research"],
];

const projects = [
  {
    status: "Past Work",
    title: "STECH — 미식축구 데이터 접근성",
    href: "https://stechpro.ai",
    description:
      "고가의 분석 솔루션에 접근하기 어려운 미식축구 팀들을 위해, Computer Vision 기반 미식축구 분석 시스템을 구축했습니다.",
    focus: [
      "American Football",
      "Player Tracking",
      "Object Detection",
      "AI-assisted Coaching Workflow",
    ],
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
  },
  {
    status: "Past Work",
    title: "탄소배출권 신뢰 인프라",
    description:
      "탄소배출권의 이중 사용 및 신뢰성 문제를 해결하기 위한 블록체인 기반 환경 시스템 프로젝트에 참여했습니다.",
    focus: ["Climate Tech", "Carbon Credits", "Blockchain Infrastructure", "ESG Systems"],
  },
];

const timeline = [
  ["2026", ["Computer Vision 논문 2저자", "한국연구재단 특허 프로젝트 참여", "HVC 창업연합동아리 회장"]],
  [
    "2025",
    [
      "정부지원사업 창업중심대학 생애 최초 선정",
      "HVC 창업연합동아리 부회장",
      "스포츠 데이터 분석 서비스 대표",
      "글로벌 챌린저 인 실리콘밸리 참가자 선정",
      "한양스타트업 아카데미 22기 수료",
      "성균관대 Soul Mate Pioneers 본선 진출",
      "한양대학교 제30회 벤처창업경진대회 본선 진출",
      "한양대학교 RISE 지산학협력단 글로벌 산학협력 선도 프로그램 선정",
      "서울미식축구 서포터즈 SNS팀 팀장",
      "SK 에이닷 서포터즈 활동 수료",
    ],
  ],
  [
    "2024",
    [
      "ESG 블록체인 스타트업 마케팅 파트 및 해외 영업",
      "블록체인 커뮤니티 7500 팔로워 성장",
      "대학 미식축구 크리에이터 UGC 운영자",
      "한양대학교 창업지원단 소속 창업동아리 53기 창업경진대회 최우수상",
    ],
  ],
  ["2023", ["COP28 한국관 전시 책임자"]],
  ["2022", ["육군창업경진대회 인사사령관 표창", "한미연합훈련 통역"]],
  ["2021", ["한양경영연구회 HAMA 가을 정기 학술제 최우수상"]],
  ["2020", ["요양병원 매칭 플랫폼 마케팅 인턴"]],
];

const contactLinks = [
  ["Email", "ethos614@gmail.com", "mailto:ethos614@gmail.com"],
  ["LinkedIn", "josh-sangwon-lee", "https://www.linkedin.com/in/josh-sangwon-lee/"],
  ["Instagram", "strange_1e", "https://www.instagram.com/strange_1e/"],
];

function useDarkMode() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark];
}

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-neutral-200 py-16 dark:border-neutral-800">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-800 dark:text-neutral-200">
          {intro}
        </p>
      )}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function FounderPortfolio() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <header className="flex items-center justify-between py-8">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Josh Lee
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 sm:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setDark((value) => !value)}
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </header>

        <main id="top">
          <section className="py-16 sm:py-24">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              이상원 <span className="text-neutral-400 dark:text-neutral-500">Josh Lee</span>
            </h1>
            <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400">
              Founder · Sports AI · Computer Vision · Systems Design
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-800 dark:text-neutral-200">
              글로벌 감각과 실행력을 기반으로 복잡한 문제를 구조로 해체하고, 실행 가능한
              시스템을 만드는 설계자입니다.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              {stats.map(([value, label]) => (
                <div key={label} className="flex flex-col">
                  <dt className="order-last mt-1 text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm">
                    {label}
                  </dt>
                  <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Section
            id="about"
            title="About"
            intro="안녕하세요. 스포츠, AI, 데이터, 시스템 설계에 관심을 가지고 있는 이상원입니다."
          >
            <div className="space-y-6 text-base leading-8 text-neutral-700 dark:text-neutral-300">
              <p>
                저는 단순히 문제를 해결하는 것보다, 왜 이런 구조가 생겼는지부터 다시
                정의하는 과정에 더 큰 흥미를 느낍니다.
              </p>
              <p>
                9년간의 해외 경험과 다양한 문화권에서의 협업 경험을 바탕으로, 커뮤니케이션
                문제·정보 비대칭·운영 비효율 같은 구조적 문제에 자연스럽게 관심을 가지게
                되었습니다.
              </p>
              <p>
                미식축구 선수 경험과 스타트업 실무 경험을 통해, 엘리트 수준의 데이터 분석
                시스템이 극소수에게만 접근 가능한 현실을 직접 체감했고, STECH를 창업해
                미식축구 분석의 접근성을 확장하는 AI 시스템을 만들었습니다.
              </p>
              <p>
                Computer Vision, workflow automation, data infrastructure를 기반으로, 복잡한
                조직과 시스템이 더 효율적으로 작동할 수 있는 구조를 탐구하고 있습니다.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                현재 탐구하는 문제
              </h3>
              <ul className="mt-4 space-y-2 text-base leading-7 text-neutral-800 dark:text-neutral-200">
                {currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                How I Think
              </h3>
              <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {frameworks.map((item, index) => (
                  <div key={item.title}>
                    <h4 className="font-medium">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-500">
                        {index + 1}.
                      </span>
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[15px] leading-7 text-neutral-600 dark:text-neutral-400">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="background" title="Background">
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Education
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-800 dark:text-neutral-200">
                  {education}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Roles
                </h3>
                <ul className="mt-4 space-y-2">
                  {roles.map(([tense, role]) => (
                    <li key={role} className="text-base leading-7">
                      <span className="inline-block w-10 text-neutral-400 dark:text-neutral-500">
                        {tense}
                      </span>
                      <span className="text-neutral-800 dark:text-neutral-200">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section
            id="work"
            title="Work"
            intro="기술적 호기심을 실제 문제 구조에 연결하고, 리서치와 제품 사이에서 작동하는 시스템을 설계합니다."
          >
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {projects.map((project) => (
                <article key={project.title} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-medium tracking-tight">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-white"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <span className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
                    {project.focus.join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="timeline" title="Timeline">
            <div className="space-y-10">
              {timeline.map(([year, items]) => (
                <div key={year} className="grid gap-3 sm:grid-cols-[100px_1fr]">
                  <div className="text-lg font-medium tabular-nums text-neutral-400 dark:text-neutral-500">
                    {year}
                  </div>
                  <ul className="space-y-2 text-[15px] leading-7 text-neutral-700 dark:text-neutral-300">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="contact"
            title="Contact"
            intro="복잡한 문제를 구조적으로 해결하는 일, 그리고 새로운 시스템을 만드는 사람들과의 협업에 관심이 있습니다."
          >
            <ul className="space-y-3">
              {contactLinks.map(([label, text, href]) => (
                <li key={label} className="text-base">
                  <span className="inline-block w-24 text-neutral-500 dark:text-neutral-400">
                    {label}
                  </span>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-white"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </main>

        <footer className="border-t border-neutral-200 py-10 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          © 2026 이상원 (Josh Lee)
        </footer>
      </div>
    </div>
  );
}
