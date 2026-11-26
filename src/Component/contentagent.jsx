import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const workflowSteps = [
  {
    number: "01",
    label: "PLAN",
    title: "Start with a useful brief.",
    description:
      "Campaign Agent helps shape a goal, audience, and channel plan before the first draft begins."
  },
  {
    number: "02",
    label: "CREATE",
    title: "Make every asset feel connected.",
    description:
      "Content Agent turns the brief into on-brand copy for the formats your campaign needs."
  },
  {
    number: "03",
    label: "NURTURE",
    title: "Keep the conversation moving.",
    description:
      "Nurture Agent helps tailor follow-up messages to the audience and their place in the journey."
  }
];

const agentCards = [
  {
    label: "PLAN",
    title: "Campaign Agent",
    description:
      "Turn a campaign goal into a practical outline, with audience, channels, and content needs in view."
  },
  {
    label: "CREATE",
    title: "Content Agent",
    description:
      "Draft blogs, social posts, and landing page copy from one brief, with your brand voice in mind."
  },
  {
    label: "NURTURE",
    title: "Nurture Agent",
    description:
      "Prepare relevant follow-up for different contacts, so each message has a clear reason to reach out."
  }
];

function ContentAgent() {
  return (
    <>
    <main className="content-agent-page">
      <section className="ca-hero">
        <div className="ca-container ca-hero-layout">
          <div className="ca-hero-copy">
            <p className="ca-eyebrow">ALCHEMIZE TECHNOLOGIES · CONTENT AGENT</p>
            <h1>Make content that moves your campaign forward.</h1>
            <p className="ca-hero-intro">
              Bring campaign planning, on-brand content, and thoughtful follow-up
              into one connected workflow.
            </p>
            <div className="ca-actions">
              <a className="ca-button ca-button-primary" href="#workflow">
                See how it works
              </a>
              <Link className="ca-button ca-button-secondary" to="/marketing">
                Explore Marketing Hub
              </Link>
            </div>
            <p className="ca-hero-note">
              One clear brief can guide the work from first idea to final review.
            </p>
          </div>
          <div className="ca-hero-visual">
            <img
              src="/AlchemizeCustomerPlatform/f.webp"
              alt="A content editor with options for text, images, buttons, and social links"
            />
            <div className="ca-visual-caption">
              <span>CONTENT AGENT</span>
              <strong>From brief to review-ready draft</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="ca-proof-strip" aria-label="Workflow benefits">
        <div className="ca-container ca-proof-items">
          <span>One connected workflow</span>
          <span>Content shaped around your brand</span>
          <span>Your team stays in control</span>
        </div>
      </section>

      <section className="ca-section ca-workflow" id="workflow">
        <div className="ca-container">
          <div className="ca-section-heading">
            <p className="ca-eyebrow">FROM BRIEF TO FOLLOW-UP</p>
            <h2>Three focused steps. One shared direction.</h2>
            <p>
              Keep the goal and audience in view as your team plans, creates,
              and follows through.
            </p>
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
            <p className="ca-eyebrow">WORK TOGETHER, NOT IN SILOS</p>
            <h2>Meet the agents behind the workflow.</h2>
          </div>
          <div className="ca-agent-grid">
            {agentCards.map((agent) => (
              <article
                className={`ca-agent-card${agent.title === "Content Agent" ? " ca-agent-card-featured" : ""}`}
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

      <section className="ca-section ca-content-detail" id="content-agent">
        <div className="ca-container ca-detail-layout">
          <div className="ca-detail-visual">
            <img
              src="/images/img3.webp"
              alt="An email draft being personalized with contact and company context"
              loading="lazy"
            />
          </div>
          <div className="ca-detail-copy">
            <p className="ca-eyebrow">NURTURE AGENT</p>
            <h2>Make follow-up feel relevant to the person receiving it.</h2>
            <p>
              Use the campaign goal and audience context to shape purposeful
              follow-up messages. Your team can refine each draft before it
              goes out.
            </p>
            <ul>
              <li>Tailor follow-up to the audience and journey stage.</li>
              <li>Keep each message connected to the campaign goal.</li>
              <li>Review and refine drafts before sending.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ca-section ca-quality">
        <div className="ca-container ca-quality-layout">
          <div className="ca-quality-heading">
            <p className="ca-eyebrow">BUILT FOR REAL TEAMWORK</p>
            <h2>Move faster without losing your point of view.</h2>
            <p>
              Use AI to get the work moving, while your team brings the
              judgment, experience, and final approval.
            </p>
          </div>
          <div className="ca-quality-list">
            <article>
              <span>01</span>
              <div>
                <h3>Start with context</h3>
                <p>Keep the audience, objective, and channel in the brief.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Keep a human in the loop</h3>
                <p>Give your team a clear draft to review, edit, and approve.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Carry the idea forward</h3>
                <p>Connect each asset and follow-up to the campaign goal.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ca-final-cta">
        <div className="ca-container">
          <p className="ca-eyebrow">READY TO GET STARTED?</p>
          <h2>Bring your next campaign idea to life.</h2>
          <p>
            Explore how Content Agent fits into the Alchemize Technologies
            Marketing Hub workflow.
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

export default ContentAgent;