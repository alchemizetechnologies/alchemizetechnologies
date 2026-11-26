import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const setupSteps = [
  {
    number: "01",
    title: "Connect your website",
    description:
      "Add the approved site tracking integration so relevant account activity can be associated with your business."
  },
  {
    number: "02",
    title: "Describe your target market",
    description:
      "Set the company attributes that matter to your team, such as industry, region, or organization size."
  },
  {
    number: "03",
    title: "Choose meaningful page activity",
    description:
      "Identify the pages that can signal interest, then decide how repeated visits should influence prioritization."
  },
  {
    number: "04",
    title: "Select research themes",
    description:
      "Add topics related to your offering and review suggestions that help focus your account research."
  },
  {
    number: "05",
    title: "Save useful audience views",
    description:
      "Create saved views for groups of accounts your team wants to monitor and follow up with."
  },
  {
    number: "06",
    title: "Review signals and take action",
    description:
      "Check why an account appears relevant, then choose an appropriate sales action for the situation."
  }
];

const relatedUseCases = [
  {
    stage: "EMERGING",
    title: "Capture and Qualify Leads",
    description:
      "Help website visitors find useful information and give your team a clear path to follow up on inbound interest.",
    href: "/capture-qualify-leads"
  },
  {
    stage: "DATA QUALITY",
    title: "Enrich Contact and Company Data",
    description:
      "Bring relevant company and contact context together to support segmentation, research, and follow-up.",
    href: "/enrich-contact"
  },
  {
    stage: "OUTREACH",
    title: "Send Personalized Outreach",
    description:
      "Use timely account context to help reps prepare a message that feels specific and considered.",
    href: "/personal-outreach"
  }
];

const questions = [
  [
    "What is Buyer Intent?",
    "Buyer Intent helps teams identify companies that may be showing interest through relevant website activity, research themes, or other configured signals."
  ],
  [
    "How does Buyer Intent identify relevant companies?",
    "It uses the website and account signals available in your connected setup. Results depend on tracking, permissions, target criteria, and supported data sources."
  ],
  [
    "Can I choose which pages count as a signal?",
    "Yes. Teams can select meaningful pages and decide how visit activity should contribute to their own account prioritization."
  ],
  [
    "Can Buyer Intent automatically add companies to my CRM?",
    "Available automation depends on your account configuration. Review the available workflow options with your administrator or Alchemize Technologies team."
  ],
  [
    "How does Buyer Intent work with Prospecting Agent?",
    "Buyer Intent can help identify accounts for a closer look. Prospecting Agent can then help reps gather context and prepare an outreach draft for review."
  ],
  [
    "What does Buyer Intent cost?",
    "Availability and pricing depend on your account and enabled features. Contact our team for current plan information."
  ]
];

