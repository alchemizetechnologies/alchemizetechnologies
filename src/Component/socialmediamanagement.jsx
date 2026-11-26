import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const platforms = ["LinkedIn", "Facebook", "Instagram", "TikTok", "Reddit", "X", "YouTube"];

const workflowSteps = [
  {
    number: "01",
    label: "BUILD",
    title: "Plan posts around your audience.",
    description:
      "Create social content with your campaign goals, brand voice, and publishing calendar in view."
  },
  {
    number: "02",
    label: "MONITOR",
    title: "Keep an eye on the conversations.",
    description:
      "Follow mentions and relevant topics so your team can spot interactions that need a response."
  },
  {
    number: "03",
    label: "REPORT",
    title: "Understand what is getting attention.",
    description:
      "Review engagement and activity together to see what resonates and where to focus next."
  },
  {
    number: "04",
    label: "MANAGE",
    title: "Bring the right context to every reply.",
    description:
      "Connect social interactions with the broader customer context your team uses to respond."
  }
];

const resources = [
  {
    label: "PUBLISHING",
    title: "Build a social calendar your team can follow",
    description: "Plan a steady rhythm of useful posts for the channels you use.",
    href: "#social-workflow"
  },
  {
    label: "LISTENING",
    title: "Notice the conversations worth joining",
    description: "Organize mentions and topics to help your team prioritize.",
    href: "#social-monitoring"
  },
  {
    label: "MEASUREMENT",
    title: "Connect engagement to meaningful outcomes",
    description: "Look beyond likes to see how social activity supports your goals.",
    href: "#social-reporting"
  }
];

const questions = [
  [
    "Which social platforms can I manage?",
    "Available connections depend on your account and the platforms you use. Contact the Alchemize Technologies team to confirm current availability."
  ],
  [
    "Can I plan and schedule social posts?",
    "The social workflow is designed to help teams draft, organize, and plan publishing across connected channels."
  ],
  [
    "Can I keep track of mentions and keywords?",
    "Use monitoring tools to follow selected mentions and topics, then prioritize conversations that deserve a response."
  ],
  [
    "How can I understand social media performance?",
    "Review engagement and campaign context together to understand which activity is helping move your goals forward."
  ],
  [
    "Can social interactions connect to customer context?",
    "Where supported by your account setup, connect social activity with customer records to make follow-up more informed."
  ]
];

