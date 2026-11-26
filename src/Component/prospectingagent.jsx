import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const workflow = [
  {
    number: "01",
    title: "Spot buying signals",
    description:
      "Bring account activity and relevant business changes into view, so reps can prioritize timely conversations."
  },
  {
    number: "02",
    title: "Research the account",
    description:
      "Pull together company context, likely needs, and relevant contacts before the first message goes out."
  },
  {
    number: "03",
    title: "Prepare personal outreach",
    description:
      "Draft a useful opening message grounded in the account's context and the rep's own communication style."
  },
  {
    number: "04",
    title: "Keep reps in control",
    description:
      "Review suggested actions, edit the draft, and choose the right next step for every prospect."
  }
];

const useCases = [
  {
    label: "BUYING INTENT",
    title: "Know when an account is worth a closer look.",
    description:
      "Notice meaningful changes and engagement that can help your team prioritize accounts with a timely reason to connect.",
    icon: "⌕",
    href: "/buying-intent"
  },
  {
    label: "PERSONAL OUTREACH",
    title: "Start with context, not a blank page.",
    description:
      "Give reps a researched starting point for relevant outreach, with the opportunity to review and personalize every draft.",
    icon: "✉",
    href: "/personal-outreach"
  },
  {
    label: "CONTACT RESEARCH",
    title: "Find the people behind the opportunity.",
    description:
      "Organize account and contact context from connected, approved sources so teams can focus their prospecting effort.",
    icon: "◎"
  }
];

const relatedAgents = [
  {
    name: "Customer Agent",
    description: "Help answer common customer questions with relevant business context.",
    href: "/service"
  },
  {
    name: "Data Agent",
    description: "Find useful insights across the customer and company information you work with.",
    href: "/data-agent"
  },
  {
    name: "Alchemize Assistant",
    description: "Get help working with connected customer information and day-to-day tasks.",
    href: "/agent"
  },
  {
    name: "Agent Builder",
    description: "Explore ways to shape AI workflows around your team's processes.",
    href: "/agent"
  }
];

const questions = [
  [
    "What does the Prospecting Agent help sales teams do?",
    "It helps reps prioritize accounts, gather useful context, and prepare personalized outreach in a guided workflow."
  ],
  [
    "How does the agent use account and contact data?",
    "It can use information available through your connected tools and account settings. Administrators can review the data sources and access configured for their team."
  ],
  [
    "Can it use third-party data sources?",
    "Available sources depend on your integrations, permissions, and plan. Confirm supported connections with the Alchemize Technologies team."
  ],
  [
    "How is Prospecting Agent priced?",
    "Pricing and usage options depend on your account and enabled features. Contact our team for current plan details."
  ],
  [
    "Can I customize how the agent works?",
    "Teams can configure available settings and guidance to better fit their sales process and account requirements."
  ],
  [
    "Do reps review outreach before it is sent?",
    "Suggested messages are intended as a starting point. Reps can review and edit outreach before deciding whether and when to send it."
  ]
];

