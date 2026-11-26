import React, { useState } from "react";
import "../App.css";

const basePath = "/Revenue hub/";

// ================= IMAGES AND VIDEOS =================

const media = {
  productLogo: `${basePath}Commercehub.webp`,

  hero: `${basePath}RevenueHeader.mp4`,
  quotes: `${basePath}RevenueFeature.mp4`,
  billing: `${basePath}RevenueFeature02.mp4`,
  payments: `${basePath}RevenueFeature03.mp4`,
  demo: `${basePath}RevenueHeader.mp4`,

  sales: "/images/Sales Hub.webp",
  customerSuccess: "/Service hub/CustomerSuccess.webp",
  finance: "/images/Sales Dashboard.webp",

  workleap: "/images/img1.webp",
};

// ================= BRAND LOGOS =================

const brands = [
  { name: "Amika", logo: "/images/amika.jpg" },
  { name: "Canadian Red Cross", logo: "/images/Canadian.webp" },
  { name: "DoorDash", logo: "/images/Doordash.webp" },
  { name: "Kaplan", logo: "/images/Kplan.webp" },
  { name: "GoFundMe", logo: "/images/Go.webp" },
  { name: "GameSquare", logo: "/images/Gamesquare.webp" },
  { name: "Morehouse College", logo: "/images/Morehouse.webp" },
];

// ================= USE CASES =================

const useCases = [
  {
    title: "Create quotes with prompts, not spreadsheets.",
    description:
      "Reps build quotes using simple chat prompts without leaving their workflow. Breeze, Alchemize Technologies’s AI, crafts the quote, approvals, and rules, using complete customer context, so every quote they send is the right one, not just a fast one.",
    points: [
      "Build personalized quotes fast with AI prompts and a visual editor",
      "Customers review, sign, and pay in one place",
      "Closing agent answers customer questions 24/7",
      "Signed quotes flow straight into contracts and billing",
    ],
    note:
      "Third-party AI providers are contractually prohibited from training their models on your data.",
    video: media.quotes,
    stats: [
      { value: "15", label: "minutes quote to signature" },
      { value: "3x", label: "deal conversion rate" },
    ],
  },

  {
    title: "Keep billing up to date for every agent and rep.",
    description:
      "When a quote is accepted, billing kicks off automatically. No manual invoice creation, no handoffs. Every contract record, change, and renewal lives in Alchemize Technologies, so your agents and reps get the same clean revenue data.",
    points: [
      "Bill accurately through every mid-contract change",
      "Reps renew and upsell from full contract history",
      "Build real-time revenue reports with complete data",
    ],
    video: media.billing,
    stats: [
      { value: "20", label: "invoicing hours saved per month" },
      { value: "50%", label: "reporting time saved" },
    ],
  },

  {
    title: "Let payments collect themselves.",
    description:
      "Once a deal closes, payments flow back to your CRM. Breeze prioritizes who's overdue, reaches out on your team's behalf, and handles follow-up, so your reps focus on the conversations that actually need them.",
    points: [
      "Collect using Alchemize Technologies payments via card, ACH, and more",
      "Revenue agent (beta) chases overdue invoices",
      "Customers can pay via customer agent or billing portal",
      "Payment status stays current in Alchemize Technologies and integrated tools",
    ],
    video: media.payments,
    stats: [
      { value: "155", label: "payment admin hours saved" },
      { value: "25%", label: "faster time to close using payments" },
    ],
  },
];

// ================= BENEFITS =================

const benefits = {
  Sales: {
    image: media.sales,
    title: "Go from quote to close, faster.",
    description:
      "Reps can build quotes with simple chat prompts without leaving their workflow — so they spend their time selling, not configuring. The faster sales can send quotes, the faster the deals can close.",
  },

  "Customer Success": {
    image: media.customerSuccess,
    title: "Catch renewals and spot upsells earlier.",
    description:
      "Give customer success teams access to complete contract history, customer records, and renewal information to identify growth opportunities.",
  },

  "Finance & RevOps": {
    image: media.finance,
    title: "Run revenue operations in one connected system.",
    description:
      "Connect quotes, contracts, invoices, and payments with consistent revenue data across every team.",
  },
};

