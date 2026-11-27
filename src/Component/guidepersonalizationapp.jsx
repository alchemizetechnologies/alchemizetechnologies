import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const personalizationTypes = [
  {
    title: "Personalized variants",
    description:
      "Prepare alternate versions of a page or call to action. Visitors see the version that matches the audience criteria you set."
  },
  {
    title: "Targeted pages",
    description:
      "Create a dedicated landing-page experience with its own link for a selected contact or company audience."
  }
];

const setupSteps = [
  {
    number: "01",
    label: "CHOOSE A FORMAT",
    title: "Decide how the audience will reach the content.",
    description:
      "Use variants for visitors arriving on their own, or a targeted page when you plan to send a specific link directly."
  },
  {
    number: "02",
    label: "SELECT AN ASSET",
    title: "Start from a page or call to action.",
    description:
      "Create a variation in the personalization workspace or from a supported asset editor to keep the work in context."
  },
  {
    number: "03",
    label: "DEFINE THE AUDIENCE",
    title: "Set and review who should see each version.",
    description:
      "Use suitable audience criteria, adjust priorities when groups overlap, and confirm the content fits the intended visitors."
  },
  {
    number: "04",
    label: "PUBLISH AND REVIEW",
    title: "Check results and refine the experience.",
    description:
      "Compare views, submissions, and conversions against the default content, then use what you learn to improve the next version."
  }
];

const questions = [
  {
    question: "What is the personalization app used for?",
    answer:
      "It helps teams plan, create, manage, and evaluate tailored page, landing-page, and call-to-action experiences for specific audiences."
  },
  {
    question: "When should I use variants instead of targeted pages?",
    answer:
      "Use variants when visitors can be matched to an audience automatically. Use a targeted page when you want to send a distinct link to a selected person or company."
  },
  {
    question: "Can I create a variation while editing a page?",
    answer:
      "For supported assets, personalization can be started within the editor so you can work on the original and its variations together."
  },
  {
    question: "How do I measure a personalized experience?",
    answer:
      "Compare useful outcomes for each version, such as views, form submissions, and conversion rate. Use the results to decide whether to keep or revise the variation."
  },
  {
    question: "What should I check before using AI assistance?",
    answer:
      "Review account AI settings, permissions, and the information shared with AI features. Check generated content for accuracy and brand fit before publishing."
  },
  {
    question: "Does every account have access to personalization?",
    answer:
      "Availability depends on the subscription, account permissions, and feature rollout. Confirm access in your account before planning a launch."
  }
];

function GuidePersonalizationApp() {
  return (
    <>
      <main className="content-agent-page personalization-guide-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <Link to="/personalization">Personalization</Link>
          <span aria-hidden="true">›</span>
          <span>Guide to the Personalization App</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">PERSONALIZATION · QUICK GUIDE</p>
              <h1>Guide to the Personalization App</h1>
              <p className="ca-hero-intro">
                Learn the difference between personalized variants and
                targeted pages, how to set up an experience, and what to review
                after it goes live.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#personalization-types">
                  Explore the guide
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img2.webp"
                alt="Website content prepared for different audiences"
              />
              <div className="ca-visual-caption">
                <span>PERSONALIZATION</span>
                <strong>Plan, create, and measure tailored experiences</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-section email-intro" id="personalization-types">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">PICK THE RIGHT EXPERIENCE</p>
            <h2>Choose how your audience should encounter personalized content.</h2>
            <p>
              Personalization tools can help tailor website pages, landing
              pages, and calls to action. The best setup depends on whether
              people arrive on their own or receive a link directly.
            </p>
          </div>
        </section>

        <section className="ca-section ca-agents">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">TWO WAYS TO PERSONALIZE</p>
              <h2>Match the format to how you plan to reach people.</h2>
            </div>
            <div className="email-resource-grid">
              {personalizationTypes.map((type) => (
                <article className="email-resource-card" key={type.title}>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">A SIMPLE WORKFLOW</p>
              <h2>Set up an experience, then learn from its results.</h2>
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

        <section className="ca-section email-personalization">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">WORK IN THE ASSET EDITOR</p>
              <h2>Create a variation while editing supported content.</h2>
              <p>
                When the option is available in an asset editor, start a
                variation alongside the original page or call to action.
                Review the audience rules and preview each version before
                publishing.
              </p>
              <ul>
                <li>Keep the original content as a useful baseline.</li>
                <li>Change only the parts that matter to the audience.</li>
                <li>Check each version on the devices your visitors use.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img3.webp"
                alt="A marketing page variation being prepared for review"
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
                alt="Performance data for personalized content variants"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">MEASURE WHAT MATTERS</p>
              <h2>Compare variations with the default experience.</h2>
              <p>
                Review each version’s views, submissions, and conversion
                performance. Use the comparison to understand which content
                connects with its intended audience and where another test may
                help.
              </p>
              <p>
                Keep goals consistent when evaluating versions so your team
                can make clear, evidence-informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="email-callout">
          <div className="ca-container">
            <p className="ca-eyebrow">AI AND ACCOUNT SETTINGS</p>
            <h2>Review access and data settings before using AI features.</h2>
            <p className="lookalike-callout-copy">
              Check your account permissions and AI controls, and review
              generated content before it goes live.
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
            <h2>Build experiences around the people you want to reach.</h2>
            <p>
              Return to Personalization to explore tailored content and
              measurement options.
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

export default GuidePersonalizationApp;
