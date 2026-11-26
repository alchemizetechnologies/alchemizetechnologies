
import React from "react";
import { Link } from "react-router-dom";

const alchemizeHome = "/";
const content = "/content";
const marketing = "/marketing";
const sales = "/sales";
const service = "/service";

const imagePath = "/Content hub/";

function ContentHub() {

  // =====================================
  // CREATE QUALITY CONTENT
  // =====================================

  const contentFeatures = [
    {
      icon: "▤",
      title: "Landing Pages",
      description: "Create and test beautiful landing pages that generate leads and look great on any device.",
      url: content
    },
    {
      icon: "✳",
      title: "Customer Agent",
      description: "Drive marketing engagement 24/7 with customer agent.",
      url: service
    },
    {
      icon: "✎",
      title: "AI Blog Writer",
      description: "Write blog posts instantly.",
      url: content
    }
  ];


  // =====================================
  // MANAGE AND OPTIMIZE CONTENT
  // =====================================

  const managementFeatures = [
    {
      icon: "▣",
      title: "Scalable CMS",
      description: "Build and manage your website with a scalable CMS.",
      url: content
    },
    {
      icon: "▶",
      title: "Video Marketing",
      description: "Clip and optimize videos across all your channels.",
      url: content
    },
    {
      icon: "▥",
      title: "Reporting Dashboards",
      description: "See what content works best with reporting dashboards.",
      url: content
    }
  ];


  // =====================================
  // UPDATED CUSTOMER COMPANY LOGOS
  // =====================================

  const brands = [
    {
      name: "Crunch",
      logo: "/Content hub/crunch.jpg",
      url: "https://www.crunch.com"
    },
    {
      name: "Tripadvisor",
      logo: "/Content hub/tripadvisor.jpg",
      url: "https://www.tripadvisor.com"
    },
    {
      name: "Kelly Services",
      logo: "/Content hub/kelly.jpg",
      url: "https://www.kellyservices.com"
    },
    {
      name: "Milwaukee",
      logo: "/Content hub/milwaukee.jpg",
      url: "https://www.milwaukeetool.com"
    },
    {
      name: "DoorDash",
      logo: "/images/Doordash.webp",
      url: "https://www.doordash.com"
    },
    {
      name: "Casio",
      logo: "/images/casio.jpg",
      url: "https://www.casio.com"
    },
    {
      name: "Panasonic",
      logo: "/Content hub/panasonic.jpg",
      url: "https://www.panasonic.com"
    }
  ];


  // =====================================
  // CONTENT HUB PRICING PLANS
  // =====================================

  const pricingPlans = [
    {
      name: "Free",
      subtitle: "No credit card required",
      price: "$0/month",
      features: [
        "Build landing pages",
        "Create blog posts with AI",
        "Get basic SEO tips"
      ]
    },
    {
      name: "Starter",
      subtitle: "Starts at",
      price: "$10/month",
      oldPrice: "$20/month",
      note: "per seat*",
      features: [
        "Remove Alchemize Technologies branding",
        "Add website pages",
        "Personalize content"
      ]
    },
    {
      name: "Professional",
      subtitle: "Starts at",
      price: "$500/month",
      note: "(3 seats included)",
      features: [
        "Personalize your visitors' experiences",
        "Define your brand voice",
        "Run A/B tests"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Starts at",
      price: "$1,500/month",
      note: "(5 seats included)",
      features: [
        "Manage multiple sites",
        "Set up content approvals",
        "Customize your CMS"
      ]
    }
  ];


  // =====================================
  // FREQUENTLY ASKED QUESTIONS
  // =====================================

  const faqs = [
    {
      question: "Where can I find the Alchemize Technologies CMS developer documentation?",
      answer: "You can find Alchemize Technologies CMS developer documentation on the official Alchemize Technologies developer website.",
      url: "/",
      linkText: "View developer documentation"
    },
    {
      question: "What is a content management system?",
      answer: "A content management system, or CMS, is software that helps businesses create, manage, edit, and publish digital content without requiring extensive programming knowledge."
    },
    {
      question: "How much does Alchemize Technologies' content marketing software cost?",
      answer: "Content Hub offers Free, Starter, Professional, and Enterprise pricing plans with different content creation and management capabilities."
    },
    {
      question: "How does Content Hub work with Marketing Hub, Sales Hub, Service Hub, Revenue Hub, and Data Hub?",
      answer: "Content Hub works with other Alchemize Technologies products through connected customer data, helping teams create personalized content and improve customer experiences."
    },
    {
      question: "What are Alchemize Technologies' popular content marketing features?",
      answer: "Popular features include AI content creation, website building, landing pages, blog writing, content management, personalization, video marketing, and reporting dashboards."
    },
    {
      question: "What kind of ROI can I expect from Content Hub?",
      answer: "Content Hub can help businesses improve content creation efficiency, website traffic, lead generation, and conversion rates. Actual results depend on your business and content strategy."
    }
  ];


  // =====================================
  // POPULAR FEATURES FOOTER
  // =====================================

  const popularFeatures = [
    ["All Products and Features", "/"],
    ["Alchemize Technologies AEO", marketing],
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
    ["Breeze Assistant", "/"],
    ["Free Web Hosting", content]
  ];


  // =====================================
  // FREE TOOLS FOOTER
  // =====================================

  const freeTools = [
    ["See All Free Business Tools", alchemizeHome],
    ["AEO Grader", marketing],
    ["AI Search Sensor", marketing],
    ["Make My Persona", "/"],
    ["Email Signature Generator", "/"],
    ["Free Business Templates", "/"],
    ["Software Comparisons Library", "/"],
    ["Website Templates", content],
    ["Connector for Claude", "/"]
  ];


  // =====================================
  // COMPANY FOOTER
  // =====================================

  const company = [
    ["About Us", "/"],
    ["Careers", "/"],
    ["Management Team", "/"],
    ["Board of Directors", "/"],
    ["Investor Relations", "/"],
    ["Blog", "/"],
    ["Sustainability", "/"],
    ["AI Instructions", "/"],
    ["Contact Us", "/"]
  ];


  // =====================================
  // CUSTOMERS FOOTER
  // =====================================

  const customers = [
    ["Customer Support", "/"],
    ["Join a Local User Group", "/"]
  ];


  // =====================================
  // PARTNERS FOOTER
  // =====================================

  const partners = [
    ["All Partner Programs", "/"],
    ["Solutions Partner Program", "/"],
    ["Technology Partner Program", "/"],
    ["Alchemize Technologies for Startups", "/"],
    ["Affiliate Program", "/"]
  ];


  // =====================================
  // SOCIAL MEDIA LINKS
  // =====================================

  const socialLinks = [
    ["Facebook", "f", "/"],
    ["Instagram", "◎", "/"],
    ["YouTube", "▶", "/"],
    ["Twitter", "𝕏", "/"],
    ["LinkedIn", "in", "/"],
    ["Reddit", "◉", "/"],
    ["TikTok", "♪", "/"]
  ];


  // =====================================
  // REUSABLE DEMO AND TRIAL BUTTONS
  // =====================================

  const renderButtons = (demoText = "Get a demo") => (

    <div className="marketing-buttons">

      <a
        className="demo-btn"
        href={content}
        target="_blank"
        rel="noopener noreferrer"
      >
        {demoText}
      </a>

      <a
        className="trial-btn"
        href={content}
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

          <p>

            {faq.answer}

            {faq.url && (

              <a
                className="content-faq-link"
                href={faq.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {faq.linkText}
              </a>

            )}

          </p>

        </details>

      ))}

    </div>

  );


  return (

    <div className="marketing-page content-page">


      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/content">
          Content Hub
        </Link>

      </div>


      {/* =====================================
          CONTENT HUB HERO SECTION
      ===================================== */}

      <section className="marketing-hub content-hub">

        <a
          className="hub-logo"
          href={content}
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

            <rect
              x="9"
              y="7"
              width="14"
              height="18"
              rx="2"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />

            <path
              d="M12 12H20 M12 16H20 M12 20H17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />

          </svg>

          <span>Alchemize Technologies</span>

        </a>

        <h1>Content Marketing Software</h1>

        <p>
          AI-powered content creation and CMS to create,
          repurpose, and manage content all in one place.
        </p>

        {renderButtons()}


        {/* HERO IMAGE */}

        <div className="hero-image content-hero-image">

          <img
            src={`${imagePath}cta.webp`}
            alt="Alchemize Technologies content editor"
          />

        </div>

      </section>


      {/* =====================================
          BUSINESS SOLUTIONS
      ===================================== */}

      <section className="business-solutions container">

        <div className="section-label">

          <span className="content-sparkle">
            ✦
          </span>

          Business Solutions

        </div>

        <div className="business-heading">

          <h2>
            AI That Transforms Your Content Strategy
          </h2>

          <p>
            Create high-converting content, streamline
            content management, and gain actionable
            insights — all with Content Hub’s built-in AI.
          </p>

        </div>


        {/* =====================================
            INTRODUCING ALCHEMIZE TECHNOLOGIES AEO
        ===================================== */}

        <section className="content-aeo-banner">

          <div className="content-aeo-content">

            <span className="content-aeo-label">
              Brand visibility
            </span>

            <h2>
              Introducing Alchemize Technologies AEO
            </h2>

            <p>
              Track how your brand shows up when buyers
              ask AI questions, then get recommendations
              and act on them instantly using Alchemize Technologies'
              content tools.
            </p>

            <a
              className="demo-btn"
              href={marketing}
              target="_blank"
              rel="noopener noreferrer"
            >
              See how it works
            </a>

          </div>


          {/* IMAGE - cta.webp */}

          <div className="content-aeo-graphic">

            <img
              src={`${imagePath}cta.webp`}
              alt="Alchemize Technologies AEO"
              loading="lazy"
            />

          </div>

        </section>


        {/* =====================================
            CREATE QUALITY CONTENT THAT CONVERTS
        ===================================== */}

        <div className="feature-section">

          <div className="feature-image">

            <img
              src="/AlchemizeCustomerPlatform/f.webp"
              alt="Alchemize Technologies website content editor"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>
              Create Quality Content That Converts
            </h2>

            <p>
              Built-in AI agents turn your strategy
              into multi-channel content fast.
            </p>

          </div>

        </div>

        {renderFeatures(contentFeatures)}


        {/* =====================================
            MANAGE AND OPTIMIZE YOUR CONTENT
        ===================================== */}

        <div className="feature-section revenue-section">

          <div className="feature-content">

            <h2>
              Manage and Optimize Your Content
            </h2>

            <p>
              Manage, update, and distribute all your
              content from one AI-led platform.
            </p>

          </div>


          {/* IMAGE - CHVideoMarketing.webp */}

          <div className="feature-image">

            <img
              src={`${imagePath}CHVideoMarketing.webp`}
              alt="Content hub Video Marketing"
              loading="lazy"
            />

          </div>

        </div>

        {renderFeatures(managementFeatures)}

      </section>


      {/* =====================================
          LOOP MARKETING PLAYBOOK
      ===================================== */}

      <section className="playbook-section">

        <div className="container">

          <div className="playbook-card">

            <h3>
              Loop Marketing Playbook: Master Growth
              in the AI Era
            </h3>

            <p>
              Harness the power of humans and AI working
              together to express your unique brand story,
              reach customers where they are, and
              continuously improve your results in real time.
            </p>

            <a
              className="demo-btn"
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>

          </div>

        </div>

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
            href={"/"}
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
            How real teams are using AI tools to
            create content marketing that moves
            the needle.
          </p>

        </div>


        {/* =====================================
            CUSTOMER ROI STATISTICS
        ===================================== */}

        <div className="statistics-grid content-statistics">

          <div className="statistics-intro">

            <h3>
              Customer ROI
            </h3>

            <a
              href={"/"}
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

            <h2>15%</h2>

            <p>
              increase in deals created after 6 months
            </p>

          </div>

          <div className="stat-card">

            <h2>110%</h2>

            <p>
              increase in website traffic after 6 months
            </p>

          </div>

          <div className="stat-card">

            <h2>83%</h2>

            <p>
              of users increase their conversion rates
            </p>

          </div>

        </div>


        {/* =====================================
            CUSTOMER LOGOS - ONLY IMAGES
        ===================================== */}

        <div className="brand-logos content-brand-logos">

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
          CONTENT HUB PRICING
      ===================================== */}

      <section className="pricing-section">

        <div className="container">

          <div className="pricing-heading">

            <h2>
              Grow Without Limits: Content Hub Pricing
            </h2>

            <p>
              Content marketing software that scales with you.
            </p>

          </div>


          {/* Pricing Cards */}

          <div className="pricing-grid">

            {pricingPlans.map((plan) => (

              <a
                className="pricing-card"
                key={plan.name}
                href={"/"}
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


          {/* Pricing Disclaimer */}

          <p className="pricing-disclaimer">

            *Discount available for new customers only.
            Offer available for a limited time. For more
            detailed information on product packaging
            and the limits that apply, please see our{" "}

            <a
              href={"/"}
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
          CONTENT HUB FAQ
      ===================================== */}

      <section className="faq-section container">

        <h2>
          Content Hub FAQs
        </h2>

        <p className="content-faq-description">

          Get quick answers to common questions
          about Content Hub.

        </p>

        <div className="faq-grid">

          {renderFAQ(faqs.slice(0, 3))}

          {renderFAQ(faqs.slice(3))}

        </div>

      </section>


      {/* =====================================
          BOTTOM CALL TO ACTION
      ===================================== */}

      <section className="bottom-cta">

        <div className="container">

          <h2>
            Redefine Your Content Strategy
          </h2>

          <p>
            Get AI content software that amplifies
            your creativity.
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
              href={alchemizeHome}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-logo"
            >
              Alchemize Technologies
            </a>

            <p>
              Copyright © 2026 Alchemize Technologies.
            </p>

            <div className="legal-links">

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Legal Center
              </a>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>

              <a
                href={"/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Security
              </a>

              <a
                href={alchemizeHome}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Accessibility
              </a>

              <a
                href="/"
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

export default ContentHub;