// ================= COMPARISON TABLE =================

const comparisonData = [
  {
    capability: "Connected quote to contract to payment",
    revenue: true,
    point: false,
    legacy: false,
  },
  {
    capability: "Revenue context available to every agent and human",
    revenue: true,
    point: false,
    legacy: null,
  },
  {
    capability: "Natural language prompts across all revenue workflows",
    revenue: true,
    point: false,
    legacy: null,
  },
  {
    capability:
      "API and native Claude connector for agentic extensibility (more API tools coming soon)",
    revenue: true,
    point: false,
    legacy: null,
  },
];

const features = [
  {
    title: "Quotes",
    icon: "quotes",
    url: "/revenue",
    description:
      "Create personalized proposals in minutes using drag-and-drop or your favorite AI tool.",
  },
  {
    title: "Configure, price, quote (CPQ)",
    icon: "cpq",
    url: "/revenue",
    description:
      "Build quotes, apply pricing rules, and add discount guardrails from the deal record.",
  },
  {
    title: "Contracts",
    icon: "contracts",
    url: "/",
    description:
      "Turn signed quotes into structured contract records automatically — no manual setup, no handoff gaps.",
  },
  {
    title: "Subscription billing",
    icon: "subscription",
    url: "/revenue",
    description:
      "Send accurate, recurring billing, even when customers make changes mid-contract.",
  },
  {
    title: "Invoices",
    icon: "invoices",
    url: "/revenue",
    description:
      "Send branded invoices that reflect the real contract and connect to every customer record.",
  },
  {
    title: "Payments",
    icon: "payments",
    url: "/revenue",
    description:
      "Collect credit card, ACH, recurring payments, and payment links — with status updates in real time.",
  },
  {
    title: "Breeze assistant",
    icon: "breeze",
    url: "/",
    description:
      "Get AI help inside Alchemize Technologies — drafting, summarizing, and answering questions on the fly.",
  },
  {
    title: "Customer agent",
    icon: "customer",
    url: "/",
    description:
      "Customers can check invoice status, ask billing questions, and pay through customer agent.",
  },
  {
    title: "Revenue reporting",
    icon: "reporting",
    url: "/",
    description:
      "Give every team one shared view of what's been quoted, billed, and collected.",
  },
  {
    title: "External revenue integrations",
    icon: "integrations",
    url: "/",
    description:
      "Bring revenue data from your existing finance tools into Alchemize Technologies, for one full picture.",
  },
  {
    title: "Revenue agent",
    icon: "revenue",
    url: "/",
    description:
      "The revenue agent (beta) chases overdue invoices on your team's behalf.",
  },
  {
    title: "Alchemize Technologies MCP connectors",
    icon: "mcp",
    url: "/",
    description:
      "Bring Alchemize Technologies data into your favorite AI tools through native MCP connectors.",
  },
];

// ================= PRICING =================

const pricing = [
  {
    name: "Free",
    icon: "free",
    subtitle: "No credit card required",
    price: "0",
    features: [
      "Invoices",
      "Payment links",
      "Subscriptions",
    ],
  },
  {
    name: "Professional",
    icon: "professional",
    subtitle: "Starts at",
    price: "95",
    features: [
      "Quotes",
      "Contracts",
      "E-signature (25/user/month)",
      "Revenue analytics suite",
      "Automated sales tax",
    ],
  },
  {
    name: "Enterprise",
    icon: "enterprise",
    subtitle: "Starts at",
    price: "140",
    features: [
      "Everything in Professional",
      "Advanced quote approvals",
      "Quote rules",
      "E-signature (50/user/month)",
    ],
  },
];

