import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const workflow = [
  {
    number: "01",
    title: "Ask a business question",
    description:
      "Start with a question about an account, contact, deal, or customer trend your team needs to understand."
  },
  {
    number: "02",
    title: "Bring relevant context together",
    description:
      "Explore information available in connected records, approved conversations, and other configured sources."
  },
  {
    number: "03",
    title: "Review the insight",
    description:
      "Check the answer and its context so your team can decide whether it is useful and accurate for the task."
  },
  {
    number: "04",
    title: "Put it to work",
    description:
      "Use the insight to prepare a conversation, improve a record, or choose a more relevant next action."
  }
];

const capabilities = [
  {
    label: "ACCOUNT RESEARCH",
    title: "Understand an account before the next conversation.",
    description:
      "Bring together relevant company, deal, and interaction context to help reps prepare for a useful discussion.",
    icon: "⌕",
    href: "#research"
  },
  {
    label: "BUYING SIGNALS",
    title: "Notice activity that may call for action.",
    description:
      "Explore configured website and account signals, then let your team decide which ones deserve follow-up.",
    icon: "↗",
    href: "/buying-intent"
  },
  {
    label: "CRM CONTEXT",
    title: "Keep important insights close to the record.",
    description:
      "Use reviewed answers to make customer and company records more useful for the next person who needs them.",
    icon: "▤",
    href: "/smartcrm"
  }
];

const connectedTools = [
  {
    title: "Buyer Intent",
    description: "See configured website and account signals that may reveal timely opportunities.",
    href: "/buying-intent"
  },
  {
    title: "Prospecting Agent",
    description: "Use account context to help prepare research and personalized outreach drafts.",
    href: "/prospecting-agent"
  },
  {
    title: "Customer Agent",
    description: "Help teams respond to customer questions with relevant information.",
    href: "/service"
  },
  {
    title: "Agent Builder",
    description: "Explore how AI workflows can support repeatable team processes.",
    href: "/agent"
  }
];

const questions = [
  [
    "What is Data Agent?",
    "Data Agent helps teams explore business information and turn relevant context into useful answers for research and customer work."
  ],
  [
    "What kinds of questions can Data Agent help answer?",
    "It can assist with questions about accounts, contacts, deals, customer activity, and other information available through your connected setup."
  ],
  [
    "How is Data Agent different from a standalone AI tool?",
    "A connected workflow can use the business context and permissions configured for your organization. Teams should still review answers and confirm important details."
  ],
  [
    "Can Data Agent update CRM records?",
    "Record updates depend on the features, permissions, and review settings available in your account. Check proposed changes before applying them."
  ],
  [
    "Which languages are supported?",
    "Language availability depends on the enabled features and connected tools. Contact our team for current support information."
  ],
  [
    "How does Data Agent help with personalization?",
    "Relevant account and customer context can help teams prepare more specific messages, questions, and follow-up actions."
  ],
  [
    "How much does Data Agent cost?",
    "Pricing and usage depend on your plan and enabled features. Contact Alchemize Technologies for current details."
  ]
];

