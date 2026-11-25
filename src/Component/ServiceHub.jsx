
import React from "react";
import { Link } from "react-router-dom";

const hubspot = "https://www.hubspot.com";
const service = `${hubspot}/products/service`;
const sales = `${hubspot}/products/sales`;
const marketing = `${hubspot}/products/marketing`;

const imagePath = "/Service%20hub/";

function ServiceHub() {

  // =====================================
  // SCALE SUPPORT TEAMS WITH AI
  // =====================================

  const supportFeatures = [
    {
      icon: "▤",
      title: "Help Desk Workspace",
      description: "Deliver personalized and omni-channel customer support at scale with an AI-powered help desk and ticketing workspace.",
      url: service
    },
    {
      icon: "☏",
      title: "Omnichannel Communication",
      description: "Meet your customers wherever they are by providing personalized support across every channel.",
      url: service
    },
    {
      icon: "☎",
      title: "Call Tracking",
      description: "Create sophisticated call flows with interactive voice response phone trees, enable team routing and transfers, and deliver seamless phone support at scale.",
      url: sales
    },
    {
      icon: "◷",
      title: "SLA Management",
      description: "Keep response times low and customers happy with automated ticket routing.",
      url: service
    },
    {
      icon: "▥",
      title: "Service Analytics",
      description: "Uncover key insights with out-of-the-box reports that help you measure team performance and customer satisfaction in real time.",
      url: service
    },
    {
      icon: "⚙",
      title: "Automated Customer Service",
      description: "Help your team solve customer issues faster with AI-powered automation that handles routine tasks and support requests.",
      url: service
    }
  ];


  // =====================================
  // DRIVE RETENTION WITH UNIFIED TOOLS
  // =====================================

  const retentionFeatures = [
    {
      icon: "♙",
      title: "Customer Success Workspace",
      description: "Manage your book of business, build unique customer health scores, and help your reps prioritize their activities.",
      url: service
    },
    {
      icon: "♡",
      title: "Feedback Management",
      description: "Understand what your customers really think with customizable NPS, CSAT, and customer feedback surveys.",
      url: service
    },
    {
      icon: "◉",
      title: "Conversation Intelligence",
      description: "Learn from every customer interaction with AI-powered call analytics.",
      url: sales
    },
    {
      icon: "♧",
      title: "Fully Integrated Smart CRM",
      description: "Give your success team instant access to every support interaction, deal stage, and marketing touchpoint in one connected system.",
      url: `${hubspot}/products`
    },
    {
      icon: "↗",
      title: "Deal Progression (Beta)",
      description: "Identify upsell opportunities and strengthen retention with AI-generated follow-ups from every service interaction.",
      url: sales
    }
  ];


  // =====================================
  // SCALE SUPPORT SELF-SERVICE WITH AI
  // =====================================

  const selfServiceFeatures = [
    {
      icon: "▤",
      title: "Knowledge Base",
      description: "Enable customer self-service and reduce incoming tickets while maintaining 24/7 support availability.",
      url: service
    },
    {
      icon: "▣",
      title: "Customer Portal",
      description: "Empower customers to get the help they need through a secure customer portal.",
      url: service
    },
    {
      icon: "✳",
      title: "Customer Agent",
      description: "Resolve customer inquiries across email and live chat 24/7 with customizable AI automation.",
      url: service
    },
    {
      icon: "✦",
      title: "Knowledge Base Agent (Beta)",
      description: "Automatically convert successful support interactions into self-service resources that help customers find answers faster.",
      url: service
    },
    {
      icon: "◎",
      title: "Prospecting Agent",
      description: "Surface signals, pull customer context, and guide outreach next steps with an AI agent for customer growth.",
      url: sales
    }
  ];


  // =====================================
  // CUSTOMER COMPANY LOGOS
  // =====================================

  const brands = [
    {
      name: "Babbel",
      logo: `${imagePath}Babbel.jpg`,
      url: "https://www.babbel.com"
    },
    {
      name: "MYOB",
      logo: `${imagePath}Myob.webp`,
      url: "https://www.myob.com"
    },
    {
      name: "Dickey's",
      logo: `${imagePath}Dickey.jpg`,
      url: "https://www.dickeys.com"
    },
    {
      name: "Kahoot",
      logo: `${imagePath}Kahoot.png`,
      url: "https://kahoot.com"
    },
    {
      name: "Canadian Red Cross",
      logo: "/images/Canadian.webp",
      url: "https://www.redcross.ca"
    },
    {
      name: "Kaplan",
      logo: "/images/Kplan.webp",
      url: "https://kaplan.com"
    },
    {
      name: "Swapfiets",
      logo: `${imagePath}Swapfiets.webp`,
      url: "https://swapfiets.com"
    }
  ];


  // =====================================
  // SERVICE HUB PRICING PLANS
  // =====================================

  const pricingPlans = [
    {
      name: "Free",
      subtitle: "No credit card required",
      price: "$0/month",
      features: [
        "Contact management",
        "Ticketing",
        "Team email"
      ]
    },
    {
      name: "Starter",
      subtitle: "Starts at",
      price: "$10/month",
      oldPrice: "$20/month",
      note: "per seat*",
      features: [
        "Simple ticket automation",
        "Multiple ticket pipelines",
        "Live chat"
      ]
    },
    {
      name: "Professional",
      subtitle: "Starts at",
      price: "$100/month",
      note: "per seat",
      features: [
        "Help desk workspace",
        "Customer success workspace",
        "Customer agent",
        "Knowledge base"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Starts at",
      price: "$150/month",
      note: "per seat",
      features: [
        "Skill-based routing",
        "Conditional SLAs",
        "Customer journey analytics"
      ]
    }
  ];


  // =====================================
  // FREQUENTLY ASKED QUESTIONS
  // =====================================

  const faqs = [
    {
      question: "What is customer service software?",
      answer: "Customer service software helps businesses manage customer inquiries, support tickets, communication, feedback, and customer relationships from a centralized platform."
    },
    {
      question: "Can I implement HubSpot’s software without dedicated programmers/developers?",
      answer: "Many Service Hub features can be configured using built-in tools and automation without dedicated programming or development resources."
    },
    {
      question: "Will HubSpot help me and my team get started with the software?",
      answer: "HubSpot provides learning resources, documentation, onboarding options, and customer support to help teams get started."
    },
    {
      question: "What makes HubSpot’s customer service software popular?",
      answer: "Service Hub combines customer support, ticketing, CRM data, automation, reporting, and AI-powered tools in one connected platform."
    },
    {
      question: "My company already uses a CRM system. Can we integrate it with Service Hub?",
      answer: "Service Hub can connect with other CRM systems through supported integrations. Available functionality depends on the integration and subscription."
    },
    {
      question: "How does Service Hub work with Marketing Hub, Sales Hub, Content Hub, and Data Hub?",
      answer: "HubSpot products are designed to work together using connected customer data, helping marketing, sales, and customer service teams collaborate."
    },
    {
      question: "My business already uses Marketing Hub and/or Sales Hub, and I’d love to get my customer service team using Service Hub. What’s the pitch?",
      answer: "Service Hub helps customer service teams access connected customer information, manage support requests, improve collaboration, and identify customer retention opportunities."
    },
    {
      question: "What kind of ROI can I expect from Service Hub?",
      answer: "Potential benefits include improved ticket resolution, better customer satisfaction, reduced manual work, and stronger customer retention. Results vary by business."
    },
    {
      question: "How much time does it take to implement customer service software?",
      answer: "Implementation time depends on your business requirements, data migration, integrations, team size, and configuration."
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
    ["Free Chatbot Builder", service],
    ["Free Live Chat Software", service],
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
  // REUSABLE DEMO AND TRIAL BUTTONS
  // =====================================

  const renderButtons = (demoText = "Get a demo") => (

    <div className="marketing-buttons">

      <a
        className="demo-btn"
        href={service}
        target="_blank"
        rel="noopener noreferrer"
      >
        {demoText}
      </a>

      <a
        className="trial-btn"
        href={service}
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

    <div className="marketing-page service-page">


      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/service">
          Service Hub
        </Link>

      </div>


      {/* =====================================
          SERVICE HUB HERO SECTION
      ===================================== */}

      <section className="marketing-hub service-hub">

        <a
          className="hub-logo"
          href={service}
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
              d="M8 16V13a8 8 0 0116 0v5
                 M8 15H6v6h5v-6z
                 M24 15h2v6h-5v-6z
                 M24 21c0 4-4 5-8 5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

          </svg>

          <span>Service Hub®</span>

        </a>

        <h1>Customer Service Software</h1>

        <p>
          Customer service software powered by AI
          to scale support and drive customer retention.
        </p>

        {renderButtons()}


        {/* IMAGE 1 - CustomerSuccess.webp */}
        {/* Get a demo buttons ke neeche */}

        <div className="hero-image service-hero-image">

          <img
            src={`${imagePath}CustomerSuccess.webp`}
            alt="Customer Success Workspace"
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
            Customer service and retention, powered by AI
          </h2>

          <p>
            Service Hub is AI-powered, omni-channel,
            and connected to marketing and sales data
            on a unified customer platform. The result?
            Easily scalable customer support and proactive
            customer retention that fuels your business growth.
          </p>

        </div>


        {/* =====================================
            SCALE SUPPORT TEAMS WITH AI
        ===================================== */}

        <div className="feature-section">


          {/* IMAGE 2 - CustomerAgent.webp */}

          <div className="feature-image">

            <img
              src={`${imagePath}CustomerAgent.webp`}
              alt="Service Hub Customer Agent"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>
              Scale Support Teams With AI
            </h2>

            <p>
              Scale support without adding headcount.
              Use intelligent routing and custom views
              to manage tickets. Track performance with
              SLAs and real-time analytics to keep
              customers satisfied.
            </p>

          </div>

        </div>

        {renderFeatures(supportFeatures)}


        {/* =====================================
            DRIVE RETENTION WITH UNIFIED TOOLS
        ===================================== */}

        <div className="feature-section revenue-section">

          <div className="feature-content">

            <h2>
              Drive Retention With Unified Tools
            </h2>

            <p>
              With Service Hub’s connected data,
              you can identify opportunities to
              upsell or cross-sell, track customer
              satisfaction trends, and drive
              proactive customer retention.
            </p>

          </div>


          {/* IMAGE 3 - Health Score.webp */}

          <div className="feature-image">

            <img
              src={`${imagePath}Health%20Score.webp`}
              alt="Service Hub Health Score"
              loading="lazy"
            />

          </div>

        </div>

        {renderFeatures(retentionFeatures)}


        {/* =====================================
            SCALE SUPPORT SELF-SERVICE WITH AI
        ===================================== */}

        <div className="feature-section scale-section">


          {/* IMAGE 4 - Agents Knowledge.webp */}

          <div className="feature-image">

            <img
              src={`${imagePath}Agents%20Knowledge.webp`}
              alt="Service Hub Agents Knowledge Gaps"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>
              Scale Support Self-Service with AI
            </h2>

            <p>
              Built-in AI tools make the most of
              your CRM data to support your
              customers 24/7.
            </p>

          </div>

        </div>

        {renderFeatures(selfServiceFeatures)}

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
            See all case studies
          </a>

        </div>

        <div className="business-heading">

          <h2>
            Real Growth, Real Stories
          </h2>

          <p>
            How real customer service teams are
            using AI tools to scale support and
            drive retention.
          </p>

        </div>


        {/* =====================================
            CUSTOMER ROI STATISTICS
        ===================================== */}

        <div className="statistics-grid service-statistics">

          <div className="statistics-intro">

            <h3>
              Customer ROI
            </h3>

            <a
              href={`${hubspot}/resources`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the ROI report
            </a>

            <p className="roi-description">
              to learn more
            </p>

          </div>

          <div className="stat-card">

            <h2>57%</h2>

            <p>
              increase in ticket close rate after
              6 months with Service Hub
            </p>

          </div>

          <div className="stat-card">

            <h2>72%</h2>

            <p>
              of service leaders say HubSpot
              increased their customer lifetime value
            </p>

          </div>

          <div className="stat-card">

            <h2>39%</h2>

            <p>
              less time closing tickets with
              Customer Agent
            </p>

          </div>

        </div>


        {/* =====================================
            CUSTOMER COMPANY LOGOS
        ===================================== */}

        <div className="brand-logos service-brand-logos">

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
          SERVICE HUB PRICING
      ===================================== */}

      <section className="pricing-section">

        <div className="container">

          <div className="pricing-heading">

            <h2>
              Scale Without Limits: Service Hub Pricing
            </h2>

            <p>
              Customer service software that
              scales seamlessly.
            </p>

          </div>


          {/* Pricing Cards */}

          <div className="pricing-grid">

            {pricingPlans.map((plan) => (

              <a
                className="pricing-card"
                key={plan.name}
                href={`${hubspot}/pricing/service`}
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
            Offer available for a limited time.
            For more detailed information on product
            packaging and the limits that apply,
            please see our{" "}

            <a
              href={`${hubspot}/pricing/service`}
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

          {renderFAQ(faqs.slice(0, 5))}

          {renderFAQ(faqs.slice(5))}

        </div>

      </section>


      {/* =====================================
          BOTTOM CALL TO ACTION
      ===================================== */}

      <section className="bottom-cta">

        <div className="container">

          <h2>
            Start Scaling Your Customer Service Today
          </h2>

          <p>
            Get the unified, AI-powered customer
            service solution to help your team
            scale support and drive retention.
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

export default ServiceHub;
