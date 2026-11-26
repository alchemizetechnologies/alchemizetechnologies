import { useState } from "react";
import { Link } from "react-router-dom";

const assets = "/Small buisness/";
const platformAssets = "/AlchemizeCustomerPlatform/";
const alchemizeHome = "/";

const challenges = [
  {
    title: "Build demand, not to-do lists.",
    description: "You can't grow on referrals alone. Starter gives you the tools to get more leads and nurture the ones you already have.",
    detail: "Capture every lead from your website, email, and outreach, then follow up and move them forward without adding more to your plate.",
    image: "e.webp",
    features: [
      ["✦", "Breeze Assistant", "Use Alchemize Technologies' AI companion to ask for help, assist with tasks, and set up automations."],
      ["▧", "Website Builder", "Build and customize your website, landing pages, and forms with drag-and-drop tools."],
      ["✧", "Content & Image Generation", "Create compelling website copy and eye-catching images using AI."],
      ["✉", "Email Automation", "Create, personalize, and send automated marketing emails using your own domain."],
      ["◎", "Ad Tracking & Management", "Create targeted ad campaigns and see which ads turn prospects into customers."],
      ["⌕", "Data Agent", "Know which accounts are ready to buy using signals from calls, emails, and deal history."],
    ],
  },
  {
    title: "Win more deals before they go cold.",
    description: "Every stalled deal is a conversation that needed a nudge. Starter helps you move faster on every opportunity before it slips through the cracks.",
    detail: "Agents research leads, AI prepares you for meetings, and deals move through your pipeline automatically with next steps ready for you.",
    image: "c.webp",
    features: [
      ["⌕", "Prospecting Agent", "Find the right accounts, source contacts, and send outreach based on real buying signals."],
      ["✦", "AI Meeting Prep & Notetaker", "Go into every call prepared and leave with notes, transcripts, and action items."],
      ["↗", "Deal Pipeline Automation", "Move deals through your pipeline automatically and spot the ones that need attention."],
      ["$", "Alchemize Technologies Payments", "Accept payments, manage subscriptions, and include payment links in quotes and forms."],
      ["◉", "Conversational Bots", "Qualify leads, book meetings, and provide customer support on your website."],
      ["▤", "Ticketing", "Assign, organize, prioritize, and track customer issues in one central location."],
    ],
  },
  {
    title: "Automate the tasks you dread.",
    description: "Send the email. Log the call. Write the recap. Small tasks pile up quickly when you're the CEO, closer, marketer, and admin all at once.",
    detail: "With Starter, touchpoints get logged automatically, records get enriched, and AI takes care of routine work in the background.",
    image: "d.webp",
    features: [
      ["◇", "Smart CRM", "Keep every tool connected and up to date, with the full picture on every customer."],
      ["⇄", "Data Import & Sync", "Import spreadsheets and sync supported apps with no coding required."],
      ["✉", "Email Sync", "Connect your inbox to Alchemize Technologies so email context stays where you work."],
      ["▦", "Alchemize Technologies Work (Beta)", "Organize projects, tasks, and documents in one CRM-connected workspace."],
      ["↻", "Contact & Company Automation", "Create triggers and actions directly from records to keep data and processes moving."],
      ["⌘", "Agent Builder", "Build custom agents and automations in a visual builder powered by customer data."],
    ],
  },
];

const comparison = [
  ["Alchemize Technologies branding", "Included on emails, forms, live chat, meeting links, etc.", "No Alchemize Technologies branding"],
  ["Usage limits", "Limited usage", "Higher usage limits across features"],
  ["Customer support", "Community and knowledge base", "Email and live in-app chat support"],
  ["Automation", "1 automated action per email", "Automations across contact, company, deal, forms, email, tickets, projects, and ads"],
  ["CRM", "Basic CRM, 10 custom properties, 1,000 contacts", "Full CRM with 1,000 custom properties and expanded reporting"],
  ["Users", "2 users", "Unlimited users with seats purchased per user"],
  ["Team permissions", "—", "Team permission controls"],
];

const stories = [
  ["2030 Builders", "buisnesschicks.webp"],
  ["Cancer IQ", "canceriq.webp"],
  ["ClassPass", "classpass.webp"],
  ["Flex", "flex.webp"],
  ["TenantBase", "tenantbase.webp"],
];