function SocialMediaManagement() {
  return (
    <>
      <main className="social-management-page">
        <section className="sm-hero">
          <div className="sm-container sm-hero-layout">
            <div className="sm-hero-copy">
              <p className="sm-eyebrow">MARKETING HUB · SOCIAL MEDIA</p>
              <h1>Social media management software.</h1>
              <p>
                Spend less time switching between channels and more time
                building relationships with the people who matter to your
                business.
              </p>
              <div className="sm-actions">
                <Link className="sm-button sm-button-primary" to="/marketing">
                  Get a demo
                </Link>
                <Link className="sm-button sm-button-secondary" to="/marketing">
                  Start 14-day free trial
                </Link>
              </div>
              <ul className="sm-hero-points">
                <li>Plan and publish from one coordinated workspace.</li>
                <li>Keep track of mentions and important conversations.</li>
                <li>Connect social activity with business context.</li>
              </ul>
            </div>
            <div className="sm-hero-visual">
              <div className="sm-post-preview" aria-label="Example social post preview" role="group">
                <div className="sm-post-top">
                  <span className="sm-avatar">A</span>
                  <div><strong>Alchemize Technologies</strong><small>Draft post · Ready for review</small></div>
                  <span className="sm-post-menu">•••</span>
                </div>
                <p>
                  A thoughtful customer experience starts with listening.
                  What is one small change that made a big difference for you?
                </p>
                <div className="sm-post-tags">
                  <span>LinkedIn</span><span>Instagram</span><span>Facebook</span>
                </div>
                <div className="sm-post-actions"><span>Preview</span><span>Schedule post</span></div>
              </div>
              <div className="sm-visual-caption">
                <span>ONE SHARED VIEW</span>
                <strong>Plan, publish, and respond with context</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="sm-platform-band" aria-label="Social channels">
          <div className="sm-container sm-platform-content">
            <p>WORK WITH THE CHANNELS YOUR AUDIENCE USES</p>
            <div>
              {platforms.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="sm-section" id="social-workflow">
          <div className="sm-container">
            <div className="sm-section-heading">
              <p className="sm-eyebrow">FOUR STEPS TO A MORE CONNECTED SOCIAL WORKFLOW</p>
              <h2>Build, monitor, report, and manage from one plan.</h2>
              <p>
                Bring publishing and listening together, then use what you
                learn to make the next conversation more relevant.
              </p>
            </div>
            <div className="sm-step-grid">
              {workflowSteps.map((step) => (
                <article className="sm-step-card" key={step.number}>
                  <span className="sm-step-number">{step.number}</span>
                  <p className="sm-step-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sm-section sm-publish-section">
          <div className="sm-container sm-feature-layout">
            <div className="sm-calendar-visual" aria-hidden="true">
              <div className="sm-calendar-header">
                <strong>Content calendar</strong>
                <span>This week⌄</span>
              </div>
              <div className="sm-calendar-days">
                {["MON", "TUE", "WED", "THU", "FRI"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="sm-calendar-posts">
                <span>Product tip</span><span>Customer story</span><span>Team update</span>
              </div>
              <div className="sm-calendar-footer">3 posts planned · 2 channels</div>
            </div>
            <div className="sm-feature-copy">
              <p className="sm-eyebrow">BUILD AND PUBLISH WITH A PLAN</p>
              <h2>Keep every post connected to your bigger story.</h2>
              <p>
                Organize draft ideas, campaign messages, and publishing plans
                in one place. Shape each post for its channel while keeping
                your brand voice consistent.
              </p>
              <ul className="sm-check-list">
                <li>Draft social content around a clear campaign goal.</li>
                <li>Prepare posts for the channels your audience follows.</li>
                <li>Review timing and content before publishing.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sm-section sm-monitor-section" id="social-monitoring">
          <div className="sm-container sm-feature-layout">
            <div className="sm-feature-copy">
              <p className="sm-eyebrow">MONITOR THE MOMENTS THAT MATTER</p>
              <h2>Notice important mentions without watching every feed.</h2>
              <p>
                Follow relevant brand mentions and topics from one view. Give
                your team a way to prioritize questions, feedback, and
                conversations that call for a thoughtful response.
              </p>
              <div className="sm-mention-note">
                <span>MENTION TO REVIEW</span>
                <strong>“Your team made this really easy. Thank you!”</strong>
                <small>Flagged for a reply · Social conversation</small>
              </div>
            </div>
            <div className="sm-listening-visual" aria-hidden="true">
              <div className="sm-listening-header"><span>Listening overview</span><b>● Active</b></div>
              <div className="sm-listening-row"><span>Brand mentions</span><strong>Recent activity</strong></div>
              <div className="sm-listening-row"><span>Product feedback</span><strong>Needs review</strong></div>
              <div className="sm-listening-row"><span>Industry topics</span><strong>Following</strong></div>
              <div className="sm-listening-footer">Prioritize conversations for your team</div>
            </div>
          </div>
        </section>

        <section className="sm-section sm-report-section" id="social-reporting">
          <div className="sm-container sm-report-layout">
            <div className="sm-report-visual" aria-label="Illustrative social performance report" role="group">
              <div className="sm-report-header"><span>SOCIAL PERFORMANCE</span><span>Example view</span></div>
              <div className="sm-report-summary">
                <div><span>Engagement</span><strong>By channel</strong></div>
                <div><span>Campaign impact</span><strong>Over time</strong></div>
              </div>
              <div className="sm-report-chart" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
              <div className="sm-report-legend"><span>Social activity</span><span>Campaign response</span></div>
            </div>
            <div className="sm-feature-copy">
              <p className="sm-eyebrow">REPORT ON WHAT IS RESONATING</p>
              <h2>Connect social activity to the outcomes you care about.</h2>
              <p>
                Look beyond surface-level engagement. Review social activity
                alongside campaign and customer context to understand what is
                helping your business move forward.
              </p>
              <Link to="/ads">Explore campaign reporting <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="sm-section sm-resources-section">
          <div className="sm-container">
            <div className="sm-section-heading">
              <p className="sm-eyebrow">RELATED RESOURCES</p>
              <h2>Make your social strategy more purposeful.</h2>
            </div>
            <div className="sm-resource-grid">
              {resources.map((resource) => (
                <article className="sm-resource-card" key={resource.title}>
                  <span>{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.href}>Explore this topic <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sm-section sm-faq-section" id="social-faq">
          <div className="sm-container sm-faq-layout">
            <div>
              <p className="sm-eyebrow">SOCIAL MEDIA FAQ</p>
              <h2>Questions about managing social media?</h2>
              <p>Find quick answers about publishing, monitoring, and reporting.</p>
            </div>
            <div className="sm-faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sm-related-section">
          <div className="sm-container">
            <div className="sm-section-heading">
              <p className="sm-eyebrow">MORE IN MARKETING HUB</p>
              <h2>Bring your marketing work together.</h2>
            </div>
            <div className="sm-related-grid">
              <Link to="/content-agent">
                <span>CREATE</span>
                <strong>Content Agent</strong>
                <small>Develop content for your audience and channels.</small>
              </Link>
              <Link to="/ads">
                <span>ADVERTISE</span>
                <strong>Ads Software</strong>
                <small>Plan campaigns and review their outcomes.</small>
              </Link>
              <Link to="/form-shortening">
                <span>CAPTURE</span>
                <strong>Online Form Builder</strong>
                <small>Turn website interest into useful responses.</small>
              </Link>
            </div>
          </div>
        </section>

        <section className="sm-final-cta">
          <div className="sm-container">
            <p className="sm-eyebrow">READY TO MAKE MORE OF EVERY CONVERSATION?</p>
            <h2>Build stronger relationships through social.</h2>
            <p>
              Explore how social media management fits into the Alchemize
              Technologies Marketing Hub workflow.
            </p>
            <Link className="sm-button sm-button-primary" to="/marketing">
              Explore Marketing Hub
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

export default SocialMediaManagement;