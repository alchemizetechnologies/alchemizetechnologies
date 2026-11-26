import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const supportChannels = [
  {
    icon: "◉",
    title: "Voice",
    description:
      "Help callers get answers and route conversations to a teammate when a request needs personal attention. Availability depends on your setup."
  },
  {
    icon: "✉",
    title: "Email, chat, and forms",
    description:
      "Support common questions across digital touchpoints using content and customer context your team has approved."
  },
  {
    icon: "↗",
    title: "Messaging channels",
    description:
      "Meet customers in supported messaging channels, subject to your account, integrations, and channel configuration."
  }
];

const connectedTools = [
  {
    label: "SALES FOLLOW-UP",
    title: "Prospecting Agent",
    description:
      "Help reps research accounts and prepare relevant outreach for review.",
    href: "/prospecting-agent"
  },
  {
    label: "AI ASSISTANT",
    title: "Alchemize Assistant",
    description:
      "Get answers grounded in connected business context and help with everyday work.",
    href: "/alchemize-assistant"
  },
  {
    label: "CUSTOMER CONTEXT",
    title: "Data Agent",
    description:
      "Explore connected customer and company information to inform conversations.",
    href: "/data-agent"
  },
  {
    label: "CUSTOM WORKFLOWS",
    title: "Agent Hub",
    description:
      "Explore agents that can support workflows across marketing, sales, and service.",
    href: "/agent"
  }
];

const questions = [
  [
    "What is an AI customer agent?",
    "A customer agent can respond to common questions using configured sources and guide customers toward a next step. Teams define its role and when a person should take over."
  ],
  [
    "How does Customer Agent pricing work?",
    "Availability and usage-based charges depend on your plan and enabled features. Contact Alchemize Technologies for current pricing and eligibility."
  ],
  [
    "How can I guide the agent's responses?",
    "Configure its role, connect reviewed content, and test common questions and handoffs before making it available to customers."
  ],
  [
    "Which languages and channels are supported?",
    "Language and channel availability can vary by product configuration and integrations. Confirm current support for your account before launch."
  ],
  [
    "How is an AI customer agent different from a chatbot?",
    "A configured agent can use approved business context and follow defined actions, while a basic chatbot may rely on fixed menus or scripted responses. Capabilities depend on the features you enable."
  ],
  [
    "Can a team member take over a conversation?",
    "Set clear escalation rules so requests that need judgment, personal attention, or additional context can be routed to your team."
  ]
];