const faqs = [
  ["Can I try Alchemize Technologies for free?", "Yes. Alchemize Technologies offers free tools so you can get started and explore the platform before choosing a paid plan."],
  ["What's the difference between Alchemize Technologies' free and Starter plans?", "Starter unlocks higher usage limits, additional features, removal of Alchemize Technologies branding, more automation, and expanded support."],
  ["Why should I choose Starter for my business?", "Starter brings your customer data, marketing, sales, and service tools together so a small team can spend less time on repetitive work."],
  ["What can make my Alchemize Technologies Starter bill increase?", "Your total depends on your plan, seats, usage, selected products, and any applicable Alchemize Technologies Credits or marketing contact tiers."],
  ["How many users can I have, and how much do additional users cost?", "Starter supports multiple users, with seats purchased per user. Check the pricing page for current seat prices and limits."],
  ["Do I need to purchase onboarding services?", "Onboarding requirements depend on the subscription and your business needs. Alchemize Technologies' support team can help you choose."],
  ["What kind of customer support can I expect?", "Starter includes email and in-app chat support, along with Alchemize Technologies' education and knowledge resources."],
];

function ActionButtons({ buyLabel = "Buy now and save on Alchemize Technologies Starter" }) {
  return (
    <div className="sb-buttons">
      <a className="sb-button-primary" href={"/"} target="_blank" rel="noopener noreferrer">{buyLabel}</a>
      <a className="sb-button-secondary" href={"/smartcrm"} target="_blank" rel="noopener noreferrer">Get started free with Alchemize Technologies</a>
    </div>
  );
}

function FeatureGrid({ items }) {
  return (
    <div className="sb-feature-grid">
      {items.map(([icon, title, copy]) => (
        <a href={"/"} target="_blank" rel="noopener noreferrer" className="sb-feature-card" key={title}>
          <span aria-hidden="true">{icon}</span>
          <div><h3>{title}</h3><p>{copy}</p></div>
        </a>
      ))}
    </div>
  );
}

