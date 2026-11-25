import { useState } from "react";
import { Link } from "react-router-dom";

const hubspot = "https://www.hubspot.com";
const aeoUrl = `${hubspot}/products/marketing/aeo`;
const imagePath = "/AEO/";

const aeoSteps = [
  {
    image: "b.webp",
    title: "Monitor your AI brand visibility and competitor share of voice.",
    description: "Continuously monitor your brand visibility score across ChatGPT, Gemini, and Perplexity to see how often you appear in AI answers. Share of voice measures what percentage of AI mentions in your category go to you versus competitors.",
    link: "Learn more about AI share of voice",
  },
  {
    image: "c.png",
    title: "Track the AI search prompts that matter to your business.",
    description: "Monitor performance across every prompt to see where you appear and how that changes over time. HubSpot suggests prompts based on your company, competitors, and industry.",
    link: "Learn more about AI prompt tracking",
  },
  {
    image: "d.png",
    title: "See which pages and domains drive AI visibility.",
    description: "Citation analysis shows which domains, pages, and content types appear in AI answers for your brand and competitors, so you can build content that earns a spot.",
    link: "Learn more about AI visibility",
  },
  {
    image: "e.png",
    title: "Act fast with HubSpot AEO recommendations.",
    description: "Turn visibility data into clear, prioritized recommendations. Know when to create a page, fix a technical gap, publish a video, or reach out to third-party sites.",
    link: null,
  },
];

const testimonials = [
  {
    quote: "AEO doesn't require manual setup; it's automatically structured and easy to visualize. The insights are clear, digestible, and immediately usable.",
    name: "John Mothershead",
    role: "Director of Member Success, Youth on Course",
  },
  {
    quote: "HubSpot AEO helps our team understand where we're showing up in AI search and what to do next.",
    name: "HubSpot AEO customer",
    role: "Marketing leader",
  },
];

const faqs = [
  ["What is AEO?", "Answer engine optimization (AEO) helps your brand appear in AI-generated answers across tools such as ChatGPT, Gemini, and Perplexity."],
  ["Can I try HubSpot before I buy?", "HubSpot AEO offers a free trial. Check the current product page for trial availability and terms."],
  ["What are prompts?", "Prompts are the questions people ask AI search tools. Prompt tracking shows how your brand appears in answers to the questions you choose."],
  ["How many prompts do I need?", "Start with the questions your customers ask most. HubSpot can suggest relevant prompts based on your business, competitors, and industry."],
  ["Do I need to use HubSpot's CMS?", "No. AEO visibility and citation analysis can help you understand how your brand and web content appear in AI answers."],
  ["What do common AEO terms mean?", "Visibility measures how often your brand appears in AI answers. Share of voice compares your mentions with competitors, and citation analysis identifies the sources AI references."],
  ["How does the AEO tool work in HubSpot?", "HubSpot AEO tracks brand visibility, prompts, competitor share of voice, citations, and prioritized recommendations in one place."],
  ["What is citation analysis?", "Citation analysis identifies the domains, pages, and content types that AI search tools cite or link to in their answers."],
  ["Do I need technical or AEO expertise to use this?", "No. The product is designed to make results easy to understand and provides actionable recommendations."],
  ["Can I track multiple brands?", "Available brand and workspace limits depend on your subscription. Check the product's current packaging details for specifics."],
  ["Why should I trust HubSpot to help me with AEO?", "HubSpot combines AEO insights with customer and marketing context already connected to its platform."],
  ["What's the difference between HubSpot AEO, Marketing Hub AEO, AEO Grader, and AI Search Sensor?", "HubSpot AEO is the paid optimization product. AEO features in Marketing Hub, AEO Grader, and AI Search Sensor are separate experiences with different capabilities."],
  ["How is HubSpot AEO different from other AEO tools?", "HubSpot AEO connects AI visibility insights and recommendations with HubSpot's marketing and CRM context."],
  ["How do I monitor brand visibility in AI search?", "Track prompts across AI engines and review your visibility, share of voice, and citations over time."],
];

