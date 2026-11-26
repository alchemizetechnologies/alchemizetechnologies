import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const audienceSources = ["CRM data", "Web visitors", "Campaign activity", "Custom data"];

const resources = [
  {
    label: "AI SEGMENT SUGGESTIONS",
    title: "Discover the audience patterns hiding in your data",
    description:
      "Learn how AI-assisted recommendations can help surface promising groups for your next campaign.",
    href: "#audience-discovery"
  },
  {
    label: "WEB VISITOR SEGMENTS",
    title: "Make more relevant experiences for website visitors",
    description:
      "Explore ways to use visitor behavior to tailor the content and next steps people see.",
    href: "#audience-builder"
  },
  {
    label: "SEGMENT ACTIVATION",
    title: "Put useful audience insights into action",
    description:
      "See how connected segments can support more consistent experiences across your channels.",
    href: "#audience-activation"
  }
];

const questions = [
  [
    'What is the difference between "lists" and "segments"?',
    "Lists are often used to organize records around a defined set of conditions. Segments can help teams explore and activate audiences based on shared attributes, behavior, or intent."
  ],
  [
    "How does AI help with audience segmentation?",
    "AI can help identify patterns across connected data and suggest groups worth exploring. Your team stays in control of which audiences to build and use."
  ],
  [
    "Can I personalize content for anonymous website visitors?",
    "You can use available visitor behavior and account settings to shape more relevant experiences. Personalization depends on the data and consent settings in place."
  ],
  [
    "How much does audience segmentation cost?",
    "Pricing depends on the tools and account setup your team needs. Contact Alchemize Technologies for current plan details."
  ],
  [
    "How do segments fit into an iterative marketing approach?",
    "Use audience insights to plan a campaign, learn from its results, and refine your next message for the groups you want to reach."
  ],
  [
    "Can I use segments across my marketing channels?",
    "Segments can inform channel experiences and campaigns when the relevant channel connections are available in your account."
  ],
  [
    "How do segments support marketing personalization?",
    "Group people by useful signals, then tailor the content, offer, or follow-up to better match their needs and interests."
  ],
  [
    "What data can I use to build audience segments?",
    "Depending on your setup, you can combine CRM details, website activity, campaign interactions, and other connected business data."
  ]
];

