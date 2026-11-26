import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const setupSteps = [
  {
    number: "01",
    title: "Choose who can use enrichment",
    description:
      "Review which teammates need access and align permissions with your organization's data practices."
  },
  {
    number: "02",
    title: "Select the records and fields",
    description:
      "Decide which contact or company properties matter and where additional context would help your team."
  },
  {
    number: "03",
    title: "Set how values are handled",
    description:
      "Choose whether enrichment should fill missing information or update existing values for each selected field."
  },
  {
    number: "04",
    title: "Review before expanding",
    description:
      "Test a small set of records, check the results, and adjust your field mappings before applying changes more broadly."
  }
];

const relatedTools = [
  {
    label: "CUSTOM RESEARCH",
    title: "Data Agent",
    description:
      "Explore account and contact context to answer questions that matter to your business.",
    href: "/data-agent"
  },
  {
    label: "SALES FOLLOW-UP",
    title: "Prospecting Agent",
    description:
      "Use account information to help prepare research and outreach drafts for rep review.",
    href: "/prospecting-agent"
  },
  {
    label: "DATA MANAGEMENT",
    title: "Data Hub",
    description:
      "Explore tools for connecting, organizing, and working with business data.",
    href: "/data"
  }
];

const relatedUseCases = [
  {
    status: "ESTABLISHED",
    title: "Identify Buyer Intent",
    description:
      "Use relevant account activity and target-market criteria to prioritize companies for review.",
    href: "/buying-intent"
  },
  {
    status: "OUTREACH",
    title: "Send Personalized Outreach",
    description:
      "Give reps useful account context as they prepare thoughtful messages and follow-up.",
    href: "/personal-outreach"
  },
  {
    status: "EMERGING",
    title: "Capture and Qualify Leads",
    description:
      "Help inbound prospects find the right information and make it easier for your team to respond.",
    href: "/capture-qualify-leads"
  }
];

const questions = [
  [
    "What is contact and company data enrichment?",
    "Data enrichment adds or updates selected business details on records using the sources and settings available to your organization."
  ],
  [
    "Which details can be enriched?",
    "Available properties depend on your connected sources and account setup. Teams commonly prioritize fields such as role, industry, company size, and location."
  ],
  [
    "Can enrichment run automatically?",
    "Automation options depend on your account configuration. Review which records and properties are eligible before enabling an automated process."
  ],
  [
    "Can I choose whether existing values are overwritten?",
    "Field mapping and update behavior should be reviewed for each property. Choose settings that fit your data governance and quality needs."
  ],
  [
    "How can I check enrichment quality?",
    "Test a small group of records first, review the returned values, and monitor for missing or unexpected information before expanding."
  ],
  [
    "How does enrichment work with Data Agent?",
    "Enrichment can help keep selected record fields complete, while Data Agent can help teams explore broader questions using available business context."
  ],
  [
    "How much does data enrichment cost?",
    "Availability, usage, and pricing depend on your plan and enabled features. Contact Alchemize Technologies for current details."
  ]
];