// ================= FAQ =================

const faqs = [
  {
    question: "What is Revenue Hub?",
    answer:
      "Revenue Hub connects quoting, contracts, billing, and payments in one CRM-powered platform.",
  },
  {
    question: "Is Revenue Hub the same as Commerce Hub?",
    answer:
      "Revenue Hub brings commerce and revenue management capabilities together within the Alchemize Technologies platform.",
  },
  {
    question: "How does Revenue Hub change how my sales team works?",
    answer:
      "Sales teams can create quotes, manage contracts, and track payments directly within their CRM workflow.",
  },
  {
    question:
      "Can Revenue Hub connect to my existing finance or billing tools?",
    answer:
      "Revenue Hub supports integrations with external finance and billing tools.",
  },
  {
    question: "How does Revenue Hub work with Breeze?",
    answer:
      "Breeze provides AI-powered assistance for quoting, billing, customer questions, and payment follow-ups.",
  },
  {
    question: "Is Revenue Hub available in my region?",
    answer:
      "Availability depends on your country, subscription, and payment processing requirements.",
  },
  {
    question: "How is Revenue Hub priced?",
    answer:
      "Revenue Hub offers Free, Professional, and Enterprise editions with different capabilities.",
  },
  {
    question: "Does Revenue Hub include CPQ software?",
    answer:
      "Revenue Hub includes configure, price, quote capabilities for building quotes and managing pricing rules.",
  },
];

// ================= FOOTER DATA =================

const footerGroups = [
  {
    title: "Popular Features",
    links: [
      "All Products and Features",
      "Alchemize Technologies AEO",
      "Free Meeting Scheduler App",
      "Email Tracking Software",
      "AI Content Writer",
      "AI Website Generator",
      "Email Marketing Software",
      "Lead Management Software",
      "AI Prospecting Agent",
      "Free Website Builder",
      "Free Online Form Builder",
      "Free Landing Page Builder",
      "Free Chatbot Builder",
      "Free Live Chat Software",
      "Marketing Analytics",
      "Breeze Assistant",
      "Free Web Hosting",
    ],
  },

  {
    title: "Free Tools",
    links: [
      "See All Free Business Tools",
      "AI Search Grader",
      "AI Search Sensor",
      "Make My Persona",
      "Email Signature Generator",
      "Free Business Templates",
      "Software Comparisons Library",
      "Website Templates",
      "Connector for Claude",
    ],
  },

  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Management Team",
      "Board of Directors",
      "Investor Relations",
      "Blog",
      "Sustainability",
      "AI Instructions",
      "Contact Us",
    ],
  },

  {
    title: "Customers",
    links: [
      "Customer Support",
      "Join a Local User Group",
    ],
  },

  {
    title: "Partners",
    links: [
      "All Partner Programs",
      "Solutions Partner Program",
      "Technology Partner Program",
      "Alchemize Technologies for Startups",
      "Affiliate Program",
    ],
  },
];

// ================= CUSTOMER STORIES =================

const customerStories = {
  Enterprise: {
    logo: media.workleap,

    quote:
      "Now the quote can speak for itself. Having accurate billing information flow straight through to invoicing, subscription activation, and renewals is huge for us — and customers know exactly what they’re getting upfront.",

    name: "Donavyn Mendonça",

    role: "Manager, Revenue Systems, Workleap",

    stats: [
      {
        value: "15",
        label: "minutes from quote to signature",
      },
      {
        value: "10%",
        label: "of manager's time saved",
      },
    ],
  },
};

// ================= CLICKABLE CTA BUTTONS =================

