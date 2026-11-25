
import React from "react";
import { Link } from "react-router-dom";

const hubspot = "https://www.hubspot.com";
const sales = `${hubspot}/products/sales`;
const marketing = `${hubspot}/products/marketing`;

function SalesHub() {

  // =====================================
  // CREATE PIPELINE FEATURES
  // =====================================

  const pipelineFeatures = [
    {
      icon: "✳",
      title: "Breeze Prospecting Agent (Beta)",
      description: "Find accounts, source buying committees, and execute personalized outreach with an AI agent that learns from your best reps over time.",
      url: sales
    },
    {
      icon: "♙",
      title: "Lead Management",
      description: "Manage leads and activities on one AI-powered workspace and turn more leads into deals.",
      url: sales
    },
    {
      icon: "⚙",
      title: "Sales Automation",
      description: "Set up automated multi-channel outreach that adapts based on prospect engagement.",
      url: sales
    },
    {
      icon: "♧",
      title: "Buying Groups",
      description: "Map every decision maker, champion, and influencer automatically, so reps are never single-threaded on a high-stakes deal.",
      url: sales
    },
    {
      icon: "☎",
      title: "Call Tracking",
      description: "Make calls efficiently with a power dialer, voicemail drops, and CRM logging for your most important conversations.",
      url: sales
    },
    {
      icon: "▣",
      title: "HubSpot Sales Extensions",
      description: "Work where reps already live. Access HubSpot directly in Gmail or Outlook, and research prospects or take action from any webpage without switching tabs.",
      url: sales
    }
  ];


  // =====================================
  // PROGRESS DEALS FEATURES
  // =====================================

  const progressFeatures = [
    {
      icon: "◎",
      title: "Deal Scoring",
      description: "Use AI to automatically score, rank and prioritize which deals are most likely to close.",
      url: sales
    },
    {
      icon: "▥",
      title: "Deal Pipelines",
      description: "Easily add, score, and track deals so nothing falls through the cracks.",
      url: sales
    },
    {
      icon: "✦",
      title: "AI Guided Selling",
      description: "Guide sellers in a workspace that surfaces leads, deals, tasks, and next best actions with smart queues and daily action summaries.",
      url: sales
    },
    {
      icon: "▤",
      title: "HubSpot Notetaker",
      description: "Capture every meeting automatically, prep with full customer context, and send follow-up recordings instantly.",
      url: sales
    },
    {
      icon: "☷",
      title: "Playbooks",
      description: "Build a library of sales content for your team to share and tracking which documents close deals.",
      url: sales
    },
    {
      icon: "↗",
      title: "Deal Progression",
      description: "AI analyzes conversation transcripts, emails, and deal history to suggest CRM updates, draft follow-up emails, and next steps to keep deals moving forward.",
      url: sales
    }
  ];


  // =====================================
  // CLOSE DEALS FEATURES
  // =====================================

  const closeFeatures = [
    {
      icon: "✓",
      title: "Deal Plans",
      description: "Give every deal a shared path to close with milestones, owners, and dates your buyers can see and act on directly.",
      url: sales
    },
    {
      icon: "$",
      title: "CPQ in Revenue Hub",
      description: "AI-powered CPQ — configure, price, quote — accelerates the quoting process from one unified platform.",
      url: `${hubspot}/products`
    },
    {
      icon: "◎",
      title: "Sales Methodology Scoring",
      description: "Standardize how your team sells by automatically extracting conversation context and mapping it to your sales framework.",
      url: sales
    },
    {
      icon: "▥",
      title: "Sales Analytics & Reporting",
      description: "Get full visibility into your process to measure performance and deliver results.",
      url: sales
    },
    {
      icon: "◉",
      title: "Conversation Intelligence",
      description: "Bring the voice of the customer into your CRM and provide better coaching.",
      url: sales
    },
    {
      icon: "↗",
      title: "Forecasting",
      description: "Get a comprehensive view of your pipeline with AI-powered projections.",
      url: sales
    }
  ];


  // =====================================
  // CUSTOMER COMPANY LOGOS
  // =====================================

  const brands = [
    {
      name: "MoreHouse",
      logo: "/images/Morehouse.webp",
      url: `${hubspot}/case-studies`
    },
    {
      name: "Kaplan",
      logo: "/images/Kplan.webp",
      url: "https://kaplan.com"
    },
    {
      name: "GameSquare",
      logo: "/images/Gamesquare.webp",
      url: "https://www.gamesquare.com"
    },
    {
      name: "GoFundMe Charity",
      logo: "/images/Go.webp",
      url: "https://www.gofundme.com"
    },
    {
      name: "DoorDash",
      logo: "/images/Doordash.webp",
      url: "https://www.doordash.com"
    },
    {
      name: "Canadian Red Cross",
      logo: "/images/Canadian.webp",
      url: "https://www.redcross.ca"
    },
    {
      name: "Amika",
      logo: "/images/amika.jpg",
      url: "https://loveamika.com"
    }
  ];


  // =====================================
  // SALES HUB PRICING PLANS
  // =====================================

  const pricingPlans = [
    {
      name: "Free",
      subtitle: "No credit card required",
      price: "$0/month",
      features: [
        "Track deals",
        "Engage visitors with live chat",
        "Schedule meetings without the back-and-forth"
      ]
    },
    {
      name: "Starter",
      subtitle: "Starts at",
      price: "$10/month",
      oldPrice: "$20/month",
      note: "per seat*",
      features: [
        "Automate personalized outreach",
        "Schedule meetings",
        "Report on outcomes"
      ]
    },
    {
      name: "Professional",
      subtitle: "Starts at",
      price: "$100/month",
      note: "per seat",
      features: [
        "Find and engage high-value prospects",
        "Customize sales workflows and sequences",
        "Record and transcribe calls"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Starts at",
      price: "$150/month",
      note: "per seat",
      features: [
        "Create custom objects for unique processes",
        "Manage complex pipelines",
        "Advanced analytics and reporting"
      ]
    }
  ];


  // =====================================
  // FREQUENTLY ASKED QUESTIONS
  // =====================================

  const faqs = [
    {
      question: "What is sales software?",
      answer: "Sales software helps businesses manage leads, track deals, automate sales activities, and improve sales team productivity."
    },
    {
      question: "Do you have CPQ capabilities?",
      answer: "HubSpot offers configure, price, and quote capabilities through its revenue and commerce tools."
    },
    {
      question: "Do I have to use HubSpot as a CRM in order to get value from Sales Hub? What if I already have a CRM?",
      answer: "Sales Hub can work with other CRM systems through supported integrations. Available functionality depends on the integration and subscription."
    },
    {
      question: "How much does HubSpot’s sales software cost?",
      answer: "Sales Hub offers Free, Starter, Professional, and Enterprise pricing plans."
    },
    {
      question: "Can I implement HubSpot’s software without dedicated programmers/developers?",
      answer: "Many Sales Hub features can be configured without programming knowledge using built-in tools and automation."
    },
    {
      question: "How is Sales Hub different from other sales solutions, like Salesforce?",
      answer: "Sales Hub combines sales automation, CRM data, reporting, prospecting, and AI-powered sales tools in a connected platform."
    },
    {
      question: "What are popular sales software features?",
      answer: "Popular sales software features include deal tracking, lead management, sales automation, forecasting, and reporting."
    },
    {
      question: "How much time does it take to implement sales software?",
      answer: "Implementation time depends on your business requirements, data migration, integrations, and configuration."
    },
    {
      question: "What kind of ROI can I expect from Sales Hub?",
      answer: "Potential benefits include improved sales productivity, better lead conversion, and reduced manual work. Results depend on your business and implementation."
    },
    {
      question: "Can I customize my Sales Hub account?",
      answer: "Sales Hub offers configurable pipelines, workflows, properties, dashboards, and reporting options depending on your subscription."
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
    ["AI Content Writer", `${hubspot}/products/content`],
    ["AI Website Generator", `${hubspot}/products/content`],
    ["Email Marketing Software", marketing],
    ["Lead Management Software", sales],
    ["AI Prospecting Agent", sales],
    ["Free Website Builder", `${hubspot}/products/content`],
    ["Free Landing Page Builder", marketing],
    ["Free Online Form Builder", marketing],
    ["Free Chatbot Builder", `${hubspot}/products/service`],
    ["Free Live Chat Software", `${hubspot}/products/service`],
    ["Marketing Analytics", marketing],
    ["Breeze Assistant", `${hubspot}/products`],
    ["Free Web Hosting", `${hubspot}/products/content`]
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
    ["Website Templates", `${hubspot}/products/content`],
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
  // REUSABLE BUTTONS
  // =====================================

  const renderButtons = (demoText = "Get a demo") => (

    <div className="marketing-buttons">

      <a
        className="demo-btn"
        href={sales}
        target="_blank"
        rel="noopener noreferrer"
      >
        {demoText}
      </a>

      <a
        className="trial-btn"
        href={sales}
        target="_blank"
        rel="noopener noreferrer"
      >
        Start 14-day free trial
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

    <div className="marketing-page sales-page">


      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/sales">
          Sales Hub
        </Link>

      </div>


      {/* =====================================
          SALES HUB HERO SECTION
      ===================================== */}

      <section className="marketing-hub sales-hub">

        <a
          className="hub-logo"
          href={sales}
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

            <path
              d="M8 23 L8 17 L12 17 L12 23 Z
                 M14 23 L14 12 L18 12 L18 23 Z
                 M20 23 L20 7 L24 7 L24 23 Z"
              fill="white"
            />

          </svg>

          <span>Sales Hub®</span>

        </a>

        <h1>Sales Software</h1>

        <p>
          More selling. Less everything else.
        </p>

        {renderButtons()}


        {/* Sales Hub Image */}

        <div className="hero-image sales-hero-image">

          <img
            src="/images/Sales%20Hub.webp"
            alt="Prospecting Workspace screenshot with sales contact, tasks, outreach activities, guided actions, and schedule"
          />

        </div>

      </section>


      {/* =====================================
          BUSINESS SOLUTIONS
      ===================================== */}

      <section className="business-solutions container">

        <div className="section-label">
          Business Solutions
        </div>

        <div className="business-heading">

          <h2>
            Every rep. Full context. Every deal.
          </h2>

          <p>
            AI that knows when to reach out, what to say,
            and how to move deals forward – turning
            conversations into closed deals.
          </p>

        </div>


        {/* Create Pipeline */}

        <div className="feature-section">

          <div className="feature-image">

            <img
              src="/images/Prospecting%20Agent.webp"
              alt="Prospecting Agent"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>Create Pipeline</h2>

            <p>
              Know when to reach out and who to target.
              Sales Hub's AI-powered tools surface
              accounts showing real buying signals,
              so reps focus on leads that are actually
              going somewhere.
            </p>

          </div>

        </div>

        {renderFeatures(pipelineFeatures)}


        {/* =====================================
            REVENUE HUB + SALES HUB
        ===================================== */}

        <section className="revenue-sales-banner">

          <div className="revenue-sales-content">

            <div className="revenue-sales-label">
              Revenue Hub + Sales Hub
            </div>

            <h2>
              Win the deal. Quote fast. Get paid.
            </h2>

            <p>
              Don't let separate sales and CPQ tools
              slow you down. Close deals in Sales Hub,
              then quote, bill, and collect payment
              in Revenue Hub — all without switching
              platforms.
            </p>

            <a
              className="demo-btn"
              href={`${hubspot}/products`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Revenue Hub
            </a>

          </div>

          <div className="revenue-sales-image">

            <img
              src="/images/rev+sales.webp"
              alt="Revenue Hub plus Sales Hub"
              loading="lazy"
            />

          </div>

        </section>


        {/* =====================================
            PROGRESS DEALS
        ===================================== */}

        <div className="feature-section revenue-section">

          <div className="feature-content">

            <h2>Progress Deals</h2>

            <p>
              Keep deals moving from first conversation
              to closed-won. Deal progression drafts
              follow-ups, suggests next steps, and
              keeps your CRM current automatically —
              so reps always know what moves the
              deal forward.
            </p>

          </div>

          <div className="feature-image">

            <img
              src="/images/Deal%20Scores.webp"
              alt="Deal Scores"
              loading="lazy"
            />

          </div>

        </div>

        {renderFeatures(progressFeatures)}


        {/* =====================================
            CLOSE DEALS
        ===================================== */}

        <div className="feature-section scale-section">

          <div className="feature-image">

            <img
              src="/images/Sales%20Dashboard.webp"
              alt="Sales Dashboard"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>Close Deals</h2>

            <p>
              Give leaders a real-time view of
              pipeline health, deal plans, rep
              performance, and revenue risk —
              all from the same data your reps
              work in every day.
            </p>

          </div>

        </div>

        {renderFeatures(closeFeatures)}

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
            See how sales teams are using Sales Hub
            to convert opportunities faster with AI.
          </p>

        </div>


        {/* Customer Statistics */}

        <div className="statistics-grid">

          <div className="statistics-intro">

            <h3>
              See why companies like to work with
              Sales Hub.
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

            <h2>73%</h2>

            <p>
              of sales professionals say HubSpot
              increased their win rate
            </p>

          </div>

          <div className="stat-card">

            <h2>94%</h2>

            <p>
              more deals closed after 6 months
            </p>

          </div>

          <div className="stat-card">

            <h2>82%</h2>

            <p>
              more meetings booked with prospecting
              agent
            </p>

          </div>

        </div>


        {/* =====================================
            CUSTOMER LOGOS - ONLY IMAGES
        ===================================== */}

        <div className="brand-logos sales-brand-logos">

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
          SALES HUB PRICING
      ===================================== */}

      <section className="pricing-section">

        <div className="container">

          <div className="pricing-heading">

            <h2>
              Grow Without Limits: Sales Hub Pricing
            </h2>

            <p>
              Sales software that scales with you.
            </p>

          </div>

          <div className="pricing-grid">

            {pricingPlans.map((plan) => (

              <a
                className="pricing-card"
                key={plan.name}
                href={`${hubspot}/pricing/sales`}
                target="_blank"
                rel="noopener noreferrer"
              >

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

          {renderButtons("Demo premium editions")}

          <p className="pricing-disclaimer">

            *Discount available for new customers only.
            Offer available for a limited time. For more
            detailed information on product packaging
            and the limits that apply, please see our{" "}

            <a
              href={`${hubspot}/pricing/sales`}
              target="_blank"
              rel="noopener noreferrer"
            >
              pricing page
            </a>

            . Price shown in USD and subject to
            applicable tax.

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

          {renderFAQ(faqs.slice(0, 5))}

          {renderFAQ(faqs.slice(5))}

        </div>

      </section>


      {/* =====================================
          BOTTOM CTA
      ===================================== */}

      <section className="bottom-cta">

        <div className="container">

          <h2>
            Start closing with complete context.
          </h2>

          <p>
            Stop losing time to admin. Your team
            deserves a tool that sells with them.
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


            {/* Popular Features */}

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


            {/* Free Tools */}

            <div className="footer-column">

              <h3>Free Tools</h3>

              {renderFooterLinks(freeTools)}

            </div>


            {/* Company */}

            <div className="footer-column">

              <h3>Company</h3>

              {renderFooterLinks(company)}

            </div>


            {/* Customers and Partners */}

            <div className="footer-column">

              <h3>Customers</h3>

              {renderFooterLinks(customers)}

              <h3 className="partner-heading">
                Partners
              </h3>

              {renderFooterLinks(partners)}

            </div>

          </div>


          {/* Social Media */}

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


          {/* Footer Bottom */}

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

export default SalesHub;
