import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const setupSteps = [
  {
    number: "01",
    title: "Choose an audience",
    description:
      "Start with the accounts and contacts your team wants to reach, using the segments and criteria available in your workspace."
  },
  {
    number: "02",
    title: "Set useful context",
    description:
      "Bring in approved company information, relevant account activity, and the value your team can offer."
  },
  {
    number: "03",
    title: "Shape the outreach",
    description:
      "Choose the message style and timing that fit your approach, then let the agent prepare a personalized draft."
  },
  {
    number: "04",
    title: "Set team guardrails",
    description:
      "Define review expectations and outreach pacing so recommendations fit your sales process."
  },
  {
    number: "05",
    title: "Review before sending",
    description:
      "Give reps the opportunity to check the research, refine the message, and decide how to follow up."
  }
];

const relatedTools = [
  {
    label: "START WITH INTENT",
    title: "Buyer Intent",
    description:
      "Use available website and account signals to identify companies that may be worth researching.",
    href: "/buying-intent"
  },
  {
    label: "ADD ACCOUNT CONTEXT",
    title: "Data Agent",
    description:
      "Explore customer and company information to help prepare for a more informed conversation.",
    href: "/data-agent"
  }
];

const relatedUseCases = [
  {
    title: "Identify Buyer Intent",
    description:
      "Prioritize accounts using relevant website activity and configured fit criteria.",
    href: "/buying-intent",
    status: "ESTABLISHED"
  },
  {
    title: "Enrich Contact and Company Data",
    description:
      "Give teams more complete records to support thoughtful segmentation and follow-up.",
    href: "/enrich-contact",
    status: "EMERGING"
  },
  {
    title: "Capture and Qualify Leads",
    description:
      "Help inbound prospects find the right information and make it easier for your team to respond.",
    href: "/capture-qualify-leads",
    status: "EMERGING"
  }
];

const questions = [
  [
    "What does Personal Outreach help a sales team do?",
    "It helps reps prepare relevant messages using account context, selected audience criteria, and timely signals."
  ],
  [
    "Can reps personalize messages before they are sent?",
    "Yes. Suggested messages are designed to be reviewed and refined by the rep so the final outreach fits the conversation."
  ],
  [
    "What context can be used to tailor an email?",
    "Context depends on the data sources and permissions configured for your account. Teams can use information relevant to the prospect and the purpose of the outreach."
  ],
  [
    "Can I control how often outreach is recommended?",
    "Available pacing and review settings depend on your account configuration. Align them with your team's sending policies and prospect experience."
  ],
  [
    "How does Personal Outreach work with Buyer Intent?",
    "Buyer Intent can help identify accounts for a closer look. Personal Outreach can then help prepare a message grounded in the context your team has reviewed."
  ],
  [
    "How is Personal Outreach priced?",
    "Pricing and usage depend on your plan and enabled features. Contact Alchemize Technologies for current details."
  ]
];

