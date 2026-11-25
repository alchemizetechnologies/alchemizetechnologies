import React, { useState } from "react";
import { Link } from "react-router-dom";

const hubspot = "https://www.hubspot.com";
const smartCrm = `${hubspot}/products/crm`;
const imagePath = "/Smartcrm/";

const clearFeatures = [
  { icon: "◇", title: "Custom Data Model", description: "Store any type of data in your CRM with custom objects, events, scoring, and calculations." },
  { icon: "◎", title: "Data Enrichment", description: "Keep contact and company records current with built-in enrichment and suggested CRM updates." },
  { icon: "⌕", title: "Data Agent", description: "Ask questions about customers, contacts, or prospects across CRM records, calls, emails, documents, and the web." },
  { icon: "✓", title: "Self-Cleaning CRM", description: "Fix data issues automatically and highlight what matters most about customers and deals." },
  { icon: "▥", title: "Dashboards & Reporting", description: "View marketing, sales, and service data in one customizable place." },
  { icon: "♢", title: "Sensitive Data", description: "Securely store customer data with encryption, precise access controls, and built-in compliance." },
];

const teamFeatures = [
  { icon: "↻", title: "Workflows", description: "Automate tasks and customer communications with intelligent, behavior-based workflows." },
  { icon: "▥", title: "Custom Reporting", description: "Turn data into insights with flexible reports for deal progression and revenue attribution." },
  { icon: "♙", title: "Security and Governance", description: "Give every team exact access with permissions, 2FA, SSO, and SOC2 controls." },
  { icon: "◷", title: "Centralized Audit Log", description: "Track actions taken by people, automations, integrations, and AI." },
  { icon: "⊕", title: "Automatic Duplicate Detection", description: "Automatically identify and merge duplicate records to keep your database clean." },
  { icon: "□", title: "Project Management (Beta)", description: "Keep customer projects and CRM data together while coordinating across teams." },
];

const connectedFeatures = [
  { icon: "⌂", title: "HubSpot Marketplace", description: "Connect your CRM to more than 2,000 popular business apps." },
  { icon: "⇄", title: "Data Sync", description: "Automatically sync data between HubSpot and popular third-party apps." },
  { icon: "◇", title: "Sandbox Test Account", description: "Safely test changes and functionality before going live." },
  { icon: "▦", title: "Custom CRM Interface", description: "Match your CRM layout to your team's unique needs." },
  { icon: "⌘", title: "UI Extensibility", description: "Build custom interfaces and extend HubSpot with flexible APIs." },
  { icon: "↯", title: "Integrated AI Actions", description: "Combine HubSpot workflows with your favorite apps to automate processes." },
];

const plans = [
  { icon: "●", name: "Free", subtitle: "No credit card required", price: "$0", period: "/month", features: ["Manage contacts, companies & deals", "Organize your pipeline", "Sync your data"] },
  { icon: "◆", name: "Starter", subtitle: "Starts at", price: "$10", oldPrice: "$20", period: "/month per seat", features: ["Remove HubSpot branding", "Configure user permissions", "Automatically enrich data"] },
  { icon: "▥", name: "Professional", subtitle: "Starts at", price: "$50", period: "/month per seat", features: ["Configure your CRM layout", "Merge duplicate records", "Organize users into teams"] },
  { icon: "✦", name: "Enterprise", subtitle: "Starts at", price: "$75", period: "/month per seat", features: ["Get AI insights on CRM index pages", "Set custom objects", "Enable single sign-on"] },
];

const faqs = [
  ["What is a smart CRM?", "A smart CRM automatically updates customer data, applies AI insights, and gives every team complete context to take action."],
  ["How does HubSpot Smart CRM work with HubSpot's core products?", "Smart CRM provides the shared customer data and automation foundation across HubSpot's marketing, sales, service, and commerce tools."],
  ["How can I purchase HubSpot Smart CRM?", "Choose a Free, Starter, Professional, or Enterprise plan, or contact HubSpot for a tailored recommendation."],
  ["How is AI used in HubSpot's Smart CRM?", "AI helps enrich records, summarize customer context, identify duplicates, answer data questions, and power connected workflows."],
  ["How does complete customer context improve the Smart CRM?", "Complete context helps teams make faster decisions, personalize customer interactions, and keep every department aligned."],
  ["What data does HubSpot Smart CRM store, and is it secure?", "It stores unified customer, company, deal, activity, and custom object data with access controls, encryption, and audit capabilities."],
];

