
import { Link } from "react-router-dom";

const alchemizeHome = "/";
const marketing = "/marketing";

function MarketingHub() {

  // Awareness Features

  const awarenessFeatures = [
    {
      icon: "✳",
      title: "Alchemize Technologies AEO",
      description: "See how your brand shows up in answer engines, and get clear next steps to improve it.",
      url: "/aeo"
    },
    {
      icon: "▤",
      title: "Content Agent",
      description: "Create blog posts, social content, and landing pages grounded in your brand voice, audience data, and competitor research.",
      url: "/content-agent"
    },
    {
      icon: "▣",
      title: "Ads",
      description: "Plan campaigns, organize audiences, and understand which ads contribute to meaningful results.",
      url: "/ads"
    },
    {
      icon: "☷",
      title: "Form Shortening",
      description: "Build lead capture forms that adapt to your audience and make it easier to take the next step.",
      url: "/form-shortening"
    },
    {
      icon: "♡",
      title: "Social Media Management",
      description: "Plan posts, follow conversations, and understand how social activity supports your business goals.",
      url: "/social-media-management"
    },
    {
      icon: "♧",
      title: "Audience Segments",
      description: "Find and target anonymous website visitors based on both fit and intent.",
      url: "/audience-segments"
    },
    {
      icon: "◎",
      title: "Prospecting Agent",
      description: "Find accounts ready to buy, reach them at the right moment, and fill your pipeline with leads that convert.",
      url: "/prospecting-agent"
    },
    {
      icon: "⚐",
      title: "Customer Agent",
      description: "Capture visitor interest, guide customers to helpful resources, and route conversations to the right next step.",
      url: "/customer-agent"
    }
  ];


  // Revenue Features

  const revenueFeatures = [
    {
      title: "Nurture Agent",
      description: "Rewrite every nurture email for the specific contact receiving it, using their CRM data, behavior, and live company research.",
      url: "/nurture-agent"
    },
    {
      title: "AI-Powered Emails",
      description: "Automate manual email work and deliver personalized content to every contact at scale using CRM data.",
      url: "/ai-powered-emails"
    },
    {
      title: "Mobile Messaging",
      description: "Reach contacts on WhatsApp and SMS so no lead goes cold because you weren't on the right channel.",
      url: "/mobile-messaging"
    },
    {
      title: "Lookalike Lists",
      description: "Your best customers hide in plain data. Find high-potential prospects within your contact lists.",
      url: "/lookalike-lists"
    },
    {
      title: "Personalization",
      description: "Show every website visitor content tailored to who they are using the same CRM data that powers the rest of your marketing.",
      url: "/personalization"
    }
  ];


  // Scale Marketing Features

  const scaleFeatures = [
    {
      title: "Marketing Studio",
      description: "Grow and convert demand from a single conversation with Marketing Studio. Alchemize Technologies Assistant handles the planning, content, and nurture.",
      url: "/marketing-studio"
    },
    {
      title: "Campaign Agent",
      description: "Start from a goal and let campaign agent plan your entire campaign based on brand, audience, and past performance.",
      url: "/nurture-agent"
    },
    {
      title: "Marketing Analytics",
      description: "Measure performance for marketing campaigns with built-in analytics, reports, and dashboards.",
      url: "/marketing-analytics"
    },
    {
      title: "Dashboards and Reporting",
      description: "Empower your team with insights from expert-level analytics, backed by easy-to-use reporting tools.",
      url: "/dashboard-reporting"
    },
    {
      title: "Advanced Marketing Reporting",
      description: "Drive revenue with multi-touch attribution and customer journey analytics that show what's actually working.",
      url: "/advanced-marketing-reporting"
    },
    {
      title: "Pathfinder",
      description: "See exactly where in the customer journey visitors are ready to convert and place the right touchpoints at the right moments.",
      url: "/pathfinder"
    }
  ];


  // Customer Brand Logos - JPG Images

  const brands = [
    {
      name: "Weight Watchers",
      logo: "/images/weightwatchers.jpg",
      url: "https://www.weightwatchers.com"
    },
    {
      name: "MarineMax",
      logo: "/images/marinemax.jpg",
      url: "https://www.marinemax.com"
    },
    {
      name: "Monday.com",
      logo: "/images/monday.jpg",
      url: "https://monday.com"
    },
    {
      name: "FASTSIGNS",
      logo: "/images/fastsigns.jpg",
      url: "https://www.fastsigns.com"
    },
    {
      name: "CASIO",
      logo: "/images/casio.jpg",
      url: "https://www.casio.com"
    },
    {
      name: "Amika",
      logo: "/images/amika.jpg",
      url: "https://loveamika.com"
    },
    {
      name: "Reddit",
      logo: "/images/reddit.jpg",
      url: "https://www.reddit.com"
    }
  ];


  // Pricing Plans

  const pricingPlans = [
    {
      name: "Free",
      subtitle: "No credit card required",
      price: "$0/month",
      features: [
        "Automate email campaigns",
        "Create lead capture forms",
        "Set up live chat"
      ]
    },
    {
      name: "Starter",
      subtitle: "Starts at",
      price: "$10/month",
      oldPrice: "$20/month",
      note: "per seat*",
      features: [
        "Set up calls-to-action",
        "Display multiple currencies",
        "Remove Alchemize Technologies branding"
      ]
    },
    {
      name: "Professional",
      subtitle: "Starts at",
      price: "$890/month",
      note: "(3 seats included)",
      features: [
        "Personalize content",
        "Optimize search",
        "Deploy customer agent"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Starts at",
      price: "$3,600/month",
      note: "(5 seats included)",
      features: [
        "Track revenue",
        "Run A/B tests",
        "Map customer journeys"
      ]
    }
  ];


  // Frequently Asked Questions

  const faqs = [
    {
      question: "What are popular marketing automation software features?",
      answer: "Popular marketing automation features include email automation, lead management, audience segmentation, campaign management, and marketing analytics."
    },
    {
      question: "How's AI search changing the marketing landscape?",
      answer: "AI search is changing how customers discover brands, products, and services through AI-powered answer engines."
    },
    {
      question: "What specific Alchemize Technologies tools can help me optimize for AI search?",
      answer: "Alchemize Technologies AEO and Content Agent can help businesses improve their visibility in AI-powered search."
    },
    {
      question: "How much does Alchemize Technologies' marketing software cost?",
      answer: "Marketing Hub offers Free, Starter, Professional, and Enterprise pricing plans."
    },
    {
      question: "How much time does it take to implement marketing software?",
      answer: "Implementation time depends on business requirements, integrations, and configuration."
    },
    {
      question: "Does Marketing Hub integrate with Salesforce and other third-party tools?",
      answer: "Marketing Hub supports Salesforce and various third-party integrations, depending on the selected plan."
    },
    {
      question: "What reporting capabilities do I have with Marketing Hub?",
      answer: "Marketing Hub provides marketing analytics, dashboards, attribution reporting, and campaign reports."
    },
    {
      question: "How is Marketing Hub different from other marketing software?",
      answer: "Marketing Hub combines CRM, content, marketing automation, and campaign management in one platform."
    },
    {
      question: "How does Marketing Hub work with Sales Hub, Service Hub, Revenue Hub, Content Hub, and Data Hub?",
      answer: "Alchemize Technologies products are designed to work together using connected customer data."
    }
  ];


  // Footer Links

  const popularFeatures = [
    ["All Products and Features", "/"],
    ["Alchemize Technologies AEO", "/aeo"],
    ["Free Meeting Scheduler App", "/sales"],
    ["Email Tracking Software", "/sales"],
    ["AI Content Writer", "/content"],
    ["AI Website Generator", "/content"],
    ["Email Marketing Software", marketing],
    ["Lead Management Software", marketing],
    ["AI Prospecting Agent", "/sales"],
    ["Free Website Builder", "/content"],
    ["Free Landing Page Builder", marketing],
    ["Free Online Form Builder", marketing],
    ["Free Chatbot Builder", "/service"],
    ["Free Live Chat Software", "/service"],
    ["Marketing Analytics", marketing],
    ["Alchemize Technologies Assistant", "/"],
    ["Free Web Hosting", "/content"]
  ];

  const freeTools = [
    ["See All Free Business Tools", alchemizeHome],
    ["AEO Grader", marketing],
    ["AI Search Sensor", marketing],
    ["Make My Persona", "/"],
    ["Email Signature Generator", "/"],
    ["Free Business Templates", "/"],
    ["Software Comparisons Library", "/"],
    ["Website Templates", "/content"],
    ["Connector for Claude", "/"]
  ];

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

  const customers = [
    ["Customer Support", "/"],
    ["Join a Local User Group", "/"]
  ];

  const partners = [
    ["All Partner Programs", "/"],
    ["Solutions Partner Program", "/"],
    ["Technology Partner Program", "/"],
    ["Alchemize Technologies for Startups", "/"],
    ["Affiliate Program", "/"]
  ];


  // Social Media Links

  const socialLinks = [
    ["Facebook", "f", "/"],
    ["Instagram", "◎", "/"],
    ["YouTube", "▶", "/"],
    ["Twitter", "𝕏", "/"],
    ["LinkedIn", "in", "/"],
    ["Reddit", "◉", "/"],
    ["TikTok", "♪", "/"]
  ];


  // Reusable Buttons

  const renderButtons = (demoText = "Get a demo") => (
    <div className="marketing-buttons">

      <a
        className="demo-btn"
        href={marketing}
        target="_blank"
        rel="noopener noreferrer"
      >
        {demoText}
      </a>

      <a
        className="trial-btn"
        href={marketing}
        target="_blank"
        rel="noopener noreferrer"
      >
        Start 14-day free trial
      </a>

    </div>
  );


  // Reusable Feature Cards

  const renderFeatures = (features) => (
    <div className="feature-grid">

      {features.map((feature) => (

        <a
          className="feature-card"
          key={feature.title}
          href={feature.url}
          target={feature.url === "/content-agent" || feature.url === "/nurture-agent" || feature.url === "/ai-powered-emails" || feature.url === "/mobile-messaging" || feature.url === "/lookalike-lists" || feature.url === "/personalization" || feature.url === "/ads" || feature.url === "/form-shortening" || feature.url === "/social-media-management" || feature.url === "/audience-segments" || feature.url === "/prospecting-agent" || feature.url === "/customer-agent" ? undefined : "_blank"}
          rel="noopener noreferrer"
        >

          {feature.icon && (
            <span className="feature-icon">
              {feature.icon}
            </span>
          )}

          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>

        </a>

      ))}

    </div>
  );


  // Reusable Footer Links

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


  // Reusable FAQ

  const renderFAQ = (items) => (
    <div className="faq-column">

      {items.map((faq) => (

        <details
          className="faq-item"
          key={faq.question}
        >

          <summary>
            {faq.question}
            <span className="faq-arrow">⌄</span>
          </summary>

          <p>{faq.answer}</p>

        </details>

      ))}

    </div>
  );


  return (

    <div className="marketing-page">

      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/marketing">
          Marketing Hub
        </Link>

      </div>


      {/* Marketing Hub Hero Section */}

      <section className="marketing-hub">

        <a
          className="hub-logo"
          href={marketing}
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

            <path
              d="M16 2 L19 12 L30 16 L19 20 L16 30 L12 20 L2 16 L12 12 Z"
              fill="#ff4800"
            />

          </svg>

          <span>Alchemize Technologies</span>

        </a>

        <h1>Marketing Software</h1>

        <p>
          The platform where your CRM, content, and
          campaigns actually work together.
        </p>

        {renderButtons()}


        {/* Marketing Studio Image */}

        <div className="hero-image">

          <img
            src="/AlchemizeCustomerPlatform/d.webp"
            alt="Alchemize Technologies marketing dashboard"
          />

        </div>

      </section>


      {/* Business Solutions */}

      <section className="business-solutions container">

        <div className="section-label">
          Business Solutions
        </div>

        <div className="business-heading">

          <h2>
            Everything You Need to Build and Convert
            Demand, All in One Place
          </h2>

          <p>
            Grow awareness, convert leads into revenue,
            and run every campaign without adding more tools.
          </p>

        </div>


        {/* Grow Awareness Across New Channels */}

        <div className="feature-section">

          <div className="feature-image">

            <img
              src="/images/img2.webp"
              alt="Content Agent AEO"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>
              Grow Awareness Across New Channels
            </h2>

            <p>
              Show up where your buyers actually are.
              Not just search, but social, communities,
              and AI. Alchemize Technologies helps you reach your audience
              across every channel.
            </p>

          </div>

        </div>

        {renderFeatures(awarenessFeatures)}


        {/* Turn Leads into Revenue */}

        <div className="feature-section revenue-section">

          <div className="feature-content">

            <h2>Turn Leads into Revenue</h2>

            <p>
              Most leads go cold because they get the
              same message as everyone else. Personalized,
              automated messaging across every channel
              keeps every lead engaged until they’re
              ready to buy.
            </p>

          </div>

          <div className="feature-image">

            <img
              src="/images/img3.webp"
              alt="Nurture Agent Output"
              loading="lazy"
            />

          </div>

        </div>

        {renderFeatures(revenueFeatures)}


        {/* Scale Marketing */}

        <div className="feature-section scale-section">

          <div className="feature-image">

            <img
              src="/AlchemizeCustomerPlatform/f.webp"
              alt="Marketing campaign content editor"
              loading="lazy"
            />

          </div>

          <div className="feature-content">

            <h2>
              Scale Marketing Without Scaling Headcount
            </h2>

            <p>
              Get insights, run campaigns, and track results
              in one place. Marketing studio surfaces your
              marketing gaps, helps you close them quickly,
              and makes every campaign smarter than the last.
            </p>

          </div>

        </div>

        {renderFeatures(scaleFeatures)}

      </section>


      {/* Loop Marketing Playbook */}

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
              reach customers where they are, and continuously
              improve your results in real time.
            </p>

            <Link className="demo-btn" to="/loop-marketing">
              Explore the playbook
            </Link>

          </div>

        </div>

      </section>


      {/* Customer Proof Section */}

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
            Explore case studies
          </a>

        </div>

        <div className="business-heading">

          <h2>Real Growth, Real Stories</h2>

          <p>
            See how marketing teams are using AI tools
            to scale their marketing efforts.
          </p>

        </div>


        {/* Customer Story Image */}

        <div className="customer-story-image">

          <img
            src="/images/img5.webp"
            alt="Marketing team collaborating"
            loading="lazy"
          />

        </div>


        {/* Customer Statistics */}

        <div className="statistics-grid">

          <div className="statistics-intro">

            <h3>
              See why companies like to work with
              Marketing Hub.
            </h3>

            <a
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the ROI report
            </a>

          </div>

          <div className="stat-card">

            <h2>167%</h2>

            <p>
              increase in website traffic after 6 months
            </p>

          </div>

          <div className="stat-card">

            <h2>3x</h2>

            <p>
              increase in inbound leads after 6 months
            </p>

          </div>

          <div className="stat-card">

            <h2>83%</h2>

            <p>
              of users increase conversion rates
            </p>

          </div>

        </div>


        {/* Customer Brand Logos - JPG Images */}

        <div className="brand-logos">

          {brands.map((brand) => (

            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              title={brand.name}
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


      {/* Pricing Section */}

      <section className="pricing-section">

        <div className="container">

          <div className="pricing-heading">

            <h2>
              Grow Without Limits: Marketing Hub Pricing
            </h2>

            <p>
              Marketing software that scales with you.
            </p>

          </div>

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

          <p className="pricing-disclaimer">

            *Discount available for new customers only.
            Offer available for a limited time. For more
            detailed information on product packaging and
            the limits that apply, please see our{" "}

            <a
              href={"/"}
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


      {/* Frequently Asked Questions */}

      <section className="faq-section container">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">

          {renderFAQ(faqs.slice(0, 5))}

          {renderFAQ(faqs.slice(5))}

        </div>

      </section>


      {/* Bottom CTA */}

      <section className="bottom-cta">

        <div className="container">

          <h2>Win in an AI-Driven Market</h2>

          <p>
            Capture higher-intent leads with Marketing Hub.
          </p>

          {renderButtons()}

        </div>

      </section>


      {/* Footer Section */}

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


          {/* Social Media Icons */}

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

export default MarketingHub;
