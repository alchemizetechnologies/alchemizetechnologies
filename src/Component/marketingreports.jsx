import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Connect reporting to real business decisions",
  "Compare channel and campaign performance",
  "Share clear findings with your team"
];

const reportExamples = [
  {
    number: "01",
    title: "Revenue attribution",
    description:
      "Compare marketing touchpoints with closed revenue to understand which efforts contribute across the customer journey.",
    focus: "Revenue by channel and campaign"
  },
  {
    number: "02",
    title: "Channel traffic",
    description:
      "Review where visitors come from and whether each source brings people who continue toward a meaningful action.",
    focus: "Traffic quality and conversion"
  },
  {
    number: "03",
    title: "Content contribution",
    description:
      "See which blog posts and other assets are associated with lead creation, then identify themes worth exploring further.",
    focus: "Content-assisted leads"
  },
  {
    number: "04",
    title: "New contacts by audience",
    description:
      "Compare new contacts across audience groups to check whether campaigns are reaching the segments your team intended.",
    focus: "Contact growth by segment"
  },
  {
    number: "05",
    title: "Lifecycle funnel",
    description:
      "Follow movement between lifecycle stages to find where prospects progress and where they may need more support.",
    focus: "Stage conversion and drop-off"
  },
  {
    number: "06",
    title: "Email performance",
    description:
      "Review delivery, engagement, and conversion signals to learn which messages and campaign approaches are resonating.",
    focus: "Clicks and downstream actions"
  },
  {
    number: "07",
    title: "Social engagement",
    description:
      "Look across social channels at reach, interactions, and content response instead of relying on follower totals alone.",
    focus: "Engagement and reach"
  },
  {
    number: "08",
    title: "Organic search",
    description:
      "Monitor search visibility and organic visits alongside the actions visitors take after landing on your site.",
    focus: "Organic sessions and conversions"
  },
  {
    number: "09",
    title: "Ecommerce outcomes",
    description:
      "Connect marketing sources with orders and revenue to understand which channels support online sales.",
    focus: "Transactions and revenue by source"
  }
];

const reportElements = [
  {
    title: "A clear title",
    description:
      "Name the report so its topic and purpose are easy to recognize."
  },
  {
    title: "A defined time period",
    description:
      "State the dates covered and use comparable periods when reviewing trends."
  },
  {
    title: "A short interpretation",
    description:
      "Summarize key changes, what they may mean, and the decision or next step they support."
  }
];

const reportingSteps = [
  {
    number: "01",
    label: "DEFINE THE PURPOSE",
    title: "Start with a decision to make.",
    description:
      "Clarify the question the report should answer and what action the findings could inform."
  },
  {
    number: "02",
    label: "CHOOSE THE AUDIENCE",
    title: "Show people what they need.",
    description:
      "Select useful context and explain terms for the readers who will use the report."
  },
  {
    number: "03",
    label: "SELECT THE DATA",
    title: "Use measures that fit the goal.",
    description:
      "Choose relevant metrics, reporting dates, and channel comparisons rather than adding numbers without a clear purpose."
  },
  {
    number: "04",
    label: "EXPLAIN THE FINDING",
    title: "Connect results to a next step.",
    description:
      "Highlight what changed, what may have influenced it, and what the team should test or investigate next."
  }
];

const bestPractices = [
  {
    title: "Set a regular rhythm",
    description:
      "Choose a reporting schedule that gives each channel enough time to produce meaningful results."
  },
  {
    title: "Ask readers for feedback",
    description:
      "Find out which information helps stakeholders make decisions and refine the report over time."
  },
  {
    title: "Reuse a consistent format",
    description:
      "Templates can reduce repetitive setup and make changes easier to compare from one period to another."
  },
  {
    title: "Lead with the most useful insight",
    description:
      "Put the central result and its implication near the beginning so readers can quickly understand the takeaway."
  },
  {
    title: "Visualize comparisons",
    description:
      "Use a suitable chart or table when it makes patterns, changes, or channel differences easier to interpret."
  }
];

const resources = [
  {
    title: "Marketing Analytics",
    description:
      "Review campaign, website, and channel performance as part of your broader marketing measurement.",
    action: "Explore Marketing Analytics",
    href: "/marketing-analytics"
  },
  {
    title: "Campaign Reports",
    description:
      "Learn how to filter traffic reports, compare sources, and interpret common website measures.",
    action: "Explore campaign reports",
    href: "/campaign-reports"
  },
  {
    title: "Web Analytics",
    description:
      "Connect website activity with campaign and customer outcomes across your digital channels.",
    action: "Explore web analytics",
    href: "/web-analytics"
  }
];

