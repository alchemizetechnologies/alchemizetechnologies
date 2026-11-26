import React, { useState } from "react";
import { Link } from "react-router-dom";

const basePath = "/Agent hub/";
const alchemizeHome = "/";

const useCases = [
  {
    label: "MARKETING AGENTS",
    title: "Build demand.",
    intro: "Most teams piece together campaigns across too many tools. Campaign agent plans it. Content agent creates it. Nurture agent converts it.",
    points: [
      "Plan a full campaign from a single goal, in one session",
      "Create blog posts, social content, and landing pages in your brand voice",
      "Personalize nurture email for the individual receiving it",
    ],
    video: "AgentHub1.mp4",
    stats: [["14%", "more marketing reach on average, among content agent users"], ["9%", "increase in brand visibility, among content agent users"]],
  },
  {
    label: "PROSPECTING AGENT",
    title: "Win deals.",
    intro: "Your reps lose hours to research, follow-up, and CRM updates. Spend more time on the conversations that actually win deals.",
    points: [
      "Reach out the moment an account is ready to buy",
      "Approve automatic CRM updates and follow-up drafts after every meeting",
      "Spend more time on the conversations that actually win deals",
    ],
    video: "AgentHub2.mp4",
    stats: [["65%", "more sales leads created on average per month"], ["26%", "higher deal win rate"]],
  },
  {
    label: "CUSTOMER AGENT",
    title: "Delight customers.",
    intro: "Customer service teams spend days on repeat questions. Customer agent resolves common questions 24/7 from real customer context.",
    points: [
      "Resolve common questions 24/7",
      "Pull answers from real contact and contract history",
      "Free your team for the cases that need a human",
    ],
    video: "AgentHub3.mp4",
    stats: [["77%", "more customer tickets closed on average per month"], ["39%", "faster ticket resolution vs. teams not using customer agent"]],
  },
  {
    label: "DATA AGENT",
    title: "Scale growth.",
    intro: "Data agent answers custom questions about any contact or company using the signals already in your CRM.",
    points: [
      "Answer custom questions about any contact or company",
      "Pull insights from CRM data, calls, emails, and documents",
      "Know which accounts to pursue first, and why",
    ],
    video: "AgentHub4.mp4",
    stats: [["10x", "faster to research a prospect or prep for a call"], ["5.1 million+", "research and insight tasks automated"]],
  },
];

const features = [
  ["◇", "Content Agent", "Build blog posts, social content, and landing pages in your brand voice."],
  ["◎", "Prospecting Agent", "Monitor buying signals and launch personalized outreach automatically."],
  ["◉", "Customer Agent", "Resolve inquiries automatically across channels."],
  ["⌘", "Agent Builder", "Build custom agents on one canvas, using your customer data."],
  ["⌕", "Data Agent", "Get customer insights from your CRM, calls, and documents, instantly."],
  ["↗", "Smart Deal Progression", "Keep deals moving with AI-suggested next steps after every call."],
  ["▦", "Campaign Agent", "Turn a single goal into a fully planned, multi-channel campaign."],
  ["✉", "Nurture Agent", "Personalize each email based on where a lead actually is."],
  ["$", "Revenue Agent", "Collect payments faster by automating invoice follow-up and reminders."],
];

const faqs = [
  ["What is Agent Hub?", "Agent Hub brings AI agents for marketing, sales, and customer service together in one managed workspace built on your CRM."],
  ["Which agents help grow my business?", "Marketing, prospecting, customer, data, campaign, nurture, and revenue agents can help across the customer journey."],
  ["Can I build my own agents?", "Yes. Agent Builder lets you create custom agents using your customer data and approved business context."],
  ["Who can use Agent Hub?", "Agent Hub is available with Alchemize Technologies Starter, Professional, and Enterprise editions."],
  ["How is Agent Hub priced?", "Agent Hub is included with qualifying editions. Many agents and AI features use flexible Alchemize Technologies Credits."],
];

function CTAButtons({ text = "Get a demo of agent hub" }) {
  return (
    <div className="ah-buttons">
      <a className="ah-demo" href={"/agent"} target="_blank" rel="noopener noreferrer">{text}</a>
    </div>
  );
}

function StatusIcon({ value }) {
  if (value === null) return <span className="ah-status ah-status-partial">—</span>;
  return <span className={`ah-status ${value ? "ah-status-yes" : "ah-status-no"}`} role="img" aria-label={value ? "Includes capability" : "Does not include capability"}>{value ? "✓" : "×"}</span>;
}

