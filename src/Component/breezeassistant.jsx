import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const workflows = [
  {
    icon: "⌕",
    label: "MEETING PREPARATION",
    title: "Walk into conversations with context.",
    description:
      "Bring together relevant account details and recent activity to help your team prepare talking points before a customer meeting.",
    href: "/data-agent"
  },
  {
    icon: "✉",
    label: "PERSONAL OUTREACH",
    title: "Start messages from a more useful place.",
    description:
      "Use available customer context to shape an outreach draft, then review and personalize it before sending.",
    href: "/personal-outreach"
  },
  {
    icon: "↗",
    label: "PIPELINE INSIGHTS",
    title: "Explore what is happening across your pipeline.",
    description:
      "Ask questions about connected deal information to help identify patterns and decide where your team should look closer.",
    href: "/prospecting-agent"
  }
];

const relatedTools = [
  {
    label: "AGENT MANAGEMENT",
    title: "Agent Hub",
    description:
      "Explore AI agents that support work across marketing, sales, and service.",
    href: "/agent"
  },
  {
    label: "CUSTOM AGENTS",
    title: "Agent Builder",
    description:
      "Learn how configured workflows can support repeatable team processes.",
    href: "/agent"
  },
  {
    label: "CAMPAIGN PLANNING",
    title: "Marketing Hub",
    description:
      "Plan campaigns, create content, and review marketing activity in one place.",
    href: "/marketing"
  },
  {
    label: "SALES RESEARCH",
    title: "Prospecting Agent",
    description:
      "Research accounts, notice relevant signals, and prepare personalized outreach.",
    href: "/prospecting-agent"
  }
];

const faqs = [
  [
    "What is Alchemize Assistant?",
    "Alchemize Assistant helps your team ask questions and work with information available through your connected tools and account settings."
  ],
  [
    "What can Alchemize Assistant help me do?",
    "Depending on the features you enable, it can help find relevant business context, prepare content, and support everyday workflows."
  ],
  [
    "How does the assistant use my business information?",
    "The assistant can use sources and records configured for your account. Review your organization's access and data settings before use."
  ],
  [
    "Can it create agents or workflows?",
    "Agent and workflow capabilities depend on the tools available in your account. Use the connected setup options to explore what your team can configure."
  ],
  [
    "How much does Alchemize Assistant cost?",
    "Availability and any usage requirements depend on your plan and enabled features. Contact Alchemize Technologies for current details."
  ],
  [
    "Can I use the assistant on mobile?",
    "Mobile availability depends on the current product experience and your account configuration. Check your account for supported options."
  ]
];

