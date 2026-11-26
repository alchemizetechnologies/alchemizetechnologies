import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const setupSteps = [
  {
    number: "01",
    title: "Define the agent's role",
    description:
      "Choose the kinds of visitor questions it should help with, the tone that fits your brand, and when a person should take over."
  },
  {
    number: "02",
    title: "Connect approved information",
    description:
      "Provide helpful website pages, support content, and other sources your team has reviewed for visitor-facing answers."
  },
  {
    number: "03",
    title: "Test the visitor experience",
    description:
      "Try common questions, check how the agent handles uncertainty, and confirm the right handoff for sales or support."
  },
  {
    number: "04",
    title: "Launch on a supported channel",
    description:
      "Choose where visitors can engage, then review conversations and refine the experience as your team learns."
  }
];

const relatedTools = [
  {
    label: "FOLLOW UP WITH CONTEXT",
    title: "Prospecting Agent",
    description:
      "Help sales reps research accounts and prepare relevant outreach for review.",
    href: "/prospecting-agent"
  },
  {
    label: "UNDERSTAND THE ACCOUNT",
    title: "Data Agent",
    description:
      "Explore connected customer and company context to inform the next conversation.",
    href: "/data-agent"
  },
  {
    label: "PRIORITIZE INTEREST",
    title: "Buyer Intent",
    description:
      "Review configured account and website signals that may indicate a timely opportunity.",
    href: "/buying-intent"
  }
];

const relatedUseCases = [
  {
    status: "ESTABLISHED",
    title: "Identify Buyer Intent",
    description:
      "Help teams focus on accounts with relevant activity and a reason to follow up.",
    href: "/buying-intent"
  },
  {
    status: "DATA QUALITY",
    title: "Enrich Contact and Company Data",
    description:
      "Make selected customer and company records more useful for segmentation and follow-up.",
    href: "/enrich-contact"
  },
  {
    status: "OUTREACH",
    title: "Send Personalized Outreach",
    description:
      "Use available customer context to help reps prepare more relevant messages.",
    href: "/personal-outreach"
  }
];

const questions = [
  [
    "What does Capture and Qualify Leads help with?",
    "It helps respond to inbound questions, understand a visitor's needs, and guide them toward an appropriate next step."
  ],
  [
    "What information can the agent use?",
    "The agent can use approved content and sources configured for your account. Keep those sources current and relevant to visitor questions."
  ],
  [
    "Can the agent book a meeting?",
    "Meeting options depend on the channels and scheduling tools connected to your account. Confirm the available setup with your team."
  ],
  [
    "How does the agent know when to hand off to a person?",
    "Teams can define when a conversation needs human attention, such as a sensitive question, an unclear answer, or a request to speak with sales."
  ],
  [
    "Where can visitors talk with the agent?",
    "Available channels depend on your product configuration and integrations. Review supported channels before planning a launch."
  ],
  [
    "How is lead qualification priced?",
    "Availability, usage, and pricing depend on your plan and enabled features. Contact Alchemize Technologies for current details."
  ]
];

