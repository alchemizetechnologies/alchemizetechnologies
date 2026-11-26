import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const platforms = ["Search", "Social", "AI-powered placements", "Short-form video"];

const capabilities = [
  {
    number: "01",
    title: "Manage campaigns in one place",
    description:
      "Keep campaign planning across your paid channels together, so your team can spend less time switching tools."
  },
  {
    number: "02",
    title: "Reach audiences that matter",
    description:
      "Use the customer and campaign context available to your team to shape relevant audience segments and messages."
  },
  {
    number: "03",
    title: "See beyond clicks",
    description:
      "Look at how campaign activity connects to new contacts and meaningful next steps, not just impressions."
  },
  {
    number: "04",
    title: "Keep follow-up moving",
    description:
      "Give your team a clear path for responding when a campaign creates interest."
  }
];

const resources = [
  {
    label: "MEASUREMENT",
    title: "A clearer view of campaign performance",
    description: "Learn what to compare when you review paid campaign results.",
    href: "#ads-faq"
  },
  {
    label: "AUDIENCES",
    title: "Build campaigns around the people you want to reach",
    description: "Explore practical ways to plan audience-first advertising.",
    href: "#ads-audiences"
  },
  {
    label: "FOLLOW-UP",
    title: "Connect ad interest to the next conversation",
    description: "See how marketing and follow-up can work as one process.",
    href: "#ads-follow-up"
  }
];

const questions = [
  [
    "Which advertising channels are supported?",
    "Supported channels depend on your advertising setup. Contact the Alchemize Technologies team to confirm current integration availability."
  ],
  [
    "How can I understand which campaigns are working?",
    "Review campaign engagement alongside the contacts and actions that matter to your team. A shared view makes it easier to compare activity and decide what to improve."
  ],
  [
    "Can I plan audiences and campaign messages together?",
    "Yes. Use the same campaign brief to keep audience context, creative direction, and follow-up aligned."
  ],
  [
    "Does this replace the ad platforms I already use?",
    "No. Keep using the ad platforms that fit your business, and use a connected workflow to plan and review campaign work."
  ]
];

