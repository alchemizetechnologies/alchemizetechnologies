import { useState } from "react";
import { Link } from "react-router-dom";

const imagePath = "/AlchemizeCustomerPlatform/";
const alchemizeHome = "/";

const platformBenefits = [
  {
    title: "Connect your teams and tools to the customer journey.",
    description: "Never miss another follow-up, handoff, or deal-closing opportunity again. With products to help customer-facing teams engage customers and Smart CRM to tie it all together, connecting the dots between interactions is easier than ever.",
    image: "b.webp",
    alt: "Customer journey connected across teams and tools",
    points: ["Shared customer context", "Clear visibility across every journey stage", "Smoother handoffs between teams"],
  },
  {
    title: "Ignite growth while reducing cost.",
    description: "Stop wasting resources on disparate tools with disconnected data. Centralizing go-to-market efforts on a single customer platform saves money and time as you scale.",
    image: "d.webp",
    alt: "Connected customer platform helping businesses grow",
    points: ["Consolidate disconnected tools", "Save time with shared data", "Adopt products as your business grows"],
  },
  {
    title: "Easily adapt to emerging trends and technologies.",
    description: "Alchemize Technologies' platform evolves with changing customer expectations. A connected ecosystem of integrations, templates, education, and community helps you stay ahead.",
    image: "e.webp",
    alt: "Customer platform adapting to new tools and technology",
    points: ["Connect apps and integrations", "Access templates and educational resources", "Stay current as customer expectations change"],
  },
  {
    title: "Deliver on your customer promises with AI-powered tools.",
    description: "Drive efficiency, spark creativity, and maximize engagement with AI-powered tools that automate tasks and reveal valuable insights.",
    image: "f.webp",
    alt: "AI-powered tools supporting a seamless customer experience",
    points: ["Automate routine tasks", "Reveal useful customer insights", "Deliver a more seamless experience"],
  },
];

const faqs = [
  ["What is an agentic customer platform?", "An agentic customer platform connects customer data, teams, tools, and AI so businesses can deliver a consistent experience across the customer journey."],
  ["Is a customer platform the same as a CRM?", "A CRM is a core part of a customer platform. A customer platform also connects products, integrations, and resources that help teams engage customers throughout their journey."],
  ["What is Alchemize Technologies Smart CRM, and how is it different from traditional CRMs?", "Smart CRM unifies customer data and provides context to teams and AI, helping them take action rather than simply storing records."],
  ["How does Alchemize Technologies Smart CRM work with Alchemize Technologies' other products?", "Smart CRM connects marketing, sales, service, and other customer-facing products with shared customer data and context."],
];

const popularFeatures = [
  ["Free Live Chat Software", "Connect with website visitors in real time to convert leads, close deals, and provide support."],
  ["Contact Management Software", "Keep CRM records up to date with ease. Add contacts and log activity with a single click."],
  ["Free Pipeline Management Software", "Visualize your sales cycle in an easy-to-follow pipeline to prioritize leads and close more deals."],
  ["Email Marketing Software", "Create and personalize marketing emails with tools connected to your customer data."],
  ["Meeting Scheduler", "Make it easy for customers to book time with your team."],
];

const resources = [
  ["Agent Hub", "Build, manage, deploy, and track AI agents across the customer platform.", "Learn about Agent Hub", "/agent"],
  ["Why Choose Alchemize Technologies?", "Learn how Alchemize Technologies' products, content, and ecosystem help create a delightful customer experience.", "Get to know Alchemize Technologies", "/"],
  ["Alchemize Technologies Academy", "Take your career to new heights with free educational courses from Alchemize Technologies Academy.", "Browse free courses", "/"],
];

function ActionButtons() {
  return (
    <div className="hcp-buttons">
      <a className="hcp-button-primary" href={"/"} target="_blank" rel="noopener noreferrer">Get a demo</a>
      <a className="hcp-button-secondary" href={"/smartcrm"} target="_blank" rel="noopener noreferrer">Get started free</a>
    </div>
  );
}

