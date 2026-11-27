import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const workflows = [
  {
    number: "01",
    title: "Enroll with a purpose",
    description:
      "Use a saved sequence for individual follow-up or let workflow rules enroll contacts when they meet the criteria your team defines."
  },
  {
    number: "02",
    title: "Automate the next step",
    description:
      "Schedule personalized messages, create tasks, and notify owners when a prospect takes an important action."
  },
  {
    number: "03",
    title: "Learn and improve",
    description:
      "Compare message variants and review engagement and deal outcomes to understand what may be working."
  }
];

const capabilities = [
  {
    id: "sequences",
    label: "PERSONALIZED SEQUENCES",
    title: "Keep follow-up timely without making it feel generic.",
    description:
      "Build a series of sales emails and tasks with spacing that suits your outreach plan. Use templates and available CRM details to make messages more relevant, then let engagement guide the next step.",
    points: [
      "Create a series of scheduled emails and rep tasks.",
      "Enroll eligible contacts from supported inbox and CRM workflows.",
      "Pause or adjust follow-up based on prospect engagement."
    ]
  },
  {
    id: "ai-personalization",
    label: "AI-ASSISTED MESSAGING",
    title: "Use customer context to personalize sales emails.",
    description:
      "Use available CRM information and writing assistance to develop a useful starting draft. Review each message for accuracy and tone before it reaches a prospect.",
    points: [
      "Ground outreach in the context available to your team.",
      "Adapt message timing and next steps to engagement signals.",
      "Keep a human review step for customer-facing communication."
    ]
  },
  {
    id: "workflows",
    label: "SALES WORKFLOWS",
    title: "Automate the operational work around your pipeline.",
    description:
      "Use workflow rules to route leads, create records and tasks, update properties, and alert owners when a contact takes a meaningful action. Start with a clear trigger and an intentional next step.",
    points: [
      "Rotate incoming leads across the right team members.",
      "Create follow-up tasks or records from defined triggers.",
      "Update information and notify owners when action is needed."
    ]
  },
  {
    id: "testing",
    label: "EXPERIMENT AND MEASURE",
    title: "Use testing and reporting to refine your approach.",
    description:
      "Compare supported email variants and review results at each stage of a sequence. Use engagement data and downstream deal outcomes to guide experiments rather than relying on opens alone.",
    points: [
      "Test message approaches where A/B testing is available.",
      "Review results across steps and sequence performance.",
      "Use deal outcome context to inform future outreach."
    ]
  }
];

const resources = [
  {
    label: "SALES SEQUENCES",
    title: "Plan consistent, personal follow-up.",
    description:
      "Learn how timed messages and tasks can support an organized sales cadence.",
    href: "#sequences",
    action: "Explore sequences"
  },
  {
    label: "WORKFLOW AUTOMATION",
    title: "Reduce repetitive sales administration.",
    description:
      "Review workflow ideas for lead routing, reminders, record updates, and notifications.",
    href: "#workflows",
    action: "Explore workflows"
  },
  {
    label: "TESTING AND REPORTING",
    title: "Improve outreach with useful evidence.",
    description:
      "See how message experiments and outcome reporting can guide future sales activity.",
    href: "#testing",
    action: "Explore measurement"
  }
];

const questions = [
  [
    "What is sales automation software?",
    "Sales automation software helps teams coordinate repeatable sales tasks, follow-up, lead routing, and pipeline activity using defined rules and workflows."
  ],
  [
    "What tasks can sales teams automate?",
    "Depending on the tools available, teams may automate lead rotation, task creation, record updates, notifications, and parts of email follow-up."
  ],
  [
    "How do sequences differ from workflows?",
    "Sequences usually coordinate rep-led outreach such as scheduled emails and tasks. Workflows automate broader record-based actions and processes according to configured triggers and rules."
  ],
  [
    "How can AI help with sales emails?",
    "AI assistance can help draft or adapt messages using available context. Reps should review the content for accuracy and relevance before sending."
  ],
  [
    "Can I test different sales email versions?",
    "A/B testing may be available for supported sequence emails and account tiers. Review the current product settings to confirm eligibility and how results are measured."
  ],
  [
    "Can sales automation connect with Gmail or Outlook?",
    "Supported inbox integrations can let teams work with sequences from connected email apps. Available features vary by provider, account, and setup."
  ],
  [
    "How do sales workflows help prevent missed follow-up?",
    "Configured tasks and notifications can remind owners to act when a record meets the selected conditions. Teams should review workflow enrollment and exceptions regularly."
  ],
  [
    "How do I get started with sales automation?",
    "Start with one repeatable process, define its trigger and desired outcome, then test the workflow with a small group before expanding it."
  ]
];