function EnrichContact() {
  return (
    <>
      <main className="enrich-contact-page">
        <header className="pa-main-nav ec-main-nav">
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

        <div className="ec-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/agent">Agent Hub</Link><span aria-hidden="true">›</span>
            <span>Data Enrichment</span>
          </div>
        </div>

        <section className="ec-hero" id="overview">
          <div className="pa-container ec-hero-layout">
            <div className="ec-hero-copy">
              <p className="ec-eyebrow">ALCHEMIZE AI USE CASE LIBRARY</p>
              <span className="ec-feature-label">DATA ENRICHMENT</span>
              <h1>Turn incomplete records into useful sales context.</h1>
              <p>
                Add relevant contact and company details to the records your
                team relies on, so reps can segment, prioritize, and prepare
                with more context.
              </p>
              <div className="ec-actions">
                <a className="pa-button pa-button-primary" href="#setup-guide">
                  Get started with enrichment
                </a>
                <Link className="pa-button pa-button-secondary" to="/sales">
                  Get a demo
                </Link>
              </div>
            </div>
            <div className="ec-hero-visual" role="img" aria-label="Illustration of contact and company record details being reviewed">
              <div className="ec-record-card">
                <div className="ec-record-heading">
                  <span className="ec-record-avatar">N</span>
                  <div><strong>Northstar Analytics</strong><small>Company record · Review suggested fields</small></div>
                  <span className="ec-review-pill">Review</span>
                </div>
                <div className="ec-record-fields">
                  <div><span>Industry</span><strong>Business Services</strong><b>Suggested</b></div>
                  <div><span>Company size</span><strong>Mid-sized team</strong><b>Suggested</b></div>
                  <div><span>Contact role</span><strong>Operations Director</strong><b>Existing</b></div>
                  <div><span>Region</span><strong>North America</strong><b>Suggested</b></div>
                </div>
                <div className="ec-record-footer"><span>Check field mappings before applying updates</span><b>Review details</b></div>
              </div>
              <div className="ec-hero-caption">More complete records. Better-informed teams.</div>
            </div>
          </div>
        </section>

        <section className="ec-signal-band" aria-label="Data enrichment benefits">
          <div className="pa-container ec-signal-content">
            <p>ADD CONTEXT WHERE IT HELPS MOST</p>
            <div>
              <span>Industry</span>
              <span>Role and title</span>
              <span>Company profile</span>
              <span>Selected properties</span>
            </div>
          </div>
        </section>

        <section className="ec-intro-section">
          <div className="pa-container ec-intro-layout">
            <p className="ec-eyebrow">MAKE RECORDS MORE USEFUL</p>
            <div>
              <h2>Give sales teams a fuller picture, without the manual lookup.</h2>
              <p>
                Missing or outdated details can make it harder to understand
                who a contact is, what a company does, and where a conversation
                should begin.
              </p>
              <p>
                Data enrichment helps fill selected gaps from available
                sources. Choose the properties that matter, review how values
                are handled, and give reps more context for their next action.
              </p>
            </div>
          </div>
        </section>

        <nav className="ec-toc" aria-label="Data Enrichment page sections">
          <div className="pa-container">
            <a href="#overview">Overview</a>
            <a href="#how-it-works">How it works</a>
            <a href="#setup-guide">Step by step</a>
            <a href="#related-tools">Dive deeper</a>
            <a href="#resources">Related use cases</a>
            <a href="#pricing">Get started now</a>
          </div>
        </nav>

        <section className="ec-section ec-how-section" id="how-it-works">
          <div className="pa-container ec-how-layout">
            <div>
              <p className="ec-eyebrow">HOW DATA ENRICHMENT HELPS</p>
              <h2>Turn blank fields into details your team can use.</h2>
              <p>
                Select the contact and company properties that support your
                sales process. Depending on the sources available, enrichment
                can suggest missing details and help keep records more current.
              </p>
              <ul className="ec-check-list">
                <li>Focus on fields that help with routing and segmentation.</li>
                <li>Review what should be filled or updated on each record.</li>
                <li>Give reps useful context before they start outreach.</li>
              </ul>
            </div>
            <div className="ec-enrichment-visual">
              <div className="ec-enrichment-header"><strong>Record completeness review</strong><span>Sample record</span></div>
              <div className="ec-progress-row"><span>Contact details</span><b>Review fields</b></div>
              <div className="ec-progress-track"><i /></div>
              <div className="ec-progress-row"><span>Company profile</span><b>Suggested details</b></div>
              <div className="ec-progress-track ec-progress-track-alt"><i /></div>
              <div className="ec-enrichment-note">Review suggestions before applying changes.</div>
            </div>
          </div>
        </section>

        <section className="ec-section ec-setup-section" id="setup-guide">
          <div className="pa-container">
            <div className="ec-section-heading">
              <p className="ec-eyebrow">GET STARTED WITH DATA ENRICHMENT</p>
              <h2>Set up a reliable process in a few clear steps.</h2>
              <p>
                Decide who can use enrichment, which fields matter, and how
                changes should be reviewed before expanding.
              </p>
            </div>
            <div className="ec-setup-grid">
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

        <section className="ec-mapping-section">
          <div className="pa-container ec-mapping-layout">
            <div>
              <p className="ec-eyebrow">KEEP YOUR DATA PRACTICES CLEAR</p>
              <h2>Choose what gets filled, and how updates are handled.</h2>
              <p>
                Field mapping lets your team decide where suggested details
                belong. Start with a small set of properties, verify the
                results, and follow your existing data quality process.
              </p>
            </div>
            <div className="ec-mapping-card">
              <div className="ec-mapping-title"><strong>Property mapping</strong><span>Review settings</span></div>
              <div className="ec-mapping-row"><span>Company industry</span><b>Industry</b><i>✓</i></div>
              <div className="ec-mapping-row"><span>Contact role</span><b>Job title</b><i>✓</i></div>
              <div className="ec-mapping-row"><span>Company size</span><b>Employee range</b><i>✓</i></div>
              <div className="ec-mapping-note">Choose whether to fill empty values or update existing fields.</div>
            </div>
          </div>
        </section>

        <section className="ec-section ec-tools-section" id="related-tools">
          <div className="pa-container">
            <div className="ec-section-heading">
              <p className="ec-eyebrow">GO DEEPER WITH RELATED TOOLS</p>
              <h2>Turn complete records into better-informed action.</h2>
              <p>Pair enriched details with research, prospecting, and connected data workflows.</p>
            </div>
            <div className="ec-tools-grid">
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

        <section className="ec-section ec-resources-section" id="resources">
          <div className="pa-container">
            <div className="ec-section-heading">
              <p className="ec-eyebrow">RELATED USE CASES</p>
              <h2>Connect better data to the next step in your customer journey.</h2>
            </div>
            <div className="ec-resources-grid">
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

        <section className="ec-pricing-section" id="pricing">
          <div className="pa-container ec-pricing-layout">
            <div>
              <p className="ec-eyebrow">PLANS AND USAGE</p>
              <h2>Choose an enrichment setup that fits your records.</h2>
              <p>
                Availability, supported fields, and usage depend on your
                account and enabled sources. Contact our team for current plan
                and pricing information.
              </p>
            </div>
            <div className="ec-pricing-card">
              <span>DATA ENRICHMENT</span>
              <h3>Start with the fields your team needs most.</h3>
              <ul>
                <li>Choose records and properties to review.</li>
                <li>Set how missing or existing values are handled.</li>
                <li>Check a sample before expanding your workflow.</li>
              </ul>
              <Link className="pa-button pa-button-primary" to="/sales">Talk to our team</Link>
            </div>
          </div>
        </section>

        <section className="ec-section ec-faq-section" id="faqs">
          <div className="pa-container ec-faq-layout">
            <div>
              <p className="ec-eyebrow">DATA ENRICHMENT FAQ</p>
              <h2>Questions about contact and company data?</h2>
              <p>Learn about field selection, updates, quality checks, and related tools.</p>
            </div>
            <div className="ec-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ec-final-cta">
          <div className="pa-container">
            <p className="ec-eyebrow">MAKE EVERY RECORD MORE USEFUL</p>
            <h2>Give your team the context to focus on selling.</h2>
            <p>
              Explore data enrichment and connected tools with Alchemize
              Technologies.
            </p>
            <Link className="pa-button pa-button-primary" to="/sales">Get a demo</Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default EnrichContact;
