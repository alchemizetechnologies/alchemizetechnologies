import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const stages = [
  {
    number: "01",
    name: "Express",
    title: "Clarify the story only your brand can tell.",
    description:
      "Bring your customer understanding, point of view, and current business goals together before creating a campaign.",
    focus: [
      "Identify an audience need or market opportunity.",
      "Define the message and the reason it matters now.",
      "Give AI clear brand and customer context."
    ],
    tools: [
      ["Content Agent", "/content-agent"],
      ["Alchemize Assistant", "/agent"]
    ]
  },
  {
    number: "02",
    name: "Tailor",
    title: "Adapt the message to people and channels.",
    description:
      "Use audience signals to make useful content variations for different customer needs, formats, and journey stages.",
    focus: [
      "Build audience groups from relevant data.",
      "Create assets that fit each channel.",
      "Personalize follow-up while keeping a human review."
    ],
    tools: [
      ["Personalization", "/personalization"],
      ["Nurture Agent", "/nurture-agent"],
      ["Lookalike Lists", "/lookalike-lists"]
    ]
  },
  {
    number: "03",
    name: "Amplify",
    title: "Help the right people discover your work.",
    description:
      "Distribute content across suitable owned and paid channels, and make it easier for people to find your brand in search and AI answers.",
    focus: [
      "Publish consistently across relevant channels.",
      "Improve discoverability beyond traditional search.",
      "Use partnerships and paid campaigns thoughtfully."
    ],
    tools: [
      ["AEO", "/aeo"],
      ["Ads", "/ads"],
      ["Social Media Management", "/social-media-management"]
    ]
  },
  {
    number: "04",
    name: "Evolve",
    title: "Use results to make the next cycle smarter.",
    description:
      "Monitor campaign signals, learn from what changes, and use those insights to adjust the strategy without waiting for a long review cycle.",
    focus: [
      "Track engagement and conversion trends.",
      "Investigate unusual results and new opportunities.",
      "Apply learnings to your next campaign."
    ],
    tools: [
      ["Marketing Hub", "/marketing"],
      ["AEO", "/aeo"]
    ]
  }
];

const measures = [
  {
    stage: "Express",
    measure: "Remarkability",
    tracks: [
      "How consistently teams express a distinctive brand point of view.",
      "Whether creative quality improves as the framework is adopted."
    ]
  },
  {
    stage: "Tailor",
    measure: "Resonance",
    tracks: [
      "How closely content reflects audience needs and customer context.",
      "Time from first draft to approved, published content."
    ]
  },
  {
    stage: "Amplify",
    measure: "Reach",
    tracks: [
      "Visibility in AI answers and other discovery channels.",
      "Content impressions, engagement, and conversion by channel."
    ]
  },
  {
    stage: "Evolve",
    measure: "Regeneration",
    tracks: [
      "How quickly the team applies campaign learnings.",
      "Changes in pipeline performance across successive cycles."
    ]
  }
];

const resourceCards = [
  {
    title: "Build your brand context",
    description:
      "Set a clear point of view and give AI the customer and brand context it needs.",
    action: "Explore brand tools",
    href: "/agent"
  },
  {
    title: "Create campaign assets",
    description:
      "Turn a campaign idea into useful content that can be adapted for different channels.",
    action: "Explore Content Agent",
    href: "/content-agent"
  },
  {
    title: "Make each interaction relevant",
    description:
      "Use audience context to tailor messages and digital experiences for the people receiving them.",
    action: "Explore personalization",
    href: "/personalization"
  },
  {
    title: "Improve AI discovery",
    description:
      "Understand how your brand appears in AI answers and where your content can improve.",
    action: "Explore AEO",
    href: "/aeo"
  },
  {
    title: "Learn about your audience",
    description:
      "Use audience signals to plan more focused campaigns and reach the right people.",
    action: "Explore audience segments",
    href: "/audience-segments"
  },
  {
    title: "Measure the next move",
    description:
      "Use a simple scorecard to identify a useful experiment for your next marketing cycle.",
    action: "View the scorecard",
    href: "#loop-scorecard"
  }
];

const bookResources = [
  {
    title: "AI prompt library",
    description:
      "Use structured prompts as a starting point for brand, audience, content, and optimization work.",
    action: "Explore Content Agent",
    href: "/content-agent"
  },
  {
    title: "Taste Profile",
    description:
      "Bring your brand perspective and customer understanding together before creating with AI.",
    action: "Explore brand tools",
    href: "/agent"
  },
  {
    title: "Answer engine optimization",
    description:
      "Make your content easier to discover in the AI-powered search experiences your buyers use.",
    action: "Explore AEO",
    href: "/aeo"
  },
  {
    title: "Four-stage measurement scorecard",
    description:
      "Choose practical signals to review across Express, Tailor, Amplify, and Evolve.",
    action: "Review the scorecard",
    href: "#loop-scorecard"
  }
];

const questions = [
  {
    question: "What is Loop Marketing?",
    answer:
      "It is a repeatable four-stage approach—Express, Tailor, Amplify, and Evolve—that combines human direction, customer context, AI assistance, and ongoing learning."
  },
  {
    question: "Does this approach replace inbound marketing?",
    answer:
      "No. It builds on customer-focused marketing and adapts how teams plan, personalize, distribute, and improve their work as channels and discovery habits change."
  },
  {
    question: "Where should a team begin?",
    answer:
      "Start with a clear audience and business objective. Build a Taste Profile that captures your brand perspective and customer context, then run a focused Loop around one goal."
  },
  {
    question: "Do I need to replace my current tools?",
    answer:
      "Not necessarily. Begin with the tools and data you already use, then identify gaps that prevent your team from connecting planning, content, distribution, and measurement."
  },
  {
    question: "How does Loop Marketing help as search behavior changes?",
    answer:
      "It encourages teams to improve AI search visibility, diversify distribution, and keep refining content as discovery shifts across search engines, AI assistants, social platforms, and communities."
  },
  {
    question: "How do I know if the framework is helping?",
    answer:
      "Set relevant measures for each stage, review outcomes such as audience response and pipeline contribution, and check whether your team is applying its learnings more quickly."
  }
];

