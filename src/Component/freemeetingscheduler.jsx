import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const bookingSteps = [
  {
    number: "01",
    title: "Book",
    description:
      "Share a booking link so a prospect can choose an available time without a long email exchange."
  },
  {
    number: "02",
    title: "Automate",
    description:
      "Use meeting context to prepare for conversations and organize follow-up activity."
  },
  {
    number: "03",
    title: "Sync",
    description:
      "Connect a supported calendar so availability and booked meetings stay aligned."
  }
];

const resources = [
  {
    label: "MEETING PREP AND FOLLOW-UP",
    title: "Make the most of every meeting.",
    description:
      "Explore ways to organize preparation and follow-up around your sales conversations.",
    href: "#automation",
    action: "Explore meeting workflows"
  },
  {
    label: "TEAM BOOKING LINKS",
    title: "Coordinate meetings with more than one rep.",
    description:
      "See how team scheduling options can help prospects find a time that works.",
    href: "#booking-options",
    action: "Explore team scheduling"
  },
  {
    label: "CALENDAR CONNECTION",
    title: "Keep availability in sync.",
    description:
      "Review calendar connection and availability settings before sharing a booking link.",
    href: "#calendar-sync",
    action: "Review calendar setup"
  }
];

const questions = [
  [
    "What is a meeting scheduler?",
    "A meeting scheduler lets people view available times and book an appointment through a shareable link, reducing the need to coordinate every time by email."
  ],
  [
    "How do I create a booking link?",
    "Connect an eligible calendar, set your availability and meeting details, then create and share a booking link with the people you want to meet."
  ],
  [
    "Can I control when people book time with me?",
    "Yes. Set your available days, hours, meeting length, and scheduling rules before sharing your link. The exact options depend on the connected calendar and account."
  ],
  [
    "Can multiple team members share a meeting link?",
    "Team scheduling options can route a booking to an available representative or coordinate a meeting that requires more than one team member, when enabled."
  ],
  [
    "Does the scheduler work with Google Calendar and Office 365?",
    "Supported Google and Microsoft calendars can be connected so booked meetings reflect calendar availability. Check your account settings for the integrations available to your team."
  ],
  [
    "Can meeting preparation and follow-up be automated?",
    "Available AI and workflow features can help organize meeting context, prepare follow-up, and record activity. Review generated content and confirm settings before using it with a prospect."
  ],
  [
    "How does scheduling work across time zones?",
    "Booking pages can display available times in the visitor's local time zone when the feature and settings support it. Confirm the displayed zone when arranging important meetings."
  ],
  [
    "Is the meeting scheduler free?",
    "A free scheduling option may be available, with additional features depending on your subscription. Review current plan details for your account."
  ]
];

const popularFeatures = [
  {
    title: "Lead Management",
    description:
      "Organize leads, activity, and follow-up in a shared sales workspace.",
    href: "/lead-management"
  },
  {
    title: "Free Email Tracking Software",
    description:
      "Use email engagement information to guide timely sales follow-up.",
    href: "/sales"
  },
  {
    title: "Sales Automation Tools",
    description:
      "Automate repeatable sales tasks and workflows for your team.",
    href: "/sales"
  }
];