function ProspectingAgent() {
  return (
    <>
      <main className="prospecting-page">
        <header className="pa-main-nav">
          <Link className="pa-logo" to="/" aria-label="Alchemize Technologies home">
            Alchemize Technologies
          </Link>
          <nav aria-label="Main navigation">
            <a href="#product">Products</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </nav>
          <Link className="pa-nav-cta" to="/sales">Get a demo</Link>
        </header>

        <div className="pa-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <span>Prospecting Agent</span>
          </div>
        </div>

        <section className="pa-hero" id="product">
          <div className="pa-container pa-hero-layout">
            <div className="pa-hero-copy">
              <p className="pa-eyebrow">AGENT HUB · PROSPECTING AGENT</p>
              <h1>Make every sales rep your strongest prospector.</h1>
              <p>
                Bring account research, buying signals, and personalized
                outreach drafts into one guided workflow—so your team can spend
                more time having useful conversations.
              </p>
              <div className="pa-actions">
                <Link className="pa-button pa-button-primary" to="/sales">
                  Get a demo
                </Link>
                <a className="pa-button pa-button-secondary" href="#workflow">
                  See how it works
                </a>
              </div>
            </div>
            <div className="pa-hero-visual" aria-label="Illustration of an AI-assisted prospecting workflow" role="img">
              <div className="pa-workspace">
                <div className="pa-workspace-head">
                  <div><span className="pa-status-dot" /> Prospecting workspace</div>
                  <span>Today</span>
                </div>
                <div className="pa-account-card">
                  <div className="pa-account-avatar">N</div>
                  <div><strong>Northstar Analytics</strong><small>Account activity · Updated recently</small></div>
                  <span className="pa-intent-pill">High intent</span>
                </div>
                <div className="pa-signal-card">
                  <span className="pa-signal-icon">↗</span>
                  <div><strong>New buying signal</strong><small>Recent product research and team activity</small></div>
                </div>
                <div className="pa-draft-card">
                  <div className="pa-draft-heading"><strong>Suggested opening</strong><span>Review draft</span></div>
                  <p>
                    “Hi Jordan, I noticed your team is exploring ways to
                    streamline reporting. Here’s a thought that may help…”
                  </p>
                  <div className="pa-draft-actions"><span>Edit draft</span><span>Save for later</span></div>
                </div>
              </div>
              <div className="pa-hero-chip">Signal → research → outreach</div>
            </div>
          </div>
        </section>

        <section className="pa-proof-band" aria-label="Prospecting workflow highlights">
          <div className="pa-container pa-proof-grid">
            <div><strong>Prioritize</strong><span>Accounts with relevant signals</span></div>
            <div><strong>Research</strong><span>Company and contact context</span></div>
            <div><strong>Personalize</strong><span>Outreach reps can make their own</span></div>
          </div>
        </section>

        <section className="pa-intro-section" id="solutions">
          <div className="pa-container pa-intro-layout">
            <p className="pa-eyebrow">MORE RELEVANT PROSPECTING</p>
            <div>
              <h2>Turn scattered signals into a clear next step.</h2>
              <p>
                It can be difficult to know which accounts are ready for a
                conversation. Useful clues are spread across activity,
                account records, and changing business needs.
              </p>
              <p>
                Prospecting Agent helps bring those clues together. It can
                highlight accounts to explore, prepare research, and suggest
                tailored outreach—while keeping the rep involved in every
                decision.
              </p>
            </div>
          </div>
        </section>

        <section className="pa-section pa-workflow-section" id="workflow">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">FROM SIGNAL TO SEND</p>
              <h2>A practical path from account activity to a personal conversation.</h2>
              <p>Give reps timely context and a clear way to decide what to do next.</p>
            </div>
            <div className="pa-workflow-grid">
              {workflow.map((step) => (
                <article className="pa-workflow-card" key={step.number}>
                  <span className="pa-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-section pa-use-cases" id="use-cases">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">A BETTER STARTING POINT FOR SALES</p>
              <h2>Help reps focus on the work that moves a deal forward.</h2>
            </div>
            <div className="pa-use-case-grid">
              {useCases.map((item) => (
                <article className="pa-use-case-card" key={item.label}>
                  <span className="pa-use-icon" aria-hidden="true">{item.icon}</span>
                  <p className="pa-card-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.href ? (
                    <Link to={item.href}>Explore this use case <span aria-hidden="true">→</span></Link>
                  ) : (
                    <a href="#resources">Explore this use case <span aria-hidden="true">→</span></a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-pricing-section" id="pricing">
          <div className="pa-container pa-pricing-layout">
            <div>
              <p className="pa-eyebrow">FLEXIBLE FOR YOUR TEAM</p>
              <h2>Choose a prospecting setup that fits your workflow.</h2>
              <p>
                Availability and usage options depend on your account and
                enabled features. Talk with our team to understand current
                plans and how pricing works for your organization.
              </p>
              <Link className="pa-text-link" to="/sales">Ask about pricing <span aria-hidden="true">→</span></Link>
            </div>
            <div className="pa-pricing-card">
              <span className="pa-pricing-tag">PROSPECTING AGENT</span>
              <h3>Built for focused outreach</h3>
              <p>Account signals, research, and draft assistance in a rep-guided process.</p>
              <ul>
                <li>Understand what prompted the recommendation.</li>
                <li>Review and personalize draft messages.</li>
                <li>Discuss plans and usage with our team.</li>
              </ul>
              <Link className="pa-button pa-button-primary" to="/sales">Get a demo</Link>
            </div>
          </div>
        </section>

        <section className="pa-section pa-examples-section">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">EXAMPLE WORKFLOWS</p>
              <h2>See how teams can use prospecting assistance.</h2>
              <p>Illustrative scenarios show how account context can shape a more useful first step.</p>
            </div>
            <div className="pa-example-grid">
              <article>
                <span>ACCOUNT RESEARCH</span>
                <h3>Prepare for a new opportunity.</h3>
                <p>Summarize key account context and identify questions for an initial conversation.</p>
              </article>
              <article>
                <span>SALES FOLLOW-UP</span>
                <h3>Continue a conversation with context.</h3>
                <p>Use approved notes and account activity to prepare a relevant follow-up draft.</p>
              </article>
              <article>
                <span>TEAM ENABLEMENT</span>
                <h3>Share effective prospecting practices.</h3>
                <p>Give reps a consistent starting point they can adapt to their own style and expertise.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="pa-trust-section">
          <div className="pa-container pa-trust-layout">
            <div>
              <p className="pa-eyebrow">AI WITH HUMAN OVERSIGHT</p>
              <h2>Useful assistance. Your team stays in control.</h2>
              <p>
                Prospecting suggestions should be understandable and
                reviewable. Keep people involved in the decisions that affect
                your customer relationships.
              </p>
            </div>
            <div className="pa-trust-points">
              <article><span>01</span><div><h3>Choose connected sources</h3><p>Review the data and integrations available to your prospecting workflow.</p></div></article>
              <article><span>02</span><div><h3>Keep review in the process</h3><p>Let reps check context and edit suggested outreach before taking action.</p></div></article>
              <article><span>03</span><div><h3>Set clear team guidance</h3><p>Align usage with your organization’s permissions and sales practices.</p></div></article>
            </div>
          </div>
        </section>

        <section className="pa-section pa-resources-section" id="resources">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">MORE WAYS TO PROSPECT</p>
              <h2>Make each part of the sales process more intentional.</h2>
            </div>
            <div className="pa-resource-grid">
              {useCases.map((item) => (
                <article className="pa-resource-card" key={item.label}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#workflow">Explore the workflow <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-agent-section">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">YOUR AI TOOLS, WORKING TOGETHER</p>
              <h2>Connect prospecting with the rest of your customer work.</h2>
              <p>Explore other ways Alchemize Technologies tools can support your team.</p>
            </div>
            <div className="pa-agent-grid">
              {relatedAgents.map((agent) => (
                <Link to={agent.href} key={agent.name}>
                  <span aria-hidden="true">✦</span>
                  <h3>{agent.name}</h3>
                  <p>{agent.description}</p>
                  <b>See more <span aria-hidden="true">→</span></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-section pa-faq-section" id="faqs">
          <div className="pa-container pa-faq-layout">
            <div>
              <p className="pa-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
              <h2>Questions about Prospecting Agent?</h2>
              <p>Learn about prospect research, connected data, and reviewing AI-assisted outreach.</p>
            </div>
            <div className="pa-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-final-cta">
          <div className="pa-container">
            <p className="pa-eyebrow">START WITH THE RIGHT ACCOUNT</p>
            <h2>Give every prospect conversation a more thoughtful beginning.</h2>
            <p>
              Explore how account research and personalized outreach can fit
              into your team's sales workflow.
            </p>
            <Link className="pa-button pa-button-primary" to="/sales">Get a demo</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default ProspectingAgent;
