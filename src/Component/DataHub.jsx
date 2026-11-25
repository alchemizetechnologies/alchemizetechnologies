import React from "react";
import { Link } from "react-router-dom";

const hubspot = "https://www.hubspot.com";
const data = `${hubspot}/products/data`;
const content = `${hubspot}/products/content`;
const marketing = `${hubspot}/products/marketing`;
const sales = `${hubspot}/products/sales`;
const service = `${hubspot}/products/service`;

const imagePath = "/Data hub/";
const serviceImagePath = "/Service hub/";
const commonImagePath = "/images/";

function DataHub() {

  // =====================================
  // COMBINE DATA ACROSS YOUR TECH STACK
  // =====================================

  const contentFeatures = [
    {
      icon: "▤",
      title: "Data Studio",
      description: "Blend first and third-party data in an approachable interface.",
      url: data
    },
    {
      icon: "⇄",
      title: "Cloud Data Storage Integrations",
      description: "Bidirectionally sync data across cloud data storage platforms.",
      url: data
    },
    {
      icon: "⟳",
      title: "Data Sync Software",
      description: "Unify your tech stack with 100+ integrations that sync in real-time.",
      url: data
    }
  ];


  // =====================================
  // ENHANCE DATA QUALITY AUTOMATICALLY
  // =====================================

  const managementFeatures = [
    {
      icon: "✓",
      title: "Data Quality Overview",
      description: "Monitor and improve data health automatically.",
      url: data
    },
    {
      icon: "⚙",
      title: "Automation",
      description: "Fix formatting issues and create custom rules to keep your data clean and consistent.",
      url: data
    },
    {
      icon: "▥",
      title: "Dashboards & Reporting",
      description: "Empower your team with a single source of truth for your marketing, sales, and service data.",
      url: data
    }
  ];


  // =====================================
  // CUSTOMER COMPANY LOGOS
  // =====================================

  const brands = [
    {
      name: "Liquidity Services",
      logo: `${imagePath}liquidity.jpg`,
      url: "https://www.liquidityservices.com"
    },
    {
      name: "Dickeys Barbecue",
      logo: `${serviceImagePath}Dickey.jpg`,
      url: "https://www.dickeys.com"
    },
    {
      name: "Golds Gym",
      logo: `${imagePath}goldy.webp`,
      url: "https://www.goldsgym.com"
    },
    {
      name: "DoorDash",
      logo: `${commonImagePath}Doordash.webp`,
      url: "https://www.doordash.com"
    },
    {
      name: "Rakuten Advertising",
      logo: `${imagePath}rakuten.webp`,
      url: "https://rakutenadvertising.com"
    },
    {
      name: "Eventbrite",
      logo: `${imagePath}Eventbrite.webp`,
      url: "https://www.eventbrite.com"
    },
    {
      name: "HBK CPA",
      logo: `${imagePath}hbk.webp`,
      url: "https://hbkcpa.com"
    },
    {
      name: "Kahoot",
      logo: `${serviceImagePath}Kahoot.png`,
      url: "https://kahoot.com"
    }
  ];


  // =====================================
  // DATA HUB PRICING PLANS
  // =====================================

  const pricingPlans = [
    {
      icon: "◇",
      name: "Free",
      subtitle: "No credit card required",
      price: "$0/month",
      features: [
        "Sync data between apps",
        "Clean basic data issues",
        "Default field mappings",
        "Access all integrations"
      ]
    },
    {
      icon: "✦",
      name: "Starter",
      subtitle: "Starts at",
      price: "$10/month",
      oldPrice: "$20/month",
      note: "per seat*",
      features: [
        "Custom field mappings",
        "Advanced data sync",
        "Basic quality tools",
        "Email & chat support"
      ]
    },
    {
      icon: "▥",
      name: "Professional",
      subtitle: "Starts at",
      price: "$800/month",
      note: "(1 seat included)",
      features: [
        "Create datasets with AI",
        "Clean data at scale",
        "Automate processes",
        "Monitor data health"
      ]
    },
    {
      icon: "◆",
      name: "Enterprise",
      subtitle: "Starts at",
      price: "$2,000/month",
      note: "(1 seat included)",
      features: [
        "Build advanced datasets",
        "Connect data warehouses and storage platforms",
        "Calculate advanced metrics",
        "Share data securely"
      ]
    }
  ];


  // =====================================
  // FREQUENTLY ASKED QUESTIONS
  // =====================================

  const faqs = [
    {
      question: "How does Data Hub help with AI adoption?",
      answer: "Data Hub helps businesses unify, clean, and organize their data so AI-powered tools can work with more accurate and consistent information."
    },
    {
      question: "How does Data Hub pricing work?",
      answer: "Data Hub offers Free, Starter, Professional, and Enterprise pricing plans with different data management, automation, and integration capabilities."
    },
    {
      question: "Who should use Data Hub?",
      answer: "Data Hub is designed for businesses and teams looking to connect data sources, improve data quality, automate processes, and gain actionable insights."
    },
    {
      question: "How does Data Hub work with other HubSpot products?",
      answer: "Data Hub connects customer data across Marketing Hub, Sales Hub, Service Hub, and Content Hub, helping teams work with unified and consistent information."
    }
  ];


  // =====================================
  // POPULAR FEATURES FOOTER
  // =====================================

  const popularFeatures = [
    ["All Products and Features", `${hubspot}/products`],
    ["HubSpot AEO", marketing],
    ["Free Meeting Scheduler App", sales],
    ["Email Tracking Software", sales],
    ["AI Content Writer", content],
    ["AI Website Generator", content],
    ["Email Marketing Software", marketing],
    ["Lead Management Software", sales],
    ["AI Prospecting Agent", sales],
    ["Free Website Builder", content],
    ["Free Landing Page Builder", marketing],
    ["Free Online Form Builder", marketing],
    ["Free Chatbot Builder", service],
    ["Free Live Chat Software", service],
    ["Marketing Analytics", marketing],
    ["Breeze Assistant", `${hubspot}/products`],
    ["Free Web Hosting", content]
  ];


  // =====================================
  // FREE TOOLS FOOTER
  // =====================================

  const freeTools = [
    ["See All Free Business Tools", hubspot],
    ["AEO Grader", marketing],
    ["AI Search Sensor", marketing],
    ["Make My Persona", `${hubspot}/make-my-persona`],
    ["Email Signature Generator", `${hubspot}/email-signature-generator`],
    ["Free Business Templates", `${hubspot}/resources`],
    ["Software Comparisons Library", `${hubspot}/resources`],
    ["Website Templates", content],
    ["Connector for Claude", `${hubspot}/products`]
  ];


  // =====================================
  // COMPANY FOOTER
  // =====================================

  const company = [
    ["About Us", `${hubspot}/company/about`],
    ["Careers", `${hubspot}/careers`],
    ["Management Team", `${hubspot}/company`],
    ["Board of Directors", "https://ir.hubspot.com"],
    ["Investor Relations", "https://ir.hubspot.com"],
    ["Blog", "https://blog.hubspot.com"],
    ["Sustainability", `${hubspot}/company`],
    ["AI Instructions", `${hubspot}/products`],
    ["Contact Us", `${hubspot}/company/contact`]
  ];


  // =====================================
  // CUSTOMERS FOOTER
  // =====================================

  const customers = [
    ["Customer Support", "https://help.hubspot.com"],
    ["Join a Local User Group", "https://community.hubspot.com"]
  ];


  // =====================================
  // PARTNERS FOOTER
  // =====================================

  const partners = [
    ["All Partner Programs", `${hubspot}/partners`],
    ["Solutions Partner Program", `${hubspot}/partners`],
    ["Technology Partner Program", `${hubspot}/partners`],
    ["HubSpot for Startups", `${hubspot}/startups`],
    ["Affiliate Program", `${hubspot}/partners`]
  ];


  // =====================================
  // SOCIAL MEDIA LINKS
  // =====================================

  const socialLinks = [
    ["Facebook", "f", "https://www.facebook.com/hubspot"],
    ["Instagram", "◎", "https://www.instagram.com/hubspot"],
    ["YouTube", "▶", "https://www.youtube.com/@HubSpot"],
    ["Twitter", "𝕏", "https://x.com/HubSpot"],
    ["LinkedIn", "in", "https://www.linkedin.com/company/hubspot/"],
    ["Reddit", "◉", "https://www.reddit.com/r/hubspot/"],
    ["TikTok", "♪", "https://www.tiktok.com/@hubspot"]
  ];


  // =====================================
  // REUSABLE DEMO AND TRIAL BUTTONS
  // =====================================

  const renderButtons = (
    demoText = "Get a demo",
    trialText = "Start 14-day free trial"
  ) => (

    <div className="marketing-buttons">

      <a
        className="demo-btn"
        href={data}
        target="_blank"
        rel="noopener noreferrer"
      >
        {demoText}
      </a>

      <a
        className="trial-btn"
        href={data}
        target="_blank"
        rel="noopener noreferrer"
      >
        {trialText}
      </a>

    </div>

  );


  // =====================================
  // CLICKABLE FEATURE CARDS
  // =====================================

  const renderFeatures = (features) => (

    <div className="feature-grid">

      {features.map((feature) => (

        <a
          className="feature-card"
          key={feature.title}
          href={feature.url}
          target="_blank"
          rel="noopener noreferrer"
        >

          <span className="feature-icon">
            {feature.icon}
          </span>

          <div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        </a>

      ))}

    </div>

  );


  // =====================================
  // CLICKABLE FOOTER LINKS
  // =====================================

  const renderFooterLinks = (links) => (

    <ul>

      {links.map(([name, url]) => (

        <li key={name}>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>

        </li>

      ))}

    </ul>

  );


  // =====================================
  // FAQ ACCORDION
  // =====================================

  const renderFAQ = (items) => (

    <div className="faq-column">

      {items.map((faq) => (

        <details
          className="faq-item"
          key={faq.question}
        >

          <summary>

            {faq.question}

            <span className="faq-arrow">
              ⌄
            </span>

          </summary>

          <p>{faq.answer}</p>

        </details>

      ))}

    </div>

  );


  return (

    <div className="marketing-page data-page">


      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/data">
          Data Hub
        </Link>

      </div>


      {/* =====================================
          DATA HUB HERO SECTION
      ===================================== */}

      <section className="marketing-hub data-hub">

        <a
          className="hub-logo"
          href={data}
          target="_blank"
          rel="noopener noreferrer"
        >

          <svg
            className="hub-icon"
            width="35"
            height="35"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >

            <circle
              cx="16"
              cy="16"
              r="14"
              fill="#ff4800"
            />

            <ellipse
              cx="16"
              cy="10"
              rx="7"
              ry="3"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />

            <path
              d="M9 10V22C9 26 23 26 23 22V10"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />

            <path
              d="M9 16C9 20 23 20 23 16"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />

          </svg>

          <span>Data Hub®</span>

        </a>

        <h1>Data Management Software</h1>

        <p>
          Transform scattered data into actionable
          intelligence with AI-powered data management.
        </p>

        {renderButtons()}


        {/* =====================================
            HERO IMAGE - Data Hub.webp
        ===================================== */}

        <div className="hero-image data-hero-image">

          <img
            src={`${imagePath}Data Hub.webp`}
            alt="Data Hub - Data Studio Landing Page"
          />

        </div>

      </section>


      {/* =====================================
          POWERED BY AI
      ===================================== */}

      <section className="business-solutions container">

        <div className="section-label">

          <span className="data-sparkle">
            ✦
          </span>

          Powered by AI

        </div>

        <div className="business-heading">

          <h2>
            Data Management, Without Complexity
          </h2>

          <p>
            Combine scattered data, enhance data quality
            automatically, and activate customer intelligence
            across your entire HubSpot platform — with
            AI-powered ease.
          </p>

        </div>


        {/* =====================================
            COMBINE DATA ACROSS YOUR TECH STACK
        ===================================== */}

        <div className="feature-section">


          {/* IMAGE - a.webp */}

          <div className="feature-image">

            <img
              src={`${imagePath}a.webp`}
              alt="Data Hub - Create Columns"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>
              Combine Data Across Your Tech Stack
            </h2>

            <p>
              Break down data silos with approachable
              tools that don't require expert knowledge.
            </p>

          </div>

        </div>

        {renderFeatures(contentFeatures)}


        {/* =====================================
            ENHANCE DATA QUALITY AUTOMATICALLY
        ===================================== */}

        <div className="feature-section revenue-section">

          <div className="feature-content">

            <h2>
              Enhance Data Quality Automatically
            </h2>

            <p>
              Make your data clean, consistent, and
              actionable with AI-powered automation.
            </p>

          </div>


          {/* IMAGE - b.webp */}

          <div className="feature-image">

            <img
              src={`${imagePath}b.webp`}
              alt="Data Hub - Data Quality Command Center"
              loading="lazy"
            />

          </div>

        </div>

        {renderFeatures(managementFeatures)}

      </section>


      {/* =====================================
          CUSTOMER PROOF
      ===================================== */}

      <section className="customer-proof container">

        <div className="customer-proof-top">

          <span className="section-label">
            Customer Proof
          </span>

          <a
            className="outline-btn"
            href={`${hubspot}/case-studies`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore case studies
          </a>

        </div>

        <div className="business-heading">

          <h2>
            Real Growth, Real Stories
          </h2>

          <p>
            See how teams are using Data Hub to
            combine and enhance their data with AI.
          </p>

        </div>


        {/* =====================================
            CUSTOMER ROI STATISTICS
        ===================================== */}

        <div className="statistics-grid data-statistics">

          <div className="statistics-intro">

            <h3>
              See why companies like to work with Data Hub.
            </h3>

            <a
              href={`${hubspot}/resources`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the ROI report
            </a>

          </div>

          <div className="stat-card">

            <h2>83%</h2>

            <p>
              say HubSpot effectively unifies all their data
            </p>

          </div>

          <div className="stat-card">

            <h2>41%</h2>

            <p>
              faster time to value with unified data
            </p>

          </div>

          <div className="stat-card">

            <h2>96%</h2>

            <p>
              say personalized experiences have increased sales
            </p>

          </div>

        </div>


        {/* =====================================
            CUSTOMER COMPANY LOGOS
        ===================================== */}

        <div className="brand-logos data-brand-logos">

          {brands.map((brand) => (

            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              title={brand.name}
              aria-label={brand.name}
            >

              <img
                src={brand.logo}
                alt={brand.name}
                className="brand-logo"
                loading="lazy"
              />

            </a>

          ))}

        </div>

      </section>


      {/* =====================================
          DATA HUB PRICING
      ===================================== */}

      <section className="pricing-section">

        <div className="container">

          <div className="pricing-heading">

            <h2>
              Grow Without Limits: Data Hub Pricing
            </h2>

            <p>
              Data software that scales with you.
            </p>

          </div>


          {/* =====================================
              PRICING CARDS
          ===================================== */}

          <div className="pricing-grid">

            {pricingPlans.map((plan) => (

              <a
                className="pricing-card"
                key={plan.name}
                href={`${hubspot}/pricing/data`}
                target="_blank"
                rel="noopener noreferrer"
              >

                <span
                  className="data-tier-icon"
                  aria-hidden="true"
                >
                  {plan.icon}
                </span>

                <h3>{plan.name}</h3>

                <p className="plan-subtitle">
                  {plan.subtitle}
                </p>

                <div className="plan-price">

                  {plan.price}

                  {plan.oldPrice && (

                    <del>{plan.oldPrice}</del>

                  )}

                </div>

                {plan.note && (

                  <p className="plan-note">
                    {plan.note}
                  </p>

                )}

                <ul>

                  {plan.features.map((feature) => (

                    <li key={feature}>

                      <span>✓</span>

                      {feature}

                    </li>

                  ))}

                </ul>

              </a>

            ))}

          </div>

          {renderButtons(
            "Demo premium editions",
            "Get started with free tools"
          )}


          {/* =====================================
              PRICING DISCLAIMER
          ===================================== */}

          <p className="pricing-disclaimer">

            *Discount available for new customers only.
            Offer available for a limited time. For more
            detailed information on product packaging
            and the limits that apply, please see our{" "}

            <a
              href={`${hubspot}/pricing/data`}
              target="_blank"
              rel="noopener noreferrer"
            >
              pricing page
            </a>

            . Price shown in USD and subject
            to applicable tax.

          </p>

        </div>

      </section>


      {/* =====================================
          FREQUENTLY ASKED QUESTIONS
      ===================================== */}

      <section className="faq-section container">

        <h2>
          Frequently Asked Questions
        </h2>

        <div className="faq-grid">

          {renderFAQ(faqs.slice(0, 2))}

          {renderFAQ(faqs.slice(2))}

        </div>

      </section>


      {/* =====================================
          BECOME A DATA HERO
      ===================================== */}

      <section className="bottom-cta">

        <div className="container">

          <h2>
            Become a Data Hero
          </h2>

          <p>
            Turn scattered data into unified
            intelligence that powers growth.
          </p>

          {renderButtons()}

        </div>

      </section>


      {/* =====================================
          FOOTER SECTION
      ===================================== */}

      <footer className="marketing-footer">

        <div className="container">

          <div className="footer-grid">


            {/* POPULAR FEATURES */}

            <div className="footer-column popular-features">

              <h3>Popular Features</h3>

              <div className="popular-links">

                {renderFooterLinks(
                  popularFeatures.slice(0, 9)
                )}

                {renderFooterLinks(
                  popularFeatures.slice(9)
                )}

              </div>

            </div>


            {/* FREE TOOLS */}

            <div className="footer-column">

              <h3>Free Tools</h3>

              {renderFooterLinks(freeTools)}

            </div>


            {/* COMPANY */}

            <div className="footer-column">

              <h3>Company</h3>

              {renderFooterLinks(company)}

            </div>


            {/* CUSTOMERS AND PARTNERS */}

            <div className="footer-column">

              <h3>Customers</h3>

              {renderFooterLinks(customers)}

              <h3 className="partner-heading">
                Partners
              </h3>

              {renderFooterLinks(partners)}

            </div>

          </div>


          {/* =====================================
              SOCIAL MEDIA LINKS
          ===================================== */}

          <div className="social-section">

            <div className="social-line"></div>

            <div className="social-links">

              {socialLinks.map(([name, icon, url]) => (

                <a
                  href={url}
                  key={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  aria-label={name}
                >

                  {icon}

                </a>

              ))}

            </div>

            <div className="social-line"></div>

          </div>


          {/* =====================================
              FOOTER BOTTOM
          ===================================== */}

          <div className="footer-bottom">

            <a
              href={hubspot}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-logo"
            >
              HubSpot
            </a>

            <p>
              Copyright © 2026 HubSpot, Inc.
            </p>

            <div className="legal-links">

              <a
                href="https://legal.hubspot.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Legal Center
              </a>

              <a
                href="https://legal.hubspot.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>

              <a
                href={`${hubspot}/security`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Security
              </a>

              <a
                href={hubspot}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Accessibility
              </a>

              <a
                href="https://legal.hubspot.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manage Cookies
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>

  );
}

export default DataHub;