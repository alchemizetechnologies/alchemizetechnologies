import { useState } from "react";
import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Reach your audience instantly on mobile",
  "Drive purchase decisions with timely messages",
  "Manage consent and compliance automatically through workflows"
];

const questions = [
  {
    question: "How does SMS marketing help businesses?",
    answer:
      "SMS gives businesses a direct way to share timely promotions, reminders, product updates, and other relevant messages with opted-in customers."
  },
  {
    question: "How can I measure the success of SMS campaigns?",
    answer:
      "Track delivery, engagement, replies, link activity, and the conversions tied to each campaign to understand what is working."
  },
  {
    question: "Who is eligible for SMS marketing?",
    answer:
      "Businesses with permission to message their contacts can use SMS marketing, subject to applicable regulations and the requirements of their messaging provider."
  },
  {
    question: "Do contacts need to opt in to receive SMS?",
    answer:
      "Yes. Get and record the appropriate consent before sending marketing texts, and honor opt-outs promptly."
  },
  {
    question: "What are some common use cases for SMS marketing?",
    answer:
      "Common uses include time-sensitive offers, event updates, appointment reminders, product launches, and helpful follow-ups."
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
    href: "/ai-powered-emails"
  },
  {
    title: "AI Email Writer",
    description:
      "Write emails in a fraction of the time using AI-powered writing tools.",
    href: "/content-agent"
  }
];

function MobileMessaging() {
  const [featureOffset, setFeatureOffset] = useState(0);
  const orderedFeatures = popularFeatures.map(
    (_, index) =>
      popularFeatures[(index + featureOffset) % popularFeatures.length]
  );

  return (
    <>
      <main className="content-agent-page email-marketing-page sms-marketing-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <span>SMS Marketing</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING HUB · SMS MARKETING</p>
              <h1>SMS marketing connects you with customers on mobile.</h1>
              <p className="ca-hero-intro">
                Use CRM data to personalize text conversations and send timely,
                relevant messages to your customers.
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
                alt="Mobile messaging campaign in a marketing workspace"
              />
              <div className="ca-visual-caption">
                <span>SMS MARKETING</span>
                <strong>Timely, personal conversations on mobile</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="SMS marketing benefits">
          <div className="ca-container email-benefit-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit}>
                <span>{`0${index + 1}`}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ca-section email-intro" id="sms-details">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">CONNECT WITH CUSTOMERS</p>
            <h2>Elevate your marketing campaigns with SMS.</h2>
            <p>
              Use SMS to drive meeting bookings, deliver event updates, or run
              time-sensitive promotions. Create timely, direct connections
              that support your customers and your business goals.
            </p>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">ENGAGE CONFIDENTLY</p>
              <h2>Manage SMS marketing at scale.</h2>
              <p>
                SMS creates a direct line to share relevant, timely messages
                about promotions, meeting reminders, product launches, and
                more. Build targeted messages that support each step of the
                customer journey.
              </p>
              <ul>
                <li>Send timely updates and offers to opted-in contacts.</li>
                <li>Use workflows to coordinate and automate messages.</li>
                <li>Keep consent and compliance in view as you grow.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img2.webp"
                alt="A marketing message prepared for a mobile audience"
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
                alt="Customer information used to personalize SMS outreach"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">PERSONALIZE EVERY MESSAGE</p>
              <h2>Message customers directly and boost growth.</h2>
              <p>
                Send important messages at the right time, and set quiet hours
                based on each recipient’s local time. Personalization tokens,
                contact integration, and workflows help make every interaction
                feel relevant.
              </p>
              <p>
                Create targeted campaigns, engage in two-way conversations,
                deliver time-sensitive offers, and support your marketing
                strategy with personalized messaging.
              </p>
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">AUTOMATE CUSTOMER JOURNEYS</p>
              <h2>Deliver large-scale, personalized SMS experiences.</h2>
              <p>
                Customers expect experiences that reflect their needs and
                preferences. Automate personalized messages with timely offers,
                event invitations, and follow-up reminders.
              </p>
              <p>
                Build loyalty, engagement, and conversions with messaging that
                reaches customers when it matters.
              </p>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img5.webp"
                alt="Automated marketing workflow and customer engagement"
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

        <section className="sms-proof">
          <div className="ca-container sms-proof-content">
            <strong>90%</strong>
            <p>
              of consumers globally want to use messaging to talk to a business.
            </p>
            <span>According to Twilio</span>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RELATED RESOURCES</p>
              <h2>Explore more ways to make mobile marketing work.</h2>
            </div>
            <div className="email-resource-grid">
              <article className="email-resource-card">
                <h3>How to Increase Conversions with SMS Marketing</h3>
                <p>
                  Learn how personalized messages can help drive stronger
                  conversions.
                </p>
                <Link to="/marketing">
                  Learn to build an SMS campaign <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="email-resource-card">
                <h3>
                  <Link to="/mobile-marketing-guide">
                    The Ultimate Cheat Sheet for Mastering Mobile Marketing
                  </Link>
                </h3>
                <p>
                  A practical list of tips and tricks every marketer should
                  know about mobile marketing.
                </p>
                <Link to="/mobile-marketing-guide">
                  Read the guide <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="email-resource-card">
                <h3>Free Marketing Resources</h3>
                <p>
                  Find downloadable resources to support your business and
                  marketing strategy.
                </p>
                <Link to="/content">
                  View downloadable resources <span aria-hidden="true">→</span>
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
                <p>SMS marketing is available in Marketing Hub.</p>
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
            <p className="ca-eyebrow">MARKETING HUB · SMS MARKETING</p>
            <h2>Make every message timely, relevant, and personal.</h2>
            <p>
              Connect with customers on mobile using CRM data, automation, and
              thoughtful messaging.
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

export default MobileMessaging;
