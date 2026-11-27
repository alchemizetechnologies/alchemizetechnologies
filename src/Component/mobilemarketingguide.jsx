import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const guideSections = [
  {
    number: "01",
    title: "Start with the mobile experience",
    paragraphs: [
      "Mobile marketing reaches people through the devices they carry every day. It can include mobile-friendly websites, search, email, social platforms, text messaging, and apps.",
      "Choose channels based on your audience and what they need to do, rather than trying to use every channel at once."
    ]
  },
  {
    number: "02",
    title: "Build a practical mobile strategy",
    paragraphs: [
      "Understand how visitors use your website and which devices they rely on. Set a clear, measurable goal for each campaign, then test ideas with a small audience before expanding."
    ],
    bullets: [
      "Learn which mobile experiences your customers use.",
      "Set a measurable goal for each campaign.",
      "Test, learn, and improve before scaling."
    ]
  },
  {
    number: "03",
    title: "Make every interaction easy on a small screen",
    paragraphs: [
      "Keep pages quick to load, messages concise, and forms short. Use readable layouts, clear headings, and tap-friendly actions so customers can complete tasks without unnecessary effort."
    ],
    bullets: [
      "Design for narrow screens and touch controls.",
      "Make important information easy to find.",
      "Avoid large, slow-loading assets and unnecessary steps."
    ]
  },
  {
    number: "04",
    title: "Connect mobile channels to the customer journey",
    paragraphs: [
      "Coordinate mobile campaigns with the rest of your marketing. CRM context can help teams make follow-ups relevant and understand how mobile interactions contribute to broader goals."
    ],
    bullets: [
      "Keep campaign messaging consistent across channels.",
      "Use clear calls to action that fit the mobile experience.",
      "Review engagement and conversion results together."
    ]
  },
  {
    number: "05",
    title: "Use SMS thoughtfully and with permission",
    paragraphs: [
      "Text messages are personal, so send them only when people have agreed to receive them. Explain what subscribers can expect, make opting out straightforward, and respect their preferences."
    ],
    bullets: [
      "Collect and record the appropriate consent.",
      "Send useful, timely messages rather than unnecessary updates.",
      "Protect customer information and honor opt-outs."
    ]
  },
  {
    number: "06",
    title: "Keep learning from real customer behavior",
    paragraphs: [
      "Mobile habits and technology change. Measure the outcomes that matter, test across devices and browsers, and use customer feedback to improve the experience over time."
    ]
  }
];

function MobileMarketingGuide() {
  return (
    <>
      <main className="content-agent-page mobile-guide-page">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <Link to="/mobile-messaging">SMS Marketing</Link>
          <span aria-hidden="true">›</span>
          <span>Mobile Marketing Guide</span>
        </div>

        <header className="mobile-guide-hero">
          <div className="ca-container">
            <p className="ca-eyebrow">MOBILE MARKETING GUIDE</p>
            <h1>The Ultimate Cheat Sheet for Mastering Mobile Marketing</h1>
            <p>
              A practical guide to reaching people on mobile with useful,
              thoughtful experiences across the channels they use.
            </p>
            <div className="mobile-guide-tags" aria-label="Guide themes">
              <span>Mobile-first</span>
              <span>Customer-focused</span>
              <span>Privacy-conscious</span>
            </div>
          </div>
        </header>

        <section className="mobile-guide-intro">
          <div className="ca-container">
            <h2>Make mobile part of a connected marketing strategy.</h2>
            <p>
              Mobile can help customers discover, understand, and act on your
              message wherever they are. Strong campaigns start with the
              audience, respect their attention, and make the next step simple.
            </p>
          </div>
        </section>

        <section className="mobile-guide-sections">
          <div className="ca-container mobile-guide-layout">
            <aside className="mobile-guide-sidebar">
              <p className="ca-eyebrow">IN THIS GUIDE</p>
              <ol>
                {guideSections.map((section) => (
                  <li key={section.number}>
                    <a href={`#guide-${section.number}`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="mobile-guide-article">
              {guideSections.map((section) => (
                <article
                  className="mobile-guide-section"
                  id={`guide-${section.number}`}
                  key={section.number}
                >
                  <span>{section.number}</span>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mobile-guide-end">
          <div className="ca-container">
            <p className="ca-eyebrow">PUT THE GUIDE INTO PRACTICE</p>
            <h2>Build mobile experiences that earn attention.</h2>
            <p>
              Explore SMS marketing and connect timely messaging with the
              customer journey.
            </p>
            <Link className="ca-button ca-button-primary" to="/mobile-messaging">
              Explore SMS Marketing
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default MobileMarketingGuide;
