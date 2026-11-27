import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const segmentTypes = [
  {
    title: "Active segments",
    description:
      "Membership changes as records begin or stop matching the rules. Use them for audiences that evolve, such as subscribers or contacts showing recent interest."
  },
  {
    title: "Static segments",
    description:
      "Membership represents a point-in-time group. Use them for one-off outreach, event attendees, or a hand-curated set that should not update automatically."
  }
];

const creationSteps = [
  {
    number: "01",
    label: "CHOOSE RECORDS",
    title: "Select what you want to group.",
    description:
      "Start with the record type that fits your goal, such as contacts, companies, or deals."
  },
  {
    number: "02",
    label: "SET CRITERIA",
    title: "Describe who belongs in the group.",
    description:
      "Use relevant properties, activities, or list membership. You can start with an AI suggestion or configure filters yourself."
  },
  {
    number: "03",
    label: "REFINE FILTERS",
    title: "Combine conditions with care.",
    description:
      "Organize related conditions into groups and choose whether all or any conditions should match."
  },
  {
    number: "04",
    label: "CHECK ASSOCIATIONS",
    title: "Include the right related records.",
    description:
      "When criteria use associated records, clarify which relationships count and whether missing associations should be excluded."
  },
  {
    number: "05",
    label: "REVIEW DETAILS",
    title: "Make the segment clear and usable.",
    description:
      "Add a descriptive name, choose the update behavior, and confirm any campaign or access settings that apply."
  },
  {
    number: "06",
    label: "TEST AND SAVE",
    title: "Verify the matches before activation.",
    description:
      "Preview the records that fit, check the result against your goal, then save and let processing complete."
  }
];

const questions = [
  {
    question: "What is the difference between an active and a static segment?",
    answer:
      "An active segment updates as records meet or stop meeting its criteria. A static segment holds the group captured when it is processed, unless you change its membership yourself."
  },
  {
    question: "Can I start a segment with an AI prompt?",
    answer:
      "If AI-assisted creation is available in your account, describe the audience in plain language. Review and adjust the proposed filters before saving."
  },
  {
    question: "Can segments use information from associated records?",
    answer:
      "Yes, where supported. Choose the associated record and define how its properties or activities should affect membership."
  },
  {
    question: "What can I do with a saved segment?",
    answer:
      "Depending on record type and account features, segments can support targeted email, workflows, advertising audiences, reporting, and other marketing actions."
  },
  {
    question: "Can I reuse an existing segment?",
    answer:
      "You can use an existing segment as a starting point by cloning it, then updating the name, criteria, and details for the new purpose."
  }
];

function CreateAndUseList() {
  return (
    <>
      <main className="content-agent-page create-lists-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <Link to="/lookalike-lists">Lookalike Lists</Link>
          <span aria-hidden="true">›</span>
          <span>Create and Use Lists</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING GUIDE · CONTACT MANAGEMENT</p>
              <h1>Create and Use Lists</h1>
              <p className="ca-hero-intro">
                Group CRM records around clear criteria, keep audiences
                up-to-date, and put the right segments to work across your
                marketing activities.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#create-segment">
                  See how it works
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img2.webp"
                alt="Contact records organized into marketing groups"
              />
              <div className="ca-visual-caption">
                <span>SEGMENTS · LISTS</span>
                <strong>Build purposeful groups from your CRM data</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-section email-intro">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">FROM DATA TO AUDIENCE</p>
            <h2>A segment is a group of records that share criteria you choose.</h2>
            <p>
              Use groups to organize contacts, companies, deals, or other
              records for a specific purpose. Clear criteria make it easier
              for teams to coordinate outreach, workflows, and reporting.
            </p>
          </div>
        </section>

        <section className="ca-section ca-agents">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">CHOOSE HOW MEMBERSHIP WORKS</p>
              <h2>Use a segment type that fits the audience.</h2>
            </div>
            <div className="email-resource-grid">
              {segmentTypes.map((type) => (
                <article className="email-resource-card" key={type.title}>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section" id="create-segment">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">A PRACTICAL WORKFLOW</p>
              <h2>Create a segment, review it, and save it for your team.</h2>
            </div>
            <div className="ca-step-grid">
              {creationSteps.map((step) => (
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

        <section className="ca-section email-personalization">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">PUT SEGMENTS TO WORK</p>
              <h2>Use saved groups to coordinate the next action.</h2>
              <p>
                Apply a segment where it supports a clear customer or business
                goal. Depending on the records and tools available, teams can
                use segments to tailor communications, automate follow-up, or
                review audience activity.
              </p>
              <ul>
                <li>Target relevant contacts with tailored email.</li>
                <li>Enroll matching records in appropriate workflows.</li>
                <li>Build audiences and reports from selected records.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img3.webp"
                alt="A marketing workflow using an audience segment"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-visual">
              <img
                src="/images/img5.webp"
                alt="A segment being reviewed before campaign activation"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">KEEP YOUR SEGMENTS USEFUL</p>
              <h2>Review criteria as your data and goals change.</h2>
              <p>
                Check that names explain the purpose, filters still reflect
                what the team needs, and membership behaves as expected. When
                an audience changes, update the criteria or create a fresh
                group for a different use.
              </p>
              <p>
                An existing segment can also be cloned as a starting point.
                Review its filters and settings before using the copy.
              </p>
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
            <p className="ca-eyebrow">KEEP EXPLORING</p>
            <h2>Make your audience data easier to activate.</h2>
            <p>
              Explore Lookalike Lists and other Marketing Hub tools for
              audience planning.
            </p>
            <Link className="ca-button ca-button-primary" to="/lookalike-lists">
              Explore Lookalike Lists
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default CreateAndUseList;