function AlchemizeCustomerPlatform() {
  const [openFaq, setOpenFaq] = useState(null);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const visibleFeatures = [0, 1, 2].map((offset) => popularFeatures[(featureIndex + offset) % popularFeatures.length]);

  const moveFeatures = (direction) => {
    setFeatureIndex((current) => (current + direction + popularFeatures.length) % popularFeatures.length);
  };

  return (
    <main className="hcp-page">
      <div className="hcp-breadcrumb">
        <div><Link to="/">Home</Link><span>›</span><span>Alchemize Technologies Customer Platform</span></div>
      </div>

      <section className="hcp-hero">
        <div className="hcp-container hcp-hero-layout">
          <div className="hcp-hero-copy">
            <span className="hcp-eyebrow">ALCHEMIZE TECHNOLOGIES CUSTOMER PLATFORM</span>
            <h1>Put your customers first and grow better with Alchemize Technologies’s agentic customer platform.</h1>
            <ActionButtons />
          </div>
          <button type="button" className="hcp-image-button hcp-hero-image" onClick={() => setEnlargedImage({ src: `${imagePath}a.webp`, alt: "Alchemize Technologies customer platform" })} aria-label="Click to enlarge customer platform image">
            <img src={`${imagePath}a.webp`} alt="Alchemize Technologies customer platform connecting teams and customer data" />
            <span>Click to enlarge</span>
          </button>
        </div>
        <div className="hcp-hero-highlights">
          <div className="hcp-container">
            <p>Connect your customer-facing teams through a complete view of the customer journey</p>
            <p>Use AI-powered tools to deliver a seamless customer experience</p>
            <p>Easily adapt to emerging industry trends and technologies</p>
          </div>
        </div>
      </section>

      <section className="hcp-intro hcp-section">
        <div className="hcp-container">
          <span className="hcp-eyebrow">A CONNECTED CUSTOMER PLATFORM</span>
          <h2>To grow better, you need to connect better.</h2>
          <p>Traditional CRMs alone aren't enough to drive growth. Most aren't designed for customer connection, which is critical in an AI-driven world where customers can explore, evaluate, and buy with efficiency.</p>
          <p>Alchemize Technologies’s agentic customer platform is powered by Smart CRM to unify customer data in one place, so your teams and AI always have the full picture to market, sell, and serve customers better. It includes products for engaging customers across the journey, plus an ecosystem of integrations, education, and community.</p>
        </div>
      </section>

      {platformBenefits.map((item, index) => (
        <section className={`hcp-benefit hcp-section ${index % 2 ? "hcp-benefit-tinted" : ""}`} key={item.title}>
          <div className={`hcp-container hcp-benefit-layout ${index % 2 ? "hcp-reverse" : ""}`}>
            <div className="hcp-benefit-copy">
              <span className="hcp-eyebrow">CUSTOMER CONNECTION</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <ul>{item.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
            </div>
            <button type="button" className="hcp-image-button hcp-benefit-image" onClick={() => setEnlargedImage({ src: `${imagePath}${item.image}`, alt: item.alt })} aria-label={`Click to enlarge: ${item.alt}`}>
              <img src={`${imagePath}${item.image}`} alt={item.alt} />
              <span>Click to enlarge</span>
            </button>
          </div>
        </section>
      ))}

      <section className="hcp-contact hcp-section">
        <div className="hcp-container">
          <span className="hcp-eyebrow">HERE TO HELP</span>
          <h2>Have questions? Give us a call and we’ll walk you through it.</h2>
          <a href="tel:+18884827768">+1 888 482 7768</a>
        </div>
      </section>

      <section className="hcp-growth hcp-section">
        <div className="hcp-container hcp-growth-card">
          <div><span className="hcp-eyebrow">CUSTOMER CONNECTION DRIVES GROWTH</span><h2>19%</h2><p>Connecting consistently throughout the customer journey drives 19% more growth in terms of deals closed.</p><span className="hcp-source">— Alchemize Technologies Internal Research</span></div>
          <img src={`${imagePath}f.webp`} alt="Customer connection and business growth" />
        </div>
      </section>

      <section className="hcp-resources hcp-section">
        <div className="hcp-container">
          <div className="hcp-section-heading"><span className="hcp-eyebrow">RELATED RESOURCES</span><h2>Resources to help you grow better.</h2><p>If you’re interested in Alchemize Technologies’s agentic customer platform, these resources may also help.</p></div>
          <div className="hcp-resource-grid">
            {resources.map(([title, copy, linkText, href], index) => (
              <article key={title}>
                <span className="hcp-resource-icon" aria-hidden="true">{["✦", "◇", "▤"][index]}</span>
                <h3>{title}</h3><p>{copy}</p>
                {href.startsWith("/") ? <Link to={href}>{linkText}</Link> : <a href={href} target="_blank" rel="noopener noreferrer">{linkText}</a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hcp-faq hcp-section">
        <div className="hcp-container">
          <h2>Frequently Asked Questions</h2>
          <div className="hcp-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={openFaq === index ? "open" : ""} key={question}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{question}</span><span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hcp-popular hcp-section">
        <div className="hcp-container">
          <div className="hcp-popular-heading">
            <div><span className="hcp-eyebrow">EXPLORE ALCHEMIZE TECHNOLOGIES</span><h2>Popular Features in Alchemize Technologies</h2><p>Explore popular features in Alchemize Technologies’s agentic customer platform below.</p></div>
            <div className="hcp-carousel-controls">
              <button type="button" onClick={() => moveFeatures(-1)} aria-label="Previous features">‹</button>
              <button type="button" onClick={() => moveFeatures(1)} aria-label="Next features">›</button>
            </div>
          </div>
          <div className="hcp-popular-grid">
            {visibleFeatures.map(([title, copy]) => <article key={title}><span className="hcp-resource-icon" aria-hidden="true">◇</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <footer className="hcp-footer">
        <div className="hcp-container">
          <div className="hcp-footer-grid">
            {[
              ["Popular Features", ["All Products and Features", "Alchemize Technologies AEO", "Free Meeting Scheduler App", "Email Tracking Software", "AI Content Writer", "Email Marketing Software", "Lead Management Software", "AI Prospecting Agent", "Free Website Builder", "Free Landing Page Builder", "Free Online Form Builder", "Free Chatbot Builder", "Free Live Chat Software", "Marketing Analytics", "Breeze Assistant"]],
              ["Free Tools", ["See All Free Business Tools", "AI Search Grader", "AI Search Sensor", "Make My Persona", "Email Signature Generator", "Free Business Templates", "Software Comparisons Library", "Website Templates", "Connector for Claude"]],
              ["Company", ["About Us", "Careers", "Management Team", "Board of Directors", "Investor Relations", "Blog", "Sustainability", "AI Instructions", "Contact Us"]],
              ["Customers", ["Customer Support", "Join a Local User Group"]],
              ["Partners", ["All Partner Programs", "Solutions Partner Program", "Technology Partner Program", "Alchemize Technologies for Startups", "Affiliate Program"]],
            ].map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map((link) => <a href={alchemizeHome} target="_blank" rel="noopener noreferrer" key={link}>{link}</a>)}</div>)}
          </div>
          <div className="hcp-social">{[["Facebook", "f"], ["Instagram", "◎"], ["YouTube", "▶"], ["Twitter", "𝕏"], ["LinkedIn", "in"], ["Reddit", "◉"], ["TikTok", "♪"]].map(([name, icon]) => <a href={alchemizeHome} target="_blank" rel="noopener noreferrer" aria-label={name} key={name}>{icon}</a>)}</div>
          <div className="hcp-footer-bottom"><strong>Alchemize Technologies</strong><p>Copyright © 2026 Alchemize Technologies.</p><div><a href="/">Legal Center</a><a href="/">Privacy Policy</a><a href="/">Security</a><a href="/">Website Accessibility</a><a href="/">Manage Cookies</a></div></div>
        </div>
      </footer>

      {enlargedImage && (
        <div className="hcp-image-modal" role="dialog" aria-modal="true" aria-label="Enlarged platform image">
          <button type="button" className="hcp-modal-close" onClick={() => setEnlargedImage(null)} aria-label="Close enlarged image">×</button>
          <img src={enlargedImage.src} alt={enlargedImage.alt} onClick={() => setEnlargedImage(null)} />
        </div>
      )}
    </main>
  );
}

export default AlchemizeCustomerPlatform;