function DataAgent() {
  return (
    <>
      <main className="data-agent-page">
        <header className="pa-main-nav da-main-nav">
          <Link className="pa-logo" to="/" aria-label="Alchemize Technologies home">
            Alchemize Technologies
          </Link>
          <nav aria-label="Main navigation">
            <a href="#overview">Products</a>
            <a href="#capabilities">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </nav>
          <Link className="pa-nav-cta" to="/agent">Get a demo</Link>
        </header>

        <div className="da-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <span>Data Agent</span>
          </div>
        </div>

        <section className="da-hero" id="overview">
          <div className="pa-container da-hero-layout">
            <div className="da-hero-copy">
              <p className="da-eyebrow">AGENT HUB · DATA AGENT</p>
              <h1>Know the account. Show up prepared.</h1>
              <p>
                Bring relevant information from your connected business
                context into view, so your team can research accounts, spot
                useful signals, and prepare for the next conversation.
              </p>
              <div className="da-actions">
                <Link className="pa-button pa-button-primary" to="/agent">Get a demo</Link>
                <a className="pa-button pa-button-secondary" href="#how-it-works">See how it works</a>
              </div>
            </div>
            <div className="da-hero-visual" role="img" aria-label="Illustration of an account research answer based on connected business context">
              <div className="da-insight-card">
                <div className="da-insight-header">
                  <span className="da-insight-icon">✦</span>
                  <div><strong>Account research</strong><small>Based on connected context</small></div>
                  <span className="da-insight-menu">•••</span>
                </div>
                <div className="da-question">What should I know before my next call?</div>
                <p>
                  The account recently reviewed reporting workflows. Previous
                  discussions focused on visibility across teams. Consider
                  asking how they currently share performance updates.
                </p>
                <div className="da-source-list">
                  <span>Company notes</span><span>Recent activity</span><span>Deal history</span>
                </div>
                <div className="da-insight-actions"><span>Review sources</span><b>Use in preparation</b></div>
              </div>
              <div className="da-hero-caption">Context for a more informed conversation</div>
            </div>
          </div>
        </section>

        <section className="da-proof-band" aria-label="Data Agent benefits">
          <div className="pa-container da-proof-grid">
            <div><strong>Research with context</strong><span>Bring relevant information into view</span></div>
            <div><strong>Ask better questions</strong><span>Explore account and customer details</span></div>
            <div><strong>Take informed action</strong><span>Use reviewed insights in your workflow</span></div>
          </div>
        </section>

        <section className="da-intro-section" id="research">
          <div className="pa-container da-intro-layout">
            <p className="da-eyebrow">BETTER DATA. BETTER DECISIONS.</p>
            <div>
              <h2>Spend less time searching. Bring the right context forward.</h2>
              <p>
                Useful details can be spread across CRM records, notes,
                conversations, and deal history. Data Agent helps teams find
                and organize relevant information around a business question.
              </p>
              <p>
                Use those insights to prepare for a call, understand an
                account's priorities, or decide what information should be
                reviewed next. Your team can check the context before acting.
              </p>
            </div>
          </div>
        </section>

        <nav className="da-toc" aria-label="Data Agent page sections">
          <div className="pa-container">
            <a href="#overview">Overview</a>
            <a href="#how-it-works">How it works</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#pricing">Plans</a>
            <a href="#resources">Related tools</a>
          </div>
        </nav>

        <section className="da-section da-how-section" id="how-it-works">
          <div className="pa-container">
            <div className="da-section-heading">
              <p className="da-eyebrow">ASK. UNDERSTAND. ACT.</p>
              <h2>Turn a business question into a useful next step.</h2>
              <p>Use your available context to support better preparation and more informed decisions.</p>
            </div>
            <div className="da-workflow-grid">
              {workflow.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="da-section da-capabilities-section" id="capabilities">
          <div className="pa-container">
            <div className="da-section-heading">
              <p className="da-eyebrow">WHAT YOUR TEAM CAN EXPLORE</p>
              <h2>Find useful context across the customer journey.</h2>
            </div>
            <div className="da-capability-grid">
              {capabilities.map((item) => (
                <article key={item.label}>
                  <span className="da-capability-icon" aria-hidden="true">{item.icon}</span>
                  <p className="da-card-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.href.startsWith("#") ? (
                    <a href={item.href}>Learn more <span aria-hidden="true">→</span></a>
                  ) : (
                    <Link to={item.href}>Learn more <span aria-hidden="true">→</span></Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="da-context-section">
          <div className="pa-container da-context-layout">
            <div>
              <p className="da-eyebrow">MAKE RESEARCH MORE PRACTICAL</p>
              <h2>Move from scattered notes to useful account preparation.</h2>
              <p>
                Use questions that match the work in front of you: prepare
                for a call, understand a recent deal change, or summarize
                context a teammate should know.
              </p>
            </div>
            <div className="da-question-list">
              <div><span>01</span><strong>What changed at this account recently?</strong><b>Explore activity</b></div>
              <div><span>02</span><strong>What priorities came up in earlier conversations?</strong><b>Review notes</b></div>
              <div><span>03</span><strong>What should I clarify on the next call?</strong><b>Prepare questions</b></div>
            </div>
          </div>
        </section>

        <section className="da-section da-stories-section">
          <div className="pa-container">
            <div className="da-section-heading">
              <p className="da-eyebrow">EXAMPLE WORKFLOWS</p>
              <h2>Make connected information useful to every team.</h2>
              <p>Illustrative examples of how teams might use research in their daily work.</p>
            </div>
            <div className="da-story-grid">
              <article><span>ENTERPRISE SALES</span><h3>Prepare for a complex account.</h3><p>Bring together company context and prior discussions before coordinating with a buying group.</p></article>
              <article><span>GROWING TEAMS</span><h3>Catch up on a changing opportunity.</h3><p>Review recent activity and deal notes to understand what may need attention.</p></article>
              <article><span>CUSTOMER SUCCESS</span><h3>Make follow-up more informed.</h3><p>Give teammates relevant context before they respond to a customer request.</p></article>
            </div>
          </div>
        </section>

        <section className="da-trust-section">
          <div className="pa-container da-trust-layout">
            <div>
              <p className="da-eyebrow">AI WITH REVIEWABLE CONTEXT</p>
              <h2>Keep your team confident in how insights are used.</h2>
              <p>
                Treat AI answers as decision support. Make it easy for people
                to review information, follow organization guidance, and
                confirm important details before acting.
              </p>
            </div>
            <div className="da-trust-points">
              <article><span>01</span><div><h3>Use connected sources intentionally</h3><p>Review which records and integrations are available to each workflow.</p></div></article>
              <article><span>02</span><div><h3>Check context before acting</h3><p>Give teammates a chance to confirm insights and correct missing details.</p></div></article>
              <article><span>03</span><div><h3>Follow your team's access policies</h3><p>Align usage with your permissions, data practices, and review process.</p></div></article>
            </div>
          </div>
        </section>

        <section className="da-section da-resources-section" id="resources">
          <div className="pa-container">
            <div className="da-section-heading">
              <p className="da-eyebrow">YOUR AI TOOLS, WORKING TOGETHER</p>
              <h2>Connect research with the actions your team takes next.</h2>
            </div>
            <div className="da-tools-grid">
              {connectedTools.map((tool) => (
                <Link to={tool.href} key={tool.title}>
                  <span aria-hidden="true">✦</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <b>See more <span aria-hidden="true">→</span></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="da-pricing-section" id="pricing">
          <div className="pa-container da-pricing-layout">
            <div>
              <p className="da-eyebrow">PLANS AND USAGE</p>
              <h2>Find the right way to use Data Agent.</h2>
              <p>
                Availability, usage, and pricing depend on your account and
                enabled features. Our team can help you understand current
                options for your organization.
              </p>
            </div>
            <div className="da-pricing-card">
              <span>DATA AGENT</span>
              <h3>Research that fits your workflow</h3>
              <ul>
                <li>Explore account and customer context.</li>
                <li>Review answers before acting on them.</li>
                <li>Connect insights to relevant team workflows.</li>
              </ul>
              <Link className="pa-button pa-button-primary" to="/agent">Ask about Data Agent</Link>
            </div>
          </div>
        </section>

        <section className="da-section da-faq-section" id="faqs">
          <div className="pa-container da-faq-layout">
            <div>
              <p className="da-eyebrow">DATA AGENT FAQ</p>
              <h2>Questions about business research with AI?</h2>
              <p>Find answers about connected data, research, and reviewing AI-assisted insights.</p>
            </div>
            <div className="da-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="da-final-cta">
          <div className="pa-container">
            <p className="da-eyebrow">KEEP YOUR DATA USEFUL</p>
            <h2>Give your team the context to take the next step.</h2>
            <p>
              Explore Data Agent and connected tools for researching accounts
              and preparing customer conversations.
            </p>
            <Link className="pa-button pa-button-primary" to="/agent">Get a demo</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default DataAgent;
