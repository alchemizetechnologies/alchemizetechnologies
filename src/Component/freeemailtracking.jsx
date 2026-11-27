import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  {
    title: "Track engagement",
    description: "See open and click activity tied to prospect emails."
  },
  {
    title: "Follow up with context",
    description: "Use engagement history to make the next touch more relevant."
  },
  {
    title: "Work from your inbox",
    description: "Connect supported email apps and your sales workspace."
  }
];

const resources = [
  {
    label: "EMAIL ENGAGEMENT",
    title: "Understand what prospects interact with.",
    description:
      "Review the types of activity that can inform a thoughtful follow-up.",
    href: "#engagement",
    action: "Explore engagement history"
  },
  {
    label: "FOLLOW-UP",
    title: "Make the next conversation more relevant.",
    description:
      "Use available contact context to prepare a helpful next step.",
    href: "#alerts",
    action: "See follow-up workflows"
  },
  {
    label: "CONNECTED APPS",
    title: "Track emails in the tools your team uses.",
    description:
      "Review supported inbox and calendar connections for your account.",
    href: "#apps",
    action: "See connected apps"
  }
];

const questions = [
  [
    "What is email tracking?",
    "Email tracking records available engagement signals, such as opens and link clicks, and associates them with a contact or sales activity."
  ],
  [
    "How does free email tracking work?",
    "When tracking is enabled for a supported email, engagement signals may appear in notifications and on the related contact record. Available features depend on your account and connected tools."
  ],
  [
    "Can I track opens and clicks from Gmail or Outlook?",
    "Supported Gmail, Google Workspace, Outlook, and Microsoft 365 setups can offer tracking through connected sales tools or extensions. Check your account and inbox settings for current availability."
  ],
  [
    "What activity can email tracking show?",
    "Depending on the email and account, you may see open events, link clicks, and related tracked content activity on a contact record."
  ],
  [
    "How much does email tracking cost?",
    "A free option may be available, with additional capabilities depending on your subscription. Review your account's current plan details."
  ],
  [
    "How quickly do tracking notifications arrive?",
    "Notifications may appear soon after a supported engagement event is processed. Delivery timing depends on your settings, connected apps, and the recipient's email environment."
  ],
  [
    "Are email open and click measurements exact?",
    "No tracking signal is perfect. Privacy protections, image caching, security scanners, and recipient settings can affect whether an open or click is recorded as expected."
  ],
  [
    "Can I choose where I receive notifications?",
    "Notification controls depend on your setup. Available options may include your sales workspace, browser, desktop, or connected inbox."
  ]
];

const popularFeatures = [
  {
    title: "Free Meeting Scheduler",
    description:
      "Let prospects choose a time from your available booking slots.",
    href: "/free-meeting-scheduler"
  },
  {
    title: "Lead Management",
    description:
      "Organize leads, sales activity, and next steps in one workspace.",
    href: "/lead-management"
  },
  {
    title: "Sales Automation Tools",
    description:
      "Automate repeatable follow-ups and workflows for your team.",
    href: "/sales-automation"
  }
];