const resources = [
  ["AEO Guide", "A fast read on AEO: what it is, why it matters now, and how to get started.", "Get the guide"],
  ["How HubSpot Became the #1 CRM in AI Search", "See the three-pillar AEO strategy HubSpot used to grow leads from AI by 1,850%.", "Read the case study"],
  ["See How HubSpot Stacks Up", "Compare HubSpot with Profound, Otterly, SE Ranking, and Semrush.", "Compare AEO tools"],
];

const footerColumns = [
  ["Popular Features", ["All Products and Features", "HubSpot AEO", "Free Meeting Scheduler App", "Email Tracking Software", "AI Content Writer", "AI Website Generator", "Email Marketing Software", "Lead Management Software", "AI Prospecting Agent", "Free Website Builder", "Free Landing Page Builder", "Free Online Form Builder", "Free Chatbot Builder", "Free Live Chat Software", "Marketing Analytics", "Breeze Assistant", "Free Web Hosting"]],
  ["Free Tools", ["See All Free Business Tools", "AI Search Grader", "AI Search Sensor", "Make My Persona", "Email Signature Generator", "Free Business Templates", "Software Comparisons Library", "Website Templates", "Connector for Claude"]],
  ["Company", ["About Us", "Careers", "Management Team", "Board of Directors", "Investor Relations", "Blog", "Sustainability", "AI Instructions", "Contact Us"]],
  ["Customers", ["Customer Support", "Join a Local User Group"]],
  ["Partners", ["All Partner Programs", "Solutions Partner Program", "Technology Partner Program", "HubSpot for Startups", "Affiliate Program"]],
];

function ActionButtons({ footer = false }) {
  return (
    <div className="aeo-buttons">
      <a className="aeo-button-primary" href={aeoUrl} target="_blank" rel="noopener noreferrer">
        {footer ? "Start your free trial of HubSpot AEO" : "Start your free trial of HubSpot's AEO software"}
      </a>
      <a className="aeo-button-secondary" href={`${hubspot}/pricing`} target="_blank" rel="noopener noreferrer">
        {footer ? "Buy now for $50/month" : "Buy now for $50/month"}
      </a>
    </div>
  );
}

