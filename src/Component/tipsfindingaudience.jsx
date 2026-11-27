import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const audienceDimensions = [
  {
    title: "Demographics",
    description:
      "Use appropriate profile information, such as age range, role, or household context, when it relates to the offer."
  },
  {
    title: "Journey stage",
    description:
      "Shape information for people discovering a solution, comparing options, making a decision, or returning as customers."
  },
  {
    title: "Interests",
    description:
      "Look at topics and activities that help explain what customers care about and what motivates them."
  },
  {
    title: "Communities",
    description:
      "Recognize shared communities and identities thoughtfully, without reducing people to stereotypes."
  },
  {
    title: "Values",
    description:
      "Understand the principles and priorities customers use when choosing products and brands."
  }
];

const audienceDefinitions = [
  {
    title: "Target market",
    description:
      "The broader group of potential customers who may have a need your business can serve."
  },
  {
    title: "Target audience",
    description:
      "A more focused group chosen for a particular campaign, message, or offer."
  },
  {
    title: "Buyer persona",
    description:
      "A research-informed profile that helps a team picture the needs and decision context of someone in an audience."
  }
];

const researchSteps = [
  {
    number: "01",
    label: "REVIEW",
    title: "Start with marketing and customer data.",
    description:
      "Review audience attributes and campaign outcomes to learn which channels attract attention and drive useful actions."
  },
  {
    number: "02",
    label: "OBSERVE",
    title: "Study website behavior.",
    description:
      "Compare popular and under-visited pages, traffic sources, return visits, and the paths that lead to conversion."
  },
  {
    number: "03",
    label: "COMPARE",
    title: "Look across social channels.",
    description:
      "Review who engages on each platform and which topics, formats, and messages prompt a response."
  },
  {
    number: "04",
    label: "ASK",
    title: "Invite direct customer feedback.",
    description:
      "Use short surveys, polls, and conversations to learn how people use your offer and what they still need."
  },
  {
    number: "05",
    label: "DEFINE",
    title: "Describe both fit and non-fit.",
    description:
      "Clarify whom your offer helps most and which needs or situations it is not designed to address."
  },
  {
    number: "06",
    label: "TEST",
    title: "Validate your audience assumptions.",
    description:
      "Try focused messaging, compare outcomes, and update your understanding when customer behavior changes."
  }
];

const examples = [
  {
    title: "A neighborhood fitness studio",
    description:
      "New members may need a welcoming introduction, while experienced members may respond better to advanced class updates."
  },
  {
    title: "An online home-goods shop",
    description:
      "Customers browsing small-space storage may value different product guidance from customers shopping for outdoor furniture."
  },
  {
    title: "A business software team",
    description:
      "Small teams exploring their first system may need setup help; larger organizations may prioritize integration and administration."
  }
];

const questions = [
  {
    question: "What is a target audience?",
    answer:
      "It is a defined group of people or organizations a campaign is intended to reach, based on needs or characteristics related to the offer."
  },
  {
    question: "How is a target audience different from a target market?",
    answer:
      "A target market is the broader potential customer group. A target audience is a more specific group selected for a particular message or campaign."
  },
  {
    question: "Is a target audience the same as a buyer persona?",
    answer:
      "No. An audience describes a group; a persona is a research-informed profile that represents a type of person within that group."
  },
  {
    question: "How often should I revisit my audience definition?",
    answer:
      "Review it when customer behavior, product direction, campaign results, or market conditions change—and schedule periodic checks even when performance is steady."
  }
];

function TipsFindingAudience() {
  return (
    <>
      <main className="content-agent-page target-audience-guide">
        <div className="email-breadcrumb">
          <Link to="/marketing">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/marketing">Marketing Hub</Link>
          <span aria-hidden="true">›</span>
          <Link to="/lookalike-lists">Lookalike Lists</Link>
          <span aria-hidden="true">›</span>
          <span>Target Audience Guide</span>
        </div>

        <section className="ca-hero email-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING GUIDE · AUDIENCE RESEARCH</p>
              <h1>Tips for Finding Your Target Audience</h1>
              <p className="ca-hero-intro">
                Focus your marketing on the people most likely to value what
                you offer. Use research, customer signals, and ongoing testing
                to make that audience clearer.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#audience-guide">
                  Explore the guide
                </a>
              </div>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img2.webp"
                alt="Audience insights organized for a marketing campaign"
              />
              <div className="ca-visual-caption">
                <span>KNOW YOUR AUDIENCE</span>
                <strong>Make every message more relevant</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-section email-intro" id="audience-guide">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">START WITH THE PEOPLE YOU SERVE</p>
            <h2>Good targeting begins with understanding, not assumptions.</h2>
            <p>
              A target audience is the group most relevant to a specific
              product, service, or message. Research helps clarify their
              challenges and priorities so your marketing can speak to a real
              need instead of trying to appeal to everyone.
            </p>
          </div>
        </section>

        <section className="ca-section">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">GET THE SCOPE RIGHT</p>
              <h2>Market, audience, and persona describe different levels of focus.</h2>
            </div>
            <div className="email-resource-grid">
              {audienceDefinitions.map((definition) => (
                <article className="email-resource-card" key={definition.title}>
                  <h3>{definition.title}</h3>
                  <p>{definition.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section ca-agents">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">BUILD A USEFUL AUDIENCE PICTURE</p>
              <h2>Consider more than one kind of customer signal.</h2>
              <p>
                Combine relevant information carefully. No single attribute
                should stand in for a person’s full needs or preferences.
              </p>
            </div>
            <div className="email-resource-grid">
              {audienceDimensions.map((dimension) => (
                <article className="email-resource-card" key={dimension.title}>
                  <h3>{dimension.title}</h3>
                  <p>{dimension.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">A RESEARCH WORKFLOW</p>
              <h2>Find and refine your audience in six steps.</h2>
            </div>
            <div className="ca-step-grid">
              {researchSteps.map((step) => (
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

        <section className="ca-section email-personalization">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">PUT THE IDEA INTO CONTEXT</p>
              <h2>Audience research can look different across industries.</h2>
            </div>
            <div className="email-resource-grid">
              {examples.map((example) => (
                <article className="email-resource-card" key={example.title}>
                  <h3>{example.title}</h3>
                  <p>{example.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-detail-section">
          <div className="ca-container ca-detail-layout">
            <div className="ca-detail-copy">
              <p className="ca-eyebrow">KEEP YOUR RESEARCH RESPONSIBLE</p>
              <h2>Use customer information with care.</h2>
              <p>
                Use trustworthy data, be clear about how you collect it, and
                follow customer preferences and applicable privacy rules.
                Treat audience descriptions as working hypotheses, not rigid
                labels.
              </p>
              <ul>
                <li>Ask customers directly when their perspective is missing.</li>
                <li>Avoid assumptions based on a single characteristic.</li>
                <li>Review campaign results and update your audience picture.</li>
              </ul>
            </div>
            <div className="ca-detail-visual">
              <img
                src="/images/img5.webp"
                alt="Marketing results used to improve audience research"
                loading="lazy"
              />
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
            <p className="ca-eyebrow">KEEP EXPLORING</p>
            <h2>Turn audience insights into more relevant campaigns.</h2>
            <p>
              Explore Lookalike Lists and other Marketing Hub tools for
              planning and reaching the audiences that matter to your goals.
            </p>
            <Link className="ca-button ca-button-primary" to="/lookalike-lists">
              Explore Lookalike Lists
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default TipsFindingAudience;