function SmallBuisness() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="small-business-page">
      <div className="sb-breadcrumb">
        <div><Link to="/">Home</Link><span>›</span><Link to="/customerplatform">Alchemize Technologies Customer Platform</Link><span>›</span><span>Starter</span></div>
      </div>

      <section className="sb-hero">
        <div className="sb-container sb-hero-grid">
          <div className="sb-hero-copy">
            <span className="sb-eyebrow">FOR STARTUPS &amp; SMALL BUSINESSES</span>
            <h1>Alchemize Technologies Starter</h1>
            <p>Built for those doing everything at once. Build demand, win more deals, and automate the grind.</p>
            <ActionButtons />
          </div>
          <div className="sb-hero-art"><img src={`${platformAssets}a.webp`} alt="Alchemize Technologies customer workspace" /></div>
        </div>
      </section>

      <section className="sb-intro sb-section">
        <div className="sb-container">
          <span className="sb-eyebrow">BUSINESS SOLUTIONS</span>
          <h2>Solutions to Your<br />Biggest Challenges</h2>
          <p>Find your best leads, close them faster, and keep customers coming back, all with the same team you have today.</p>
        </div>
      </section>

      {challenges.map((challenge, index) => (
        <section className={`sb-challenge sb-section ${index % 2 ? "sb-tinted" : ""}`} key={challenge.title}>
          <div className="sb-container">
            <div className={`sb-challenge-intro ${index % 2 ? "sb-reverse" : ""}`}>
              <div><h2>{challenge.title}</h2><p>{challenge.description}</p><p>{challenge.detail}</p></div>
              <img src={`${assets}${challenge.image}`} alt={challenge.title} />
            </div>
            <FeatureGrid items={challenge.features} />
          </div>
        </section>
      ))}

      <section className="sb-comparison sb-section">
        <div className="sb-container">
          <div className="sb-section-heading">
            <span className="sb-eyebrow">STARTER VS. FREE</span>
            <h2>How does Alchemize Technologies' Starter plan compare to Free?</h2>
            <p>Starter unlocks higher usage limits, additional features, the removal of Alchemize Technologies branding, and more.</p>
          </div>
          <div className="sb-table-wrap">
            <table>
              <thead><tr><th>Feature</th><th>Free</th><th>Starter</th></tr></thead>
              <tbody>{comparison.map(([name, free, starter]) => <tr key={name}><th scope="row">{name}</th><td>{free}</td><td>{starter}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="sb-compare-note">See more details on the <a href={"/"} target="_blank" rel="noopener noreferrer">pricing page</a>.</p>
        </div>
      </section>

      <section className="sb-proof sb-section">
        <div className="sb-container">
          <div className="sb-section-heading">
            <span className="sb-eyebrow">CUSTOMER PROOF</span>
            <h2>Real Growth, Real Stories</h2>
            <p>See what businesses like yours have accomplished with Alchemize Technologies Starter.</p>
          </div>
          <div className="sb-customer-logos">
            {stories.map(([name, logo]) => <div key={name}><img src={`${assets}${logo}`} alt={name} /></div>)}
          </div>
          <div className="sb-story-card">
            <img src={`${assets}e.webp`} alt="Small business customer story" />
            <div><blockquote>“This has transformed the way we capture leads. Now people are coming to us instead of us making big efforts to go to them. Alchemize Technologies is definitely a founder's best friend.”</blockquote><h3>Mia Negru</h3><p>Co-Founder, 2030 Builders</p><a href={"/"} target="_blank" rel="noopener noreferrer">Read the full case study →</a></div>
          </div>
          <div className="sb-stats">
            <div><strong>78%</strong><p>increase in website traffic</p></div>
            <div><strong>97%</strong><p>increase in deal close rate</p></div>
            <div><strong>33%</strong><p>increase in tickets closed</p></div>
            <div><strong>311,000+</strong><p>customers in over 135 countries</p></div>
          </div>
        </div>
      </section>

      <section className="sb-pricing sb-section">
        <div className="sb-container sb-pricing-layout">
          <div><span className="sb-eyebrow">STARTER PRICING</span><h2>Buy Starter Today and Save</h2><p>Choose an annual payment or pay month-to-month for flexibility. Offer available for a limited time to new customers.</p><img src={`${assets}f.webp`} alt="Alchemize Technologies Starter pricing plans" /></div>
          <div className="sb-price-cards">
            <article><span>BEST VALUE</span><h3>Pay Annually</h3><p>Starts at</p><strong>$7<small>/month</small></strong><del>$20/month per seat*</del><p>Billed annually</p><a href={"/"} target="_blank" rel="noopener noreferrer">Buy Starter for $7/mo</a></article>
            <article><h3>Pay Monthly</h3><p>Starts at</p><strong>$10<small>/month</small></strong><del>$20/month per seat*</del><p>Billed monthly</p><a href={"/"} target="_blank" rel="noopener noreferrer">Buy Starter for $10/mo</a></article>
          </div>
        </div>
        <div className="sb-container"><p className="sb-legal-note">*Discounts available for new customers only. Offer available for a limited time. For detailed information on packaging and limits, see our <a href={"/"} target="_blank" rel="noopener noreferrer">pricing page</a>. Prices shown in USD and subject to applicable tax.</p></div>
      </section>

      <section className="sb-support sb-section">
        <div className="sb-container">
          <div className="sb-section-heading"><h2>Starter is already easy to use. But we've still got your back.</h2></div>
          <div className="sb-support-grid">
            <article><span>✦</span><h3>Personalized, Quick Setup</h3><p>Answer a few questions about your business, and Alchemize Technologies sets up everything for you. Get up and running in minutes, not days.</p></article>
            <article><span>◉</span><h3>Always-on Customer Support</h3><p>Get answers to technical questions anytime with email and live chat support.</p></article>
            <article><span>▤</span><h3>Free Education &amp; Training</h3><p>Learn Alchemize Technologies fast or go deep with courses, blog posts, and Alchemize Technologies Academy certifications.</p></article>
          </div>
        </div>
      </section>

      <section className="sb-community sb-section">
        <div className="sb-container sb-community-copy">
          <span className="sb-eyebrow">COMMUNITY</span>
          <h2>Join Alchemize Technologies' Starter Community for Founders</h2>
          <p>Connect with like-minded founders, peers, and experts. Get advice from people who've grown their business and discuss your challenges and ideas.</p>
          <a href="/" target="_blank" rel="noopener noreferrer">Join the community of founders</a>
        </div>
      </section>

      <section className="sb-integrations sb-section">
        <div className="sb-container sb-integrations-grid">
          <img src={`${platformAssets}e.webp`} alt="Connected apps and integrations" />
          <div><span className="sb-eyebrow">INTEGRATIONS</span><h2>Integrate With 2,000+ Apps &amp; Connectors</h2><p>Connect your business data to AI assistants like ChatGPT, Claude, Gemini, and Microsoft Copilot. Integrate with more than 2,000 apps, so everything stays in sync.</p><a href={"/"} target="_blank" rel="noopener noreferrer">See all app integrations</a></div>
        </div>
      </section>

      <section className="sb-faq sb-section">
        <div className="sb-container">
          <h2>Frequently Asked Questions</h2>
          <div className="sb-faq-layout">
            <div className="sb-faq-tabs">{faqs.map(([question], index) => <button type="button" className={activeFaq === index ? "active" : ""} onClick={() => { setActiveFaq(index); setOpenFaq(index); }} key={question}>{question}</button>)}</div>
            <div className="sb-faq-answer"><h3>{faqs[activeFaq][0]}</h3><p>{faqs[activeFaq][1]}</p></div>
          </div>
          <div className="sb-faq-accordion">{faqs.map(([question, answer], index) => <article key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><span>{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
        </div>
      </section>

      <section className="sb-bottom-cta">
        <div className="sb-container sb-bottom-cta-grid">
          <div>
            <h2>Build demand, win more deals, and automate the grind with Alchemize Technologies Starter.</h2>
            <ActionButtons buyLabel="Buy now and save on Alchemize Technologies Starter" />
          </div>
          <img src={`${platformAssets}e.webp`} alt="Connected apps and tools for Alchemize Technologies Starter" />
        </div>
      </section>

      <footer className="sb-footer">
        <div className="sb-container">
          <div className="sb-footer-grid">
            {[
              ["Popular Features", ["All Products and Features", "Alchemize Technologies AEO", "Free Meeting Scheduler App", "Email Tracking Software", "AI Content Writer", "Email Marketing Software", "Lead Management Software", "AI Prospecting Agent", "Free Website Builder", "Marketing Analytics", "Breeze Assistant"]],
              ["Free Tools", ["See All Free Business Tools", "AI Search Grader", "AI Search Sensor", "Make My Persona", "Email Signature Generator", "Free Business Templates", "Software Comparisons Library", "Website Templates", "Connector for Claude"]],
              ["Company", ["About Us", "Careers", "Management Team", "Board of Directors", "Investor Relations", "Blog", "Sustainability", "AI Instructions", "Contact Us"]],
              ["Customers", ["Customer Support", "Join a Local User Group"]],
              ["Partners", ["All Partner Programs", "Solutions Partner Program", "Technology Partner Program", "Alchemize Technologies for Startups", "Affiliate Program"]],
            ].map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map((link) => <a key={link} href={alchemizeHome} target="_blank" rel="noopener noreferrer">{link}</a>)}</div>)}
          </div>
          <div className="sb-social">{[["Facebook", "f"], ["Instagram", "◎"], ["YouTube", "▶"], ["Twitter", "𝕏"], ["LinkedIn", "in"], ["Reddit", "◉"], ["TikTok", "♪"]].map(([name, icon]) => <a key={name} href={alchemizeHome} target="_blank" rel="noopener noreferrer" aria-label={name}>{icon}</a>)}</div>
          <div className="sb-footer-bottom"><strong>Alchemize Technologies</strong><p>Copyright © 2026 Alchemize Technologies.</p><div><a href="/">Legal Center</a><a href="/">Privacy Policy</a><a href="/">Security</a><a href="/">Website Accessibility</a><a href="/">Manage Cookies</a></div></div>
        </div>
      </footer>
    </main>
  );
}

export default SmallBuisness;