function AEO() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const changeTestimonial = (direction) => {
    setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <main className="aeo-page">
      <div className="aeo-promo">
        <span>Start your free trial of HubSpot's AEO tool</span>
        <a href={aeoUrl} target="_blank" rel="noopener noreferrer">Start free trial</a>
        <span>or</span>
        <a href={`${hubspot}/pricing`} target="_blank" rel="noopener noreferrer">Buy now for $50/month</a>
      </div>
      <div className="aeo-utility">
        <button type="button">English <span>⌄</span></button>
        <button type="button">High Contrast</button>
        <a href="https://help.hubspot.com" target="_blank" rel="noopener noreferrer">Customer Support</a>
        <a href={`${hubspot}/sales`} target="_blank" rel="noopener noreferrer">Contact Sales</a>
        <a href="https://app.hubspot.com" target="_blank" rel="noopener noreferrer">Log in</a>
      </div>
      <header className="aeo-main-nav">
        <Link className="aeo-logo" to="/">HubSpot</Link>
        <nav aria-label="Main navigation">
          <a href="#why-aeo">About</a>
          <a href="#how-it-works">Products</a>
          <a href="#resources">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>
      </header>

      <div className="aeo-breadcrumb"><div><Link to="/">Home</Link><span>›</span><span>Answer Engine Optimization Software</span></div></div>

      <section className="aeo-hero">
        <div className="aeo-hero-inner">
          <div className="aeo-hero-copy">
            <span className="aeo-beta">BETA</span>
            <span className="aeo-eyebrow">ANSWER ENGINE OPTIMIZATION SOFTWARE</span>
            <h1>Show up in AI answers.</h1>
            <p>HubSpot's AEO software tracks your brand across ChatGPT, Gemini, and Perplexity — and tells you exactly what to fix.</p>
            <ActionButtons />
            <small>Includes 25 prompts — buy more anytime.</small>
          </div>
          <div className="aeo-hero-visual">
            <div className="aeo-dashboard">
              <div className="aeo-dashboard-top"><span>AI visibility</span><span className="aeo-live-dot">● Live</span></div>
              <div className="aeo-score"><strong>68</strong><span>Visibility score <b>↑ 12%</b></span></div>
              <div className="aeo-chart" aria-label="Sample AI visibility trend"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="aeo-engine-list"><span>ChatGPT <b>72%</b></span><span>Gemini <b>64%</b></span><span>Perplexity <b>58%</b></span></div>
            </div>
            <div className="aeo-hero-chip">AI search visibility, in one view</div>
          </div>
        </div>
      </section>

      <section className="aeo-why aeo-section" id="why-aeo">
        <div className="aeo-container">
          <div className="aeo-section-heading"><span className="aeo-eyebrow">WHY AEO MATTERS</span><h2>See it in action</h2></div>
          <div className="aeo-why-grid">
            <article><span className="aeo-icon">⌕</span><h3>AI search is changing how buyers find you.</h3><p>Buyers are asking AI before they ever visit your website. They're getting recommendations from ChatGPT, Gemini, and Perplexity instead of traditional search.</p></article>
            <article><span className="aeo-icon">!</span><h3>AI is already recommending your competitors.</h3><p>Buyers ask. AI answers with names. If yours isn't one of them, you may be out before you even knew you were in the running.</p></article>
            <article><span className="aeo-icon">↗</span><h3>See where you're missing. Get recommendations to fix it.</h3><p>AEO shows you the gap and recommends what content to create or update to close it, right inside HubSpot.</p></article>
          </div>
        </div>
      </section>

      <section className="aeo-work aeo-section" id="how-it-works">
        <div className="aeo-container">
          <div className="aeo-section-heading">
            <span className="aeo-eyebrow">HOW HUBSPOT AEO WORKS</span>
            <h2>AEO software that covers every step, from visibility to action.</h2>
            <p><strong>We grew leads from AI by 1,850%.</strong> Here's how it works.</p>
          </div>
          <div className="aeo-step-list">
            {aeoSteps.map((step, index) => (
              <article className={`aeo-step ${index % 2 ? "aeo-step-reverse" : ""}`} key={step.title}>
                <div className="aeo-step-visual">
                  <img src={`${imagePath}${step.image}`} alt={`${step.title} product screen`} />
                </div>
                <div className="aeo-step-copy">
                  <span className="aeo-step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.link && <a href={aeoUrl} target="_blank" rel="noopener noreferrer">{step.link} →</a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aeo-tour aeo-section">
        <div className="aeo-container">
          <span className="aeo-eyebrow">2-MINUTE PRODUCT TOUR</span>
          <h2>Take a tour.</h2>
          <p>A quick walkthrough of HubSpot AEO, from your visibility score to a clear action plan.</p>
          <a className="aeo-tour-image" href={aeoUrl} target="_blank" rel="noopener noreferrer" aria-label="Open HubSpot AEO product page">
            <img src={`${imagePath}a.webp`} alt="HubSpot AEO product interface preview" />
            <span className="aeo-play" aria-hidden="true">▶</span>
          </a>
        </div>
      </section>

      <section className="aeo-testimonials aeo-section">
        <div className="aeo-container">
          <div className="aeo-testimonial-heading"><div><span className="aeo-eyebrow">CUSTOMER PROOF</span><h2>Why marketers choose HubSpot AEO</h2></div><a href={`${hubspot}/case-studies`} target="_blank" rel="noopener noreferrer">See all case studies →</a></div>
          <article className="aeo-quote-card">
            <span className="aeo-quote-mark">“</span>
            <blockquote>{testimonials[activeTestimonial].quote}</blockquote>
            <div><strong>{testimonials[activeTestimonial].name}</strong><span>{testimonials[activeTestimonial].role}</span></div>
            <div className="aeo-carousel-controls">
              <button type="button" onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial">‹</button>
              <button type="button" onClick={() => changeTestimonial(1)} aria-label="Next testimonial">›</button>
            </div>
          </article>
        </div>
      </section>

      <section className="aeo-pricing aeo-section" id="pricing">
        <div className="aeo-container">
          <div className="aeo-section-heading"><span className="aeo-eyebrow">PRICING</span><h2>HubSpot AEO Software Pricing</h2></div>
          <div className="aeo-pricing-card">
            <div><span className="aeo-plan-label">HUBSPOT AEO</span><h3>Included features</h3><ul><li>Multi-engine coverage (ChatGPT, Gemini, Perplexity)</li><li>Brand visibility and sentiment analysis</li><li>Competitor share of voice and citation analysis</li><li>Prompt tracking &amp; suggestions</li><li>Prioritized AEO recommendations</li></ul></div>
            <div className="aeo-price-block"><strong>$50<small>/month</small></strong><span>$45/month if you pay annually.</span><a href={`${hubspot}/pricing`} target="_blank" rel="noopener noreferrer">Buy now</a></div>
          </div>
          <p className="aeo-pricing-note">For more detailed information on product packaging and limits, please see our <a href={`${hubspot}/pricing`} target="_blank" rel="noopener noreferrer">pricing page</a>. Price shown in USD and subject to applicable tax.</p>
        </div>
      </section>

      <section className="aeo-crm aeo-section">
        <div className="aeo-container aeo-crm-layout">
          <div><span className="aeo-eyebrow">CONNECTED TO YOUR CRM</span><h2>Your CRM data makes AEO smarter.</h2><p>Get more from AEO with Marketing Hub Pro and Enterprise. Your CRM data is already connected, so recommendations are even more specific. Plus, content creation tools are built in.</p><ActionButtons /></div>
          <div className="aeo-crm-visual"><span>Contact + company context</span><strong>One connected view</strong><span>AI visibility recommendations</span></div>
        </div>
      </section>

      <section className="aeo-resources aeo-section" id="resources">
        <div className="aeo-container">
          <div className="aeo-section-heading"><h2>Free guides, videos, and research to help you get started.</h2></div>
          <div className="aeo-resource-grid">{resources.map(([title, copy, link], index) => <article key={title}><span className="aeo-resource-icon">{["▤", "↗", "⇄"][index]}</span><h3>{title}</h3><p>{copy}</p><a href={`${hubspot}/resources`} target="_blank" rel="noopener noreferrer">{link} →</a></article>)}</div>
        </div>
      </section>

      <section className="aeo-faq aeo-section">
        <div className="aeo-container">
          <h2>Frequently Asked Questions About HubSpot AEO</h2>
          <div className="aeo-faq-grid">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "open" : ""} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><span>{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
        </div>
      </section>

      <section className="aeo-final-cta">
        <div className="aeo-container"><span className="aeo-eyebrow">HUBSPOT AEO</span><h2>Show up in AI answers with HubSpot AEO.</h2><p>Stop guessing. Get a clear picture of how AI sees your business — and what to do next.</p><ActionButtons footer /><small>Includes 25 prompts — buy more anytime.</small></div>
      </section>

      <footer className="aeo-footer">
        <div className="aeo-container">
          <div className="aeo-footer-grid">{footerColumns.map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map((link) => <a href={hubspot} target="_blank" rel="noopener noreferrer" key={link}>{link}</a>)}</div>)}</div>
          <div className="aeo-social">{[["Facebook", "f"], ["Instagram", "◎"], ["YouTube", "▶"], ["Twitter", "𝕏"], ["LinkedIn", "in"], ["Reddit", "◉"], ["TikTok", "♪"]].map(([name, icon]) => <a href={hubspot} target="_blank" rel="noopener noreferrer" aria-label={name} key={name}>{icon}</a>)}</div>
          <div className="aeo-footer-bottom"><strong>HubSpot</strong><p>Copyright © 2026 HubSpot, Inc.</p><div><a href="https://legal.hubspot.com">Legal Center</a><a href="https://legal.hubspot.com/privacy-policy">Privacy Policy</a><a href={`${hubspot}/security`}>Security</a><a href={`${hubspot}/accessibility`}>Website Accessibility</a><a href="https://legal.hubspot.com/cookie-policy">Manage Cookies</a></div></div>
        </div>
      </footer>
    </main>
  );
}

export default AEO;