function FeatureGrid({ items }) {
  return (
    <div className="smartcrm-feature-grid">
      {items.map((item) => (
        <a className="smartcrm-feature-card" href={smartCrm} target="_blank" rel="noopener noreferrer" key={item.title}>
          <span className="smartcrm-feature-icon" aria-hidden="true">{item.icon}</span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </a>
      ))}
    </div>
  );
}

function SmartCrm() {
  const [openFaq, setOpenFaq] = useState(null);

  const buttons = (demo = "Get a demo", trial = "Get free CRM") => (
    <div className="smartcrm-buttons">
      <a className="smartcrm-demo" href={smartCrm} target="_blank" rel="noopener noreferrer">{demo}</a>
      <a className="smartcrm-trial" href={smartCrm} target="_blank" rel="noopener noreferrer">{trial}</a>
    </div>
  );

  return (
    <main className="smartcrm-page">
      <div className="smartcrm-breadcrumb">
        <div><Link to="/">Home</Link><span>›</span><span>Smart CRM</span></div>
      </div>

      <section className="smartcrm-hero" id="about">
        <div className="smartcrm-hero-copy">
          <span className="smartcrm-eyebrow">SMART CRM</span>
          <h1>CRM Software That Updates Itself</h1>
          <p>The intelligent CRM that unifies your data and tools, automates the busywork, and gives every team the context they need to take the next best action.</p>
          {buttons("Get a demo of HubSpot's Smart CRM", "Get free CRM to get started")}
        </div>
        <div className="smartcrm-hero-image"><img src={`${imagePath}a.webp`} alt="HubSpot Smart CRM connected customer workspace" /></div>
      </section>

      <section className="smartcrm-section" id="solutions">
        <div className="smartcrm-section-heading">
          <span className="smartcrm-eyebrow">BUSINESS SOLUTIONS</span>
          <h2>Your CRM Just Got Smarter</h2>
          <p>HubSpot's Smart CRM helps you act on it, showing what your team should do before anyone has to ask.</p>
        </div>
        <div className="smartcrm-feature-section">
          <div className="smartcrm-feature-image"><img src={`${imagePath}b.webp`} alt="Unified customer data and CRM insights" /></div>
          <div className="smartcrm-feature-copy">
            <h2>See Your Customers Clearly</h2>
            <p>Stop making decisions with incomplete and stale data. HubSpot Smart CRM unifies customer information, conversations, and tools with built-in enrichment and self-cleaning updates.</p>
            <FeatureGrid items={clearFeatures} />
          </div>
        </div>
      </section>

      <section className="smartcrm-section smartcrm-team-section">
        <div className="smartcrm-feature-section smartcrm-feature-reverse">
          <div className="smartcrm-feature-copy">
            <h2>Get Your Team on the Same Page</h2>
            <p>Your business data stays secure and under your control while AI workflows, clean data, and connected tools help every team work from shared context.</p>
            <FeatureGrid items={teamFeatures} />
          </div>
          <div className="smartcrm-feature-image"><img src={`${imagePath}c.webp`} alt="Teams collaborating with shared CRM context" /></div>
        </div>
      </section>

      <section className="smartcrm-section smartcrm-connected-section">
        <div className="smartcrm-feature-section">
          <div className="smartcrm-feature-image"><img src={`${imagePath}d.webp`} alt="Connected CRM tools and integrations" /></div>
          <div className="smartcrm-feature-copy">
            <h2>Scale Safely With Connected Tools You Can Trust</h2>
            <p>No more switching between systems or reconciling disconnected data. Connect your apps, sync your data, and give every agent one source of truth.</p>
            <FeatureGrid items={connectedFeatures} />
          </div>
        </div>
      </section>

      <section className="smartcrm-proof">
        <div className="smartcrm-proof-heading">
          <span className="smartcrm-eyebrow">CUSTOMER PROOF</span>
          <h2>Real Growth, Real Stories</h2>
          <p>See what teams like yours have accomplished with HubSpot Smart CRM.</p>
        </div>
        <div className="smartcrm-story-layout">
          <div className="smartcrm-story-image"><img src={`${imagePath}e.webp`} alt="Customer story showing Smart CRM results" /></div>
          <blockquote>
            “Thanks to HubSpot, because we don't have everything dispersed across systems, we're able to give the customer a much better experience.”
            <cite>Elisabeth Norberg — Revenue Operations Manager</cite>
          </blockquote>
        </div>
        <div className="smartcrm-stats">
          <div><strong>83%</strong><p>say it is effective at unifying company data</p></div>
          <div><strong>93%</strong><p>use HubSpot daily</p></div>
          <div><strong>87%</strong><p>say HubSpot is easy to use</p></div>
          <div><strong>311,000+</strong><p>customers in over 135 countries</p></div>
        </div>
      </section>

      <section className="smartcrm-pricing" id="pricing">
        <div className="smartcrm-section-heading">
          <span className="smartcrm-eyebrow">PRICING</span>
          <h2>Smart CRM Pricing That Grows With You</h2>
          <p>Scale your business without starting from scratch.</p>
        </div>
        <div className="smartcrm-pricing-grid">
          {plans.map((plan) => (
            <article className={`smartcrm-plan ${plan.name === "Professional" ? "featured" : ""}`} key={plan.name}>
              <span className="smartcrm-plan-icon" aria-hidden="true">{plan.icon}</span>
              <h3>{plan.name}</h3>
              <p className="smartcrm-plan-subtitle">{plan.subtitle}</p>
              <div className="smartcrm-plan-price">{plan.oldPrice && <del>{plan.oldPrice}</del>}<strong>{plan.price}</strong></div>
              <span className="smartcrm-plan-period">{plan.period}</span>
              <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="smartcrm-pricing-cta">{buttons("Demo premium editions", "Get free CRM")}</div>
      </section>

      <section className="smartcrm-faq" id="faq">
        <div className="smartcrm-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="smartcrm-faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`smartcrm-faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{question}</span><span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="smartcrm-bottom-cta">
        <div>
          <h2>Ready for a CRM that understands your customers?</h2>
          <p>Connect your data, teams, and tools, and give every team the insights they need — all in one place.</p>
          {buttons("Get a demo", "Get free CRM")}
        </div>
        <img src={`${imagePath}f.webp`} alt="Smart CRM final call to action" />
      </section>

      <footer className="smartcrm-footer">
        <div className="smartcrm-footer-grid">
          {[
            ["Popular Features", ["All Products and Features", "HubSpot AEO", "Free Meeting Scheduler App", "Email Tracking Software", "AI Content Writer", "Email Marketing Software", "Lead Management Software", "Free Website Builder", "Marketing Analytics", "Breeze Assistant"]],
            ["Free Tools", ["See All Free Business Tools", "AI Search Grader", "AI Search Sensor", "Make My Persona", "Email Signature Generator", "Free Business Templates", "Website Templates", "Connector for Claude"]],
            ["Company", ["About Us", "Careers", "Management Team", "Board of Directors", "Investor Relations", "Blog", "Sustainability", "Contact Us"]],
            ["Customers", ["Customer Support", "Join a Local User Group"]],
            ["Partners", ["All Partner Programs", "Solutions Partner Program", "Technology Partner Program", "HubSpot for Startups", "Affiliate Program"]],
          ].map(([title, links]) => (
            <div key={title}><h3>{title}</h3>{links.map((link) => <a href={hubspot} target="_blank" rel="noopener noreferrer" key={link}>{link}</a>)}</div>
          ))}
        </div>
        <div className="smartcrm-social">
          {[["Facebook", "f"], ["Instagram", "◎"], ["YouTube", "▶"], ["Twitter", "𝕏"], ["LinkedIn", "in"], ["Reddit", "◉"], ["TikTok", "♪"]].map(([name, icon]) => (
            <a href={hubspot} target="_blank" rel="noopener noreferrer" aria-label={name} key={name}>{icon}</a>
          ))}
        </div>
        <div className="smartcrm-footer-bottom">
          <strong>HubSpot</strong><p>Copyright © 2026 HubSpot, Inc.</p>
          <div>
            <a href="https://legal.hubspot.com">Legal Center</a><a href="https://legal.hubspot.com/privacy-policy">Privacy Policy</a><a href="https://www.hubspot.com/security">Security</a><a href="https://www.hubspot.com/accessibility">Website Accessibility</a><a href="https://legal.hubspot.com/cookie-policy">Manage Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default SmartCrm;