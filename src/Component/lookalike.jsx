import { useState } from "react";
import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Spot promising prospects who share traits with your best customers",
  "Build audiences from contact lists with AI-assisted insights",
  "Use focused segments to shape more relevant campaigns"
];

const questions = [
  {
    question: "What do lookalike lists help marketers do?",
    answer:
      "They help identify contacts who share patterns with a selected group, such as engaged customers, so teams can find potential audiences for future campaigns."
  },
  {
    question: "Where can lookalike audiences be used?",
    answer:
      "Depending on your tools and permissions, audience segments can inform campaigns across channels such as email, advertising, and other marketing workflows."
  },
  {
    question: "Can I customize how a lookalike list is created?",
    answer:
      "Start with a source list that represents the audience you want to learn from. The contacts and properties available in that list shape the resulting recommendations."
  },
  {
    question: "How are lookalike lists different from manual segmentation?",
    answer:
      "Manual segments depend on filters a marketer defines. Lookalike discovery can help surface shared patterns in a source audience and suggest whom to consider next."
  },
  {
    question: "How do I use lookalike lists in a campaign?",
    answer:
      "Review the suggested audience, confirm it fits your campaign goal and consent requirements, then use the segment in an appropriate marketing workflow."
  }
];

const popularFeatures = [
  {
    title: "Free Online Form Builder",
    description:
      "Collect website leads and bring useful form submissions into your CRM.",
    href: "/form-shortening"
  },
  {
    title: "Email Marketing Tools",
    description:
      "Create and personalize marketing emails for the audiences you want to reach.",
    href: "/ai-powered-emails"
  },
  {
    title: "AI Email Writer",
    description:
      "Draft marketing messages faster with AI-assisted writing tools.",
    href: "/content-agent"
  }
];

function LookalikeLists() {
  const [featureOffset, setFeatureOffset] = useState(0);
  const orderedFeatures = popularFeatures.map(
    (_, index) =>
      popularFeatures[(index + featureOffset) % popularFeatures.length]
  );

  return (
    <>
      <main className="content-agent-page email-marketing-page lookalike-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <span>Lookalike Lists</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">
                MARKETING HUB · LOOKALIKE LISTS{" "}
                <span className="lookalike-beta-badge">BETA</span>
              </p>
              <h1>Find new audiences that resemble your best customers.</h1>
              <p className="ca-hero-intro">
                Use AI-assisted audience insights to discover high-potential
                contacts in your lists and shape more relevant campaigns.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#request-beta">
                  Request beta
                </a>
              </div>
              <p className="ca-hero-note">
                Build on the customer relationships and engagement you already
                understand.
              </p>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="Marketing audience insights and contact segments"
              />
              <div className="ca-visual-caption">
                <span>LOOKALIKE LISTS · BETA</span>
                <strong>Discover audiences from your best contacts</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Lookalike list benefits">
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
            <p className="ca-eyebrow">AUDIENCE INSIGHTS</p>
            <h2>Make it easier to find the next customers to engage.</h2>
            <p>
              Manual list building can take time and make useful patterns hard
              to spot. Lookalike audience insights help teams explore
              characteristics shared by a selected contact group and find
              similar prospects already present in their data.
            </p>
          </div>
        </section>

        <section className="ca-proof-strip lookalike-proof">
          <div className="ca-container lookalike-proof-content">
            <strong>311,000+</strong>
            <p>customers in more than 135 countries grow with HubSpot.</p>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">DISCOVER SHARED TRAITS</p>
              <h2>Bring useful audience patterns into view.</h2>
              <p>
                AI-supported analysis can review an existing contact group to
                help uncover traits and behaviors its members have in common.
                Use those observations to explore potential prospects across
                your available contact lists.
              </p>
              <ul>
                <li>Start from a list of customers or engaged contacts.</li>
                <li>Surface patterns that may be useful for targeting.</li>
                <li>Review audience suggestions before using them.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img2.webp"
                alt="Contact segments organized for a marketing campaign"
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
                alt="Customer information used to plan a targeted audience"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">SEGMENT WITH LESS MANUAL WORK</p>
              <h2>Build on what has already worked.</h2>
              <p>
                Choose a contact list that reflects a valuable audience.
                Lookalike discovery can use shared signals from that group to
                suggest additional contacts for your team to review.
              </p>
              <p>
                Use the resulting segments as a starting point for campaign
                planning, while keeping your audience criteria and business
                context in mind.
              </p>
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">REACH THE RIGHT PEOPLE</p>
              <h2>Make audience insights useful across campaigns.</h2>
              <p>
                Apply a carefully reviewed segment to relevant marketing
                efforts. An audience that resembles your engaged customers can
                help your team prioritize whom to reach with helpful, tailored
                messaging.
              </p>
              <ul>
                <li>Align each segment with a specific campaign goal.</li>
                <li>Adapt messaging to the audience and channel.</li>
                <li>Measure engagement and refine your approach.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img5.webp"
                alt="Marketing campaign performance and audience insights"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RELATED RESOURCES</p>
              <h2>Explore more ways to understand and reach your audience.</h2>
            </div>
            <div className="email-resource-grid">
              <article className="email-resource-card">
                <h3>
                  <Link to="/customer-segmentation">
                    Customer Segmentation Guide
                  </Link>
                </h3>
                <p>
                  Learn practical ways to organize audiences around useful
                  customer attributes and goals.
                </p>
                <Link to="/customer-segmentation">
                  Read the guide <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="email-resource-card">
                <h3>
                  <Link to="/create-and-use-lists">Create and Use Lists</Link>
                </h3>
                <p>
                  Explore how contact lists can support planning and audience
                  management for your campaigns.
                </p>
                <Link to="/create-and-use-lists">
                  Learn about lists <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="email-resource-card">
                <h3>
                  <Link to="/tips-finding-audience">
                    Tips for Finding Your Target Audience
                  </Link>
                </h3>
                <p>
                  Consider useful approaches for understanding and connecting
                  with the people you want to reach.
                </p>
                <Link to="/tips-finding-audience">
                  Explore audience tips <span aria-hidden="true">→</span>
                </Link>
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

        <section className="ca-section email-popular">
          <div className="ca-container">
            <div className="email-popular-heading">
              <div>
                <p className="ca-eyebrow">MARKETING HUB</p>
                <h2>Explore more popular features.</h2>
                <p>Lookalike Lists is available in Marketing Hub.</p>
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

        <section className="email-callout" id="request-beta">
          <div className="ca-container">
            <p className="ca-eyebrow">LOOKALIKE LISTS · BETA</p>
            <h2>Interested in trying lookalike audience insights?</h2>
            <p className="lookalike-callout-copy">
              Talk to our team about beta availability and how it could fit
              your marketing workflow.
            </p>
            <a href="tel:+18884827768">+1 888 482 7768</a>
          </div>
        </section>

        <section className="ca-final-cta">
          <div className="ca-container">
            <p className="ca-eyebrow">MARKETING HUB</p>
            <h2>Turn customer understanding into better targeting.</h2>
            <p>
              Explore the tools that help your team plan, personalize, and
              improve marketing campaigns.
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

export default LookalikeLists;
