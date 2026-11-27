import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Connect customer touchpoints to closed revenue",
  "Find efficient paths from first interaction to conversion",
  "Use journey insights to guide marketing investment"
];

const capabilities = [
  {
    id: "revenue-attribution",
    eyebrow: "MULTI-TOUCH REVENUE ATTRIBUTION",
    title: "Understand how marketing contributes to closed revenue.",
    description:
      "Look across the interactions that happen before a deal closes, rather than relying on a single first or last touch. Use a broader view to understand where campaigns support progress and where investment may have a stronger business impact.",
    points: [
      "Compare how channels and campaigns assist conversions.",
      "Connect marketing interactions with sales outcomes.",
      "Use revenue contribution to inform budget decisions."
    ],
    image: "/images/img1.webp",
    alt: "Marketing touchpoints and revenue results shown in a report"
  },
  {
    id: "journey-analytics",
    eyebrow: "CUSTOMER JOURNEY ANALYTICS",
    title: "See how customer interactions connect over time.",
    description:
      "Map the sequence of touchpoints people encounter during longer buying cycles. Review conversion patterns and the time between interactions to find where the experience is working and where it could improve.",
    points: [
      "Visualize common paths through marketing and sales touchpoints.",
      "Compare conversion rates at important journey stages.",
      "Use journey patterns to improve customer experiences."
    ],
    image: "/AlchemizeCustomerPlatform/f.webp",
    alt: "A customer journey represented across marketing stages"
  },
  {
    id: "campaign-performance",
    eyebrow: "REPORTS THAT SUPPORT OPTIMIZATION",
    title: "Bring attribution and campaign measures together.",
    description:
      "Use reporting views to monitor important indicators and compare campaign performance. Add relevant customer or product interactions to your analysis where your reporting setup supports them.",
    points: [
      "Review key campaign measures in one reporting workflow.",
      "Connect relevant customer events with journey analysis.",
      "Use AI-assisted summaries to help explore trends and questions."
    ],
    image: "/images/img3.webp",
    alt: "Campaign performance reporting across marketing activities"
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
    question: "What is multi-touch revenue attribution?",
    answer:
      "It is an approach to understanding how multiple marketing and sales interactions contribute to a conversion or closed deal, rather than assigning all credit to a single touchpoint."
  },
  {
    question: "How can attribution help prove marketing ROI?",
    answer:
      "Attribution can connect campaign activity with pipeline and revenue outcomes, helping teams evaluate contribution and make more informed investment decisions."
  },
  {
    question: "How can journey analytics help reduce acquisition costs?",
    answer:
      "Journey analysis can reveal which paths are associated with stronger conversion and where friction may exist. Teams can use those findings to prioritize improvements and spend."
  },
  {
    question: "What can customer journey reports include?",
    answer:
      "Depending on the available data, reports may show touchpoint sequences, stage conversions, time between interactions, and how outcomes vary across customer paths."
  },
  {
    question: "Can I analyze custom events?",
    answer:
      "If your reporting setup captures relevant product or customer actions, those events may help add context to funnel and journey analysis. Available options depend on your tools and account."
  },
  {
    question: "Who benefits from advanced marketing reporting?",
    answer:
      "Marketing, sales, and revenue teams can use connected reporting to understand performance together and align decisions around shared business outcomes."
  }
];

function AdvancedMarketingReport() {
  return (
    <>
      <main className="content-agent-page advanced-marketing-report-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">
                MARKETING HUB · ADVANCED MARKETING REPORTING
              </p>
              <h1>Show how marketing helps move revenue forward.</h1>
              <p className="ca-hero-intro">
                Connect marketing touchpoints with customer journeys and
                business outcomes to understand what contributes to growth and
                where your team can improve.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#get-started">
                  Get a demo
                </a>
                <Link
                  className="ca-button ca-button-secondary"
                  to="/marketing-analytics"
                >
                  Explore Marketing Analytics
                </Link>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="Marketing attribution and customer journey analytics"
              />
              <div className="ca-visual-caption">
                <span>ATTRIBUTION · JOURNEYS · REVENUE</span>
                <strong>Understand the impact of every interaction</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Reporting outcomes">
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
            <p className="ca-eyebrow">GO BEYOND FIRST AND LAST TOUCH</p>
            <h2>Make the connection between campaigns and business impact.</h2>
            <p>
              Marketing teams need more than activity counts to explain
              performance. Connected attribution and journey analysis can
              reveal how touchpoints work together, which paths are associated
              with conversion, and where future effort may have the greatest
              impact.
            </p>
          </div>
        </section>

        {capabilities.map((capability) => (
          <section
            className="ca-section email-detail-section"
            id={capability.id}
            key={capability.id}
          >
            <div className="ca-container ca-detail-layout">
              <div className="ca-detail-copy">
                <p className="ca-eyebrow">{capability.eyebrow}</p>
                <h2>{capability.title}</h2>
                <p>{capability.description}</p>
                <ul>
                  {capability.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="ca-detail-visual">
                <img
                  src={capability.image}
                  alt={capability.alt}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        ))}

        <section className="ca-section na-testimonial">
          <div className="ca-container na-testimonial-layout">
            <div>
              <p className="ca-eyebrow">CUSTOMER STORY · SCHELLMAN</p>
              <h2 className="na-quote">
                Clearer attribution can help teams explain marketing’s
                contribution and make more confident decisions.
              </h2>
              <p className="na-attribution">
                <strong>Schellman</strong>
                <span>Customer reporting story</span>
              </p>
            </div>
            <div className="na-customer-mark">
              <span>JOURNEY INSIGHTS</span>
              <span>REVENUE VISIBILITY</span>
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
                <p className="ca-eyebrow">POPULAR FEATURES IN MARKETING HUB</p>
                <h2>Explore tools that support your campaigns.</h2>
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

        <section className="ca-final-cta" id="get-started">
          <div className="ca-container">
            <p className="ca-eyebrow">ADVANCED MARKETING REPORTING</p>
            <h2>Make your next investment decision with more context.</h2>
            <p>
              Bring attribution, customer journeys, and campaign reporting
              together to understand what is driving results.
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

export default AdvancedMarketingReport;