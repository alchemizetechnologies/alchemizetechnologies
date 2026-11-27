import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const outcomes = [
  {
    title: "Prioritize",
    description: "See the most useful prospecting actions for the day."
  },
  {
    title: "Coordinate",
    description: "Keep leads, target accounts, and activity in one workspace."
  },
  {
    title: "Personalize",
    description: "Use research and buying context to make outreach relevant."
  }
];

const capabilities = [
  {
    label: "CONNECTED LEAD WORKSPACE",
    title: "Give reps the context to make every interaction count.",
    description:
      "Bring leads, target accounts, and related activities into one sales workspace. Daily recommendations can help reps decide what to focus on next, while account context supports more informed conversations.",
    points: [
      "Review leads and target accounts in one place.",
      "Surface recommended actions and follow-up tasks.",
      "Keep useful prospect context close to each interaction."
    ],
    image: "/images/Sales%20Hub.webp",
    alt: "Sales workspace with lead, task, and prospecting activity",
    reverse: false
  },
  {
    label: "PIPELINE AUTOMATION",
    title: "Reduce routine pipeline work and keep records current.",
    description:
      "Use engagement-based rules to move leads through the stages your team defines. Required information and workflow rules help maintain consistent records, while managers get a clearer view of activity and progress.",
    points: [
      "Move leads through configurable pipeline stages.",
      "Apply rules and required fields to support data quality.",
      "Monitor pipeline activity and progress as it changes."
    ],
    image: "/images/Deal%20Scores.webp",
    alt: "Sales pipeline and deal progress view",
    reverse: true
  },
  {
    label: "AI-ASSISTED PROSPECTING",
    title: "Turn research into relevant outreach, faster.",
    description:
      "Prospecting Agent can combine available CRM details, web research, and buying signals to prepare account context and outreach drafts. Reps can review and adapt suggestions to fit their strategy before acting.",
    points: [
      "Gather company and contact context for a prospect.",
      "Use timely signals to guide who to contact and when.",
      "Review and personalize draft outreach within the sales workflow."
    ],
    image: "/images/Prospecting%20Agent.webp",
    alt: "AI-assisted prospect research and outreach workspace",
    reverse: false
  }
];

const resources = [
  {
    label: "PROSPECTING AGENT",
    title: "Research accounts and prepare outreach.",
    description:
      "Explore a guided workflow for buying signals, prospect context, and rep-reviewed message drafts.",
    href: "/prospecting-agent",
    action: "Explore Prospecting Agent"
  },
  {
    label: "BUYING INTENT",
    title: "Prioritize accounts with timely signals.",
    description:
      "Learn how account activity can help teams choose where to focus their next conversation.",
    href: "/buying-intent",
    action: "Explore buying intent"
  },
  {
    label: "PERSONAL OUTREACH",
    title: "Start follow-up with more context.",
    description:
      "See ways to prepare relevant outreach while leaving review and decisions with your reps.",
    href: "/personal-outreach",
    action: "Explore personal outreach"
  }
];

const questions = [
  [
    "What is lead management software?",
    "Lead management software helps teams organize prospect records, track activity, coordinate follow-up, and move qualified leads through a sales process."
  ],
  [
    "How does prospecting software help sales teams?",
    "It can bring account context, buying signals, and outreach preparation into a more consistent workflow so reps can focus effort on relevant conversations."
  ],
  [
    "Can lead stages be automated?",
    "Teams can use configurable rules and workflows to update lead stages based on engagement and other criteria supported by their account."
  ],
  [
    "How does AI support prospecting?",
    "AI assistance can help gather available company context, summarize relevant signals, and prepare outreach drafts. Reps should review suggestions before taking action."
  ],
  [
    "Can the prospecting tools connect with other software?",
    "Available data and integrations depend on account configuration, permissions, and enabled features. Review connected sources with your administrator."
  ],
  [
    "How long does lead management software take to set up?",
    "Setup time depends on the sales process, data, and integrations involved. Start with the stages and workflows your team needs, then expand as requirements become clear."
  ]
];

const popularFeatures = [
  {
    title: "Free Meeting Scheduler",
    description:
      "Share a scheduling link so prospects can book time with your team.",
    href: "/free-meeting-scheduler"
  },
  {
    title: "Free Email Tracking Software",
    description:
      "Get visibility into email engagement and follow up with better timing.",
    href: "/free-email-tracking"
  },
  {
    title: "Sales Automation Tools",
    description:
      "Automate repetitive follow-ups and lead workflows to support your sales process.",
    href: "/sales"
  }
];

