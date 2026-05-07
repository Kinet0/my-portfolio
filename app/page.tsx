const projects = [
  {
    title: "Zero-Day Analyzer",
    tech: ["Python", "Rust"],
    description:
      "Automated vulnerability detector for legacy enterprise networks, blending packet analysis with heuristic threat scoring.",
    status: "DEPLOYED",
    source: "VIEW_SOURCE",
  },
  {
    title: "Secure Vault API",
    tech: ["Node.js", "PostgreSQL"],
    description:
      "Encrypted secrets management backend with hardened authentication, audit logging, and live breach detection.",
    status: "LIVE",
    source: "OPEN_REPO",
  },
  {
    title: "Terminal UI Dashboard",
    tech: ["React", "Tailwind"],
    description:
      "High-fidelity terminal-inspired monitoring interface for real-time security operations and incident triage.",
    status: "MAINTAINED",
    source: "VIEW_DEMO",
  },
];

const certifications = [
  {
    title: "Offensive Security Certified Professional",
    authority: "OffSec",
    issued: "2023-11-15",
    summary:
      "Proof of advanced penetration testing competence. Root-level compromise within a strict 24-hour assessment window.",
  },
  {
    title: "Certified Cloud Security Engineer",
    authority: "CSA",
    issued: "2024-03-07",
    summary:
      "Validated secure cloud architecture and incident response skills across AWS and Azure environments.",
  },
];

const skills = [
  { label: "Python", level: 90 },
  { label: "JavaScript", level: 82 },
  { label: "C#", level: 72 },
  { label: "SQL", level: 84 },
];

const frameworks = [
  { label: "React.js", status: "ACTIVE" },
  { label: "Django", status: "INSTALLED" },
  { label: ".NET Core", status: "ACTIVE" },
  { label: "Tailwind CSS", status: "v4" },
  { label: "FastAPI", status: "INSTALLED" },
];

const tools = [
  { key: "VCS", value: "Git, GitHub, GitLab" },
  { key: "CI/CD", value: "GitHub Actions, Jenkins" },
  { key: "CLOUD", value: "AWS EC2, S3, Lambda, Azure" },
  { key: "DB", value: "PostgreSQL, MongoDB, Redis" },
  { key: "CONTAINERS", value: "Docker, Kubernetes, Podman" },
];

const telegram = [
  { label: "GITHUB", href: "#" },
  { label: "LINKEDIN", href: "#" },
  { label: "EMAIL", href: "mailto:hello@example.com" },
];