function BreezeAssistant() {
  return (
    <>
      <main className="breeze-assistant-page">
        <header className="pa-main-nav ba-main-nav">
          <Link className="pa-logo" to="/" aria-label="Alchemize Technologies home">
            Alchemize Technologies
          </Link>
          <nav aria-label="Main navigation">
            <a href="#features">Products</a>
            <a href="#use-cases">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </nav>
          <Link className="pa-nav-cta" to="/service">Get started</Link>
        </header>

        <div className="ba-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <span>Alchemize Assistant</span>
          </div>
        </div>

        <section className="ba-hero" id="overview">
          <div className="pa-container ba-hero-layout">
            <div className="ba-hero-copy">
              <p className="ba-eyebrow">AGENT HUB · AI ASSISTANT</p>
              <span className="ba-feature-label">ALCHEMIZE ASSISTANT</span>
              <h1>Ask. Build. Create. With your business in context.</h1>
              <p>
                Work with an AI assistant that can draw on the information and
                tools your team has connected, helping you move from a question
                to a useful next step.
              </p>
              <div className="ba-actions">
                <Link className="pa-button pa-button-primary" to="/service">
                  Get started
                </Link>
                <a className="pa-button pa-button-secondary" href="#use-cases">
                  Explore use cases
                </a>
              </div>
            </div>
            <div className="ba-hero-visual" role="img" aria-label="Illustration of an AI assistant helping prepare a customer meeting">
              <div className="ba-assistant-window">
                <div className="ba-assistant-heading">
                  <span className="ba-assistant-avatar">A</span>
                  <div><strong>Alchemize Assistant</strong><small>Business workspace · Example</small></div>
                  <span className="ba-status">READY</span>
                </div>
                <div className="ba-prompt-label">YOUR QUESTION</div>
                <div className="ba-prompt">Help me prepare for my next conversation with Acme Co.</div>
                <div className="ba-answer">
                  <span>ASSISTANT RESPONSE</span>
                  <p>Here is a starting point based on the account details available to your team.</p>
                  <ul>
                    <li>Review the latest account activity</li>
                    <li>Confirm open questions with your team</li>
                    <li>Prepare a relevant follow-up</li>
                  </ul>
                </div>
                <div className="ba-input">Ask a question <span>➤</span></div>
              </div>
              <div className="ba-hero-caption">Answers and ideas grounded in your workflow</div>
            </div>
          </div>
        </section>

        <section className="ba-value-band" aria-label="Assistant capabilities">
          <div className="pa-container ba-value-grid">
            <div><strong>Find useful context</strong><span>Ask questions about connected business information</span></div>
            <div><strong>Move work forward</strong><span>Get a starting point for everyday tasks</span></div>
            <div><strong>Keep people in control</strong><span>Review suggestions and choose what happens next</span></div>
          </div>
        </section>

        <section className="ba-intro-section" id="features">
          <div className="pa-container ba-intro-layout">
            <div>
              <p className="ba-eyebrow">A MORE USEFUL WAY TO GET WORK DONE</p>
              <h2>Get answers grounded in the context your team works with.</h2>
            </div>
            <div>
              <p>
                Generic AI answers can miss the details that matter to your
                business. Alchemize Assistant can work with information made
                available through your configured records and connected
                sources, helping teams start from more relevant context.
              </p>
              <p>
                Use it to explore a question, prepare a draft, or find a
                possible next step. Review the result and decide how to use it
                in your workflow.
              </p>
            </div>
          </div>
        </section>

        <nav className="ba-toc" aria-label="Alchemize Assistant page sections">
          <div className="pa-container">
            <a href="#overview">Overview</a>
            <a href="#features">Features</a>
            <a href="#use-cases">Use cases</a>
            <a href="#trust">Control and review</a>
            <a href="#resources">Related tools</a>
            <a href="#pricing">Plans</a>
            <a href="#faq">FAQs</a>
          </div>
        </nav>

        <section className="ba-section ba-capability-section">
          <div className="pa-container">
            <div className="ba-section-heading">
              <p className="ba-eyebrow">A HELPFUL PARTNER FOR EVERYDAY WORK</p>
              <h2>Turn questions into a practical starting point.</h2>
              <p>
                Explore business context, build on ideas, and create work
                artifacts with your team's review.
              </p>
            </div>
            <div className="ba-capability-grid">
              <article><span>01</span><h3>Get answers with context</h3><p>Ask about information available in connected records and configured sources.</p></article>
              <article><span>02</span><h3>Build on your playbook</h3><p>Explore agent and workflow options suited to your team's way of working.</p></article>
              <article><span>03</span><h3>Create a useful first draft</h3><p>Start content and task work with a suggestion you can review and refine.</p></article>
            </div>
          </div>
        </section>

        <section className="ba-demo-section">
          <div className="pa-container ba-demo-layout">
            <div>
              <p className="ba-eyebrow">SEE THE ASSISTANT IN ACTION</p>
              <h2>Bring your next question to the work.</h2>
              <p>
                Use a clear prompt, check the context behind a suggestion, and
                decide which parts belong in your team's workflow.
              </p>
            </div>
            <div className="ba-demo-card">
              <div className="ba-demo-top"><span>WORKSPACE EXAMPLE</span><b>Alchemize Assistant</b></div>
              <div className="ba-demo-question">Summarize the key topics I should cover in my upcoming account review.</div>
              <div className="ba-demo-response">
                <strong>A useful starting point</strong>
                <p>Review recent activity, open follow-ups, and the goals saved in the account record.</p>
                <div><span>Recent activity</span><i></i></div>
                <div><span>Open follow-ups</span><i></i></div>
                <div><span>Account goals</span><i></i></div>
              </div>
              <div className="ba-demo-foot">Review details in your connected records before sharing.</div>
            </div>
          </div>
        </section>

        <section className="ba-section ba-use-cases" id="use-cases">
          <div className="pa-container">
            <div className="ba-section-heading">
              <p className="ba-eyebrow">MORE WAYS TO GET WORK DONE</p>
              <h2>Put the assistant to work across your day.</h2>
            </div>
            <div className="ba-use-case-grid">
              {workflows.map((workflow) => (
                <Link to={workflow.href} key={workflow.title}>
                  <span className="ba-use-icon" aria-hidden="true">{workflow.icon}</span>
                  <span className="ba-card-label">{workflow.label}</span>
                  <h3>{workflow.title}</h3>
                  <p>{workflow.description}</p>
                  <b>Explore use case <span aria-hidden="true">→</span></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ba-trust-section" id="trust">
          <div className="pa-container ba-trust-layout">
            <div>
              <p className="ba-eyebrow">USE AI WITH YOUR TEAM IN CONTROL</p>
              <h2>Keep context, review, and decisions connected.</h2>
              <p>
                Choose which sources and tools are available to your account.
                Review generated suggestions and confirm important details
                before using them in customer-facing work.
              </p>
            </div>
            <div className="ba-trust-points">
              <article><span>01</span><div><h3>Use configured sources</h3><p>Work with the information your administrators and team have made available.</p></div></article>
              <article><span>02</span><div><h3>Review before acting</h3><p>Check answers and drafts against the original business context.</p></div></article>
              <article><span>03</span><div><h3>Follow your access settings</h3><p>Manage connected tools and data access through your account configuration.</p></div></article>
            </div>
          </div>
        </section>

        <section className="ba-pricing-section" id="pricing">
          <div className="pa-container ba-pricing-layout">
            <div>
              <p className="ba-eyebrow">PLANS AND AVAILABILITY</p>
              <h2>Find the right assistant setup for your team.</h2>
              <p>
                Availability, included capabilities, and usage requirements
                depend on your plan and enabled features. Contact Alchemize
                Technologies for current details.
              </p>
              <Link className="pa-button pa-button-secondary" to="/service">Talk to our team</Link>
            </div>
            <div className="ba-pricing-card">
              <span>ALCHEMIZE ASSISTANT</span>
              <h3>Explore the capabilities available to your account.</h3>
              <ul>
                <li>Ask questions about connected business context.</li>
                <li>Review assistant suggestions before using them.</li>
                <li>Check plan and usage details with your team.</li>
              </ul>
              <Link className="pa-button pa-button-primary" to="/service">Get a demo</Link>
            </div>
          </div>
        </section>

        <section className="ba-section ba-tools-section" id="resources">
          <div className="pa-container">
            <div className="ba-section-heading">
              <p className="ba-eyebrow">GET MORE FROM YOUR CONNECTED TOOLS</p>
              <h2>Explore more ways to support your team's work.</h2>
            </div>
            <div className="ba-tools-grid">
              {relatedTools.map((tool) => (
                <Link to={tool.href} key={tool.title}>
                  <span>{tool.label}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <b>See more <span aria-hidden="true">→</span></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ba-faq-section" id="faq">
          <div className="pa-container ba-faq-layout">
            <div>
              <p className="ba-eyebrow">ALCHEMIZE ASSISTANT FAQ</p>
              <h2>Questions about your AI assistant?</h2>
              <p>Learn about capabilities, connected context, and availability.</p>
            </div>
            <div className="ba-faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ba-final-cta">
          <div className="pa-container">
            <p className="ba-eyebrow">YOUR BUSINESS CONTEXT, READY TO HELP</p>
            <h2>Make the next question a little easier to answer.</h2>
            <p>
              Explore how Alchemize Assistant can fit into your team's tools
              and day-to-day workflows.
            </p>
            <Link className="pa-button pa-button-primary" to="/service">Get started</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default BreezeAssistant;