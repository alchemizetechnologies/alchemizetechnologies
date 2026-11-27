import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const workflowSteps = [
  {
    number: "01",
    label: "PLAN",
    title: "Campaign agent turns a goal into a plan.",
    description:
      "Create a connected, multi-channel campaign around your audience and business goals."
  },
  {
    number: "02",
    label: "CREATE",
    title: "Content agent builds the assets.",
    description:
      "Create campaign-ready content in your brand voice, without starting from a blank page."
  },
  {
    number: "03",
    label: "CONVERT",
    title: "Nurture agent makes it personal.",
    description:
      "Adapt nurture emails for the specific contact receiving them and where they are in their journey."
  }
];

const agents = [
  {
    label: "PLAN",
    title: "Campaign Agent",
    description:
      "Turn a goal into a connected campaign plan built around your brand, audience, and performance."
  },
  {
    label: "CREATE",
    title: "Content Agent",
    description:
      "Build research-backed campaign assets in your brand voice, from blog posts to landing pages."
  },
  {
    label: "CONVERT",
    title: "Nurture Agent",
    description:
      "Personalize nurture emails for each contact with the context to make every message relevant."
  }
];

const trustPoints = [
  {
    number: "01",
    title: "You control what AI can access.",
    description:
      "Choose what information AI can use. Third-party AI providers are contractually prohibited from training their models on your data."
  },
  {
    number: "02",
    title: "No surprises. Full transparency.",
    description:
      "Model cards explain how AI features work, what data they use, and what safeguards are in place."
  },
  {
    number: "03",
    title: "Built on enterprise-grade security.",
    description:
      "Data is protected with least-privilege access controls, encryption, logging, monitoring, and independent security audits."
  }
];