function FreeEmailTracking() {
  return (
    <>
      <main className="free-email-tracking-page">
        <div className="pa-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/sales">Sales Hub</Link>
            <span aria-hidden="true">›</span>
            <span>Free Email Tracking</span>
          </div>
        </div>

        <section className="pa-hero">
          <div className="pa-container pa-hero-layout">
            <div className="pa-hero-copy">
              <p className="pa-eyebrow">SALES HUB · EMAIL TRACKING</p>
              <h1>Know when prospects engage with your emails.</h1>
              <p>
                Use email activity to understand what may be relevant to a
                lead, then follow up with useful context and better timing.
                Connect supported inbox tools with your sales workspace.
              </p>
              <div className="pa-actions">
                <Link className="pa-button pa-button-primary" to="/sales">
                  Get a demo
                </Link>
                <a className="pa-button pa-button-secondary" href="#features">
                  Explore email tracking
                </a>
              </div>
              <p className="et-availability-note">
                Free and premium features may be available depending on your
                plan and connected apps.
              </p>
            </div>

            <div
              className="pa-hero-visual et-hero-visual"
              role="img"
              aria-label="Illustration of tracked email activity and contact engagement history"
            >
              <div className="et-inbox-card">
                <div className="et-inbox-header">
                  <span className="et-mail-icon">✉</span>
                  <div>
                    <strong>Project follow-up</strong>
                    <small>To: Avery Chen</small>
                  </div>
                  <span className="et-sent-status">Tracked</span>
                </div>
                <div className="et-email-preview">
                  <span className="et-preview-line et-preview-line-long" />
                  <span className="et-preview-line" />
                  <span className="et-preview-line et-preview-line-short" />
                  <span className="et-preview-link">View the proposal</span>
                </div>
                <div className="et-activity-feed">
                  <strong>Recent activity</strong>
                  <div><span className="et-activity-dot" /> Email opened <small>Just now</small></div>
                  <div><span className="et-activity-dot et-activity-dot-click" /> Link clicked <small>2 min ago</small></div>
                </div>
              </div>
              <div className="pa-hero-chip">Engagement → context → follow-up</div>
            </div>
          </div>
        </section>

        <section className="pa-proof-band" aria-label="Email tracking benefits">
          <div className="pa-container pa-proof-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <strong>{benefit.title}</strong>
                <span>{benefit.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pa-intro-section">
          <div className="pa-container pa-intro-layout">
            <p className="pa-eyebrow">LESS GUESSWORK IN SALES OUTREACH</p>
            <div>
              <h2>Understand engagement and choose a more useful next step.</h2>
              <p>
                Writing a thoughtful sales email takes effort. Without
                engagement context, it can be hard to tell whether a message
                reached a prospect or which information may have caught their
                attention.
              </p>
              <p>
                Email tracking can surface supported open and click activity
                and associate it with the contact record. Use those signals
                alongside the rest of the relationship, not as a substitute
                for direct conversation or sound judgment.
              </p>
            </div>
          </div>
        </section>

        <section className="et-feature-list" id="features">
          <section className="et-detail-section" id="alerts">
            <div className="pa-container et-detail-layout">
              <div>
                <p className="pa-eyebrow">TIMELY FOLLOW-UP</p>
                <h2>Reach out when there is a reason to reconnect.</h2>
                <p>
                  Configure notifications for supported engagement, such as
                  an email open or link click. A timely signal can help a rep
                  decide whether to follow up while the topic is still
                  relevant.
                </p>
                <ul>
                  <li>Choose notification settings that suit your workflow.</li>
                  <li>Use the clicked content to add context to follow-up.</li>
                  <li>Combine email activity with other CRM information.</li>
                </ul>
              </div>
              <div className="et-alert-card">
                <span className="et-alert-label">SALES NOTIFICATION</span>
                <strong>Avery engaged with your email</strong>
                <p>Opened a message and viewed the proposal link.</p>
                <span className="et-alert-action">Review contact activity</span>
              </div>
            </div>
          </section>

          <section className="et-detail-section et-detail-muted" id="engagement">
            <div className="pa-container et-detail-layout et-detail-reverse">
              <div>
                <p className="pa-eyebrow">CONTACT ENGAGEMENT HISTORY</p>
                <h2>See email activity alongside the relationship.</h2>
                <p>
                  Review tracked emails and related activity on the contact
                  record, where available. Keeping this context together can
                  help reps understand what a lead has interacted with before
                  choosing their next message.
                </p>
                <ul>
                  <li>Review email engagement in the contact timeline.</li>
                  <li>Use relevant activity to personalize a follow-up.</li>
                  <li>Keep the sales conversation connected to CRM context.</li>
                </ul>
                <p className="et-caveat">
                  Privacy settings, security scanners, and image caching can
                  affect tracking signals, so treat activity as an indicator
                  rather than a guarantee.
                </p>
              </div>
              <div className="et-timeline-card">
                <strong>Contact activity</strong>
                <div><span className="et-timeline-marker" /><p><b>Email sent</b><small>Product overview · Yesterday</small></p></div>
                <div><span className="et-timeline-marker et-marker-open" /><p><b>Email opened</b><small>Engagement detected · Today</small></p></div>
                <div><span className="et-timeline-marker et-marker-click" /><p><b>Link clicked</b><small>Proposal page · Today</small></p></div>
              </div>
            </div>
          </section>

          <section className="et-detail-section" id="apps">
            <div className="pa-container et-detail-layout">
              <div>
                <p className="pa-eyebrow">WORK FROM CONNECTED EMAIL APPS</p>
                <h2>Track emails in the tools your team already uses.</h2>
                <p>
                  Connect a supported Gmail, Google Workspace, Outlook, or
                  Microsoft 365 inbox, or send tracked messages from your
                  sales workspace. Notification channels and controls depend
                  on your account configuration.
                </p>
                <ul>
                  <li>Choose an available inbox connection for your team.</li>
                  <li>Set where and when engagement notifications appear.</li>
                  <li>Keep eligible email activity associated with CRM records.</li>
                </ul>
              </div>
              <div className="et-apps-card">
                <div><span className="et-app-mark et-google-mark">G</span><p><strong>Google Workspace</strong><small>Connect a supported inbox</small></p><b>Available</b></div>
                <div><span className="et-app-mark et-outlook-mark">O</span><p><strong>Outlook / Microsoft 365</strong><small>Connect a supported inbox</small></p><b>Available</b></div>
                <div><span className="et-app-mark et-crm-mark">S</span><p><strong>Sales workspace</strong><small>Send from your connected CRM</small></p><b>Connected</b></div>
              </div>
            </div>
          </section>
        </section>

        <section className="pa-section pa-resources-section" id="resources">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">RELATED RESOURCES</p>
              <h2>Make email follow-up more thoughtful.</h2>
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
              <h2>Questions about email tracking?</h2>
              <p>
                Learn about engagement signals, connected inboxes, and
                follow-up notifications.
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

        <section className="pa-section et-popular-section">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">POPULAR FEATURES IN SALES HUB</p>
              <h2>Explore tools that support your sales process.</h2>
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
            <p className="pa-eyebrow">SALES HUB · EMAIL TRACKING</p>
            <h2>Follow up with context, not guesswork.</h2>
            <p>
              Bring email engagement into your sales workflow and make the
              next interaction more relevant.
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

export default FreeEmailTracking;