function BuyingIntent() {
  return (
    <>
      <main className="buyer-intent-page">
        <header className="pa-main-nav bi-main-nav">
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

        <div className="bi-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <span>Buyer Intent</span>
          </div>
        </div>

        <section className="bi-hero" id="overview">
          <div className="pa-container bi-hero-layout">
            <div className="bi-hero-copy">
              <p className="bi-eyebrow">ALCHEMIZE AI USE CASE LIBRARY</p>
              <span className="bi-feature-label">IDENTIFY BUYER INTENT</span>
              <h1>See which accounts may be ready for a conversation.</h1>
              <p>
                Bring website activity, account fit, and relevant research
                signals together so your sales team can decide who to contact
                and when.
              </p>
              <div className="bi-hero-actions">
                <a className="pa-button pa-button-primary" href="#setup-guide">
                  Get started with Buyer Intent
                </a>
                <Link className="pa-button pa-button-secondary" to="/sales">
                  Get a demo
                </Link>
              </div>
            </div>
            <div className="bi-hero-visual" role="img" aria-label="Illustration of accounts organized by website interest and target-market fit">
              <div className="bi-dashboard">
                <div className="bi-dashboard-head">
                  <strong>Account intent overview</strong>
                  <span>Updated recently</span>
                </div>
                <div className="bi-intent-summary">
                  <div><span>Target fit</span><strong>Strong match</strong></div>
                  <div><span>Recent activity</span><strong>Worth a review</strong></div>
                </div>
                <div className="bi-intent-row">
                  <span className="bi-company-mark">N</span>
                  <div><strong>Northstar Analytics</strong><small>Researching reporting solutions</small></div>
                  <b>Review</b>
                </div>
                <div className="bi-intent-row">
                  <span className="bi-company-mark bi-company-alt">F</span>
                  <div><strong>Fieldstone Group</strong><small>Returned to a product page</small></div>
                  <b>Review</b>
                </div>
                <div className="bi-dashboard-note">
                  Use account fit and activity together to guide prioritization.
                </div>
              </div>
              <div className="bi-hero-caption">A clearer view of accounts showing interest</div>
            </div>
          </div>
        </section>

        <section className="bi-signal-band" aria-label="Buyer Intent signal types">
          <div className="pa-container bi-signal-content">
            <p>PUT RELEVANT SIGNALS IN CONTEXT</p>
            <div>
              <span>Website visits</span>
              <span>Research themes</span>
              <span>Target-market fit</span>
              <span>Account activity</span>
            </div>
          </div>
        </section>

        <section className="bi-intro-section">
          <div className="pa-container bi-intro-layout">
            <p className="bi-eyebrow">BUYER INTENT</p>
            <div>
              <h2>Give your reps a clearer view of who to focus on and why.</h2>
              <p>
                Sales teams can spend too much time reaching out without a
                clear reason to connect. Buyer Intent helps organize available
                company activity and research signals so reps can find accounts
                worth a closer look.
              </p>
              <p>
                Set the criteria that matter to your business, choose relevant
                pages and research themes, then review the signals that may
                help start a timely conversation.
              </p>
            </div>
          </div>
        </section>

        <nav className="bi-toc" aria-label="Buyer Intent page sections">
          <div className="pa-container">
            <a href="#overview">Overview</a>
            <a href="#how-it-works">How it works</a>
            <a href="#setup-guide">Step by step</a>
            <a href="#related-tools">Dive deeper</a>
            <a href="#resources">Related use cases</a>
            <a href="#pricing">Get started now</a>
          </div>
        </nav>

        <section className="bi-section bi-how-section" id="how-it-works">
          <div className="pa-container bi-how-layout">
            <div>
              <p className="bi-eyebrow">HOW IT WORKS</p>
              <h2>Connect account fit with signs of active interest.</h2>
              <p>
                Buyer Intent brings configured account criteria and available
                engagement signals into one view. That context helps reps
                understand why an account may deserve attention—without treating
                every visit as a buying decision.
              </p>
              <ul className="bi-check-list">
                <li>Focus on the company profiles that fit your market.</li>
                <li>Consider meaningful page activity and research themes.</li>
                <li>Let reps review context before choosing what to do next.</li>
              </ul>
            </div>
            <div className="bi-signal-visual">
              <div className="bi-signal-visual-head"><strong>Why this account is surfaced</strong><span>Account context</span></div>
              <div className="bi-signal-factor"><i>✓</i><div><strong>Matches your target market</strong><small>Industry and company profile align</small></div></div>
              <div className="bi-signal-factor"><i>↗</i><div><strong>Recent website activity</strong><small>Visited pages your team selected</small></div></div>
              <div className="bi-signal-factor"><i>⌕</i><div><strong>Relevant research theme</strong><small>Topic matches your configured interests</small></div></div>
              <div className="bi-signal-visual-foot">Review signals in context before outreach</div>
            </div>
          </div>
        </section>

        <section className="bi-section bi-example-section">
          <div className="pa-container">
            <div className="bi-section-heading">
              <p className="bi-eyebrow">AN EXAMPLE ACCOUNT JOURNEY</p>
              <h2>Move from a relevant signal to a considered next step.</h2>
              <p>Illustrative workflow—not a customer result or performance claim.</p>
            </div>
            <div className="bi-setup-grid">
              <article className="bi-setup-card">
                <span>01</span>
                <h3>Notice account activity</h3>
                <p>A company matching your market criteria returns to a page your team selected.</p>
              </article>
              <article className="bi-setup-card">
                <span>02</span>
                <h3>Review the context</h3>
                <p>A rep checks the account fit and activity before deciding whether it is meaningful.</p>
              </article>
              <article className="bi-setup-card">
                <span>03</span>
                <h3>Choose a relevant action</h3>
                <p>The team can research further, prepare outreach, or wait for more context.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bi-section bi-setup-section" id="setup-guide">
          <div className="pa-container">
            <div className="bi-section-heading">
              <p className="bi-eyebrow">GET STARTED WITH BUYER INTENT</p>
              <h2>Build a useful intent workflow step by step.</h2>
              <p>
                Start with the tracking, target criteria, and signals your
                organization is ready to use.
              </p>
            </div>
            <div className="bi-setup-grid">
              {setupSteps.map((step) => (
                <article key={step.number} className="bi-setup-card">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bi-deeper-section" id="related-tools">
          <div className="pa-container bi-deeper-layout">
            <div>
              <p className="bi-eyebrow">GO DEEPER WITH RELATED TOOLS</p>
              <h2>Turn a useful signal into a thoughtful next step.</h2>
              <p>
                Start with Buyer Intent to identify accounts for a closer look.
                Then use Prospecting Agent and Data Agent to research context
                and prepare a relevant next step.
              </p>
            </div>
            <div className="bi-tool-grid">
              <Link to="/prospecting-agent">
                <span>START HERE</span>
                <h3>Prospecting Agent</h3>
                <p>Bring account research and outreach preparation into a rep-guided workflow.</p>
                <b>Explore Prospecting Agent <span aria-hidden="true">→</span></b>
              </Link>
              <Link to="/data-agent">
                <span>ACCOUNT RESEARCH</span>
                <h3>Data Agent</h3>
                <p>Explore connected customer and company information to prepare for a conversation.</p>
                <b>Explore Data Agent <span aria-hidden="true">→</span></b>
              </Link>
            </div>
          </div>
        </section>

        <section className="bi-section bi-resource-section" id="resources">
          <div className="pa-container">
            <div className="bi-section-heading">
              <p className="bi-eyebrow">RELATED USE CASES</p>
              <h2>Connect intent with the rest of your sales journey.</h2>
            </div>
            <div className="bi-resource-grid">
              {relatedUseCases.map((item) => (
                <Link to={item.href} key={item.title}>
                  <span>{item.stage}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <b>Read more <span aria-hidden="true">→</span></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bi-pricing-section" id="pricing">
          <div className="pa-container bi-pricing-layout">
            <div>
              <p className="bi-eyebrow">GET STARTED</p>
              <h2>Set up Buyer Intent around your team's priorities.</h2>
              <p>
                Availability and setup depend on your account, tracking
                configuration, and connected data sources. Talk to our team to
                understand the current options.
              </p>
            </div>
            <div className="bi-pricing-card">
              <span>BUYER INTENT</span>
              <h3>Start with your target market</h3>
              <p>Define relevant signals, review matching accounts, and choose the next action with your team.</p>
              <Link className="pa-button pa-button-primary" to="/sales">Talk to our team</Link>
            </div>
          </div>
        </section>

        <section className="bi-section bi-faq-section" id="faqs">
          <div className="pa-container bi-faq-layout">
            <div>
              <p className="bi-eyebrow">BUYER INTENT FAQ</p>
              <h2>Common questions about account intent.</h2>
              <p>Understand signals, setup, and how Buyer Intent can support prospecting.</p>
            </div>
            <div className="bi-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bi-final-cta">
          <div className="pa-container">
            <p className="bi-eyebrow">START WITH A CLEAR SIGNAL</p>
            <h2>Help your team focus on accounts with a reason to connect.</h2>
            <p>Explore Buyer Intent and related prospecting tools with Alchemize Technologies.</p>
            <Link className="pa-button pa-button-primary" to="/sales">Get a demo</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default BuyingIntent;
