import { useState } from "react";
import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Reach best-fit customers with relevant, timely experiences",
  "Create content variations without rebuilding each asset",
  "Understand impact through engagement and conversion reporting"
];

const resources = [
  {
    title: "Guide to the Personalization App",
    description:
      "See how a shared workspace can help teams organize personalized experiences and review their performance.",
    action: "Read the guide",
    href: "/personalization-app-guide"
  },
  {
    title: "Understanding Content Variants",
    description:
      "Learn how tailored versions of a page or asset can support different audience needs.",
    action: "Read the guide",
    href: "/content-personalization-variants"
  },
  {
    title: "Loop Marketing Playbook",
    description:
      "Bring AI-assisted work and human judgment together to build a consistent brand experience.",
    action: "Explore the playbook",
    href: "/loop-marketing"
  }
];

const questions = [
  {
    question: "What does personalization help marketers do?",
    answer:
      "It helps teams adapt digital content for different audiences using relevant customer context, then review how each experience performs."
  },
  {
    question: "How is this different from older personalization workflows?",
    answer:
      "A connected workflow can bring audience information, content variants, and performance review together instead of relying on separate manual processes."
  },
  {
    question: "Can AI help create personalized content?",
    answer:
      "AI can help draft or adapt content variations. Teams should review the result for accuracy, brand fit, and relevance before publishing."
  },
  {
    question: "Who can benefit from personalization?",
    answer:
      "Marketing teams that serve audiences with different needs can use tailored content to make web experiences more relevant and easier to measure."
  },
  {
    question: "How does personalization relate to segmentation?",
    answer:
      "Segments help define which audiences should receive a variation. Personalization uses that audience context to adapt the experience."
  },
  {
    question: "How should I measure personalization?",
    answer:
      "Choose a goal first, then compare appropriate outcomes such as engagement, conversions, or revenue contribution across experiences."
  }
];

const popularFeatures = [
  {
    title: "Free Online Form Builder",
    description:
      "Collect website leads and connect useful form submissions with your CRM.",
    href: "/form-shortening"
  },
  {
    title: "Email Marketing Tools",
    description:
      "Create and optimize marketing emails for the audiences you want to reach.",
    href: "/ai-powered-emails"
  },
  {
    title: "AI Email Writer",
    description:
      "Draft marketing messages faster with AI-assisted writing tools.",
    href: "/content-agent"
  }
];

function Personalization() {
  const [featureOffset, setFeatureOffset] = useState(0);
  const orderedFeatures = popularFeatures.map(
    (_, index) =>
      popularFeatures[(index + featureOffset) % popularFeatures.length]
  );

  return (
    <>
      <main className="content-agent-page email-marketing-page personalization-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <span>Personalization</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">
                MARKETING HUB · PERSONALIZATION{" "}
                <span className="personalization-beta-badge">BETA</span>
              </p>
              <h1>Make every digital experience feel more relevant.</h1>
              <p className="ca-hero-intro">
                Use customer insights and AI-assisted tools to create tailored
                content, reach the right audiences, and understand what
                improves results.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#request-demo">
                  Get a demo
                </a>
                <a className="ca-button ca-button-secondary" href="#request-demo">
                  Start 14-day free trial
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="Personalized website content and marketing insights"
              />
              <div className="ca-visual-caption">
                <span>PERSONALIZATION · BETA</span>
                <strong>Tailor content and measure its impact</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Personalization benefits">
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
            <p className="ca-eyebrow">BEYOND ONE-SIZE-FITS-ALL</p>
            <h2>Make useful customer context easier to put into action.</h2>
            <p>
              Generic experiences can miss what different visitors need.
              Disconnected data and complex setup can also make tailoring
              content feel difficult. A connected approach helps teams use
              customer information to shape relevant experiences without
              adding unnecessary manual work.
            </p>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">CREATE TAILORED CONTENT</p>
              <h2>Build content variations without starting over.</h2>
              <p>
                Use intuitive editing and AI assistance to adapt a digital
                experience for different audiences. Choose the element that
                needs to change, such as a headline, call to action, or page
                content, and prepare a version that fits the audience.
              </p>
              <ul>
                <li>Adapt selected parts of an existing asset.</li>
                <li>Prepare variations for distinct audience groups.</li>
                <li>Review copy and brand consistency before publishing.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img2.webp"
                alt="Marketing content variations prepared for different audiences"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section email-personalization">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-visual">
              <img
                src="/images/img3.webp"
                alt="Audience data connected to a personalized experience"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">CONNECT AUDIENCE AND EXPERIENCE</p>
              <h2>Use audience context to guide what visitors see.</h2>
              <p>
                Segmentation helps determine which groups may benefit from a
                content variation. Connect audience criteria with the assets
                you want to tailor, and make sure each version serves a clear
                customer need.
              </p>
              <ul>
                <li>Match variations to meaningful audience groups.</li>
                <li>Keep the experience consistent with the customer journey.</li>
                <li>Use customer data responsibly and transparently.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">MEASURE AND IMPROVE</p>
              <h2>Understand which experiences are making a difference.</h2>
              <p>
                Review tailored content from one place and compare results
                against the goal you set. Use views, engagement, conversions,
                and other useful measures to decide what to improve next.
              </p>
              <p>
                Clear reporting helps teams learn from each variation and
                invest in personalization where it creates meaningful value.
              </p>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img5.webp"
                alt="Performance reporting for personalized marketing"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="email-callout" id="request-demo">
          <div className="ca-container">
            <p className="ca-eyebrow">HAVE QUESTIONS?</p>
            <h2>Talk with our team about personalization.</h2>
            <a href="tel:+18884827768">+1 888 482 7768</a>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RELATED RESOURCES</p>
              <h2>Learn more about creating relevant experiences.</h2>
            </div>
            <div className="email-resource-grid">
              {resources.map((resource) => (
                <article className="email-resource-card" key={resource.title}>
                  <h3>
                    <Link to={resource.href}>{resource.title}</Link>
                  </h3>
                  <p>{resource.description}</p>
                  <Link to={resource.href}>
                    {resource.action} <span aria-hidden="true">→</span>
                  </Link>
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

        <section className="ca-section email-popular">
          <div className="ca-container">
            <div className="email-popular-heading">
              <div>
                <p className="ca-eyebrow">MARKETING HUB</p>
                <h2>Explore more popular features.</h2>
                <p>Personalization tools are available in Marketing Hub.</p>
              </div>
              <div className="email-carousel-controls">
                <button
                  type="button"
                  aria-label="Previous popular features"
                  onClick={() =>
                    setFeatureOffset(
                      (featureOffset + popularFeatures.length - 1) %
                        popularFeatures.length
                    )
                  }
                >
                  Previous
                </button>
                <button
                  type="button"
                  aria-label="Next popular features"
                  onClick={() =>
                    setFeatureOffset((featureOffset + 1) % popularFeatures.length)
                  }
                >
                  Next
                </button>
              </div>
            </div>
            <div className="email-resource-grid">
              {orderedFeatures.map((feature) => (
                <article className="email-resource-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link to={feature.href}>
                    Explore feature <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-final-cta">
          <div className="ca-container">
            <p className="ca-eyebrow">MARKETING HUB · PERSONALIZATION</p>
            <h2>Create experiences that connect with your audience.</h2>
            <p>
              Bring audience insight, tailored content, and clear measurement
              together in your marketing workflow.
            </p>
            <Link className="ca-button ca-button-primary" to="/marketing">
              Explore Marketing Hub
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default Personalization;