function SegmentVisual({ variant }) {
  if (variant === "suggestions") {
    return (
      <div className="aud-visual aud-suggestion-visual" aria-hidden="true">
        <div className="aud-visual-top">
          <strong>Audience suggestions</strong>
          <span>AI INSIGHTS</span>
        </div>
        <div className="aud-insight-card aud-insight-highlight">
          <span className="aud-insight-icon">✦</span>
          <div>
            <strong>High-intent visitors</strong>
            <small>Viewed pricing and returned this week</small>
          </div>
          <b>Explore</b>
        </div>
        <div className="aud-insight-card">
          <span className="aud-insight-icon">◉</span>
          <div>
            <strong>Engaged decision-makers</strong>
            <small>Matched by role and recent activity</small>
          </div>
          <b>Explore</b>
        </div>
        <div className="aud-visual-foot">Recommendations based on connected data</div>
      </div>
    );
  }

  if (variant === "builder") {
    return (
      <div className="aud-visual aud-builder-visual" aria-hidden="true">
        <div className="aud-visual-top">
          <strong>Build an audience</strong>
          <span>NEW SEGMENT</span>
        </div>
        <div className="aud-builder-row">
          <span>Include people who match</span>
          <b>all conditions</b>
        </div>
        <div className="aud-condition">
          <span>Website activity</span>
          <strong>Visited a product page</strong>
          <b>×</b>
        </div>
        <div className="aud-condition">
          <span>CRM attribute</span>
          <strong>Interest is marketing</strong>
          <b>×</b>
        </div>
        <button className="aud-add-condition" type="button">+ Add a condition</button>
        <div className="aud-builder-footer">
          <span>Audience preview</span>
          <strong>Review matching contacts</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="aud-visual aud-activation-visual" aria-hidden="true">
      <div className="aud-visual-top">
        <strong>Segment activation</strong>
        <span>CONNECTED</span>
      </div>
      <div className="aud-activation-flow">
        <div className="aud-flow-source">
          <span>◉</span>
          <strong>High-intent audience</strong>
          <small>Segment</small>
        </div>
        <div className="aud-flow-branch"><i /><i /><i /></div>
        <div className="aud-flow-destinations">
          <span><b>E</b> Email campaign</span>
          <span><b>W</b> Website content</span>
          <span><b>A</b> Ad audience</span>
        </div>
      </div>
      <div className="aud-visual-foot">Keep relevant experiences aligned across channels</div>
    </div>
  );
}

function AudienceSegments() {
  const [expandedVisual, setExpandedVisual] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (expandedVisual && !dialog.open) {
      dialog.showModal();
    } else if (!expandedVisual && dialog.open) {
      dialog.close();
    }
  }, [expandedVisual]);

  const openVisual = (variant, title) => {
    setExpandedVisual({ variant, title });
  };

  return (
    <>
      <main className="audience-page">
        <section className="aud-hero">
          <div className="aud-container aud-hero-layout">
            <div className="aud-hero-copy">
              <p className="aud-eyebrow">MARKETING HUB · AUDIENCE SEGMENTS</p>
              <h1>Find the audiences most ready to engage.</h1>
              <p>
                Discover, build, and activate high-intent prospects with
                AI-assisted insights and personalization.
              </p>
              <div className="aud-actions">
                <Link className="aud-button aud-button-primary" to="/marketing">
                  Get a demo
                </Link>
                <Link className="aud-button aud-button-secondary" to="/marketing">
                  Start 14-day free trial
                </Link>
              </div>
              <ul className="aud-hero-points">
                <li>Uncover valuable audience patterns with AI-assisted insights.</li>
                <li>Build precise groups from CRM, web visitor, and campaign data.</li>
                <li>Use relevant segments across your connected channels.</li>
              </ul>
            </div>
            <div className="aud-hero-visual">
              <SegmentVisual variant="suggestions" />
              <button
                className="aud-enlarge-button"
                type="button"
                onClick={() => openVisual("suggestions", "Audience suggestions")}
                aria-label="Enlarge audience suggestions preview"
              >
                Click to enlarge <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>

        <section className="aud-source-band" aria-label="Audience data sources">
          <div className="aud-container aud-source-content">
            <p>BRING YOUR AUDIENCE SIGNALS TOGETHER</p>
            <div>
              {audienceSources.map((source) => <span key={source}>{source}</span>)}
            </div>
          </div>
        </section>

        <section className="aud-intro-section">
          <div className="aud-container aud-intro-layout">
            <p className="aud-eyebrow">TURN DATA INTO DIRECTION</p>
            <div>
              <h2>Transform audience insights into actionable segments with AI.</h2>
              <p>
                Generic marketing can reach too many of the wrong people. Your
                ideal customers may be in your data already, but disconnected
                signals make them difficult to identify and reach.
              </p>
              <p>
                Audience segments help you explore who is ready to engage and
                why. Use AI-assisted recommendations to spot patterns across
                your connected data, then focus your efforts on the people most
                relevant to your goals.
              </p>
            </div>
          </div>
        </section>

        <section className="aud-section aud-discovery-section" id="audience-discovery">
          <div className="aud-container aud-feature-layout">
            <div className="aud-feature-copy">
              <p className="aud-eyebrow">DISCOVER YOUR HIGH-VALUE AUDIENCES</p>
              <h2>Find the patterns manual research can miss.</h2>
              <p>
                Explore audience suggestions that bring useful signals into
                view. Start with a promising group, understand what makes it
                distinct, and decide where to focus next.
              </p>
              <ul className="aud-check-list">
                <li>Surface groups based on intent and engagement signals.</li>
                <li>Explore recommendations grounded in connected data.</li>
                <li>Turn audience questions into clear campaign opportunities.</li>
              </ul>
            </div>
            <div className="aud-feature-visual">
              <SegmentVisual variant="suggestions" />
              <button
                className="aud-enlarge-button"
                type="button"
                onClick={() => openVisual("suggestions", "Audience suggestions")}
                aria-label="Enlarge audience suggestions"
              >
                Click to enlarge <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>

        <section className="aud-section aud-builder-section" id="audience-builder">
          <div className="aud-container aud-feature-layout aud-feature-reverse">
            <div className="aud-feature-visual">
              <SegmentVisual variant="builder" />
              <button
                className="aud-enlarge-button"
                type="button"
                onClick={() => openVisual("builder", "Audience segment builder")}
                aria-label="Enlarge audience segment builder"
              >
                Click to enlarge <span aria-hidden="true">↗</span>
              </button>
            </div>
            <div className="aud-feature-copy">
              <p className="aud-eyebrow">BUILD PRECISE SEGMENTS WITH EASE</p>
              <h2>Bring your audience criteria together in one place.</h2>
              <p>
                Group visitors by interests, website behavior, and the details
                your team already knows. Use connected data to shape more
                relevant experiences, including for visitors who have not yet
                shared their information.
              </p>
              <ul className="aud-check-list">
                <li>Combine signals from your CRM, website, and campaigns.</li>
                <li>Set clear conditions without starting from scratch.</li>
                <li>Use available customer data to tailor audience experiences.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aud-section aud-activation-section" id="audience-activation">
          <div className="aud-container aud-feature-layout">
            <div className="aud-feature-copy">
              <p className="aud-eyebrow">ACTIVATE AND PERSONALIZE ACROSS CHANNELS</p>
              <h2>Put the right audience insight to work.</h2>
              <p>
                Bring segments into the experiences and campaigns your team
                uses. Keep audience context connected so you can understand
                how personalization is performing and what to improve.
              </p>
              <ul className="aud-check-list">
                <li>Connect segments to supported marketing channels.</li>
                <li>Give teams a shared view of audience activation.</li>
                <li>Learn from performance and refine your next experience.</li>
              </ul>
            </div>
            <div className="aud-feature-visual">
              <SegmentVisual variant="activation" />
              <button
                className="aud-enlarge-button"
                type="button"
                onClick={() => openVisual("activation", "Segment activation")}
                aria-label="Enlarge segment activation preview"
              >
                Click to enlarge <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>

        <section className="aud-contact-band">
          <div className="aud-container aud-contact-content">
            <div>
              <p className="aud-eyebrow">LET'S TALK ABOUT YOUR AUDIENCES</p>
              <h2>Have questions about audience segments?</h2>
              <p>Connect with our team to explore the right setup for your marketing goals.</p>
            </div>
            <Link className="aud-button aud-button-primary" to="/service">
              Contact our team
            </Link>
          </div>
        </section>

        <section className="aud-section aud-resources-section">
          <div className="aud-container">
            <div className="aud-section-heading">
              <p className="aud-eyebrow">RELATED RESOURCES</p>
              <h2>Explore smarter ways to reach your audience.</h2>
              <p>
                Learn how audience insights can help you make more relevant
                marketing decisions.
              </p>
            </div>
            <div className="aud-resource-grid">
              {resources.map((resource) => (
                <article className="aud-resource-card" key={resource.title}>
                  <span>{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.href}>Read the article <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="aud-section aud-faq-section" id="audience-faq">
          <div className="aud-container aud-faq-layout">
            <div>
              <p className="aud-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
              <h2>Questions about audience segments?</h2>
              <p>Learn more about building, understanding, and activating your audiences.</p>
            </div>
            <div className="aud-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="aud-related-section">
          <div className="aud-container">
            <div className="aud-section-heading">
              <p className="aud-eyebrow">POPULAR FEATURES IN MARKETING HUB</p>
              <h2>Explore more ways to build lasting customer connections.</h2>
            </div>
            <div className="aud-related-grid">
              <Link to="/form-shortening">
                <span>CAPTURE</span>
                <strong>Free Online Form Builder</strong>
                <small>Make it easier for website visitors to share what they need.</small>
              </Link>
              <Link to="/content-agent">
                <span>CREATE</span>
                <strong>Content Agent</strong>
                <small>Create relevant content for your audience and channels.</small>
              </Link>
              <Link to="/social-media-management">
                <span>CONNECT</span>
                <strong>Social Media Management</strong>
                <small>Plan posts and follow conversations across your channels.</small>
              </Link>
            </div>
          </div>
        </section>

        <section className="aud-final-cta">
          <div className="aud-container">
            <p className="aud-eyebrow">MAKE EVERY AUDIENCE INSIGHT COUNT</p>
            <h2>Focus your marketing on the people who matter most.</h2>
            <p>
              Explore audience segments and connected marketing tools with
              Alchemize Technologies.
            </p>
            <Link className="aud-button aud-button-primary" to="/marketing">
              Explore Marketing Hub
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />

      <dialog
        className="aud-visual-dialog"
        ref={dialogRef}
        aria-labelledby="aud-visual-dialog-title"
        onClose={() => setExpandedVisual(null)}
      >
        {expandedVisual && (
          <>
            <div className="aud-dialog-header">
              <h2 id="aud-visual-dialog-title">{expandedVisual.title}</h2>
              <button type="button" onClick={() => dialogRef.current?.close()}>
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <SegmentVisual variant={expandedVisual.variant} />
          </>
        )}
      </dialog>
    </>
  );
}

export default AudienceSegments;