function FreeMeetingScheduler() {
  return (
    <>
      <main className="free-meeting-scheduler-page">
        <div className="pa-breadcrumb">
          <div className="pa-container">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/sales">Sales Hub</Link>
            <span aria-hidden="true">›</span>
            <span>Free Meeting Scheduler</span>
          </div>
        </div>

        <section className="pa-hero">
          <div className="pa-container pa-hero-layout">
            <div className="pa-hero-copy">
              <p className="pa-eyebrow">SALES HUB · MEETING SCHEDULER</p>
              <h1>Make it easier for prospects to meet with you.</h1>
              <p>
                Share booking links, keep your calendar availability in sync,
                and use meeting context to prepare for follow-up—all in a
                connected sales workflow.
              </p>
              <div className="pa-actions">
                <Link className="pa-button pa-button-primary" to="/sales">
                  Get a demo
                </Link>
                <a className="pa-button pa-button-secondary" href="#how-it-works">
                  See how it works
                </a>
              </div>
              <p className="fm-availability-note">
                Free and premium features may be available, depending on your
                plan and account.
              </p>
            </div>

            <div
              className="pa-hero-visual fm-hero-visual"
              role="img"
              aria-label="Illustration of a meeting booking page and available time slots"
            >
              <div className="fm-booking-card">
                <div className="fm-booking-head">
                  <span className="fm-calendar-icon">▦</span>
                  <div>
                    <strong>Introductory meeting</strong>
                    <small>30 minutes · Video call</small>
                  </div>
                </div>
                <div className="fm-booking-body">
                  <div className="fm-calendar">
                    <div className="fm-calendar-title">
                      <strong>Choose a day</strong>
                      <span>November 2026</span>
                    </div>
                    <div className="fm-calendar-days" aria-hidden="true">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                      <span>9</span><span>10</span><span className="fm-date-selected">11</span><span>12</span><span>13</span><span>14</span><span>15</span>
                    </div>
                  </div>
                  <div className="fm-times">
                    <strong>Available times</strong>
                    <span>10:00 AM</span>
                    <span className="fm-time-selected">11:30 AM</span>
                    <span>2:00 PM</span>
                  </div>
                </div>
                <div className="fm-booking-footer">
                  <span>Time zone detected</span>
                  <b>Confirm time →</b>
                </div>
              </div>
              <div className="pa-hero-chip">Choose a time. Stay in sync.</div>
            </div>
          </div>
        </section>

        <section className="pa-proof-band" aria-label="Meeting scheduler benefits">
          <div className="pa-container pa-proof-grid">
            <div>
              <strong>Book meetings faster</strong>
              <span>Let prospects choose an open time.</span>
            </div>
            <div>
              <strong>Prepare with context</strong>
              <span>Keep meeting details close to your CRM.</span>
            </div>
            <div>
              <strong>Sync your calendar</strong>
              <span>Reflect availability from a connected calendar.</span>
            </div>
          </div>
        </section>

        <section className="pa-intro-section" id="how-it-works">
          <div className="pa-container pa-intro-layout">
            <p className="pa-eyebrow">SCHEDULING WITHOUT THE BACK-AND-FORTH</p>
            <div>
              <h2>Keep scheduling simple and every meeting connected.</h2>
              <p>
                Share a live booking page that shows times you are available.
                When someone books, the meeting can be reflected in your
                connected calendar and logged with the associated CRM record.
              </p>
              <p>
                Depending on your account, AI assistance can help organize
                meeting preparation and follow-up, so reps spend less time on
                repetitive administration and more time with prospects.
              </p>
            </div>
          </div>
        </section>

        <section className="pa-section fm-steps-section">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">THREE STEPS TO A BETTER MEETING FLOW</p>
              <h2>Book. Automate. Sync.</h2>
              <p>
                Connect the booking experience to the preparation and
                follow-up that keep sales conversations moving.
              </p>
            </div>
            <div className="fm-steps-grid">
              {bookingSteps.map((step) => (
                <article className="pa-workflow-card" key={step.number}>
                  <span className="pa-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-section fm-booking-options" id="booking-options">
          <div className="pa-container fm-feature-layout">
            <div>
              <p className="pa-eyebrow">SHAREABLE BOOKING LINKS</p>
              <h2>Let prospects book while you stay in control.</h2>
              <p>
                Send a link that reflects the availability you choose. Set
                meeting length and scheduling preferences, then let visitors
                select a suitable time without waiting through multiple
                rounds of email.
              </p>
            </div>
            <div className="fm-options-card">
              <article>
                <span>01</span>
                <div>
                  <h3>One-to-one links</h3>
                  <p>Offer a prospect a time with the right representative.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Round-robin scheduling</h3>
                  <p>Route a meeting to an available member of your team.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Group meetings</h3>
                  <p>Coordinate bookings that need several team members.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pa-section fm-automation-section" id="automation">
          <div className="pa-container fm-feature-layout fm-feature-layout-reverse">
            <div>
              <p className="pa-eyebrow">MEETING PREP AND FOLLOW-UP</p>
              <h2>Spend less time on the admin around a meeting.</h2>
              <p>
                Keep relevant contact and account context available as reps
                prepare. After a meeting, use connected tools to capture
                notes, organize next steps, and prepare a follow-up for review.
              </p>
              <ul>
                <li>Review customer context before the conversation.</li>
                <li>Capture key details and actions after the meeting.</li>
                <li>Keep the CRM record aligned with sales activity.</li>
              </ul>
              <p className="fm-small-note">
                AI-generated summaries or follow-up drafts should be reviewed
                for accuracy before sharing.
              </p>
            </div>
            <div className="fm-assistant-card">
              <div className="fm-assistant-card-head">
                <span>MEETING WORKSPACE</span>
                <b>Ready to review</b>
              </div>
              <h3>Discovery call notes</h3>
              <p>Topics to discuss</p>
              <ul>
                <li>Current goals and priorities</li>
                <li>Existing process and challenges</li>
                <li>Agreed follow-up and owner</li>
              </ul>
              <div className="fm-assistant-actions">
                <span>Review notes</span>
                <span>Prepare follow-up</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pa-section fm-calendar-section" id="calendar-sync">
          <div className="pa-container fm-feature-layout">
            <div>
              <p className="pa-eyebrow">CALENDAR CONNECTION</p>
              <h2>Keep availability aligned with your work calendar.</h2>
              <p>
                Connect a supported Google or Microsoft 365 calendar so booking
                pages can account for existing events. Review your connected
                calendar and availability settings before sharing a link.
              </p>
            </div>
            <div className="fm-calendar-connection">
              <div>
                <span className="fm-provider-mark">G</span>
                <div><strong>Google Calendar</strong><small>Connected calendar</small></div>
                <b>Connected</b>
              </div>
              <div>
                <span className="fm-provider-mark fm-provider-mark-ms">M</span>
                <div><strong>Microsoft 365</strong><small>Supported calendar option</small></div>
                <b>Connect</b>
              </div>
              <p>Availability updates from the calendar you select.</p>
            </div>
          </div>
        </section>

        <section className="pa-section pa-resources-section" id="resources">
          <div className="pa-container">
            <div className="pa-section-heading">
              <p className="pa-eyebrow">RELATED RESOURCES</p>
              <h2>Set up a meeting experience that works for your team.</h2>
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
              <h2>Questions about meeting scheduling?</h2>
              <p>
                Learn about booking links, calendar availability, and
                meeting workflows.
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

        <section className="pa-section fm-popular-section">
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
            <p className="pa-eyebrow">SALES HUB · MEETING SCHEDULER</p>
            <h2>Give prospects an easier way to meet with your team.</h2>
            <p>
              Explore booking links, calendar connections, and meeting
              workflows for your sales team.
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

export default FreeMeetingScheduler;