import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Connect campaign activity with customer outcomes",
  "Understand website traffic and conversion quality",
  "Review channel reports in a shared dashboard"
];

const analyticsSections = [
  {
    id: "customer-lifecycle",
    eyebrow: "CUSTOMER LIFECYCLE ANALYTICS",
    title: "Understand how marketing contributes to revenue.",
    description:
      "Bring customer and campaign information together to follow interactions across the journey. Use the resulting view to identify patterns, understand which touchpoints support conversion, and make better-informed decisions.",
    points: [
      "Review marketing activity alongside CRM outcomes.",
      "Compare how customer touchpoints contribute to conversions.",
      "Use lifecycle insights to guide follow-up and campaign planning."
    ],
    image: "/images/img1.webp",
    alt: "Marketing performance information arranged in a shared dashboard"
  },
  {
    id: "website-analytics",
    eyebrow: "WEBSITE PERFORMANCE",
    title: "See how visitors use your website.",
    description:
      "Measure site visits and the actions people take across important pages. Compare traffic sources, sessions, and conversion activity to see where your website is helping customers move forward.",
    points: [
      "Review traffic trends and the sources bringing visitors to your site.",
      "Compare engagement and conversion activity across pages.",
      "Use visitor behavior to identify opportunities to improve the experience."
    ],
    image: "/AlchemizeCustomerPlatform/f.webp",
    alt: "Website content and marketing activity being reviewed"
  },
  {
    id: "channel-reports",
    eyebrow: "CHANNEL REPORTING",
    title: "Bring campaign reports into one view.",
    description:
      "Review performance across the marketing assets your team uses, including email, web, blog, and social content. Save useful reports to a dashboard so the metrics that matter stay easy to find.",
    points: [
      "Compare results across campaigns and marketing channels.",
      "Add relevant reports to a shared dashboard.",
      "Use consistent reporting to guide your next campaign decision."
    ],
    image: "/images/img3.webp",
    alt: "Campaign reporting across digital marketing channels"
  }
];

const relatedResources = [
  {
    title: "Marketing analytics fundamentals",
    description:
      "Learn how choosing relevant measures helps explain the impact of your marketing work.",
    action: "Explore analytics",
    href: "#analytics-capabilities"
  },
  {
    title: "Web analytics and digital marketing",
    description:
      "Connect website activity with business goals and use the findings to improve your digital strategy.",
    action: "Explore web analytics",
    href: "/web-analytics"
  },
  {
    title: "Understand your campaign reports",
    description:
      "Use channel reporting to see how individual assets contribute to your wider marketing goals.",
    action: "Explore campaign reports",
    href: "/campaign-reports"
  }
];

const popularFeatures = [
  {
    title: "Free Online Form Builder",
    description:
      "Collect useful information from website visitors and connect submissions with your CRM.",
    href: "/form-shortening"
  },
  {
    title: "Email Marketing Tools",
    description:
      "Create and improve email campaigns for the audiences you want to reach.",
    href: "/ai-powered-emails"
  },
  {
    title: "AI Email Writer",
    description:
      "Use AI-assisted writing to get marketing email drafts started faster.",
    href: "/content-agent"
  }
];

const questions = [
  {
    question: "What are marketing analytics?",
    answer:
      "Marketing analytics are the measures and reports teams use to understand how campaigns, channels, and website experiences perform against their goals."
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "Setup time depends on your tracking configuration, connected data, reporting needs, and the number of channels you want to measure."
  },
  {
    question: "What are the benefits of a digital marketing dashboard?",
    answer:
      "A dashboard brings selected measures into one view, making it easier to monitor trends, share results, and decide where further analysis is needed."
  },
  {
    question: "How much does marketing analytics software cost?",
    answer:
      "Features and pricing depend on the Marketing Hub plan and its included reporting tools. Check current plan details for availability."
  },
  {
    question: "Which KPIs should a marketing dashboard include?",
    answer:
      "Choose measures that match your goals. Teams commonly track qualified traffic, conversions, engagement, pipeline contribution, and revenue outcomes."
  },
  {
    question: "How does marketing analytics support Loop Marketing?",
    answer:
      "Analytics supports the Evolve stage by showing what happened, helping teams learn from results, and informing what to test in the next cycle."
  }
];

function MarketingAnalytics() {
  return (
    <>
      <main className="content-agent-page marketing-analytics-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING HUB · MARKETING ANALYTICS</p>
              <h1>Measure marketing performance in one connected view.</h1>
              <p className="ca-hero-intro">
                Understand how campaigns, website activity, and channel
                performance contribute to your marketing goals with reports and
                dashboards built around your customer data.
              </p>
              <div className="ca-actions">
                <Link
                  className="ca-button ca-button-primary"
                  to="/marketing"
                >
                  Explore Marketing Hub
                </Link>
                <a
                  className="ca-button ca-button-secondary"
                  href="#analytics-capabilities"
                >
                  Explore analytics
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="A marketing analytics dashboard with campaign results"
              />
              <div className="ca-visual-caption">
                <span>MARKETING ANALYTICS</span>
                <strong>From channel activity to customer outcomes</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Analytics benefits">
          <div className="ca-container email-benefit-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit}>
                <span>{`0${index + 1}`}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ca-section email-intro" id="analytics-capabilities">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">MAKE DATA EASIER TO USE</p>
            <h2>Turn scattered marketing information into useful insight.</h2>
            <p>
              When campaign data sits in separate systems, it can be difficult
              to understand what is working. Connect the measures your team
              needs, review them together, and use the findings to make
              informed decisions about your next move.
            </p>
          </div>
        </section>

        {analyticsSections.map((section) => (
          <section
            className="ca-section email-detail-section"
            id={section.id}
            key={section.id}
          >
            <div className="ca-container ca-detail-layout">
              <div className="ca-detail-copy">
                <p className="ca-eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="ca-detail-visual">
                <img src={section.image} alt={section.alt} loading="lazy" />
              </div>
            </div>
          </section>
        ))}

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RELATED RESOURCES</p>
              <h2>Build confidence in your marketing decisions.</h2>
              <p>
                Explore practical ways to review performance and turn metrics
                into next steps.
              </p>
            </div>
            <div className="email-resource-grid">
              {relatedResources.map((resource) => (
                <article className="email-resource-card" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.href}>{resource.action}</a>
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
                <h2>Explore more marketing tools.</h2>
              </div>
              <Link to="/marketing">All Marketing Hub features</Link>
            </div>
            <div className="email-resource-grid">
              {popularFeatures.map((feature) => (
                <article className="email-resource-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link to={feature.href}>Learn more</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-final-cta">
          <div className="ca-container">
            <p className="ca-eyebrow">MARKETING ANALYTICS</p>
            <h2>Make your next marketing decision with clearer data.</h2>
            <p>
              Bring campaign, website, and channel performance together to see
              what to improve next.
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

export default MarketingAnalytics;