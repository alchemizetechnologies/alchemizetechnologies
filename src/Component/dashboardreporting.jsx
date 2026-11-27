import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const benefits = [
  "Bring reports from multiple teams into one view",
  "Customize dashboards around team priorities",
  "Manage access to sensitive reporting data"
];

const capabilities = [
  {
    id: "custom-dashboards",
    eyebrow: "DASHBOARDS FOR EVERY TEAM",
    title: "Give each team a view that fits its work.",
    description:
      "Combine relevant reports into dashboards for marketing, sales, revenue, service, and leadership. Keep high-level business measures visible while giving each team a focused view of the details it needs.",
    points: [
      "Bring related reports together in one dashboard.",
      "Build views around team roles and business goals.",
      "Share recurring insights with the right stakeholders."
    ],
    image: "/images/img1.webp",
    alt: "Business performance reports arranged in a shared dashboard"
  },
  {
    id: "dashboard-templates",
    eyebrow: "TEMPLATES AND CUSTOM REPORTS",
    title: "Start with a useful template, then make it yours.",
    description:
      "Use a prebuilt report or dashboard as a starting point, then adjust the layout, filters, and chart style to match the question your team needs to answer.",
    points: [
      "Begin with a template for a common reporting need.",
      "Arrange reports to highlight the information that matters.",
      "Create or refine reports as your goals change."
    ],
    image: "/AlchemizeCustomerPlatform/f.webp",
    alt: "A reporting workspace being configured for a team"
  },
  {
    id: "permissions",
    eyebrow: "REPORTING PERMISSIONS",
    title: "Make the right information available to the right people.",
    description:
      "Set access around the needs of your organization. Clear permissions help teams work from shared reporting while limiting visibility into information that should remain restricted.",
    points: [
      "Choose appropriate access for reports and dashboards.",
      "Keep sensitive business information limited to approved users.",
      "Review sharing settings as team responsibilities change."
    ],
    image: "/images/img3.webp",
    alt: "Team members reviewing business reports"
  }
];

const resources = [
  {
    title: "Reporting foundations",
    description:
      "Learn how to choose report views and measures that help your team make better-informed decisions.",
    action: "Explore dashboard options",
    href: "#dashboard-templates"
  },
  {
    title: "Data access and permissions",
    description:
      "Review ways to organize access to business reporting and keep sensitive information appropriately limited.",
    action: "Review permissions",
    href: "#permissions"
  },
  {
    title: "Marketing reports",
    description:
      "Explore campaign, website, and channel reporting for more focused marketing analysis.",
    action: "Explore marketing reports",
    href: "/marketing-reports"
  }
];

const popularFeatures = [
  {
    title: "Live Chat Software",
    description:
      "Connect website visitors with the right team and help move conversations forward.",
    href: "/service"
  },
  {
    title: "Contact Management",
    description:
      "Keep customer records and interactions organized in your CRM.",
    href: "/sales"
  },
  {
    title: "Pipeline Management",
    description:
      "Give your team a clear view of opportunities and the next step in the sales process.",
    href: "/sales"
  }
];

const questions = [
  {
    question: "What is dashboard and reporting software?",
    answer:
      "It helps teams bring selected data into reports and dashboards so they can monitor performance, compare trends, and share relevant business information."
  },
  {
    question: "Can I create custom reports?",
    answer:
      "Reporting tools may let you adjust filters, visualizations, and data sources or build a report from scratch. Available options depend on your account and plan."
  },
  {
    question: "What data integrations are available?",
    answer:
      "Available connections vary by product and account configuration. Check your integration catalog and reporting requirements before combining external data."
  },
  {
    question: "Can I set permissions on dashboards and reports?",
    answer:
      "Reporting systems can provide access controls for shared views. Review who can view or edit each dashboard and follow your organization’s data policies."
  },
  {
    question: "Which plans include reporting and dashboards?",
    answer:
      "Included reporting features vary across subscriptions and editions. Review current plan details to confirm what is available for your account."
  },
  {
    question: "Can I share or schedule reports automatically?",
    answer:
      "Some reporting tools support scheduled delivery and shared dashboards. Availability and delivery options may depend on your account configuration."
  }
];

