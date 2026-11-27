import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const variantSteps = [
  {
    number: "01",
    label: "SELECT",
    title: "Choose an asset and audience type.",
    description:
      "Start with a supported page or call to action, then decide whether the experience is for a contact, company, or segment."
  },
  {
    number: "02",
    label: "CREATE",
    title: "Draft a tailored version.",
    description:
      "Create the content yourself or use available AI assistance to propose a variation based on the audience and your instructions."
  },
  {
    number: "03",
    label: "REVIEW",
    title: "Check audience rules and content.",
    description:
      "Preview the result, confirm it matches the intended audience, and adjust its priority when multiple versions could apply."
  },
  {
    number: "04",
    label: "PUBLISH",
    title: "Make the approved version available.",
    description:
      "Publish the asset after review, then monitor its performance and update its content or audience criteria when needed."
  }
];

const targetedPageSteps = [
  {
    number: "01",
    label: "PREPARE",
    title: "Choose a reusable page structure.",
    description:
      "Select a suitable source page or template, choose whether the page is for a contact or company, and write clear guidance for the content."
  },
  {
    number: "02",
    label: "GENERATE",
    title: "Create a page for the selected audience.",
    description:
      "Use the available personalization workflow to prepare one or more dedicated pages based on the template and audience context."
  },
  {
    number: "03",
    label: "PREVIEW",
    title: "Review and refine before sharing.",
    description:
      "Preview a representative contact or company, confirm details are appropriate, and edit the page before it goes live."
  },
  {
    number: "04",
    label: "SHARE",
    title: "Publish and distribute each page.",
    description:
      "After publishing, share the matching page link through an appropriate channel such as an email, sequence, or ad."
  }
];

const questions = [
  {
    question: "What is a personalized variant?",
    answer:
      "It is an alternate version of a supported asset that can be shown to an audience based on selected criteria, alongside the default experience."
  },
  {
    question: "What is a targeted page?",
    answer:
      "It is a dedicated landing-page experience created for a selected contact or company and shared using its own link."
  },
  {
    question: "Can I make several variants from one asset?",
    answer:
      "You can create multiple audience versions for a supported asset. Review how overlapping audiences are prioritized and check any account limits."
  },
  {
    question: "Can I use AI when creating a variant or targeted page?",
    answer:
      "Where enabled, AI can help draft variations or prepare pages from your instructions. Review the content for accuracy, relevance, and brand fit."
  },
  {
    question: "What should I compare when measuring variants?",
    answer:
      "Compare each version with the default using meaningful measures such as views, submissions, and conversions, then refine your audience or content."
  },
  {
    question: "What access is needed to publish?",
    answer:
      "Availability depends on your subscription and account settings. The person publishing also needs the appropriate edit and publish access for the asset."
  }
];

function ContentVariants() {
  return (
    <>
      <main className="content-agent-page content-variants-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <Link to="/personalization">Personalization</Link>
          <span aria-hidden="true">›</span>
          <span>Personalized Variants</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">PERSONALIZATION · CONTENT GUIDE</p>
              <h1>Create and manage personalized variants and targeted pages.</h1>
              <p className="ca-hero-intro">
                Adapt website pages, landing pages, and calls to action for
                specific audiences—or prepare a dedicated page to share with a
                selected contact or company.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#variants">
                  Explore the guide
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img2.webp"
                alt="Website content being tailored for selected audiences"
              />
              <div className="ca-visual-caption">
                <span>PERSONALIZED CONTENT</span>
                <strong>Manage audience experiences from one workflow</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-section email-intro" id="variants">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">TWO PERSONALIZATION APPROACHES</p>
            <h2>Choose between visitor-based variants and direct-share pages.</h2>
            <p>
              Variants keep alternate content connected to a default website
              page, landing page, or call to action. Targeted pages are
              individual landing pages with distinct links for selected
              contacts or companies.
            </p>
          </div>
        </section>

        <section className="ca-section ca-agents">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">PERSONALIZED VARIANTS</p>
              <h2>Create a tailored version of an existing asset.</h2>
            </div>
            <div className="ca-step-grid">
              {variantSteps.map((step) => (
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
              <p className="ca-eyebrow">KEEP VARIANTS IN ORDER</p>
              <h2>Manage audience rules and content as your strategy evolves.</h2>
              <p>
                Keep each variation connected to its original asset. Review
                which audience it serves, update its priority when audiences
                overlap, and make content changes in the relevant editor.
              </p>
              <ul>
                <li>Add versions when another audience needs a distinct experience.</li>
                <li>Adjust audience criteria or priority after reviewing results.</li>
                <li>Remove outdated variations so the experience stays clear.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img3.webp"
                alt="A personalized content version in an editing workflow"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">TARGETED PAGES</p>
              <h2>Prepare a dedicated landing page for a selected audience.</h2>
              <p>
                Use a reusable structure, clear instructions, and a careful
                review process to create individual pages that are ready to
                share with the right people.
              </p>
            </div>
            <div className="ca-step-grid">
              {targetedPageSteps.map((step) => (
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
            <div className="ca-detail-visual">
              <img
                src="/images/img5.webp"
                alt="Performance comparison for personalized content"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">ANALYZE AND IMPROVE</p>
              <h2>Use performance data to guide the next iteration.</h2>
              <p>
                Compare each personalized version with its default asset.
                Review views, form submissions, and conversion rates to learn
                which experiences connect with their intended audiences.
              </p>
              <p>
                Use what you learn to refine audience criteria, adjust content,
                and improve future experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="email-callout">
          <div className="ca-container">
            <p className="ca-eyebrow">ACCESS AND AI SETTINGS</p>
            <h2>Check eligibility and permissions before publishing.</h2>
            <p className="lookalike-callout-copy">
              Feature access depends on your subscription and account
              permissions. Review AI settings to understand what information
              may be used when creating content.
            </p>
            <Link to="/personalization">Back to Personalization</Link>
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
            <h2>Build experiences around the audiences you serve.</h2>
            <p>
              Return to Personalization to explore audience-based content and
              performance measurement.
            </p>
            <Link className="ca-button ca-button-primary" to="/personalization">
              Explore Personalization
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default ContentVariants;