function Ads() {
  return (
    <>
    <main className="ads-page">
      <section className="ads-hero">
        <div className="ads-container ads-hero-layout">
          <div className="ads-hero-copy">
            <p className="ads-eyebrow">MARKETING HUB · ADS SOFTWARE</p>
            <h1>Make every ad campaign easier to understand.</h1>
            <p>
              Plan campaigns across your paid channels, shape messages for the
              right audiences, and connect activity to the outcomes your team
              cares about.
            </p>
            <div className="ads-actions">
              <a className="ads-button ads-button-primary" href="#ads-workflow">
                Explore the workflow
              </a>
              <Link className="ads-button ads-button-secondary" to="/marketing">
                Explore Marketing Hub
              </Link>
            </div>
            <ul className="ads-hero-points">
              <li>Bring campaign planning into one workflow.</li>
              <li>Keep audience and message connected.</li>
              <li>Focus on results beyond clicks and impressions.</li>
            </ul>
          </div>
          <div className="ads-hero-visual">
            <img
              src="/AlchemizeCustomerPlatform/e.webp"
              alt="Connected marketing and advertising apps"
            />
            <div className="ads-visual-caption">
              <span>ONE CONNECTED WORKFLOW</span>
              <strong>Plan across the channels your team uses</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="ads-platform-band" aria-label="Campaign channel types">
        <div className="ads-container ads-platform-content">
          <p>PLAN FOR THE CHANNEL MIX THAT FITS YOUR BUSINESS</p>
          <div>
            {platforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="ads-section" id="ads-workflow">
        <div className="ads-container">
          <div className="ads-section-heading">
            <p className="ads-eyebrow">ADS SOFTWARE</p>
            <h2>Make better decisions at every step.</h2>
            <p>
              Bring campaign management, audience planning, and performance
              review together to make your next move with more context.
            </p>
          </div>
          <div className="ads-capability-grid">
            {capabilities.map((capability) => (
              <article className="ads-capability-card" key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ads-section ads-measure-section" id="ads-measure">
        <div className="ads-container ads-measure-layout">
          <div className="ads-report-preview" role="group" aria-label="Illustrative campaign report">
            <div className="ads-report-header">
              <span>CAMPAIGN OVERVIEW</span>
              <span>Example view</span>
            </div>
            <div className="ads-report-metrics">
              <div>
                <span>Engagement</span>
                <strong>By channel</strong>
              </div>
              <div>
                <span>Conversions</span>
                <strong>Over time</strong>
              </div>
            </div>
            <div className="ads-chart" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="ads-report-legend">
              <span><i /> Campaign activity</span>
              <span><i /> Audience response</span>
            </div>
          </div>
          <div className="ads-measure-copy">
            <p className="ads-eyebrow">MEASURE WHAT MATTERS</p>
            <h2>Connect ad activity to real outcomes.</h2>
            <p>
              Clicks and impressions are only part of the picture. Review
              campaign activity alongside the contacts and next steps it helps
              create, so you can learn what deserves another look.
            </p>
            <a href="#ads-faq">Explore common questions <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="ads-section ads-audience-section" id="ads-audiences">
        <div className="ads-container ads-feature-layout">
          <div>
            <p className="ads-eyebrow">AUDIENCE-FIRST CAMPAIGNS</p>
            <h2>Make your message matter to the people seeing it.</h2>
            <p>
              Start with the audience, then shape creative and campaign
              follow-up around what you know about their needs and interests.
            </p>
            <ul className="ads-check-list">
              <li>Organize audiences around relevant context.</li>
              <li>Keep creative direction consistent across channels.</li>
              <li>Adapt the next step to the campaign journey.</li>
            </ul>
          </div>
          <div className="ads-audience-visual" aria-hidden="true">
            <div className="ads-audience-card">
              <span>CAMPAIGN AUDIENCE</span>
              <strong>People exploring your solution</strong>
              <div><i /><i /><i /><i /><i /></div>
            </div>
            <div className="ads-audience-tag">Audience context</div>
            <div className="ads-audience-tag ads-audience-tag-bottom">Campaign message</div>
          </div>
        </div>
      </section>

      <section className="ads-section ads-follow-section" id="ads-follow-up">
        <div className="ads-container ads-follow-layout">
          <div className="ads-follow-visual">
            <span>CAMPAIGN RESPONSE</span>
            <strong>Interest becomes a next step</strong>
            <div className="ads-follow-flow">
              <span>Ad engagement</span>
              <b aria-hidden="true">→</b>
              <span>Team follow-up</span>
            </div>
          </div>
          <div>
            <p className="ads-eyebrow">FOLLOW UP WITH PURPOSE</p>
            <h2>Turn campaign interest into a useful conversation.</h2>
            <p>
              Give your team a shared view of campaign context and the next
              action, so interested people receive a timely, relevant response.
            </p>
            <Link to="/content-agent">See how Content Agent supports campaigns <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="ads-section ads-resources-section">
        <div className="ads-container">
          <div className="ads-section-heading">
            <p className="ads-eyebrow">RELATED RESOURCES</p>
            <h2>Keep learning as you plan your next campaign.</h2>
          </div>
          <div className="ads-resource-grid">
            {resources.map((resource) => (
              <article className="ads-resource-card" key={resource.title}>
                <span>{resource.label}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.href}>Learn more <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ads-section ads-faq-section" id="ads-faq">
        <div className="ads-container ads-faq-layout">
          <div>
            <p className="ads-eyebrow">FAQ</p>
            <h2>Questions about ads software?</h2>
            <p>Here are a few things teams often ask when getting started.</p>
          </div>
          <div className="ads-faq-list">
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ads-related-section">
        <div className="ads-container">
          <div className="ads-section-heading">
            <p className="ads-eyebrow">MORE IN MARKETING HUB</p>
            <h2>Bring your campaign work together.</h2>
          </div>
          <div className="ads-related-grid">
            <Link to="/content-agent">
              <span>CREATE</span>
              <strong>Content Agent</strong>
              <small>Build on-brand campaign content.</small>
            </Link>
            <Link to="/aeo">
              <span>DISCOVER</span>
              <strong>Alchemize Technologies AEO</strong>
              <small>See how your brand appears in AI answers.</small>
            </Link>
            <Link to="/marketing">
              <span>EXPLORE</span>
              <strong>Marketing Hub</strong>
              <small>See more tools for your marketing team.</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="ads-final-cta">
        <div className="ads-container">
          <p className="ads-eyebrow">READY TO PLAN YOUR NEXT CAMPAIGN?</p>
          <h2>Make every ad decision with more context.</h2>
          <p>
            Explore how ads fit into the Alchemize Technologies Marketing Hub
            workflow.
          </p>
          <Link className="ads-button ads-button-primary" to="/marketing">
            Explore Marketing Hub
          </Link>
        </div>
      </section>
    </main>
    <MarketingFooter />
    </>
  );
}

export default Ads;