const questions = [
  {
    question: "What is a marketing report?",
    answer:
      "A marketing report brings together selected performance data and interpretation to help answer a business question or guide a decision."
  },
  {
    question: "How is a report different from a dashboard?",
    answer:
      "A dashboard is useful for ongoing monitoring, while a report typically focuses on a question, time period, or analysis that supports a specific decision."
  },
  {
    question: "How often should I create marketing reports?",
    answer:
      "Choose a cadence that matches your goals and how quickly the data changes. Weekly, monthly, or campaign-based reviews can each be useful in different situations."
  },
  {
    question: "Which metrics belong in a marketing report?",
    answer:
      "Include measures that connect to the report’s purpose, such as traffic quality, conversions, lead progression, engagement, or revenue contribution."
  }
];

function MarketingReports() {
  return (
    <>
      <main className="content-agent-page marketing-reports-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING HUB · MARKETING REPORTS</p>
              <h1>Build marketing reports that help guide your next decision.</h1>
              <p className="ca-hero-intro">
                Bring performance measures together, understand what they
                reveal, and share findings that help your team focus time and
                resources where they can make a difference.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#report-examples">
                  Explore report examples
                </a>
                <Link
                  className="ca-button ca-button-secondary"
                  to="/dashboard-reporting"
                >
                  Explore dashboards
                </Link>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="Marketing results summarized in a report dashboard"
              />
              <div className="ca-visual-caption">
                <span>MEASURE · INTERPRET · DECIDE</span>
                <strong>Turn performance data into useful direction</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Marketing reporting benefits">
          <div className="ca-container email-benefit-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit}>
                <span>{`0${index + 1}`}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ca-section email-intro">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">REPORT WITH A PURPOSE</p>
            <h2>Make the numbers useful to the people reading them.</h2>
            <p>
              Marketing reports help teams interpret activity and decide what
              to do next. They can show how visitors find your content, which
              campaigns support lead creation, and how prospects progress
              toward becoming customers. A useful report focuses on a question
              rather than collecting data for its own sake.
            </p>
          </div>
        </section>

        <section className="ca-section email-personalization" id="report-examples">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">MARKETING REPORT EXAMPLES</p>
              <h2>Start with a view that matches your goal.</h2>
              <p>
                These report ideas cover common questions across revenue,
                channels, content, audience, and customer journeys.
              </p>
            </div>
            <div className="email-resource-grid">
              {reportExamples.map((report) => (
                <article className="email-resource-card" key={report.number}>
                  <p className="ca-eyebrow">{report.number}</p>
                  <h3>{report.title}</h3>
                  <p>{report.description}</p>
                  <strong>{report.focus}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section ca-workflow">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">HOW TO CREATE A MARKETING REPORT</p>
              <h2>Build a report around purpose and audience.</h2>
            </div>
            <div className="ca-step-grid">
              {reportingSteps.map((step) => (
                <article className="ca-step-card" key={step.number}>
                  <span className="ca-step-number">{step.number}</span>
                  <p className="ca-step-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">A CLEAR REPORT STRUCTURE</p>
              <h2>Give readers the context they need.</h2>
            </div>
            <div className="email-resource-grid">
              {reportElements.map((element) => (
                <article className="email-resource-card" key={element.title}>
                  <h3>{element.title}</h3>
                  <p>{element.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section ca-quality">
          <div className="ca-container ca-quality-layout">
            <div className="ca-quality-heading">
              <p className="ca-eyebrow">REPORTING BEST PRACTICES</p>
              <h2>Make reporting clearer and easier to repeat.</h2>
              <p>
                A thoughtful process helps people understand the findings and
                use them in their work.
              </p>
            </div>
            <div className="ca-quality-list">
              {bestPractices.map((practice, index) => (
                <article key={practice.title}>
                  <span>{`0${index + 1}`}</span>
                  <div>
                    <h3>{practice.title}</h3>
                    <p>{practice.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RELATED RESOURCES</p>
              <h2>Keep improving how your team measures performance.</h2>
            </div>
            <div className="email-resource-grid">
              {resources.map((resource) => (
                <article className="email-resource-card" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <Link to={resource.href}>{resource.action}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-faq">
          <div className="ca-container email-faq-layout">
            <div>
              <p className="ca-eyebrow">FAQ</p>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="email-faq-list">
              {questions.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-final-cta marketing-report-download">
          <div className="ca-container">
            <p className="ca-eyebrow">FREE REPORT TEMPLATE</p>
            <h2>Start your next marketing report with a clear structure.</h2>
            <p>
              Download a simple CSV template to record your reporting period,
              goal, audience, metrics, findings, and next steps.
            </p>
            <a
              className="ca-button ca-button-primary"
              href="/marketing-report-template.csv"
              download="marketing-report-template.csv"
            >
              Download the marketing report template
            </a>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default MarketingReports;