import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const results = [
  {
    value: "31%",
    label: "more marketing deals created with Marketing Hub"
  },
  {
    value: "29%",
    label: "more deals closed with connected marketing and sales"
  },
  {
    value: "36%",
    label: "more revenue with Marketing and Sales Hub"
  }
];

const workflow = [
  {
    number: "01",
    label: "SPOT",
    title: "Find the opportunity.",
    description:
      "Surface changes in campaign performance and discover where your team can take action, including shifts in answer-engine visibility."
  },
  {
    number: "02",
    label: "PLAN",
    title: "Build a plan with context.",
    description:
      "Use brand guidance, audience information, and past performance to shape a campaign approach before work begins."
  },
  {
    number: "03",
    label: "LAUNCH",
    title: "Move from approval to action.",
    description:
      "Review the proposed plan, make it your own, then organize campaign work and automations in one shared canvas."
  }
];

const benefits = [
  {
    title: "A connected campaign canvas",
    description:
      "Bring campaign planning, assets, and automations together so the team can see how the work fits as a whole."
  },
  {
    title: "A clear view of performance",
    description:
      "Connect campaign activity with customer journeys and revenue outcomes to understand what is contributing to results."
  },
  {
    title: "More useful next steps",
    description:
      "Turn performance signals into practical opportunities your team can review and prioritize."
  }
];

const resources = [
  {
    title: "Campaign planning and creation",
    description:
      "See how a campaign goal can guide planning, asset creation, and launch in a connected workflow.",
    action: "Explore the campaign workflow",
    href: "#how-it-works"
  },
  {
    title: "Loop Marketing Playbook",
    description:
      "Learn how to connect brand expression, audience relevance, channel reach, and ongoing improvement.",
    action: "Explore the playbook",
    href: "/loop-marketing"
  },
  {
    title: "Build Demand",
    description:
      "Discover how campaign, content, and nurture tools can work together to create and convert demand.",
    action: "Explore the agents",
    href: "/nurture-agent"
  }
];

const connectedTools = [
  {
    label: "PLAN",
    title: "Campaign Agent",
    description:
      "Shape an objective into a campaign plan with your audience, brand, and past performance in view.",
    href: "/nurture-agent"
  },
  {
    label: "CREATE",
    title: "Content Agent",
    description:
      "Create campaign-ready blog, social, and landing page content that reflects your brand voice.",
    href: "/content-agent"
  },
  {
    label: "CONVERT",
    title: "Nurture Agent",
    description:
      "Adapt nurture messages to the contact receiving them and the context of their journey.",
    href: "/nurture-agent"
  }
];

const questions = [
  {
    question: "How does Marketing Studio work?",
    answer:
      "It brings campaign planning, creation, and measurement into a shared workspace. AI can help identify opportunities and draft a plan using available brand, audience, and performance context for your team to review."
  },
  {
    question: "Who is Marketing Studio for?",
    answer:
      "It is designed for marketing teams that want to coordinate campaign work, reduce handoffs, and understand how activity contributes to pipeline and revenue."
  },
  {
    question: "What problems does Marketing Studio help solve?",
    answer:
      "It helps teams connect scattered campaign tasks, make better use of performance signals, and follow work from planning through launch and measurement."
  },
  {
    question: "How much does Marketing Studio cost?",
    answer:
      "Availability and pricing depend on the Marketing Hub plan and product packaging. Contact the team for current plan details."
  },
  {
    question: "Can I plan campaigns that use other channels?",
    answer:
      "Campaign planning can account for the channels your audience uses. Check the current product details to confirm which publishing and reporting connections are available for your account."
  },
  {
    question: "Can I use Marketing Studio with other AI tools?",
    answer:
      "You can use connected tools alongside your broader workflow. Available connections and capabilities may vary, so review the product documentation for the latest options."
  }
];

function MarketingStudio() {
  return (
    <>
      <main className="content-agent-page marketing-studio-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">
                MARKETING HUB · MARKETING STUDIO{" "}
                <span className="personalization-beta-badge">BETA</span>
              </p>
              <h1>Grow and convert demand from one campaign workspace.</h1>
              <p className="ca-hero-intro">
                Bring planning, creative work, automation, and performance
                insights together so your team can move from an opportunity to
                a campaign with a clear path to results.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#how-it-works">
                  See how it works
                </a>
                <Link className="ca-button ca-button-secondary" to="/marketing">
                  Explore Marketing Hub
                </Link>
              </div>
              <p className="ca-hero-note">
                Your team stays in control: review the plan, make changes, and
                decide when to move forward.
              </p>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/AlchemizeCustomerPlatform/f.webp"
                alt="A marketing campaign workspace for planning and content"
              />
              <div className="ca-visual-caption">
                <span>MARKETING STUDIO · BETA</span>
                <strong>From campaign insight to measurable action</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="email-benefits" aria-label="Marketing Hub results">
          <div className="ca-container email-benefit-grid">
            {results.map((result) => (
              <article key={result.value}>
                <span>{result.value}</span>
                <p>{result.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ca-section email-intro" id="how-it-works">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">FROM INSIGHT TO CAMPAIGN</p>
            <h2>Turn useful signals into a plan your team can act on.</h2>
            <p>
              Marketing Studio helps bring campaign context into one place.
              Breeze Assistant can use your brand, audience, and past campaign
              performance to suggest a plan. Your team reviews the direction
              before building the work on a shared campaign canvas.
            </p>
          </div>
        </section>

        <section className="ca-section ca-workflow">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RUN CAMPAIGNS FROM PLAN TO PROOF</p>
              <h2>Move from opportunity to measurable campaign work.</h2>
            </div>
            <div className="ca-step-grid">
              {workflow.map((step) => (
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

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">ONE SHARED CAMPAIGN CANVAS</p>
              <h2>Keep campaign planning and automation connected.</h2>
              <p>
                Give teams a shared view of the campaign, from its original
                objective to the assets and automated steps that carry it
                forward. Keep important decisions and work in context rather
                than scattered across disconnected tools.
              </p>
              <ul>
                <li>Bring campaign planning and execution into one workspace.</li>
                <li>Coordinate assets and automations around a shared goal.</li>
                <li>Review the plan before moving from draft to launch.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img1.webp"
                alt="Marketing campaign planning and performance overview"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ca-section email-personalization">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">ONE WORKSPACE, MORE MOMENTUM</p>
              <h2>Connect campaign work to the outcomes that matter.</h2>
            </div>
            <div className="email-resource-grid">
              {benefits.map((benefit) => (
                <article className="email-resource-card" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-proof-strip" aria-label="Marketing Hub customers">
          <div className="ca-container ca-proof-items">
            <span>Trusted by more than 306,000 customers worldwide</span>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">RELATED RESOURCES</p>
              <h2>Explore ideas for better-connected campaigns.</h2>
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

        <section className="ca-section ca-agents">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">YOUR MARKETING TOOLS, WORKING TOGETHER</p>
              <h2>Plan, create, and nurture around one campaign goal.</h2>
            </div>
            <div className="ca-agent-grid">
              {connectedTools.map((tool) => (
                <article className="ca-agent-card" key={tool.title}>
                  <span>{tool.label}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <Link to={tool.href}>Learn more</Link>
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

        <section className="ca-final-cta">
          <div className="ca-container">
            <p className="ca-eyebrow">MARKETING HUB · MARKETING STUDIO</p>
            <h2>Your next campaign starts with a clearer view.</h2>
            <p>
              Find an opportunity, shape the plan, and follow campaign results
              from one connected workspace.
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

export default MarketingStudio;