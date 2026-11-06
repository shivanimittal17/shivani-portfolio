import Image from "next/image";
import Nav from "@/components/Nav";
import CopyEmail from "@/components/CopyEmail";
import ContactForm from "@/components/ContactForm";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import {
  profile,
  stats,
  aboutParagraphs,
  experience,
  skillGroups,
  softSkills,
  featured,
  projects,
  publication,
  education,
  certifications,
  hackathons,
  leadership,
} from "@/lib/data";

function Chips({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <div className="chips">
      {items.map((t) => (
        <span key={t} className={accent ? "chip accent" : "chip"}>
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main className="wrap">
        {/* Home */}
        <section id="home">
          <div className="hero">
            <div>
              <h1>
                Hi, I&apos;m Shivani Mittal<span className="caret" aria-hidden="true" />
              </h1>
              <p className="role">Computer Engineering Student</p>
              <p className="focus">Cybersecurity | Data Engineering | Software Development</p>
              <p className="lede">
                B.Tech Computer Engineering student at MPSTME, NMIMS University, graduating in 2027.
              </p>
              <p className="lede">
                I build projects in security monitoring, cloud incident detection, digital forensics and
                machine learning, using Python, SQL, Java and modern web technologies.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View Projects
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Get in Touch
                </a>
                <a className="btn btn-ghost" href={profile.resume} download>
                  <DownloadIcon />
                  Resume
                </a>
              </div>
            </div>
            {/* To change the photo, replace /public/shivani.jpg (keep the same filename). */}
            <div className="portrait">
              <Image
                src="/shivani.jpg"
                alt="Portrait of Shivani Mittal"
                width={1000}
                height={1333}
                priority
                sizes="(max-width: 900px) 360px, 480px"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <h2 className="section-title">About Me</h2>
          <div className="card about">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="section-title">Work Experience</h2>
          <div className="card">
            <div className="job-head">
              <div>
                <h3>{experience.role}</h3>
                <p className="job-org">{experience.org}</p>
              </div>
              <span className="date">{experience.dates}</span>
            </div>
            <ul className="bullets">
              {experience.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="grid-3">
            {skillGroups.map((g) => (
              <div className="card skill-card" key={g.title}>
                <h3>{g.title}</h3>
                <Chips items={g.items} />
              </div>
            ))}
          </div>
          <div className="card skill-card" style={{ marginTop: 20 }}>
            <h3>Soft Skills</h3>
            <Chips items={softSkills} accent />
          </div>
        </section>

        {/* Featured project */}
        <section id="featured">
          <h2 className="section-title">Featured Project</h2>
          <div className="card featured">
            <div>
              <div className="date">{featured.year}</div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <div className="chips">
                {featured.primaryTags.map((t) => (
                  <span key={t} className="chip accent">
                    {t}
                  </span>
                ))}
                {featured.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flow" aria-label="How TRACE-X works">
              <div className="flow-label">What it does</div>
              {featured.steps.map((s, i) => (
                <div className="step" key={s.title}>
                  <i>{i + 1}</i>
                  <div>
                    <b>{s.title}</b>
                    <span>{s.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="section-title">Other Projects</h2>
          <div className="grid-2">
            {projects.map((p) => (
              <article className="card project" key={p.title}>
                <div className="project-top">
                  <h3>{p.title}</h3>
                  <span className="date">{p.year}</span>
                </div>
                <p>{p.text}</p>
                <Chips items={p.tags} />
              </article>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications">
          <h2 className="section-title">Publications &amp; Research</h2>
          <div className="card pub">
            <div className="job-head">
              <h3>{publication.title}</h3>
              <span className="date">{publication.status}</span>
            </div>
            <p>{publication.text}</p>
            <Chips items={publication.tags} />
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2 className="section-title">Education</h2>
          <div className="card">
            {education.map((e) => (
              <div className="entry" key={e.title}>
                <div className="job-head">
                  <h3>{e.title}</h3>
                  <span className="date">{e.dates}</span>
                </div>
                {e.sub && <p className="sub">{e.sub}</p>}
                <p className="detail">{e.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <h2 className="section-title">Certifications</h2>
          <div className="grid-3">
            {certifications.map((c) => (
              <div className="card cert" key={c.title}>
                <h3>{c.title}</h3>
                <span>{c.issuer}</span>
                {c.date && <span className="date">{c.date}</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements">
          <h2 className="section-title">Achievements &amp; Positions of Responsibility</h2>
          <h3 className="sub-title">Hackathons</h3>
          <div className="grid-3">
            {hackathons.map((h) => (
              <div className="card cert" key={h.org}>
                <h3>{h.title}</h3>
                <span>{h.org}</span>
              </div>
            ))}
          </div>
          <h3 className="sub-title">Leadership &amp; Service</h3>
          <div className="grid-2">
            {leadership.map((l) => (
              <div className="card cert" key={l.org}>
                <h3>{l.title}</h3>
                <span>{l.org}</span>
                <span className="date">{l.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
          <div className="card contact">
            <p className="lede">
              Interested in working together, or want to talk about security, data engineering or a
              project? Send a message here, or reach me by email, on LinkedIn or on GitHub.
            </p>
            <div className="contact-rows">
              <div className="contact-row">
                <MailIcon />
                <CopyEmail />
              </div>
              <div className="contact-row">
                <GitHubIcon />
                <div className="val">
                  <small>GitHub</small>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    {profile.githubLabel}
                  </a>
                </div>
              </div>
              <div className="contact-row">
                <LinkedInIcon />
                <div className="val">
                  <small>LinkedIn</small>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    {profile.linkedinLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <ContactForm />
          </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© 2026 Shivani Mittal. All rights reserved.</span>
          <span>B.Tech Computer Engineering · MPSTME, NMIMS University</span>
        </div>
      </footer>
    </>
  );
}