function LoopMarketing() {
  return (
    <>
      <main className="content-agent-page loop-marketing-page">
        <section className="ca-hero">
          <div className="ca-container ca-hero-layout">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">MARKETING HUB · THE LOOP PLAYBOOK</p>
              <h1>The Loop Marketing Playbook</h1>
              <p className="ca-hero-intro">
                Marketing is changing fast. Use a four-stage framework to
                express your point of view, tailor it to your audience, amplify
                it across channels, and evolve your approach with each result.
              </p>
              <div className="ca-actions">
                <a className="ca-button ca-button-primary" href="#loop-stages">
                  Explore the playbook
                </a>
              </div>
              <p className="ca-hero-note">
                Start with your brand and customer context. Let AI extend your
                judgment, not replace it.
              </p>
            </div>
            <div className="ca-hero-visual">
              <img
                src="/images/img1.webp"
                alt="Connected marketing strategy and campaign workflow"
              />
              <div className="ca-visual-caption">
                <span>EXPRESS · TAILOR · AMPLIFY · EVOLVE</span>
                <strong>Learn from every campaign and keep moving</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-proof-strip" aria-label="Loop Marketing stages">
          <div className="ca-container ca-proof-items">
            {stages.map((stage) => (
              <span key={stage.name}>
                {stage.number} · {stage.name}
              </span>
            ))}
          </div>
        </section>

        <section className="ca-section email-intro" id="loop-intro">
          <div className="ca-container email-intro-content">
            <p className="ca-eyebrow">ABOUT LOOP MARKETING</p>
            <h2>Turn changing customer behavior into a growth cycle.</h2>
            <p>
              As traffic patterns shift and channels multiply, disconnected
              tactics are harder to sustain. Loop Marketing connects human
              insight and AI assistance in a repeatable cycle. Start with a
              Taste Profile—a useful picture of your brand and your customer—
              then focus each Loop on a specific goal.
            </p>
          </div>
        </section>

        <section className="ca-section ca-agents" id="loop-stages">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">THE FOUR STAGES</p>
              <h2>Move from a clear story to your next informed decision.</h2>
            </div>
            <div className="ca-step-grid">
              {stages.map((stage) => (
                <article className="ca-step-card" key={stage.number}>
                  <span className="ca-step-number">{stage.number}</span>
                  <p className="ca-step-label">{stage.name.toUpperCase()}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {stages.map((stage) => (
          <section
            className="ca-section email-detail-section"
            id={stage.name.toLowerCase()}
            key={stage.name}
          >
            <div className="ca-container ca-detail-layout">
              <div className="ca-detail-copy">
                <p className="ca-eyebrow">
                  STAGE {stage.number} · {stage.name.toUpperCase()}
                </p>
                <h2>{stage.title}</h2>
                <p>{stage.description}</p>
                <ul>
                  {stage.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="loop-tool-links">
                  <span>Explore related tools:</span>
                  {stage.tools.map(([label, path]) => (
                    <Link to={path} key={label}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="ca-detail-visual">
                <img
                  src={
                    stage.number === "01"
                      ? "/images/img2.webp"
                      : stage.number === "02"
                        ? "/images/img3.webp"
                        : "/images/img5.webp"
                  }
                  alt={`${stage.name} stage marketing workflow`}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        ))}

        <section className="ca-section email-personalization">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">PLAYBOOK RESOURCES</p>
              <h2>Put the four stages into practice.</h2>
              <p>
                Explore tools and guidance to help your team build context,
                create relevant campaigns, and keep learning.
              </p>
            </div>
            <div className="email-resource-grid">
              {resourceCards.map((resource) => (
                <article className="email-resource-card" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <Link to={resource.href}>{resource.action}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ca-section email-resources">
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">BOOK RESOURCES</p>
              <h2>Keep useful references close at hand.</h2>
            </div>
            <div className="email-resource-grid">
              {bookResources.map((resource) => (
                <article className="email-resource-card" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <Link to={resource.href}>{resource.action}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ca-section email-personalization loop-scorecard-section"
          id="loop-scorecard"
        >
          <div className="ca-container">
            <div className="ca-section-heading">
              <p className="ca-eyebrow">MEASURE THE WHOLE CYCLE</p>
              <h2>Use a scorecard to keep each stage moving.</h2>
              <p>
                Choose measures that show what is improving and what your team
                should test next. Adapt them to your goals and available data.
              </p>
            </div>
            <div className="loop-scorecard-wrap">
              <table className="loop-scorecard">
                <thead>
                  <tr>
                    <th scope="col">Stage</th>
                    <th scope="col">Headline measure</th>
                    <th scope="col">What to review</th>
                  </tr>
                </thead>
                <tbody>
                  {measures.map((item) => (
                    <tr key={item.stage}>
                      <th scope="row">{item.stage}</th>
                      <td>{item.measure}</td>
                      <td>
                        <ul>
                          {item.tracks.map((track) => (
                            <li key={track}>{track}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            <p className="ca-eyebrow">KEEP THE LOOP MOVING</p>
            <h2>Make every Loop more informed than the last.</h2>
            <p>
              Explore Marketing Hub tools for planning, creating, distributing,
              and measuring customer-focused campaigns.
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

export default LoopMarketing;
