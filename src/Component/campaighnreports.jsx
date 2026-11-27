import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "See where visits come from",
  "Compare content and campaign activity",
  "Save useful views for your team"
];

const reportTypes = [
  {
    title: "Traffic sources",
    description:
      "Understand how visitors arrive, such as from search, social, email, referrals, or direct visits. Compare sources to see which channels bring the audience you want."
  },
  {
    title: "Pages and content",
    description:
      "Review visits and conversion activity across website pages, landing pages, and other content to find what attracts attention and encourages action."
  },
  {
    title: "Campaign parameters",
    description:
      "Use consistent tracking parameters in campaign links to group visits and compare the results of tagged marketing efforts."
  },
  {
    title: "Visitor context",
    description:
      "Break down activity by device, location, or browser to identify differences in audience behavior and spot experience issues."
  }
];

const metrics = [
  {
    title: "Sessions",
    description:
      "A session groups a visitor’s activity on a site during a visit. One person may have multiple sessions over time."
  },
  {
    title: "Page views",
    description:
      "The number of times tracked pages load during the selected period. Review page views with engagement or conversion measures for context."
  },
  {
    title: "Conversions",
    description:
      "Count the actions that matter to your goal, such as form submissions or other tracked events, and compare them with visits."
  },
  {
    title: "New contacts and customers",
    description:
      "Connect website activity with CRM lifecycle outcomes to understand whether visits are contributing to leads and customers."
  },
  {
    title: "Bounce and engagement",
    description:
      "Use single-page exits and engagement signals as clues, then consider the page’s purpose before deciding whether a result is good or bad."
  }
];

const setupSteps = [
  {
    number: "01",
    label: "CHOOSE A PERIOD",
    title: "Set a useful time range.",
    description:
      "Select a date range and reporting frequency that fit the question you are investigating. Compare equivalent periods when checking trends."
  },
  {
    number: "02",
    label: "NARROW THE VIEW",
    title: "Filter to the right context.",
    description:
      "Apply relevant dimensions such as source, campaign, page type, or device so the report focuses on the audience or activity you need to understand."
  },
  {
    number: "03",
    label: "REVIEW AND SHARE",
    title: "Save the findings for later.",
    description:
      "Choose a chart and breakdown that make comparisons clear, then save the report to a dashboard or export data when your workflow requires it."
  }
];

const questions = [
  {
    question: "What can website traffic reports show?",
    answer:
      "Traffic reports can summarize where visits come from, which pages receive activity, how campaigns are tagged, and how behavior varies by device or location."
  },
  {
    question: "Why might historical report data change?",
    answer:
      "Analytics systems may update earlier results when additional information improves how visits or contact sources are categorized. Use consistent date ranges and note when data was reviewed."
  },
  {
    question: "How do I compare campaign traffic?",
    answer:
      "Use consistent campaign tracking parameters, select the same reporting period, and compare relevant measures such as sessions, conversions, and lead quality."
  },
  {
    question: "Can I save or export a report?",
    answer:
      "Reporting tools may let you save views to a dashboard or export data in supported formats. Available options depend on your account and permissions."
  },
  {
    question: "Which metrics should I start with?",
    answer:
      "Begin with the measures closest to your goal. For example, pair traffic sources with conversions or lead quality instead of judging a campaign by visits alone."
  }
];

function CampaignReports() {
  return (
    <>
      <main className="content-agent-page campaign-reports-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">REPORTING &amp; DATA · CAMPAIGN REPORTS</p>
              <h1>Turn campaign traffic reports into clearer next steps.</h1>
              <p className="ca-hero-intro">
                Review traffic sources, content performance, and campaign
                activity together. Use filters and meaningful measures to
                understand what is changing and where to investigate.
              </p>
              <div className="ca-actions">
                <Link
                  className="ca-button ca-button-primary"
                  to="/marketing-analytics"
                >
                  Explore Marketing Analytics
                </Link>
                <a className="ca-button ca-button-secondary" href="#report-types">
                  Browse report types
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="Website traffic and marketing campaign reports"
              />
              <div className="ca-visual-caption">
                <span>TRAFFIC · CONTENT · CAMPAIGNS</span>
                <strong>Find the context behind your metrics</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Campaign reporting benefits">
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
            <p className="ca-eyebrow">MAKE REPORTS MORE USEFUL</p>
            <h2>Start with the question, then choose the report.</h2>
            <p>
              Traffic reports can help explain where visitors came from, what
              they viewed, and how they interacted with your site. Add
              campaign and customer context to understand whether those visits
              support your marketing goals.
            </p>
          </div>
        </section>

        <section className="ca-section email-personalization" id="report-types">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">EXPLORE REPORT TYPES</p>
              <h2>Look at traffic from different angles.</h2>
              <p>
                Select a report that matches what you need to learn, then use
                consistent filters to compare results.
              </p>
            </div>
            <div className="email-resource-grid">
              {reportTypes.map((report) => (
                <article className="email-resource-card" key={report.title}>
                  <h3>{report.title}</h3>
                  <p>{report.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section ca-workflow">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">CUSTOMIZE A REPORT</p>
              <h2>Move from a broad chart to a focused view.</h2>
            </div>
            <div className="ca-step-grid">
              {setupSteps.map((step) => (
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

        <section className="ca-section email-resources" id="report-metrics">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">UNDERSTAND THE MEASURES</p>
              <h2>Put traffic numbers in context.</h2>
              <p>
                Metrics are most useful when they are tied to a goal and
                interpreted alongside other signals.
              </p>
            </div>
            <div className="email-resource-grid">
              {metrics.map((metric) => (
                <article className="email-resource-card" key={metric.title}>
                  <h3>{metric.title}</h3>
                  <p>{metric.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section ca-quality">
          <div className="ca-container ca-quality-layout">
            <div className="ca-quality-heading">
              <p className="ca-eyebrow">SAVE AND SHARE INSIGHTS</p>
              <h2>Make recurring reporting easier to review.</h2>
              <p>
                Keep useful reports available to the people who need them and
                export data when it is needed for additional analysis.
              </p>
            </div>
            <div className="ca-quality-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Save to a dashboard</h3>
                  <p>
                    Add a clear report name and place the view on an existing
                    dashboard or one created for a specific team or goal.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Export when needed</h3>
                  <p>
                    Use supported export options for offline analysis or
                    sharing. Access can vary based on account permissions.
                  </p>
                </div>
              </article>
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

        <section className="ca-final-cta">
          <div className="ca-container">
            <p className="ca-eyebrow">CAMPAIGN REPORTS</p>
            <h2>Connect traffic activity with marketing outcomes.</h2>
            <p>
              Use reports to understand what is happening, then choose the
              next question your team should answer.
            </p>
            <Link className="ca-button ca-button-primary" to="/marketing-analytics">
              Explore Marketing Analytics
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default CampaignReports;