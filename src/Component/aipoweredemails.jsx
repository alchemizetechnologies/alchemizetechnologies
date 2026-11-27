import { useState } from "react";
import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Generate branded emails instantly to save hours and focus on strategy",
  "Create unique content for every recipient — no coding required",
  "Maximize engagement with AI that predicts optimal timing and targeting"
];

const questions = [
  {
    question: "How does AI-powered email work?",
    answer:
      "It uses your CRM data and an email brief to generate branded drafts, personalize content for contacts, and recommend when to send."
  },
  {
    question: "Can I upload my email designs from anywhere?",
    answer:
      "Yes. You can provide an existing email design as a reference and use AI to recreate it as an editable email."
  },
  {
    question: "Who is AI-powered email for?",
    answer:
      "It is for marketing teams that want to create and personalize emails faster while keeping their brand and customer data connected."
  },
  {
    question: "What problems does AI-powered email solve?",
    answer:
      "It helps reduce repetitive email production, makes one-to-one personalization easier, and provides clearer guidance on audience and timing."
  },
  {
    question: "How is AI-powered email different from regular email tools?",
    answer:
      "It can use CRM context to generate recipient-specific content and offer data-informed recommendations instead of relying only on manual templates and broad segments."
  },
  {
    question: "How much does AI-powered email cost?",
    answer:
      "Availability and pricing depend on your Marketing Hub plan. Contact our team for details about the options available to your business."
  }
];

const popularFeatures = [
  {
    title: "Free Online Form Builder",
    description:
      "Fill your CRM with leads from your website using a powerful online form builder.",
    href: "/form-shortening"
  },
  {
    title: "Email Marketing Tools",
    description:
      "Create, personalize, and optimize marketing emails without waiting on designers or IT.",
    href: "/marketing"
  },
  {
    title: "AI Email Writer",
    description:
      "Write emails in a fraction of the time using AI-powered writing tools.",
    href: "/content-agent"
  }
];

function AIPoweredEmails() {
  const [featureOffset, setFeatureOffset] = useState(0);
  const orderedFeatures = popularFeatures.map(
    (_, index) =>
      popularFeatures[(index + featureOffset) % popularFeatures.length]
  );

  return (
    <>
      <main className="content-agent-page email-marketing-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <span>AI-Powered Email</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING HUB · AI-POWERED EMAIL</p>
              <h1>AI-powered email turns manual work into strategic value.</h1>
              <p className="ca-hero-intro">
                Forget everything you know about email creation. AI handles the
                heavy lifting — generating audiences, personalizing content,
                and optimizing delivery — while you focus on strategy.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#get-started">
                  Get a demo
                </a>
                <a className="ca-button ca-button-secondary" href="#get-started">
                  Start 14-day free trial
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="AI-powered email creation and marketing tools"
              />
              <div className="ca-visual-caption">
                <span>AI-POWERED EMAIL</span>
                <strong>From a brief to a branded email draft</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="AI-powered email benefits">
          <div className="ca-container email-benefit-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit}>
                <span>{`0${index + 1}`}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ca-section email-intro" id="email-details">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">WORK SMARTER WITH EVERY SEND</p>
            <h2>
              This isn’t just faster email marketing; it’s a new way to engage
              and convert customers.
            </h2>
            <p>
              Bring unified customer data and AI-driven insights into your
              email workflow. Spend less time on manual production and more
              time on the strategy behind every send.
            </p>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">CREATE WITH AI</p>
              <h2>Intuitive tools simplify content creation.</h2>
              <p>
                Go from idea to inbox in minutes. Tell AI what you want to say
                and get complete branded email drafts, including the template,
                subject line, body copy, and imagery.
              </p>
              <p>
                Already have a design from another platform? AI can recreate
                it as an editable email without rebuilding it from scratch.
                Eliminate hours of manual creation work.
              </p>
              <a className="email-inline-link" href="#get-started">
                Get started with AI email
              </a>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img2.webp"
                alt="A branded email draft created with AI"
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
                alt="Email content personalized with customer information"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">PERSONALIZE AT SCALE</p>
              <h2>AI-powered email delivers personalization at scale.</h2>
              <p>
                No coding skills? No problem. Move beyond basic merge tags to
                generate unique content for every recipient using unified CRM
                data automatically.
              </p>
              <p>
                Each email can adapt to its recipient using contact and company
                information like demographics, industries, and other stored
                properties.
              </p>
              <ul>
                <li>Create tailored content for every recipient.</li>
                <li>Use contact and company context from your CRM.</li>
                <li>Keep your brand voice consistent at scale.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">OPTIMIZE EVERY CAMPAIGN</p>
              <h2>Data-driven insights eliminate marketing guesswork.</h2>
              <p>
                Stop playing email roulette with send times and audience
                targeting. AI predicts which contacts are likely to engage and
                recommends optimal send times for each recipient.
              </p>
              <p>
                After each send, get performance summaries that spot anomalies,
                show what’s working, and suggest what to change — without
                spreadsheet analysis.
              </p>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img5.webp"
                alt="Email performance insights and campaign analytics"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="email-callout">
          <div className="ca-container">
            <p className="ca-eyebrow">HAVE QUESTIONS?</p>
            <h2>Talk with our team. We’re here to help.</h2>
            <a href="tel:+18884827768">+1 888 482 7768</a>
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
                <p>AI-powered email is part of Marketing Hub.</p>
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

        <section className="ca-final-cta" id="get-started">
          <div className="ca-container">
            <p className="ca-eyebrow">MARKETING HUB · AI-POWERED EMAIL</p>
            <h2>Make every email more personal — and every hour more productive.</h2>
            <p>
              Create branded emails, reach the right audience, and optimize
              every send with CRM data and AI.
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

export default AIPoweredEmails;