function PersonalOutreach() {
  return (
    <>
      <main className="personal-outreach-page">
        <header className="pa-main-nav po-main-nav">
          <Link className="pa-logo" to="/" aria-label="Alchemize Technologies home">
            Alchemize Technologies
          </Link>
          <nav aria-label="Main navigation">
            <a href="#overview">Products</a>
            <a href="#how-it-works">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </nav>
          <Link className="pa-nav-cta" to="/sales">Get a demo</Link>
        </header>

        <div className="po-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <Link to="/prospecting-agent">Prospecting Agent</Link><span aria-hidden="true">›</span>
            <span>Personal Outreach</span>
          </div>
        </div>

        <section className="po-hero" id="overview">
          <div className="pa-container po-hero-layout">
            <div className="po-hero-copy">
              <p className="po-eyebrow">ALCHEMIZE AI USE CASE LIBRARY</p>
              <span className="po-feature-label">PROSPECTING AGENT</span>
              <h1>Send personalized outreach with more context.</h1>
              <p>
                Help reps prepare thoughtful messages using account research,
                relevant activity, and the prospect's business needs—without
                making every email start from scratch.
              </p>
              <div className="po-hero-actions">
                <Link className="pa-button pa-button-primary" to="/prospecting-agent">
                  Explore Prospecting Agent
                </Link>
                <Link className="pa-button pa-button-secondary" to="/sales">
                  Get a demo
                </Link>
              </div>
            </div>
            <div className="po-hero-visual" role="img" aria-label="Illustration of a personalized sales email draft with account context">
              <div className="po-email-card">
                <div className="po-email-top">
                  <span className="po-email-avatar">J</span>
                  <div><strong>Jordan Lee</strong><small>Operations Director · Northstar Analytics</small></div>
                  <span className="po-review-tag">Needs review</span>
                </div>
                <div className="po-email-meta">
                  <span>Subject</span>
                  <strong>A more useful view of your reporting workflow</strong>
                </div>
                <div className="po-email-body">
                  <p>Hi Jordan,</p>
                  <p>
                    I saw your team has been exploring ways to bring reporting
                    into one view. I thought this idea might be useful based on
                    the goals you shared.
                  </p>
                  <p>Would it be helpful to compare approaches?</p>
                  <p>Best,<br />Alex</p>
                </div>
                <div className="po-email-footer">
                  <span>Context included: account activity</span>
                  <b>Edit draft</b>
                </div>
              </div>
              <div className="po-hero-caption">A useful starting draft, ready for a human review</div>
            </div>
          </div>
        </section>

        <section className="po-proof-band" aria-label="Personal outreach workflow benefits">
          <div className="pa-container po-proof-grid">
            <div><strong>Research first</strong><span>Ground messages in relevant context</span></div>
            <div><strong>Make it personal</strong><span>Give each draft a clear reason to connect</span></div>
            <div><strong>Keep control</strong><span>Let reps review before taking action</span></div>
          </div>
        </section>

        <section className="po-intro-section" id="how-it-works">
          <div className="pa-container po-intro-layout">
            <p className="po-eyebrow">PERSONALIZATION THAT SCALES</p>
            <div>
              <h2>Make each message feel relevant to the person receiving it.</h2>
              <p>
                Reps need time to understand an account and write a message
                that earns attention. When research and outreach happen across
                disconnected tools, it is easy to lose the details that make a
                conversation feel personal.
              </p>
              <p>
                Personal Outreach helps assemble approved context and prepare
                a tailored draft. Reps bring the judgment, edit the message,
                and decide when it is right to send.
              </p>
            </div>
          </div>
        </section>

        <nav className="po-toc" aria-label="Personal Outreach page sections">
          <div className="pa-container">
            <a href="#overview">Overview</a>
            <a href="#how-it-works">How it works</a>
            <a href="#setup-guide">Setup guide</a>
            <a href="#related-tools">Related tools</a>
            <a href="#resources">Related use cases</a>
          </div>
        </nav>

        <section className="po-section po-play-section" id="setup-guide">
          <div className="pa-container">
            <div className="po-section-heading">
              <p className="po-eyebrow">GET STARTED WITH PERSONAL OUTREACH</p>
              <h2>Build a repeatable process that still leaves room for people.</h2>
              <p>
                Set the audience, provide useful context, and agree on how
                suggested messages should be reviewed.
              </p>
            </div>
            <div className="po-step-grid">
              {setupSteps.map((step) => (
                <article className="po-step-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="po-section po-detail-section">
          <div className="pa-container po-detail-layout">
            <div className="po-detail-copy">
              <p className="po-eyebrow">FROM RESEARCH TO A RELEVANT MESSAGE</p>
              <h2>Use signals to make the opening feel timely.</h2>
              <p>
                A useful message connects a prospect's current priorities to a
                clear reason for reaching out. Combine account context with
                your team's expertise, then keep the message focused on the
                prospect.
              </p>
              <ul>
                <li>Start from an account or audience your team has selected.</li>
                <li>Use relevant activity and approved company context.</li>
                <li>Review, edit, and personalize before sending.</li>
              </ul>
            </div>
            <div className="po-context-panel">
              <div className="po-context-title"><strong>Draft context</strong><span>For rep review</span></div>
              <div className="po-context-row"><span>Account signal</span><b>Recent research activity</b></div>
              <div className="po-context-row"><span>Potential need</span><b>Reporting visibility</b></div>
              <div className="po-context-row"><span>Message goal</span><b>Offer a useful next step</b></div>
              <div className="po-context-note">Use context as a guide. Confirm details before sending.</div>
            </div>
          </div>
        </section>

        <section className="po-guardrails-section">
          <div className="pa-container po-guardrails-layout">
            <div>
              <p className="po-eyebrow">DESIGNED AROUND YOUR TEAM'S GUARDRAILS</p>
              <h2>Keep outreach thoughtful, measured, and reviewable.</h2>
              <p>
                Agree on the review steps, sending pace, and data sources that
                fit your organization. Use automation to support your team's
                process—not replace its judgment.
              </p>
            </div>
            <div className="po-guardrail-list">
              <article><span>01</span><div><h3>Choose review expectations</h3><p>Make it clear when a rep needs to approve or adjust a suggested message.</p></div></article>
              <article><span>02</span><div><h3>Set a comfortable pace</h3><p>Align outreach recommendations with your team's contact policies.</p></div></article>
              <article><span>03</span><div><h3>Use approved context</h3><p>Keep connected data and messaging aligned with your organization's guidance.</p></div></article>
            </div>
          </div>
        </section>

        <section className="po-section po-related-tools-section" id="related-tools">
          <div className="pa-container">
            <div className="po-section-heading">
              <p className="po-eyebrow">GO DEEPER WITH RELATED TOOLS</p>
              <h2>Bring stronger context to every conversation.</h2>
              <p>Pair personalized outreach with useful account signals and research.</p>
            </div>
            <div className="po-tool-grid">
              {relatedTools.map((tool) => (
                <Link to={tool.href} key={tool.title}>
                  <span>{tool.label}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <b>Explore tool <span aria-hidden="true">→</span></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="po-section po-resources-section" id="resources">
          <div className="pa-container">
            <div className="po-section-heading">
              <p className="po-eyebrow">RELATED USE CASES</p>
              <h2>Connect outreach to the rest of your prospecting work.</h2>
            </div>
            <div className="po-resource-grid">
              {relatedUseCases.map((item) => (
                <Link to={item.href} key={item.title}>
                  <span>{item.status}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <b>Read more <span aria-hidden="true">→</span></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="po-pricing-section" id="pricing">
          <div className="pa-container po-pricing-layout">
            <div>
              <p className="po-eyebrow">PLANS AND USAGE</p>
              <h2>Understand the right setup for your team.</h2>
              <p>
                Available features and usage depend on your account and
                configuration. Talk with our team for current plan information
                and guidance on setting up outreach responsibly.
              </p>
            </div>
            <div className="po-pricing-card">
              <span>PERSONAL OUTREACH</span>
              <h3>Support a more considered sales process</h3>
              <ul>
                <li>Research accounts before reaching out.</li>
                <li>Prepare a relevant message for rep review.</li>
                <li>Set team guidelines for follow-up.</li>
              </ul>
              <Link className="pa-button pa-button-primary" to="/sales">Talk to our team</Link>
            </div>
          </div>
        </section>

        <section className="po-section po-faq-section" id="faqs">
          <div className="pa-container po-faq-layout">
            <div>
              <p className="po-eyebrow">PERSONAL OUTREACH FAQ</p>
              <h2>Questions about personalized sales outreach?</h2>
              <p>Find answers about message context, review, and team controls.</p>
            </div>
            <div className="po-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="po-final-cta">
          <div className="pa-container">
            <p className="po-eyebrow">MAKE THE NEXT MESSAGE MATTER</p>
            <h2>Give every prospect a reason to keep the conversation going.</h2>
            <p>
              Explore how Prospecting Agent can help your team research
              accounts and prepare more relevant outreach.
            </p>
            <Link className="pa-button pa-button-primary" to="/sales">Get a demo</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default PersonalOutreach;
