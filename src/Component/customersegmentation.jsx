import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const segmentationBenefits = [
  {
    title: "Make outreach more relevant",
    description:
      "Use shared needs and interests to shape messages that matter to each audience."
  },
  {
    title: "Focus campaign effort",
    description:
      "Prioritize groups that fit a specific goal instead of sending every offer to everyone."
  },
  {
    title: "Support the full customer journey",
    description:
      "Give marketing, sales, and service teams better context for their conversations."
  },
  {
    title: "Learn where to improve",
    description:
      "Compare audience responses to find opportunities in campaigns, products, and support."
  }
];

const segmentationModels = [
  {
    title: "Demographic",
    description:
      "Group individuals using suitable profile attributes, such as age range, role, or income band."
  },
  {
    title: "Geographic",
    description:
      "Organize audiences by region or location to account for local needs, language, and context."
  },
  {
    title: "Psychographic",
    description:
      "Consider interests, priorities, values, and lifestyle when those signals are relevant."
  },
  {
    title: "Behavioral",
    description:
      "Use actions such as purchases, product activity, content engagement, or lifecycle events."
  },
  {
    title: "Technographic",
    description:
      "For relevant offers, group organizations or users by the technologies and tools they use."
  },
  {
    title: "Needs-based",
    description:
      "Focus on the problems customers are trying to solve and the outcomes they value."
  },
  {
    title: "Value-based",
    description:
      "Compare customer value signals to make thoughtful decisions about service and retention."
  },
  {
    title: "Firmographic",
    description:
      "For B2B marketing, group accounts by company traits such as industry, size, or growth stage."
  }
];

const segmentationSteps = [
  {
    number: "01",
    label: "SET A GOAL",
    title: "Decide what you want to improve.",
    description:
      "Choose an outcome such as stronger engagement, better retention, or more useful campaign targeting."
  },
  {
    number: "02",
    label: "PRIORITIZE",
    title: "Start with a manageable use case.",
    description:
      "Pick one audience opportunity with clear value before adding more segments and complexity."
  },
  {
    number: "03",
    label: "GATHER",
    title: "Bring relevant customer signals together.",
    description:
      "Use appropriate CRM, website, purchase, or feedback data. Check that it is accurate and current."
  },
  {
    number: "04",
    label: "DEFINE",
    title: "Create clear, usable groups.",
    description:
      "Set criteria that distinguish customers with meaningful shared needs, behaviors, or attributes."
  },
  {
    number: "05",
    label: "ACTIVATE",
    title: "Apply segments where they help.",
    description:
      "Adapt campaigns, customer support, or sales follow-up to the purpose of each group."
  },
  {
    number: "06",
    label: "MEASURE",
    title: "Learn and refine over time.",
    description:
      "Compare results with your goal, update changing data, and retire segments that no longer help."
  }
];

const questions = [
  {
    question: "What is customer segmentation?",
    answer:
      "It is a way to organize existing customers into groups with meaningful similarities so teams can make more relevant decisions and communications."
  },
  {
    question: "How is customer segmentation different from audience or market segmentation?",
    answer:
      "Customer segmentation focuses on people or accounts already connected to a business. Audience segmentation can include broader campaign audiences, while market segmentation helps assess groups in the wider market."
  },
  {
    question: "What data should I use?",
    answer:
      "Choose only accurate, appropriate information that supports your goal. Depending on your business, this could include preferences, interactions, lifecycle signals, or company attributes."
  },
  {
    question: "How many customer segments should I create?",
    answer:
      "Begin with a small number that your team can understand and use. Add detail only when it leads to a better experience or decision."
  },
  {
    question: "How do I know if a segment is working?",
    answer:
      "Measure outcomes tied to its purpose, such as engagement, conversion, retention, or service quality, then adjust the group and the experience."
  }
];

function CustomerSegmentation() {
  return (
    <>
      <main className="content-agent-page customer-segmentation-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <Link to="/lookalike-lists">Lookalike Lists</Link>
          <span aria-hidden="true">›</span>
          <span>Customer Segmentation Guide</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING GUIDE · AUDIENCE STRATEGY</p>
              <h1>Customer Segmentation Guide</h1>
              <p className="ca-hero-intro">
                Group customers around meaningful needs and behaviors to make
                marketing, sales, and service experiences more relevant.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#guide">
                  Explore the guide
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img2.webp"
                alt="Customer groups organized for marketing"
              />
              <div className="ca-visual-caption">
                <span>CUSTOMER SEGMENTATION</span>
                <strong>Turn customer understanding into relevant outreach</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-section email-intro" id="guide">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">A PRACTICAL STARTING POINT</p>
            <h2>Make each audience group useful to your customers and your team.</h2>
            <p>
              Segmentation moves beyond one message for everyone. Start with a
              customer or business need, use suitable signals to define a
              group, and create an experience that fits its purpose.
            </p>
          </div>
        </section>

        <section className="ca-section ca-agents">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">WHY SEGMENT?</p>
              <h2>Turn customer understanding into better decisions.</h2>
            </div>
            <div className="email-resource-grid">
              {segmentationBenefits.map((benefit) => (
                <article className="email-resource-card" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">COMMON SEGMENTATION MODELS</p>
              <h2>Choose a lens that fits your question.</h2>
              <p>
                Different models reveal different aspects of a customer
                relationship. Combine them only when doing so helps your team
                make a clearer decision.
              </p>
            </div>
            <div className="email-resource-grid">
              {segmentationModels.map((model) => (
                <article className="email-resource-card" key={model.title}>
                  <h3>{model.title}</h3>
                  <p>{model.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-personalization">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">A SIX-STEP APPROACH</p>
              <h2>Build segments your team can actually put to work.</h2>
            </div>
            <div className="ca-step-grid">
              {segmentationSteps.map((step) => (
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

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">DATA AND CUSTOMER TRUST</p>
              <h2>Keep your audience information useful and responsible.</h2>
              <p>
                Bring relevant information together, resolve duplicates, and
                keep important fields up to date before using them to define
                groups. Respect customer consent, privacy requirements, and
                communication preferences at every step.
              </p>
              <ul>
                <li>Collect only information that supports a clear purpose.</li>
                <li>Check for gaps, outdated records, and inconsistent values.</li>
                <li>Review segment membership as customer information changes.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img3.webp"
                alt="Customer information organized for relevant experiences"
                loading="lazy"
              />
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
            <h2>Put audience insights to work.</h2>
            <p>
              Explore Lookalike Lists and other Marketing Hub tools for
              organizing and reaching your audiences.
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

export default CustomerSegmentation;