function CaptureQualifyLeads() {
  return (
    <>
      <main className="capture-qualify-page">
        <header className="pa-main-nav cq-main-nav">
          <Link className="pa-logo" to="/" aria-label="Alchemize Technologies home">
            Alchemize Technologies
          </Link>
          <nav aria-label="Main navigation">
            <a href="#overview">Products</a>
            <a href="#how-it-works">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </nav>
          <Link className="pa-nav-cta" to="/service">Get a demo</Link>
        </header>

        <div className="cq-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <span>Capture and Qualify Leads</span>
          </div>
        </div>

        <section className="cq-hero" id="overview">
          <div className="pa-container cq-hero-layout">
            <div className="cq-hero-copy">
              <p className="cq-eyebrow">ALCHEMIZE AI USE CASE LIBRARY</p>
              <span className="cq-feature-label">CUSTOMER AGENT</span>
              <h1>Capture inbound interest and help visitors find their next step.</h1>
              <p>
                Give people timely answers from your approved content, learn
                what they need, and guide qualified questions toward the right
                person on your team.
              </p>
              <div className="cq-actions">
                <a className="pa-button pa-button-primary" href="#setup-guide">
                  Get started with Customer Agent
                </a>
                <Link className="pa-button pa-button-secondary" to="/service">
                  Get a demo
                </Link>
              </div>
            </div>
            <div className="cq-hero-visual" role="img" aria-label="Illustrative website conversation that answers a question and offers a next step">
              <div className="cq-chat-window">
                <div className="cq-chat-heading">
                  <span className="cq-agent-avatar">A</span>
                  <div><strong>Alchemize Assistant</strong><small>Visitor support · Example</small></div>
                  <span className="cq-live-status">● Available</span>
                </div>
                <div className="cq-chat-thread">
                  <div className="cq-chat-message cq-chat-visitor">Can your team help us bring reporting into one place?</div>
                  <div className="cq-chat-message cq-chat-agent">I can share an overview. To point you in the right direction, how does your team handle reporting today?</div>
                  <div className="cq-chat-message cq-chat-visitor">We use a few separate tools and want a clearer view.</div>
                </div>
                <div className="cq-chat-qualify">
                  <span>VISITOR NEED</span>
                  <strong>Explore unified reporting</strong>
                  <b>Suggested next step: talk with the team</b>
                </div>
                <div className="cq-chat-input">Write a message <span>➤</span></div>
              </div>
              <div className="cq-hero-caption">Helpful answers, with a clear handoff when needed</div>
            </div>
          </div>
        </section>

        <section className="cq-proof-band" aria-label="Lead qualification workflow">
          <div className="pa-container cq-proof-grid">
            <div><strong>Respond promptly</strong><span>Help visitors get oriented</span></div>
            <div><strong>Understand intent</strong><span>Ask relevant qualification questions</span></div>
            <div><strong>Route thoughtfully</strong><span>Connect people with the right next step</span></div>
          </div>
        </section>

        <section className="cq-intro-section" id="how-it-works">
          <div className="pa-container cq-intro-layout">
            <div>
              <p className="cq-eyebrow">CAPTURE AND QUALIFY LEADS</p>
              <h2>Make it easier for interested visitors to start a conversation.</h2>
            </div>
            <div>
              <p>
                When a visitor has a question, waiting for a response can make
                it harder to keep the conversation moving. A guided agent can
                help surface useful information and understand what the person
                is looking for.
              </p>
              <p>
                Connect approved content, define when to involve a teammate,
                and shape a visitor experience that supports your sales
                process without losing the human touch.
              </p>
            </div>
          </div>
        </section>

        <nav className="cq-toc" aria-label="Capture and Qualify Leads page sections">
          <div className="pa-container">
            <a href="#overview">Overview</a>
            <a href="#how-it-works">How it works</a>
            <a href="#setup-guide">Step by step</a>
            <a href="#related-tools">Dive deeper</a>
            <a href="#resources">Related use cases</a>
            <a href="#pricing">Get started now</a>
          </div>
        </nav>

        <section className="cq-section cq-how-section">
          <div className="pa-container">
            <div className="cq-section-heading">
              <p className="cq-eyebrow">FROM FIRST QUESTION TO NEXT STEP</p>
              <h2>Give each visitor a helpful path forward.</h2>
              <p>Support a useful conversation while keeping your team involved where it matters.</p>
            </div>
            <div className="cq-how-grid">
              <article><span>01</span><h3>Answer with approved content</h3><p>Help visitors find relevant information from the sources your team provides.</p></article>
              <article><span>02</span><h3>Understand what they need</h3><p>Use clear questions to learn which product, service, or support path fits.</p></article>
              <article><span>03</span><h3>Offer a relevant next step</h3><p>Guide people toward a helpful resource, a meeting option, or a teammate.</p></article>
            </div>
          </div>
        </section>

        <section className="cq-section cq-setup-section" id="setup-guide">
          <div className="pa-container">
            <div className="cq-section-heading">
              <p className="cq-eyebrow">GET STARTED WITH CUSTOMER AGENT</p>
              <h2>Set up an experience your visitors can trust.</h2>
              <p>
                Configure the agent's role, provide reliable information,
                test conversations, and choose where it should be available.
              </p>
            </div>
            <div className="cq-setup-grid">
              {setupSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cq-guardrails-section">
          <div className="pa-container cq-guardrails-layout">
            <div>
              <p className="cq-eyebrow">AUTOMATION WITH A HUMAN HANDOFF</p>
              <h2>Make the boundaries clear before going live.</h2>
              <p>
                Decide what the agent can answer, when it should ask for help,
                and how a person can take over. Test common and unusual
                questions before opening the experience to visitors.
              </p>
            </div>
            <div className="cq-guardrail-list">
              <article><span>01</span><div><h3>Use reviewed sources</h3><p>Keep connected content accurate, relevant, and appropriate for visitors.</p></div></article>
              <article><span>02</span><div><h3>Define escalation points</h3><p>Route sensitive, complex, or uncertain requests to a teammate.</p></div></article>
              <article><span>03</span><div><h3>Check conversations over time</h3><p>Review where visitors get stuck and improve the guidance as needed.</p></div></article>
            </div>
          </div>
        </section>

        <section className="cq-section cq-tools-section" id="related-tools">
          <div className="pa-container">
            <div className="cq-section-heading">
              <p className="cq-eyebrow">GO DEEPER WITH RELATED TOOLS</p>
              <h2>Connect qualification with follow-up and account context.</h2>
            </div>
            <div className="cq-tools-grid">
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

        <section className="cq-section cq-resources-section" id="resources">
          <div className="pa-container">
            <div className="cq-section-heading">
              <p className="cq-eyebrow">RELATED USE CASES</p>
              <h2>Build a connected experience from first visit to follow-up.</h2>
            </div>
            <div className="cq-resources-grid">
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

        <section className="cq-pricing-section" id="pricing">
          <div className="pa-container cq-pricing-layout">
            <div>
              <p className="cq-eyebrow">PLANS AND AVAILABILITY</p>
              <h2>Find the right lead qualification setup for your team.</h2>
              <p>
                Available channels, features, and usage depend on your account
                configuration. Talk to our team for current plan information
                and help planning a rollout.
              </p>
            </div>
            <div className="cq-pricing-card">
              <span>CUSTOMER AGENT</span>
              <h3>Start with a focused visitor experience.</h3>
              <ul>
                <li>Choose the questions the agent should handle.</li>
                <li>Connect relevant, reviewed content sources.</li>
                <li>Test handoffs before expanding to more channels.</li>
              </ul>
              <Link className="pa-button pa-button-primary" to="/service">Talk to our team</Link>
            </div>
          </div>
        </section>

        <section className="cq-section cq-faq-section" id="faqs">
          <div className="pa-container cq-faq-layout">
            <div>
              <p className="cq-eyebrow">CUSTOMER AGENT FAQ</p>
              <h2>Questions about capturing and qualifying leads?</h2>
              <p>Learn about content, visitor conversations, handoffs, and setup.</p>
            </div>
            <div className="cq-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cq-final-cta">
          <div className="pa-container">
            <p className="cq-eyebrow">HELP GOOD CONVERSATIONS GET STARTED</p>
            <h2>Give every interested visitor a clear next step.</h2>
            <p>
              Explore how Customer Agent can support visitor questions and
              your team's lead qualification process.
            </p>
            <Link className="pa-button pa-button-primary" to="/service">Get a demo</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default CaptureQualifyLeads;