function CustomerAgent() {
  return (
    <>
      <main className="customer-agent-page">
        <div className="ca-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <span>Customer Agent</span>
          </div>
        </div>

        <section className="ca-hero" id="overview">
          <div className="pa-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">AGENT HUB · CUSTOMER SUPPORT</p>
              <span className="ca-feature-label">CUSTOMER AGENT</span>
              <h1>Your always-on support agent. Built to handle more.</h1>
              <p>
                Help customers get timely answers, take configured actions in
                your CRM, and pass conversations to your team with useful
                context when a person should step in.
              </p>
              <div className="ca-actions">
                <Link className="pa-button pa-button-primary" to="/service">
                  Get a demo
                </Link>
                <a className="pa-button pa-button-secondary" href="#channels">
                  Explore support channels
                </a>
              </div>
            </div>
            <div className="ca-hero-visual" role="img" aria-label="Illustration of a customer support conversation with an option to contact a team member">
              <div className="ca-conversation">
                <div className="ca-conversation-heading">
                  <span className="ca-avatar">A</span>
                  <div><strong>Alchemize Support</strong><small>Customer conversation · Example</small></div>
                  <span className="ca-online">● Available</span>
                </div>
                <div className="ca-message ca-message-customer">
                  I need help understanding how to update my account details.
                </div>
                <div className="ca-message ca-message-agent">
                  I can point you to the steps. If you need help with a specific change, I can also connect you with our team.
                </div>
                <div className="ca-next-step">
                  <span>HELPFUL NEXT STEP</span>
                  <strong>View account settings guide</strong>
                  <b>Or ask to speak with a teammate</b>
                </div>
                <div className="ca-message-input">Write a message <span>➤</span></div>
              </div>
              <div className="ca-hero-caption">Useful answers, with a clear human handoff</div>
            </div>
          </div>
        </section>

        <section className="ca-benefits-band" aria-label="Customer support benefits">
          <div className="pa-container ca-benefits-grid">
            <div><strong>Respond consistently</strong><span>Use reviewed information as a starting point</span></div>
            <div><strong>Support your workflow</strong><span>Guide customers toward a relevant next step</span></div>
            <div><strong>Keep people involved</strong><span>Route conversations to your team when needed</span></div>
          </div>
        </section>

        <section className="ca-intro-section">
          <div className="pa-container ca-intro-layout">
            <div>
              <p className="ca-eyebrow">SUPPORT THAT FITS YOUR BUSINESS</p>
              <h2>Customer support that works the way you do.</h2>
            </div>
            <div>
              <p>
                Every team has its own voice, policies, and support process.
                Configure the agent around approved content and guidance, then
                decide which questions it can handle and when your team should
                take over.
              </p>
              <p>
                Where supported by your account and connected tools, customer
                context can help the agent guide people through the next step
                while keeping your team informed.
              </p>
            </div>
          </div>
        </section>

        <nav className="ca-toc" aria-label="Customer Agent page sections">
          <div className="pa-container">
            <a href="#overview">Overview</a>
            <a href="#channels">Channels</a>
            <a href="#setup">How it works</a>
            <a href="#trust">Control and review</a>
            <a href="#resources">Related tools</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQs</a>
          </div>
        </nav>

        <section className="ca-section ca-channel-section" id="channels">
          <div className="pa-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">ONE AGENT, SUPPORTED CHANNELS</p>
              <h2>Meet customers where your team can support them.</h2>
              <p>
                Channel availability depends on your plan, integrations, and
                product configuration.
              </p>
            </div>
            <div className="ca-channel-grid">
              {supportChannels.map((channel) => (
                <article key={channel.title}>
                  <span className="ca-channel-icon" aria-hidden="true">{channel.icon}</span>
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-setup-section" id="setup">
          <div className="pa-container ca-setup-layout">
            <div>
              <p className="ca-eyebrow">GET STARTED WITH CUSTOMER AGENT</p>
              <h2>Launch with a clear plan and room to improve.</h2>
              <p>
                Start with a focused support need, check the experience, and
                expand when your team is comfortable with the results.
              </p>
              <Link className="pa-button pa-button-primary" to="/service">Plan your setup</Link>
            </div>
            <div className="ca-steps-list">
              <article><span>01</span><div><h3>Choose the agent's role</h3><p>Decide which questions and tasks it should support, and define the tone that fits your service.</p></div></article>
              <article><span>02</span><div><h3>Connect reviewed content</h3><p>Provide relevant support pages and information your team has checked for accuracy.</p></div></article>
              <article><span>03</span><div><h3>Test answers and handoffs</h3><p>Try common and uncertain questions, then verify when a conversation should reach a person.</p></div></article>
              <article><span>04</span><div><h3>Review and refine</h3><p>Monitor interactions and update guidance as your products and support needs change.</p></div></article>
            </div>
          </div>
        </section>

        <section className="ca-trust-section" id="trust">
          <div className="pa-container ca-trust-layout">
            <div>
              <p className="ca-eyebrow">BUILT FOR RESPONSIBLE USE</p>
              <h2>Keep your team in control of the experience.</h2>
              <p>
                Set the boundaries for what the agent can answer, which
                information it can use, and when a teammate should take over.
                Review your account's product and data settings before launch.
              </p>
            </div>
            <div className="ca-trust-points">
              <article><span>01</span><div><h3>Choose approved sources</h3><p>Provide content suited to customer questions and keep it current.</p></div></article>
              <article><span>02</span><div><h3>Define access and actions</h3><p>Configure available capabilities in line with your team's processes.</p></div></article>
              <article><span>03</span><div><h3>Make escalation clear</h3><p>Give customers a path to human help for sensitive or complex requests.</p></div></article>
            </div>
          </div>
        </section>

        <section className="ca-section ca-stories-section">
          <div className="pa-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">SUPPORT USE CASES</p>
              <h2>Make room for the conversations that need your team.</h2>
              <p>Start with the support work that matters most to your customers and agents.</p>
            </div>
            <div className="ca-story-grid">
              <article><span>REPEAT QUESTIONS</span><h3>Help customers find reliable answers.</h3><p>Make approved how-to guidance easier to access before a support request needs personal attention.</p></article>
              <article><span>ACCOUNT GUIDANCE</span><h3>Give customers a useful next step.</h3><p>Use your configured workflows to direct people toward relevant resources or account support.</p></article>
              <article><span>COMPLEX REQUESTS</span><h3>Bring a teammate in with context.</h3><p>Set clear handoffs so support staff can continue a conversation with the right information.</p></article>
            </div>
          </div>
        </section>

        <section className="ca-pricing-section" id="pricing">
          <div className="pa-container ca-pricing-layout">
            <div>
              <p className="ca-eyebrow">PLANS AND USAGE</p>
              <h2>Understand the setup before you scale.</h2>
              <p>
                Customer Agent availability and any usage-based charges depend
                on your plan and enabled features. Ask our team for current
                eligibility and pricing details.
              </p>
              <Link className="pa-button pa-button-secondary" to="/service">Talk to our team</Link>
            </div>
            <div className="ca-pricing-card">
              <span>CUSTOMER AGENT</span>
              <h3>Plan around your channels and support goals.</h3>
              <ul>
                <li>Confirm feature and channel availability.</li>
                <li>Review any applicable usage and account requirements.</li>
                <li>Start with a focused workflow and evaluate it with your team.</li>
              </ul>
              <Link className="pa-button pa-button-primary" to="/service">Get a demo</Link>
            </div>
          </div>
        </section>

        <section className="ca-section ca-tools-section" id="resources">
          <div className="pa-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">CONNECTED CUSTOMER TOOLS</p>
              <h2>Bring service and customer context together.</h2>
            </div>
            <div className="ca-tools-grid">
              {connectedTools.map((tool) => (
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

        <section className="ca-faq-section" id="faq">
          <div className="pa-container ca-faq-layout">
            <div>
              <p className="ca-eyebrow">CUSTOMER AGENT FAQ</p>
              <h2>Questions about AI customer support?</h2>
              <p>Learn about setup, channels, oversight, and pricing.</p>
            </div>
            <div className="ca-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-final-cta">
          <div className="pa-container">
            <p className="ca-eyebrow">CUSTOMER SUPPORT, WITH YOUR TEAM IN THE LOOP</p>
            <h2>Help customers get to the right answer and the right person.</h2>
            <p>
              Explore a Customer Agent setup that fits your channels, guidance,
              and support workflow.
            </p>
            <Link className="pa-button pa-button-primary" to="/service">Get a demo</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default CustomerAgent;