function CTAButtons({ premium = false }) {

  const handleDemo = () => {
    window.location.assign(
      "/revenue"
    );
  };

  const handleTrial = () => {
    window.location.assign(
      "/revenue"
    );
  };

  return (
    <div className="rh-buttons">

      <button
        type="button"
        className="rh-btn rh-btn-primary"
        onClick={handleDemo}
      >
        {premium
          ? "Get a demo of premium editions"
          : "Get a demo"}
      </button>

      <button
        type="button"
        className="rh-btn rh-btn-secondary"
        onClick={handleTrial}
      >
        Start 14-day free trial
      </button>

    </div>
  );
}

// ================= STATUS ICON =================

function StatusIcon({ value }) {
  if (value === null) {
    return <span className="rh-partial">—</span>;
  }
  return (
    <span
      className={`rh-status-icon ${value ? "rh-status-yes" : "rh-status-no"}`}
      role="img"
      aria-label={value ? "Includes capability" : "Does not include capability"}
    >
      {value ? "✓" : "×"}
    </span>
  );
}

function FeatureIcon({ name }) {
  const icons = {
    quotes: "▤",
    cpq: "$",
    contracts: "§",
    subscription: "↻",
    invoices: "≡",
    payments: "◎",
    breeze: "✦",
    customer: "◉",
    reporting: "▥",
    integrations: "⌁",
    revenue: "↗",
    mcp: "⌘",
  };

  return (
    <span className="rh-feature-icon" aria-hidden="true">
      {icons[name] || "◆"}
    </span>
  );
}

function PlanIcon({ name }) {
  const symbols = {
    free: "●",
    professional: "◆",
    enterprise: "✦",
  };

  return (
    <span className={`rh-plan-icon rh-plan-${name}`} aria-hidden="true">
      {symbols[name] || "●"}
    </span>
  );
}

function AwardBadge({ title, detail }) {
  return (
    <div className="rh-award-badge" aria-label={`${detail}: ${title}`}>
      <span>{detail}</span>
      <strong>{title}</strong>
    </div>
  );
}

// ================= MAIN COMPONENT =================