function DashboardReporting() {
  return (
    <>
      <main className="content-agent-page dashboard-reporting-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">ALL PRODUCTS · DASHBOARDS &amp; REPORTING</p>
              <h1>Bring business reporting into one clear view.</h1>
              <p className="ca-hero-intro">
                Give teams access to the reports they need, build dashboards
                around their goals, and make business data easier to review
                together.
              </p>
              <div className="ca-actions">
                <Link
                  className="ca-button ca-button-primary"
                  to="/marketing"
                >
                  Explore products
                </Link>
                <a
                  className="ca-button ca-button-secondary"
                  href="#reporting-capabilities"
                >
                  Explore reporting
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="Custom business reporting dashboard"
              />
              <div className="ca-visual-caption">
                <span>REPORTS · DASHBOARDS · PERMISSIONS</span>
                <strong>Put the right data in reach of every team</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Reporting benefits">
          <div className="ca-container email-benefit-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit}>
                <span>{`0${index + 1}`}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ca-section email-intro" id="reporting-capabilities">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">REPORTING FOR GROWING TEAMS</p>
            <h2>Spend less time assembling spreadsheets.</h2>
            <p>
              Business information can be difficult to act on when it is spread
              across systems and teams. Bring relevant reports together, choose
              views that answer real questions, and give stakeholders a shared
              starting point for decisions.
            </p>
          </div>
        </section>

        <section className="ca-section ca-workflow">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">REPORTING ACROSS YOUR BUSINESS</p>
              <h2>Make cross-team data easier to understand.</h2>
              <p>
                Use reporting tools to review performance across the teams and
                business areas that matter to your organization.
              </p>
            </div>
            <div className="ca-step-grid">
              {["Marketing", "Sales", "Revenue", "Service"].map(
                (team, index) => (
                  <article className="ca-step-card" key={team}>
                    <span className="ca-step-number">{`0${index + 1}`}</span>
                    <p className="ca-step-label">TEAM REPORTING</p>
                    <h3>{team}</h3>
                    <p>
                      Organize the measures and reports that help this team
                      understand its work and goals.
                    </p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {capabilities.map((capability) => (
          <section
            className="ca-section email-detail-section"
            id={capability.id}
            key={capability.id}
          >
            <div className="ca-container ca-detail-layout">
              <div className="ca-detail-copy">
                <p className="ca-eyebrow">{capability.eyebrow}</p>
                <h2>{capability.title}</h2>
                <p>{capability.description}</p>
                <ul>
                  {capability.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="ca-detail-visual">
                <img
                  src={capability.image}
                  alt={capability.alt}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        ))}

        <section className="ca-section na-testimonial">
          <div className="ca-container na-testimonial-layout">
            <div>
              <p className="ca-eyebrow">CUSTOMER STORY · IGNITE READING</p>
              <h2 className="na-quote">
                A shared reporting view can help teams spend less time
                reconciling data and more time acting on it.
              </h2>
              <p className="na-attribution">
                <strong>Ignite Reading</strong>
                <span>Customer reporting story</span>
              </p>
            </div>
            <div className="na-customer-mark">
              <span>ONE SHARED VIEW</span>
              <span>BETTER TEAM ALIGNMENT</span>
            </div>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RELATED RESOURCES</p>
              <h2>Build a reporting practice that works for your team.</h2>
            </div>
            <div className="email-resource-grid">
              {resources.map((resource) => (
                <article className="email-resource-card" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <Link to={resource.href}>{resource.action}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-faq">
          <div className="ca-container email-faq-layout">
            <div>
              <p className="ca-eyebrow">FAQ</p>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="email-faq-list">
              {questions.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-popular">
          <div className="ca-container">
            <div className="email-popular-heading">
              <div>
                <p className="ca-eyebrow">POPULAR FEATURES</p>
                <h2>Explore more tools for connected teams.</h2>
              </div>
              <Link to="/marketing">All products and features</Link>
            </div>
            <div className="email-resource-grid">
              {popularFeatures.map((feature) => (
                <article className="email-resource-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link to={feature.href}>Learn more</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-final-cta">
          <div className="ca-container">
            <p className="ca-eyebrow">DASHBOARDS &amp; REPORTING</p>
            <h2>Help every team make decisions with a clearer view.</h2>
            <p>
              Bring key reports together and give stakeholders the context they
              need to move forward.
            </p>
            <Link className="ca-button ca-button-primary" to="/marketing">
              Explore all products
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default DashboardReporting;