function AgentHub() {
  const [activeNav, setActiveNav] = useState("use-cases");
  const [openFaq, setOpenFaq] = useState(null);

  const scrollTo = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="agenthub-page">
      <div className="ah-breadcrumb">
        <div><Link to="/">Home</Link><span>›</span><span>Agent Hub</span></div>
      </div>

      <section className="ah-hero">
        <div className="ah-container ah-hero-layout">
          <div className="ah-hero-copy">
            <span className="ah-eyebrow">AGENT HUB</span>
            <h1>All of your AI agents, managed in one place.</h1>
            <p>Build demand, win deals, and serve your customers with a team of AI agents for marketing, sales, and customer service.</p>
            <CTAButtons />
          </div>
          <video src={`${basePath}AgentHub.mp4`} autoPlay muted loop playsInline preload="metadata" />
        </div>
      </section>

      <section className="ah-trusted">
        <h3>Trusted by 306,000 customers worldwide</h3>
        <div className="ah-brand-row">
          {["Amika", "Canadian Red Cross", "DoorDash", "Kaplan", "GoFundMe", "GameSquare", "Morehouse"].map((name) => <span key={name}>{name}</span>)}
        </div>
      </section>

      <nav className="ah-section-nav" aria-label="Agent Hub sections">
        {[["use-cases", "Use Cases"], ["benefits", "Benefits"], ["features", "Features"], ["pricing", "Pricing"]].map(([id, label]) => (
          <button type="button" key={id} className={activeNav === id ? "active" : ""} onClick={() => scrollTo(id)}>{label}</button>
        ))}
      </nav>

      <section className="ah-use-cases ah-section" id="use-cases">
        <div className="ah-container">
          <div className="ah-section-heading"><span className="ah-eyebrow">USE CASES</span><h2>AI built for every part of your business.</h2><CTAButtons /></div>
          {useCases.map((item, index) => (
            <article className={`ah-use-case ${index % 2 ? "reverse" : ""}`} key={item.title}>
              <div className="ah-use-media">
                <video src={`${basePath}${item.video}`} autoPlay muted loop playsInline preload="metadata" />
                <div className="ah-stats">{item.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><p>{label}</p></div>)}</div>
              </div>
              <div className="ah-use-copy">
                <span className="ah-use-label">{item.label}</span>
                <h2>{item.title}</h2>
                <p>{item.intro}</p>
                <ul>{item.points.map((point) => <li key={point}><b>✓</b>{point}</li>)}</ul>
                <a href={alchemizeHome} target="_blank" rel="noopener noreferrer">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ah-action-video ah-section">
        <div className="ah-container"><h2>See Agent Hub in action.</h2><video src={`${basePath}AgentHub5.mp4`} controls playsInline preload="metadata" /></div>
      </section>

      <section className="ah-benefits ah-section" id="benefits">
        <div className="ah-container">
          <div className="ah-section-heading"><span className="ah-eyebrow">BENEFITS</span><h2>Get up and running in three steps.</h2></div>
          <div className="ah-steps">
            {[["Step 1", "Choose an agent", "Activate the agents that fit your goals in one click."], ["Step 2", "Add your context", "Configure agents using the data and knowledge already in Alchemize Technologies."], ["Step 3", "Track outcomes", "View status and results for each agent from one workspace."]].map(([step, title, copy], index) => (
              <article key={title}><span>{step}</span><strong>{index + 1}</strong><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <div className="ah-benefit-panel">
            <img src={`${basePath}a.webp`} alt="AI agent status dashboard" />
            <div><h3>See what your whole AI team is doing.</h3><p>Track what your agents are doing and delivering in one view. Keep what's working, adjust what's not, and turn on agents you haven't started using.</p><ul><li><b>✓</b> No code required</li><li><b>✓</b> Live status and real outcomes</li><li><b>✓</b> Activate or configure any agent in one click</li></ul></div>
          </div>
        </div>
      </section>

      <section className="ah-stories ah-section">
        <div className="ah-container">
          <div className="ah-section-heading"><h2>Real teams. Real results.</h2><p>Grow with Agent Hub.</p></div>
          <div className="ah-story-card"><div><strong>New Breed</strong><blockquote>“We anticipate getting roughly 350 hours back from a single automation.”</blockquote><h3>Matthew Alex Ruxton</h3><p>Senior Manager, RevOps</p></div><div className="ah-story-stat"><strong>350</strong><p>hours anticipated back</p></div></div>
        </div>
      </section>

      <section className="ah-comparison ah-section">
        <div className="ah-container">
          <div className="ah-section-heading"><h2>Built for go-to-market.</h2><p>See how Agent Hub compares on what matters most.</p></div>
          <div className="ah-table-wrap">
            <table>
              <thead><tr><th>Capability</th><th>Agent Hub</th><th>Generic AI</th><th>Other CRMs</th></tr></thead>
              <tbody>
                {[["Customer data built in from day one", true, false, null], ["Agents built to drive go-to-market outcomes", true, false, false], ["Accessible without consultant or technical setup", true, false, false], ["Full visibility into what your AI team is doing", true, null, false], ["Pay for work delivered", true, null, false]].map((row) => (
                  <tr key={row[0]}><td>{row[0]}</td>{row.slice(1).map((value, index) => <td key={index}><StatusIcon value={value} /></td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ah-table-legend"><span><StatusIcon value={true} /> Includes capability</span><span><StatusIcon value={null} /> Partial/inconsistent capability</span><span><StatusIcon value={false} /> Does not include capability</span></div>
        </div>
      </section>

      <section className="ah-trust ah-section">
        <div className="ah-container ah-trust-grid">
          <div><span className="ah-eyebrow">AI TRUST</span><h2>AI that's easy to use and easy to trust.</h2></div>
          {[["Built on enterprise-grade security.", "Protected with access controls, encryption, logging, monitoring, and regular audits."], ["You control what AI can access.", "Third-party providers cannot train on your data, and you control access."], ["No surprises. Full transparency.", "Model cards explain how AI features work, what data they use, and available safeguards."]].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="ah-features ah-section" id="features">
        <div className="ah-container">
          <div className="ah-section-heading"><span className="ah-eyebrow">FEATURES</span><h2>All the tools to build, manage, and run your AI team.</h2><CTAButtons /></div>
          <div className="ah-feature-grid">{features.map(([icon, title, copy]) => <a href={alchemizeHome} target="_blank" rel="noopener noreferrer" key={title}><span className="ah-feature-icon">{icon}</span><h3>{title}</h3><p>{copy}</p></a>)}</div>
        </div>
      </section>

      <section className="ah-pricing ah-section" id="pricing">
        <div className="ah-container">
          <div className="ah-section-heading"><span className="ah-eyebrow">PRICING</span><h2>Pay when work gets done.</h2><p>Agent Hub is included in Starter, Professional, and Enterprise editions. Many AI features run on Alchemize Technologies Credits.</p></div>
          <div className="ah-pricing-card"><span>Agent Hub</span><h3>Pick your plan.</h3><p>Buy credits up front or as you use them with pay-as-you-go.</p><a href={"/"} target="_blank" rel="noopener noreferrer">See pricing</a></div>
        </div>
      </section>

      <section className="ah-faq ah-section">
        <div className="ah-container">
          <h2>Frequently asked questions</h2>
          <div className="ah-faq-list">{faqs.map(([question, answer], index) => <article key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><span>{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
        </div>
      </section>

      <section className="ah-bottom-cta"><div className="ah-container"><h2>Put agents to work for your business.</h2><p>Qualify leads, close deals, and grow faster with agents that know your business context.</p><CTAButtons /></div></section>

      <footer className="ah-footer">
        <div className="ah-container">
          <div className="ah-footer-grid">
            {[["Popular Features", ["All Products and Features", "Alchemize Technologies AEO", "Meeting Scheduler", "Email Tracking", "AI Content Writer", "Marketing Analytics"]], ["Free Tools", ["Free Business Tools", "AI Search Grader", "Make My Persona", "Free Templates", "Website Templates", "Connector for Claude"]], ["Company", ["About Us", "Careers", "Management Team", "Investor Relations", "Blog", "Contact Us"]], ["Customers", ["Customer Support", "Local User Groups"]], ["Partners", ["All Partner Programs", "Solutions Partners", "Technology Partners", "Alchemize Technologies for Startups"]]].map(([title, links]) => (
              <div key={title}><h3>{title}</h3>{links.map((link) => <a href={alchemizeHome} target="_blank" rel="noopener noreferrer" key={link}>{link}</a>)}</div>
            ))}
          </div>
          <div className="ah-social">{["Facebook", "Instagram", "YouTube", "Twitter", "LinkedIn", "Reddit", "TikTok"].map((name) => <a href={alchemizeHome} target="_blank" rel="noopener noreferrer" aria-label={name} key={name}>{name[0]}</a>)}</div>
          <div className="ah-footer-bottom"><strong>Alchemize Technologies</strong><p>Copyright © 2026 Alchemize Technologies.</p></div>
        </div>
      </footer>
    </main>
  );
}

export default AgentHub;