const popularFeatures = [
  {
    title: "Free Meeting Scheduler",
    description:
      "Make it easier for prospects to choose a time with your team.",
    href: "/free-meeting-scheduler"
  },
  {
    title: "Free Email Tracking Software",
    description:
      "Use available email engagement signals to guide follow-up timing.",
    href: "/free-email-tracking"
  },
  {
    title: "Lead Management",
    description:
      "Keep lead records, activity, and next steps connected.",
    href: "/lead-management"
  }
];

function SalesAutomation() {
  return (
    <>
      <main className="sales-automation-page">
        <div className="pa-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/sales">Sales Hub</Link>
            <span aria-hidden="true">›</span>
            <span>Sales Automation</span>
          </div>
        </div>

        <section className="pa-hero">
          <div className="pa-container pa-hero-layout">
            <div className="pa-hero-copy">
              <p className="pa-eyebrow">SALES HUB · SALES AUTOMATION</p>
              <h1>Automate follow-up and give reps time back.</h1>
              <p>
                Coordinate personalized sequences, lead routing, and everyday
                sales tasks with workflows that help prospects receive a
                timely next step.
              </p>
              <div className="pa-actions">
                <Link className="pa-button pa-button-primary" to="/sales">
                  Get a demo
                </Link>
                <a className="pa-button pa-button-secondary" href="#workflow">
                  Explore the workflow
                </a>
              </div>
              <p className="sa-plan-note">
                Available automation features depend on your subscription and
                account configuration.
              </p>
            </div>

            <div
              className="pa-hero-visual sa-hero-visual"
              role="img"
              aria-label="Illustration of a sales sequence, workflow actions, and performance results"
            >
              <div className="sa-sequence-card">
                <div className="sa-sequence-header">
                  <div>
                    <span>ACTIVE SEQUENCE</span>
                    <strong>Helpful follow-up</strong>
                  </div>
                  <b>Running</b>
                </div>
                <div className="sa-sequence-step">
                  <span className="sa-step-icon">1</span>
                  <div><strong>Personalized email</strong><small>Sent · Day 1</small></div>
                  <b>Complete</b>
                </div>
                <div className="sa-sequence-step">
                  <span className="sa-step-icon sa-step-icon-next">2</span>
                  <div><strong>Follow-up task</strong><small>Due · Day 3</small></div>
                  <b>Upcoming</b>
                </div>
                <div className="sa-sequence-step">
                  <span className="sa-step-icon sa-step-icon-muted">3</span>
                  <div><strong>Next email</strong><small>Adjust to engagement</small></div>
                  <b>Planned</b>
                </div>
                <div className="sa-sequence-footer">
                  <span>Enrollment rules applied</span>
                  <span>View workflow →</span>
                </div>
              </div>
              <div className="pa-hero-chip">Sequence → workflow → insight</div>
            </div>
          </div>
        </section>

        <section className="pa-proof-band" aria-label="Sales automation benefits">
          <div className="pa-container pa-proof-grid">
            <div>
              <strong>Personalize at scale</strong>
              <span>Use available CRM context in sales outreach.</span>
            </div>
            <div>
              <strong>Automate routine work</strong>
              <span>Route leads, create tasks, and trigger updates.</span>
            </div>
            <div>
              <strong>Improve with evidence</strong>
              <span>Review engagement and deal outcomes over time.</span>
            </div>
          </div>
        </section>

        <section className="pa-intro-section">
          <div className="pa-container pa-intro-layout">
            <p className="pa-eyebrow">LESS MANUAL FOLLOW-UP</p>
            <div>
              <h2>Make room for the sales work that needs a person.</h2>
              <p>
                Reps balance outreach, meeting preparation, data entry, and
                follow-up throughout the day. Repetitive steps can make it
                harder to respond consistently and keep prospects moving.
              </p>
              <p>
                Sequences and workflows help organize repeatable activity.
                Use them to schedule tasks, route leads, and notify owners
                while keeping decisions and customer conversations in the
                hands of your team.
              </p>
            </div>
          </div>
        </section>

        <section className="pa-section sa-workflow-section" id="workflow">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">FROM ENROLLMENT TO IMPROVEMENT</p>
              <h2>Build a sales process your team can repeat and refine.</h2>
              <p>
                Start with a clear goal, automate the right steps, then learn
                from the results.
              </p>
            </div>
            <div className="sa-workflow-grid">
              {workflows.map((step) => (
                <article className="pa-workflow-card" key={step.number}>
                  <span className="pa-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sa-capabilities" id="features">
          {capabilities.map((feature) => (
            <section
              className="sa-capability-section"
              id={feature.id}
              key={feature.id}
            >
              <div className="pa-container sa-capability-layout">
                <div>
                  <p className="pa-eyebrow">{feature.label}</p>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                  <ul>
                    {feature.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className={`sa-feature-visual sa-feature-visual-${feature.id}`}>
                  {feature.id === "sequences" && (
                    <>
                      <span className="sa-visual-label">SEQUENCE STEPS</span>
                      <div><b>01</b><span>Email introduction</span><small>Personalized</small></div>
                      <div><b>02</b><span>Rep follow-up task</span><small>In 2 days</small></div>
                      <div><b>03</b><span>Next message</span><small>Based on engagement</small></div>
                    </>
                  )}
                  {feature.id === "ai-personalization" && (
                    <>
                      <span className="sa-visual-label">MESSAGE DRAFT</span>
                      <strong>Hi Avery,</strong>
                      <p>
                        I saw your team is reviewing ways to simplify its
                        sales workflow. Would it be useful to compare notes?
                      </p>
                      <div className="sa-draft-footer"><span>Review before sending</span><b>Edit draft</b></div>
                    </>
                  )}
                  {feature.id === "workflows" && (
                    <>
                      <span className="sa-visual-label">WORKFLOW RULE</span>
                      <div className="sa-trigger">When a new lead is created</div>
                      <span className="sa-flow-arrow">↓</span>
                      <div className="sa-action">Assign owner and create a task</div>
                      <span className="sa-flow-arrow">↓</span>
                      <div className="sa-action">Notify the sales representative</div>
                    </>
                  )}
                  {feature.id === "testing" && (
                    <>
                      <span className="sa-visual-label">EMAIL EXPERIMENT</span>
                      <div className="sa-test-row"><b>Version A</b><span>Direct subject line</span><strong>Compare</strong></div>
                      <div className="sa-test-row"><b>Version B</b><span>Benefit-led subject line</span><strong>Results</strong></div>
                      <p className="sa-test-note">Review engagement together with downstream outcomes.</p>
                    </>
                  )}
                </div>
              </div>
            </section>
          ))}
        </section>

        <section className="sa-apps-section" id="connected-apps">
          <div className="pa-container sa-apps-layout">
            <div>
              <p className="pa-eyebrow">CONNECTED SALES TOOLS</p>
              <h2>Work with the inbox tools your team already uses.</h2>
              <p>
                Supported Gmail, Google Workspace, Outlook, and Microsoft 365
                connections can bring sales activity into the tools reps
                already work in. Availability depends on your account and
                setup.
              </p>
            </div>
            <div className="sa-app-list">
              <div><span className="sa-app-icon">G</span><strong>Gmail / Google Workspace</strong><b>Supported connection</b></div>
              <div><span className="sa-app-icon sa-app-icon-outlook">O</span><strong>Outlook / Microsoft 365</strong><b>Supported connection</b></div>
              <div><span className="sa-app-icon sa-app-icon-crm">S</span><strong>Sales workspace</strong><b>Sequences and workflows</b></div>
            </div>
          </div>
        </section>

        <section className="sa-customer-section">
          <div className="pa-container sa-customer-layout">
            <p className="pa-eyebrow">CUSTOMER STORY · COPYSYSTEM SAR</p>
            <div>
              <h2>
                A sales representative at Copysystem SAR described more
                efficient follow-up and smoother day-to-day sales work after
                adopting automation.
              </h2>
              <p>Customer story summary · EMEA sales team</p>
            </div>
          </div>
        </section>

        <section className="pa-section pa-resources-section" id="resources">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">RELATED RESOURCES</p>
              <h2>Build a more effective sales automation strategy.</h2>
            </div>
            <div className="pa-resource-grid">
              {resources.map((resource) => (
                <article className="pa-resource-card" key={resource.label}>
                  <span>{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.href}>{resource.action} <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-section pa-faq-section" id="faqs">
          <div className="pa-container pa-faq-layout">
            <div>
              <p className="pa-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
              <h2>Questions about sales automation?</h2>
              <p>
                Get answers about sequences, workflows, personalization, and
                measurement.
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

        <section className="pa-section sa-popular-section">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">POPULAR FEATURES IN SALES HUB</p>
              <h2>Connect automation with the rest of your sales work.</h2>
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
            <p className="pa-eyebrow">SALES HUB · SALES AUTOMATION</p>
            <h2>Give your team a consistent way to keep deals moving.</h2>
            <p>
              Explore sequences and workflows that can support your sales
              process.
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

export default SalesAutomation;