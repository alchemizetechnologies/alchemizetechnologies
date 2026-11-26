import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "Popular Features",
    links: [
      ["All Products and Features", "/marketing"],
      ["Alchemize Technologies AEO", "/aeo"],
      ["Free Meeting Scheduler App", "/sales"],
      ["Email Tracking Software", "/sales"],
      ["AI Content Writer", "/content-agent"],
      ["AI Website Generator", "/content"],
      ["Email Marketing Software", "/marketing"],
      ["Lead Management Software", "/sales"],
      ["AI Prospecting Agent", "/prospecting-agent"],
      ["Free Website Builder", "/content"],
      ["Free Landing Page Builder", "/content"],
      ["Free Online Form Builder", "/form-shortening"],
      ["Free Chatbot Builder", "/service"],
      ["Free Live Chat Software", "/service"],
      ["Marketing Analytics", "/marketing"],
      ["Alchemize Technologies Assistant", "/agent"],
      ["Free Web Hosting", "/content"]
    ]
  },
  {
    title: "Free Tools",
    links: [
      ["See All Free Business Tools", "/"],
      ["AI Search Grader", "/aeo"],
      ["AI Search Sensor", "/aeo"],
      ["Make My Persona", "/content-agent"],
      ["Email Signature Generator", "/"],
      ["Free Business Templates", "/content"],
      ["Software Comparisons Library", "/"],
      ["Website Templates", "/content"],
      ["Connector for Claude", "/agent"]
    ]
  },
  {
    title: "Company",
    links: [
      ["About Us", "/"],
      ["Careers", "/"],
      ["Management Team", "/"],
      ["Board of Directors", "/"],
      ["Investor Relations", "/"],
      ["Blog", "/marketing"],
      ["Sustainability", "/"],
      ["AI Instructions", "/"],
      ["Contact Us", "/service"]
    ]
  },
  {
    title: "Customers",
    links: [
      ["Customer Support", "/service"],
      ["Join a Local User Group", "/"]
    ]
  },
  {
    title: "Partners",
    links: [
      ["All Partner Programs", "/"],
      ["Solutions Partner Program", "/"],
      ["Technology Partner Program", "/"],
      ["Alchemize Technologies for Startups", "/"],
      ["Affiliate Program", "/"]
    ]
  }
];

const socialLinks = [
  ["Facebook", "f"],
  ["Instagram", "◎"],
  ["YouTube", "▶"],
  ["X", "𝕏"],
  ["LinkedIn", "in"],
  ["Reddit", "◉"],
  ["TikTok", "♪"]
];

const legalLinks = [
  "Legal Center",
  "Privacy Policy",
  "Security",
  "Website Accessibility",
  "Manage Cookies"
];

function MarketingFooter() {
  return (
    <footer className="shared-marketing-footer">
      <div className="shared-footer-container">
        <div className="shared-footer-grid">
          {footerColumns.map(({ title, links }) => (
            <section key={title}>
              <h2>{title}</h2>
              <ul>
                {links.map(([label, path]) => (
                  <li key={label}>
                    <Link to={path}>{label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="shared-footer-socials" aria-label="Social media">
          {socialLinks.map(([name, icon]) => (
            <Link to="/" aria-label={name} title={name} key={name}>
              {icon}
            </Link>
          ))}
        </div>

        <div className="shared-footer-bottom">
          <Link className="shared-footer-brand" to="/">
            Alchemize Technologies
          </Link>
          <p>Copyright © {new Date().getFullYear()} Alchemize Technologies.</p>
          <div className="shared-footer-legal">
            {legalLinks.map((label) => (
              <Link to="/" key={label}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MarketingFooter;