function NurtureAgent() {
  return (
    <>
      <main className="content-agent-page nurture-agent-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING HUB · BUILD DEMAND</p>
              <h1>Campaigns built to convert, not just publish.</h1>
              <p className="ca-hero-intro">
                Campaign agent plans it. Content agent builds it. Nurture agent
                converts it. All in HubSpot.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#get-started">
                  Get a demo of campaign, content and nurture agent
                </a>
              </div>
              <p className="ca-hero-note">
                Built for marketing teams that need to move fast.
              </p>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img3.webp"
                alt="A nurture email tailored for its recipient"
              />
              <div className="ca-visual-caption">
                <span>CAMPAIGN · CONTENT · NURTURE</span>
                <strong>From first idea to meaningful follow-up</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-proof-strip" aria-label="Marketing results">
          <div className="ca-container na-trusted">
            <p className="ca-eyebrow">TRUSTED BY 306,000 CUSTOMERS WORLDWIDE</p>
          </div>
          <div className="ca-container na-stats">
            <article>
              <strong>9%</strong>
              <p>increase in brand visibility on average month-over-month</p>
            </article>
            <article>
              <strong>3x</strong>
              <p>increase in inbound leads after 6 months</p>
            </article>
            <article>
              <strong>83%</strong>
              <p>of users increase conversion rates</p>
            </article>
          </div>
        </section>

        <section className="ca-section ca-workflow">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">BUILD DEMAND</p>
              <h2>Everything your marketing team needs to grow and convert demand.</h2>
            </div>
            <div className="ca-step-grid">
              {workflowSteps.map((step) => (
                <article className="ca-step-card" key={step.number}>
                  <span className="ca-step-number">{step.number}</span>
                  <p className="ca-step-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section ca-agents">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">ONE CONNECTED WORKFLOW</p>
              <h2>Meet the agents that move demand forward.</h2>
            </div>
            <div className="ca-agent-grid">
              {agents.map((agent) => (
                <article
                  className={`ca-agent-card${agent.title === "Nurture Agent" ? " ca-agent-card-featured" : ""}`}
                  key={agent.title}
                >
                  <span>{agent.label}</span>
                  <h3>{agent.title}</h3>
                  <p>{agent.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section ca-content-detail" id="nurture-agent">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-visual">
              <img
                src="/images/img3.webp"
                alt="A personalized nurture email"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">NURTURE AGENT (BETA)</p>
              <h2>Keep warm leads engaged until they’re ready to buy.</h2>
              <p>
                Nurture agent rewrites emails in your nurture workflow for the
                specific contact receiving them. It draws on lifecycle stage,
                pages visited, associated deals, company size and industry, and
                live web research run at the moment of send. Every message
                reflects who they actually are, not just which segment they
                belong to.
              </p>
              <ul>
                <li>Personalize emails by contact, not by segment.</li>
                <li>
                  Use lifecycle stage, page visits, forms, deals, and live
                  company research.
                </li>
                <li>
                  Send a different message based on where each lead is in their
                  journey.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ca-section ca-content-detail na-campaign-detail" id="campaign-agent">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">CAMPAIGN AGENT (BETA)</p>
              <h2>Plan your next campaign in one session.</h2>
              <p>
                Campaign agent already knows your brand identity, target
                audience, top-performing channels, and AEO content gaps. Its
                first draft is specific to your business, not a generic
                starting point you have to rewrite.
              </p>
              <ul>
                <li>Go from a content gap to a fully drafted campaign plan.</li>
                <li>
                  Pull audience, brand settings, performance, and AEO data
                  automatically.
                </li>
                <li>Get the right channel mix for your business.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/AlchemizeCustomerPlatform/d.webp"
                alt="A connected marketing campaign workspace"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ca-section ca-content-detail na-content-detail">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-visual">
              <img
                src="/AlchemizeCustomerPlatform/f.webp"
                alt="Marketing content being created for a campaign"
                loading="lazy"
              />
            </div>
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">CONTENT AGENT (BETA)</p>
              <h2>Create the assets that fuel your campaign — fast.</h2>
              <p>
                Content agent builds research-backed blog posts, social content,
                and landing pages without the tabs, the brief, or the
                back-and-forth. Everything is written for the buyers you’re
                trying to reach and on-brief from the start.
              </p>
              <ul>
                <li>
                  Produce blog posts, LinkedIn content, and landing pages from
                  one starting point.
                </li>
                <li>
                  Research competitors, pull keyword data, and load your brand
                  voice before writing.
                </li>
                <li>Get a review-ready draft in minutes.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ca-section na-testimonial">
          <div className="ca-container na-testimonial-layout">
            <div>
              <p className="ca-eyebrow">REAL TEAMS. REAL RESULTS.</p>
              <p className="na-quote">
                “The combination of AEO and Content Agent has transformed
                content creation from a resource-intensive process into a
                scalable growth engine. We are creating more relevant content,
                increasing visibility, and competing in AI search in ways we
                simply could not before.”
              </p>
              <p className="na-attribution">
                <strong>Neal Williams</strong>
                <span>Marketing Manager · Kaplan Early Learning</span>
              </p>
            </div>
            <div className="na-customer-mark">
              <span>QWIKKIT</span>
              <span>KAPLAN EARLY LEARNING</span>
            </div>
          </div>
        </section>

        <section className="ca-section ca-quality">
          <div className="ca-container ca-quality-layout">
            <div className="ca-quality-heading">
              <p className="ca-eyebrow">AI THAT’S EASY TO USE AND EASY TO TRUST</p>
              <h2>AI you can trust, with your team in control.</h2>
              <p>
                AI runs on a secure infrastructure, giving you visibility into
                how your data is used and the controls to manage it.
              </p>
              <a className="na-trust-link" href="#get-started">
                Visit the AI Trust Center
              </a>
            </div>
            <div className="ca-quality-list">
              {trustPoints.map((point) => (
                <article key={point.number}>
                  <span>{point.number}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-final-cta" id="get-started">
          <div className="ca-container">
            <p className="ca-eyebrow">BUILD DEMAND</p>
            <h2>Go from brief to pipeline, without switching tools.</h2>
            <p>
              Bring campaign planning, content creation, and personalized
              nurture together in one workflow.
            </p>
            <Link className="ca-button ca-button-primary" to="/marketing">
              Explore Marketing Hub
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default NurtureAgent;