function RevenueHub() {

  const [activeBenefit, setActiveBenefit] =
    useState("Sales");

  const [activeStory, setActiveStory] =
    useState("Enterprise");

  const [activeNav, setActiveNav] =
    useState("use-cases");

  const [openFaq, setOpenFaq] = useState(null);

  const story = customerStories[activeStory];

  // Smooth scrolling navigation

  const scrollToSection = (section) => {
    setActiveNav(section);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (

    <main className="revenue-hub">

      {/* ================= BREADCRUMB ================= */}

      <div className="rh-breadcrumb rh-container">

        <a href="/">Home</a>

        <span>›</span>

        <span>Revenue Hub</span>

      </div>

      {/* ================= HERO SECTION ================= */}

      <section className="rh-hero">

        <div className="rh-container rh-hero-layout">

          <div className="rh-hero-content">

            <div className="rh-product-name">

              <img
                src={media.productLogo}
                alt=""
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "contain",
                }}
              />

              Revenue Hub

            </div>

            <h1>
              Quote, bill, and collect — all through Alchemize Technologies.
            </h1>

            <p>
              Your CRM already knows your customers.
              Now it handles your revenue, too.
            </p>

            <CTAButtons />

            <div className="rh-awards">
              <AwardBadge detail="SPRING 2026" title="Grid Leader" />
              <AwardBadge detail="SPRING 2026" title="Momentum Leader" />
              <AwardBadge detail="SPRING 2026" title="Most Implementable" />
              <AwardBadge detail="SPRING 2026" title="Best Relationship" />
            </div>

          </div>

          {/* RevenueHeader.mp4 */}

          <div className="rh-hero-image">

            <video
              src={media.hero}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{
                width: "100%",
                display: "block",
              }}
            />

          </div>

        </div>

      </section>

      {/* ================= TRUSTED BRANDS ================= */}

      <section className="rh-trusted">

        <h3>
          Trusted by 306,000+ customers worldwide
        </h3>

        <div className="rh-logo-slider">

          <div className="rh-logo-track">

            {[...brands, ...brands].map((brand, index) => (

              <div
                className="rh-brand"
                key={`${brand.name}-${index}`}
              >

                <img
                  src={brand.logo}
                  alt={brand.name}
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= STICKY NAVIGATION ================= */}

      <nav className="rh-section-nav">

        {[
          ["use-cases", "Use Cases"],
          ["benefits", "Benefits"],
          ["features", "Features"],
          ["pricing", "Pricing"],
        ].map(([id, label]) => (

          <button
            type="button"
            key={id}
            className={activeNav === id ? "active" : ""}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>

        ))}

      </nav>

      {/* ================= USE CASES ================= */}

      <section
        id="use-cases"
        className="rh-use-cases rh-section"
      >

        <div className="rh-container">

          <div className="rh-section-heading">

            <span className="rh-eyebrow">
              USE CASES
            </span>

            <h2>
              Go from quote to cash faster. Grow revenue.
              Align every agent and team.
            </h2>

            <CTAButtons />

          </div>

          {useCases.map((item, index) => (

            <div
              className={`rh-use-case ${
                index % 2 !== 0 ? "rh-reverse" : ""
              }`}
              key={item.title}
            >

              <div className="rh-use-case-media">

                {/* RevenueFeature videos */}

                <div className="rh-video-wrapper">

                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                </div>

                <div className="rh-stats">

                  {item.stats.map((stat) => (

                    <div
                      className="rh-stat"
                      key={stat.label}
                    >

                      <h3>{stat.value}</h3>

                      <p>{stat.label}</p>

                    </div>

                  ))}

                </div>

              </div>

              <div className="rh-use-case-content">

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <ul className="rh-check-list">

                  {item.points.map((point, pointIndex) => (

                    <li key={point}>

                      <span className="rh-tick">✓</span>

                      <div>

                        {point}

                        {pointIndex === 0 && item.note && (

                          <small className="rh-note">
                            {item.note}
                          </small>

                        )}

                      </div>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= DEMO VIDEO ================= */}

      <section className="rh-demo rh-section">

        <div className="rh-container">

          <div className="rh-section-heading">

            <h2>See Revenue Hub in action.</h2>

            <p>
              How quoting, billing, and payments work
              as one connected system.
            </p>

          </div>

          <div className="rh-demo-video">

            <video
              src={media.demo}
              controls
              playsInline
              preload="metadata"
            />

          </div>

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section
        className="rh-benefits rh-section"
        id="benefits"
      >

        <div className="rh-container">

          <div className="rh-section-heading">

            <span className="rh-eyebrow">
              BENEFITS
            </span>

            <h2>Built for every revenue team</h2>

            <p>
              Sales closes faster. Customer success catches
              renewals and spots upsells earlier. Finance closes
              the month with consistent revenue data.
              RevOps runs one system, not many.
            </p>

          </div>

          {/* Clickable Benefit Tabs */}

          <div className="rh-tabs">

            {Object.keys(benefits).map((tab) => (

              <button
                type="button"
                key={tab}
                className={
                  activeBenefit === tab ? "active" : ""
                }
                onClick={() => setActiveBenefit(tab)}
              >

                {tab}

              </button>

            ))}

          </div>

          <div className="rh-benefit-panel">

            <div className="rh-benefit-image">

              <img
                src={benefits[activeBenefit].image}
                alt={activeBenefit}
              />

            </div>

            <div className="rh-benefit-content">

              <h2>
                {benefits[activeBenefit].title}
              </h2>

              <p>
                {benefits[activeBenefit].description}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CUSTOMER STORIES ================= */}

      <section className="rh-stories rh-section">

        <div className="rh-container">

          <div className="rh-section-heading">

            <h2>
              Real challenges. Real teams.
              Real revenue results.
            </h2>

          </div>

          <div className="rh-tabs">

            {[
              "Enterprise",
              "Mid-size",
              "Small business",
            ].map((tab) => (

              <button
                type="button"
                key={tab}
                className={
                  activeStory === tab ? "active" : ""
                }
                onClick={() => setActiveStory(tab)}
              >

                {tab}

              </button>

            ))}

          </div>

          {story ? (

            <div className="rh-story-card">

              <div className="rh-story-content">

                <img
                  className="rh-story-logo"
                  src={story.logo}
                  alt="Workleap Logo"
                />

                <blockquote>
                  “{story.quote}”
                </blockquote>

                <h4>{story.name}</h4>

                <p>{story.role}</p>

                <a
                  className="rh-text-link"
                  href="/"
                >
                  Read the full case study →
                </a>

              </div>

              <div className="rh-story-stats">

                {story.stats.map((stat) => (

                  <div key={stat.label}>

                    <h3>{stat.value}</h3>

                    <p>{stat.label}</p>

                  </div>

                ))}

              </div>

            </div>

          ) : (

            <div className="rh-story-card">

              <p>
                Customer story for {activeStory} will appear here.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* ================= COMPARISON TABLE ================= */}

      <section className="rh-comparison rh-section">

        <div className="rh-container">

          <div className="rh-section-heading">

            <h2>
              Point solutions bolt on. Revenue Hub is built in.
              How Revenue Hub compares.
            </h2>

            <p>
              Most revenue processes run in fragmented point
              solutions or spreadsheets — separate from the CRM.
              The result: an incomplete revenue picture that lacks
              context. Revenue Hub is built into Alchemize Technologies,
              so every rep, agent, and team works from the same
              complete revenue picture.
            </p>

          </div>

          <div className="rh-table-wrapper">

            <table className="rh-comparison-table">

              <thead>

                <tr>

                  <th>CAPABILITY</th>

                  <th>REVENUE HUB</th>

                  <th>POINT SOLUTIONS</th>

                  <th>LEGACY CRM</th>

                </tr>

              </thead>

              <tbody>

                {comparisonData.map((row) => (

                  <tr key={row.capability}>

                    <td>
                      {row.capability}
                    </td>

                    <td>
                      <StatusIcon value={row.revenue} />
                    </td>

                    <td>
                      <StatusIcon value={row.point} />
                    </td>

                    <td>
                      <StatusIcon value={row.legacy} />
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="rh-table-legend">

            <span>

              <StatusIcon value={true} />

              Includes capability

            </span>

            <span>

              <StatusIcon value={null} />

              Partial/inconsistent capability

            </span>

            <span>

              <StatusIcon value={false} />

              Does not include capability

            </span>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section
        className="rh-features rh-section"
        id="features"
      >

        <div className="rh-container">

          <div className="rh-section-heading">

            <span className="rh-eyebrow">
              FEATURES
            </span>

            <h2>
              All the revenue tools. None of the switching.
            </h2>

            <CTAButtons />

          </div>

          <div className="rh-feature-grid">

            {features.map((feature) => (

              <article
                className="rh-feature-card"
                key={feature.title}
              >

                <FeatureIcon name={feature.icon} />

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PRICING ================= */}

      <section
        className="rh-pricing rh-section"
        id="pricing"
      >

        <div className="rh-container">

          <div className="rh-section-heading">

            <span className="rh-eyebrow">
              PRICING
            </span>

            <h2>
              Revenue Hub for every stage of growth.
            </h2>

            <p>
              Start free. Grow into the full revenue process.
              Pairs perfectly with Sales Hub and all Alchemize Technologies tools.
            </p>

            <a
              className="rh-text-link"
              href="/sales"
            >

              Explore Sales Hub →

            </a>

          </div>

          <div className="rh-pricing-grid">

            {pricing.map((plan) => (

              <article
                key={plan.name}
                className={`rh-price-card ${
                  plan.name === "Professional"
                    ? "rh-highlight-plan"
                    : ""
                }`}
              >

                <div className="rh-price-heading">
                  <PlanIcon name={plan.icon} />
                  <h3>{plan.name}</h3>
                </div>

                <p>{plan.subtitle}</p>

                <div className="rh-price">

                  <strong>${plan.price}</strong>

                  <span>/month</span>

                </div>

                <hr />

                <h4>POPULAR FEATURES</h4>

                <ul className="rh-check-list">

                  {plan.features.map((feature) => (

                    <li key={feature}>

                      <span className="rh-tick">
                        ✓
                      </span>

                      {feature}

                    </li>

                  ))}

                </ul>

              </article>

            ))}

          </div>

          <CTAButtons premium />

          <p className="rh-pricing-note">

            *For more detailed information on product packaging
            and the limits that apply, please see our{" "}

            <a href="/">
              pricing page
            </a>

            . Price shown in USD and subject to applicable tax.

          </p>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="rh-faq rh-section">

        <div className="rh-container">

          <div className="rh-section-heading">

            <h2>
              Frequently Asked Questions About Revenue Hub Software
            </h2>

          </div>

          <div className="rh-faq-list">

            {faqs.map((faq, index) => (

              <div
                key={faq.question}
                className={`rh-faq-item ${
                  openFaq === index ? "open" : ""
                }`}
              >

                <button
                  type="button"
                  className="rh-faq-question"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                >

                  <span>
                    {faq.question}
                  </span>

                  <span className="rh-faq-icon">

                    {openFaq === index ? "−" : "+"}

                  </span>

                </button>

                {openFaq === index && (

                  <div className="rh-faq-answer">

                    <p>{faq.answer}</p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="rh-final-cta">

        <div className="rh-container">

          <h2>Run revenue in one place.</h2>

          <p>
            See how Revenue Hub turns quote-to-cash into one
            connected process — so your team spends less time
            reconciling, and more time growing.
          </p>

          <CTAButtons />

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="rh-footer">

        <div className="rh-container">

          <div className="rh-footer-grid">

            {footerGroups.map((group) => (

              <div
                className="rh-footer-column"
                key={group.title}
              >

                <h3>{group.title}</h3>

                {group.links.map((link) => (

                  <a
                    href={"/"}
                    key={link}
                  >

                    {link}

                  </a>

                ))}

              </div>

            ))}

          </div>

          {/* ================= SOCIAL MEDIA ================= */}

          <div className="rh-social-links">

            {[
              [
                "Facebook",
                "facebook",
                "/",
              ],
              [
                "Instagram",
                "instagram",
                "/",
              ],
              [
                "YouTube",
                "youtube",
                "/",
              ],
              [
                "Twitter",
                "twitter",
                "/",
              ],
              [
                "LinkedIn",
                "linkedin",
                "/",
              ],
              [
                "Reddit",
                "reddit",
                "/",
              ],
              [
                "TikTok",
                "tiktok",
                "/",
              ],
            ].map(([name, , url]) => (

              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >

                <span className="rh-social-icon" aria-hidden="true">
                  {name === "YouTube"
                    ? "▶"
                    : name === "LinkedIn"
                      ? "in"
                      : name.slice(0, 1)}
                </span>

              </a>

            ))}

          </div>

          {/* ================= FOOTER BOTTOM ================= */}

          <div className="rh-footer-bottom">

            <a href="/" style={{ display: "block", marginBottom: "12px", fontSize: "20px", fontWeight: 700 }}>
              Alchemize Technologies
            </a>

            <p>
              Copyright © 2026 Alchemize Technologies.
            </p>

            <div className="rh-legal-links">

              <a href="/">
                Legal Center
              </a>

              <a href="/">
                Privacy Policy
              </a>

              <a href="/">
                Security
              </a>

              <a href="/">
                Website Accessibility
              </a>

              <a href="/">
                Manage Cookies
              </a>

            </div>

          </div>

        </div>

      </footer>

    </main>

  );
}

export default RevenueHub;