function LeadManagement() {
  return (
    <>
      <main className="lead-management-page">
        <div className="pa-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/sales">Sales Hub</Link>
            <span aria-hidden="true">›</span>
            <span>Lead Management</span>
          </div>
        </div>

        <section className="pa-hero">
          <div className="pa-container pa-hero-layout">
            <div className="pa-hero-copy">
              <p className="pa-eyebrow">SALES HUB · LEAD MANAGEMENT</p>
              <h1>Make every prospect interaction count.</h1>
              <p>
                Bring lead management, prospect research, and sales
                automation together to help your team prioritize high-value
                opportunities and make more relevant connections.
              </p>
              <div className="pa-actions">
                <Link className="pa-button pa-button-primary" to="/sales">
                  Get a demo
                </Link>
                <a className="pa-button pa-button-secondary" href="#features">
                  Explore the workflow
                </a>
              </div>
            </div>

            <div className="pa-hero-visual lm-hero-visual">
              <div className="lm-dashboard">
                <div className="pa-workspace-head">
                  <div>
                    <span className="pa-status-dot" />
                    Sales workspace
                  </div>
                  <span>Today's focus</span>
                </div>
                <div className="lm-dashboard-summary">
                  <strong>Recommended next steps</strong>
                  <span>Prioritized from lead activity</span>
                </div>
                <div className="lm-dashboard-row">
                  <span className="lm-avatar">AC</span>
                  <div>
                    <strong>Review a high-intent account</strong>
                    <small>New engagement · Follow up today</small>
                  </div>
                  <b>Review</b>
                </div>
                <div className="lm-dashboard-row">
                  <span className="lm-avatar lm-avatar-alt">JM</span>
                  <div>
                    <strong>Prepare for a prospect meeting</strong>
                    <small>Account notes and recent activity</small>
                  </div>
                  <b>Prepare</b>
                </div>
                <div className="lm-dashboard-footer">
                  Lead context <span>Tasks</span> <span>Pipeline</span>
                </div>
              </div>
              <div className="pa-hero-chip">
                Context → priority → conversation
              </div>
            </div>
          </div>
        </section>

        <section className="pa-proof-band" aria-label="Lead management outcomes">
          <div className="pa-container pa-proof-grid">
            {outcomes.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pa-intro-section">
          <div className="pa-container pa-intro-layout">
            <p className="pa-eyebrow">LEADS AND PROSPECTING IN ONE PLACE</p>
            <div>
              <h2>Manage lead activity with the context reps need.</h2>
              <p>
                Prospect information and follow-up can become difficult to
                manage when it is spread across separate tools. Give reps a
                shared place to review leads, target accounts, activity, and
                recommended next steps.
              </p>
              <p>
                AI-assisted research and automation can reduce routine work,
                while reps stay involved in the conversations and decisions
                that move a relationship forward.
              </p>
            </div>
          </div>
        </section>

        <section className="lm-features" id="features">
          {capabilities.map((feature) => (
            <section
              className={`lm-detail-section${feature.reverse ? " lm-detail-section-reverse" : ""}`}
              key={feature.label}
            >
              <div className="pa-container lm-detail-layout">
                <div className="lm-detail-copy">
                  <p className="pa-eyebrow">{feature.label}</p>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                  <ul>
                    {feature.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="lm-detail-visual">
                  <img src={feature.image} alt={feature.alt} loading="lazy" />
                </div>
              </div>
            </section>
          ))}
        </section>

        <section className="lm-metric-section">
          <div className="pa-container lm-metric-layout">
            <div className="lm-metric-number">78%</div>
            <div>
              <p className="pa-eyebrow">REPORTED SALES OUTCOME</p>
              <h2>More deals closed with sales software.</h2>
              <p>
                HubSpot reports that customers using its sales software saw a
                78% increase in deal close rate after six months. Results vary
                by team, process, and use.
              </p>
            </div>
          </div>
        </section>

        <section className="pa-section pa-resources-section" id="resources">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">RELATED RESOURCES</p>
              <h2>Build a more thoughtful prospecting process.</h2>
              <p>
                Explore tools that help your team research, prioritize, and
                engage potential customers.
              </p>
            </div>
            <div className="pa-resource-grid">
              {resources.map((resource) => (
                <article className="pa-resource-card" key={resource.label}>
                  <span>{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <Link to={resource.href}>
                    {resource.action} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-section pa-faq-section" id="faqs">
          <div className="pa-container pa-faq-layout">
            <div>
              <p className="pa-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
              <h2>Questions about lead management?</h2>
              <p>
                Learn how prospecting, automation, and AI-assisted research
                can fit into your sales workflow.
              </p>
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

        <section className="pa-section lm-popular-section">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">POPULAR FEATURES IN SALES HUB</p>
              <h2>Explore more ways to help your team sell.</h2>
            </div>
            <div className="pa-resource-grid">
              {popularFeatures.map((feature) => (
                <article className="pa-resource-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link to={feature.href}>Learn more <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-final-cta">
          <div className="pa-container">
            <p className="pa-eyebrow">SALES HUB · LEAD MANAGEMENT</p>
            <h2>Turn prospect context into your next conversation.</h2>
            <p>
              See how connected lead management and prospecting tools can
              support your sales team.
            </p>
            <Link className="pa-button pa-button-primary" to="/sales">
              Get a demo
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default LeadManagement;