function renderBlocks(value: number) {
  const total = 16;
  const filled = Math.round((value / 100) * total);
  const empty = total - filled;
  return `[${"█".repeat(filled)}${"░".repeat(empty)}]`;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#dae6d2] selection:bg-[#00ff41] selection:text-[#000000]">
      <nav className="sticky top-0 z-50 border-b border-[#3b4b37] bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <div className="font-[700] text-[1.35rem] tracking-[-0.035em] text-[#00ff41] uppercase">
            ROOT PORTFOLIO
          </div>
          <div className="hidden items-center gap-4 text-[0.7rem] uppercase tracking-[0.24em] text-[#b9ccb2] md:flex">
            <a href="#home" className="border-b border-[#00ff41] pb-1 text-[#00ff41]">
              HOME
            </a>
            <span className="text-[#3b4b37]">|</span>
            <a href="#skills" className="hover:text-[#00ff41] transition-colors">
              SKILLS
            </a>
            <span className="text-[#3b4b37]">|</span>
            <a href="#projects" className="hover:text-[#00ff41] transition-colors">
              PROJECTS
            </a>
            <span className="text-[#3b4b37]">|</span>
            <a href="#certifications" className="hover:text-[#00ff41] transition-colors">
              CERTS
            </a>
            <span className="text-[#3b4b37]">|</span>
            <a href="#contact" className="hover:text-[#00ff41] transition-colors">
              CONTACT
            </a>
          </div>
          <div className="flex items-center gap-2 text-[#00ff41]">
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span className="material-symbols-outlined text-[18px]">settings</span>
          </div>
        </div>
      </nav>

      <main className="mx-auto grid max-w-[1280px] gap-5 px-4 py-10 sm:py-14">
        <section id="home" className="grid gap-4 lg:grid-cols-[1.55fr_0.95fr] items-start">
          <article className="border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150">
            <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 flex items-center justify-between text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
              <span>PROFILE</span>
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 border border-[#84967e]" />
                <span className="h-2.5 w-2.5 border border-[#84967e]" />
                <span className="h-2.5 w-2.5 border border-[#00ff41] bg-[#00ff41]" />
              </div>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="text-[0.82rem] text-[#00ff41] font-[700] uppercase tracking-[0.14em]">
                Cybersecurity and software engineering leadership
              </div>
              <h1 className="text-[2.45rem] leading-[1.05] tracking-[-0.05em] text-[#ebffe2]">
                I&rsquo;m Alex Chen, crafting secure digital experiences through elegant code.
              </h1>
              <div className="space-y-3 text-[0.9rem] text-[#b9ccb2]">
                <div>Experienced in secure systems design, application development, and threat mitigation.</div>
                <div>Delivering polished product interfaces and resilient infrastructure for enterprise environments.</div>
                <div>Committed to clear communication, reliability, and operational excellence.</div>
              </div>
              <button className="inline-flex items-center gap-2 border border-[#00ff41] bg-transparent px-5 py-3 text-[0.75rem] uppercase tracking-[0.12em] text-[#00ff41] transition-colors duration-150 hover:bg-[#00ff41] hover:text-[#000000]">
                <span className="material-symbols-outlined text-[18px]">power</span>
                VIEW PORTFOLIO
              </button>
            </div>
          </article>

          <aside className="grid gap-3">
            <div className="relative overflow-hidden border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150">
              <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2] flex justify-between items-center">
                <span>PROFILE SNAPSHOT</span>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 border border-[#84967e]" />
                  <span className="h-2.5 w-2.5 border border-[#84967e]" />
                  <span className="h-2.5 w-2.5 border border-[#00ff41] bg-[#00ff41]" />
                </div>
              </div>
              <div className="relative p-3 flex items-center justify-center bg-[#0a0a0a]">
                  <div className="relative h-[240px] w-full overflow-hidden border border-[#00ff41] bg-[#141e12]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.18),_transparent_35%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.08)_50%,transparent_50%)] bg-[length:100%_4px] opacity-90 pointer-events-none" />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-[#b9ccb2]">
                    <div className="mb-4 inline-flex h-24 w-24 items-center justify-center border border-[#00ff41] text-[3rem] text-[#00ff41]">
                      A
                    </div>
                    <div className="text-[0.9rem] uppercase tracking-[0.22em]">SYSTEM AGENT</div>
                    <div className="mt-4 text-sm leading-6 text-[#dae6d2]">
                      Cybersecurity engineer focused on secure architecture, defensive systems, and polished delivery.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#84967e] bg-[#0d0d0d] p-4 hover:border-[#00ff41] transition-colors duration-150">
              <div className="mb-3 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">SYSTEM STATUS</div>
              <div className="grid gap-2 text-[0.9rem] text-[#dae6d2]">
                <div className="flex justify-between border-b border-[#3b4b37] pb-2">
                  <span>ENCRYPTION</span>
                  <span className="border border-[#00ff41] px-2 py-[0.35rem] text-[#00ff41]">AES-256 ACTIVE</span>
                </div>
                <div className="flex justify-between border-b border-[#3b4b37] pb-2">
                  <span>NETWORK</span>
                  <span className="text-[#b9ccb2]">05ms latency</span>
                </div>
                <div className="flex justify-between">
                  <span>UPTIME</span>
                  <span className="text-[#b9ccb2]">24 days</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="skills" className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150">
            <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
              TECHNICAL SKILLS
            </div>
            <div className="p-4 space-y-4">
              <div className="text-[0.9rem] text-[#b9ccb2]">A concise overview of core technical skills and proficiency levels.</div>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.label} className="space-y-1">
                    <div className="flex items-center justify-between text-[0.8rem] text-[#ebffe2]">
                      <span>{skill.label}</span>
                      <span className="text-[#b9ccb2]">{skill.level}%</span>
                    </div>
                    <div className="text-[#00ff41] text-[0.85rem] font-[700]">{renderBlocks(skill.level)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150">
              <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
                frameworks & libraries
              </div>
              <div className="p-4 space-y-2 text-[0.88rem] text-[#dae6d2]">
                {frameworks.map((framework) => (
                  <div key={framework.label} className="flex items-center justify-between border-b border-[#3b4b37] py-3 last:border-none">
                    <span className="text-[#bdf4ff]">{framework.label}</span>
                    <span className={framework.status === "v4" ? "text-[#00ff41]" : "text-[#b9ccb2]"}>{`[ ${framework.status} ]`}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150">
              <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
                tooling
              </div>
              <div className="p-4 grid gap-2 text-[0.85rem] text-[#dae6d2]">
                {tools.map((tool) => (
                  <div key={tool.key} className="flex justify-between border-b border-[#3b4b37] py-3 last:border-none">
                    <span className="text-[#9cf0ff]">{tool.key}</span>
                    <span className="text-[#00ff41]">{tool.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-3">
          <div className="border-l-4 border-[#00ff41] bg-[#0d0d0d] p-4 border-[#84967e]">
            <h2 className="text-[1.75rem] font-[700] uppercase tracking-[-0.02em] text-[#00ff41]">PROJECTS</h2>
            <p className="mt-3 text-[0.9rem] text-[#b9ccb2]">Featured work focused on security, performance, and scalable architecture.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150 flex flex-col">
                <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 flex items-center justify-between text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
                  <span className="text-[#00ff41]">PROJECT SUMMARY</span>
                  <div className="flex gap-2 text-[0.6rem] uppercase opacity-60">
                    <span>[ ]</span>
                    <span>[-]</span>
                    <span>[x]</span>
                  </div>
                </div>
                <div className="border border-[#3b4b37] bg-[#0a0a0a] aspect-[16/9] mb-4 flex items-center justify-center text-[0.8rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
                  Placeholder Thumbnail
                </div>
                <div className="p-4 flex flex-col gap-4 flex-1">
                  <div className="space-y-3">
                    <h3 className="text-[1.05rem] uppercase tracking-[0.02em] text-[#00ff41]">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
                      {project.tech.map((tag) => (
                        <span key={tag} className="border border-[#3b4b37] px-2 py-1">[ {tag} ]</span>
                      ))}
                    </div>
                    <p className="text-[#b9ccb2] leading-6">{project.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-[#3b4b37] pt-4 text-[0.78rem] text-[#b9ccb2]">
                    <span>{`STATUS: ${project.status}`}</span>
                    <a className="text-[#00ff41] hover:text-[#000000] hover:bg-[#00ff41] px-3 py-1 transition-colors" href="#">
                      {project.source}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="space-y-3">
          <div className="border-l-4 border-[#00ff41] bg-[#0d0d0d] p-4 border-[#84967e]">
            <h2 className="text-[1.75rem] font-[700] uppercase tracking-[-0.02em] text-[#00ff41]">CERTIFICATIONS</h2>
            <p className="mt-3 text-[0.9rem] text-[#b9ccb2]">Verified professional credentials supporting secure systems and cloud engineering.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <article key={cert.title} className="border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150 flex flex-col">
                <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 flex items-center justify-between text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
                  <span>CERTIFICATION RECORD</span>
                  <div className="flex gap-2">
                    <span className="h-2 w-2 border border-[#84967e]" />
                    <span className="h-2 w-2 border border-[#84967e]" />
                    <span className="h-2 w-2 border border-[#84967e]" />
                  </div>
                </div>
                <div className="border border-[#3b4b37] bg-[#0a0a0a] aspect-[16/9] mb-4 flex items-center justify-center text-[0.8rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
                  Placeholder Thumbnail
                </div>
                <div className="p-4 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[1rem] uppercase tracking-[0.02em] text-[#00ff41]">{cert.title}</h3>
                    <span className="border border-[#00ff41] px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-[#00ff41]">
                      [ VERIFIED ]
                    </span>
                  </div>
                  <div className="text-[0.78rem] text-[#b9ccb2] border-y border-[#3b4b37] py-3 flex flex-wrap gap-2">
                    <span>AUTHORITY: {cert.authority}</span>
                    <span>|</span>
                    <span>ISSUED: {cert.issued}</span>
                  </div>
                  <p className="text-[#b9ccb2] leading-6">{cert.summary}</p>
                  <div className="flex justify-end pt-2">
                    <button className="border border-[#00ff41] px-4 py-2 text-[0.75rem] uppercase tracking-[0.18em] text-[#00ff41] transition-colors duration-150 hover:bg-[#00ff41] hover:text-[#000000]">
                      DOWNLOAD CERTIFICATE
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr] items-start">
          <article className="border border-[#84967e] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors duration-150">
            <div className="border-b border-[#3b4b37] bg-[#141e12] px-4 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">
              CONTACT
            </div>
            <form className="p-4 space-y-4" method="post">
              <div className="text-[0.9rem] text-[#b9ccb2]">Send a message to discuss collaboration, consulting, or opportunities.</div>
              <div className="space-y-2">
                <label className="block text-[0.78rem] uppercase tracking-[0.18em] text-[#b9ccb2]" htmlFor="name">
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="root"
                  className="w-full bg-transparent border-b border-dashed border-[#84967e] px-3 py-2 text-[#dae6d2] outline-none transition-colors duration-150 focus:border-[#00ff41]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[0.78rem] uppercase tracking-[0.18em] text-[#b9ccb2]" htmlFor="email">
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-transparent border-b border-dashed border-[#84967e] px-3 py-2 text-[#dae6d2] outline-none transition-colors duration-150 focus:border-[#00ff41]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[0.78rem] uppercase tracking-[0.18em] text-[#b9ccb2]" htmlFor="message">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Enter secure payload..."
                  className="w-full bg-[#141e12] border border-[#3b4b37] px-3 py-3 text-[#dae6d2] outline-none transition-colors duration-150 focus:border-[#00ff41]"
                />
              </div>
              <div className="flex justify-end">
                <button className="border border-[#00ff41] bg-transparent px-6 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-[#00ff41] transition-colors duration-150 hover:bg-[#00ff41] hover:text-[#000000]">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </article>

          <aside className="border border-[#84967e] bg-[#0d0d0d] p-4 hover:border-[#00ff41] transition-colors duration-150">
            <div className="mb-4 text-[0.75rem] uppercase tracking-[0.18em] text-[#b9ccb2]">contact details</div>
            <div className="space-y-4 text-[0.9rem] text-[#b9ccb2]">
              <div>
                <span className="text-[#00ff41]">LOCATION:</span> Remote / Global
              </div>
              <div>
                <span className="text-[#00ff41]">AVAILABILITY:</span> Consulting and advisory engagements
              </div>
              <div>
                <span className="text-[#00ff41]">RESPONSE TIME:</span> 24-48 hours
              </div>
              <div>
                <span className="text-[#00ff41]">STATUS:</span> OPERATIONAL
              </div>
            </div>
            <div className="mt-6 border-t border-[#3b4b37] pt-4 text-[0.8rem] uppercase tracking-[0.16em] text-[#b9ccb2]">
              <div className="mb-2">live links</div>
              <div className="flex flex-wrap gap-3">
                {telegram.map((item) => (
                  <a key={item.label} href={item.href} className="border border-[#00ff41] px-3 py-2 text-[#00ff41] transition-colors duration-150 hover:bg-[#00ff41] hover:text-[#000000]">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#3b4b37] bg-[#0a0a0a] px-6 py-5 text-[0.82rem] text-[#b9ccb2]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>PORTFOLIO STATUS: OPERATIONAL © 2026 ROOT PORTFOLIO</div>
          <div className="flex flex-wrap items-center gap-4 text-[#00ff41]">
            {telegram.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#ebffe2] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
