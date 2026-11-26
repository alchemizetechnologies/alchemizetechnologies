import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const formTypes = [
  "Contact requests",
  "Newsletter sign-ups",
  "Event registrations",
  "Resource downloads"
];

const steps = [
  {
    number: "01",
    label: "CAPTURE",
    title: "Give visitors a clear next step.",
    description:
      "Choose the details you need and make it easy for people to respond from your website."
  },
  {
    number: "02",
    label: "BUILD",
    title: "Shape a form for your page.",
    description:
      "Arrange fields and messages around the offer, audience, and moment that brought someone there."
  },
  {
    number: "03",
    label: "NURTURE",
    title: "Connect each response to follow-up.",
    description:
      "Use the information someone shares to give your team a useful starting point for the next conversation."
  },
  {
    number: "04",
    label: "CONVERT",
    title: "Keep improving the experience.",
    description:
      "Review how forms perform and refine the questions, wording, and next step over time."
  }
];

const resources = [
  {
    label: "FORM DESIGN",
    title: "Plan a form that feels easy to complete",
    description: "Start with the questions that matter for this page and offer.",
    href: "#form-faq"
  },
  {
    label: "LEAD CAPTURE",
    title: "Turn a page visit into a useful response",
    description: "Connect the value of your offer to a clear form experience.",
    href: "#form-workflow"
  },
  {
    label: "FOLLOW-UP",
    title: "Make the next step clear after submission",
    description: "Give every response a helpful path forward.",
    href: "#form-follow-up"
  }
];

const questions = [
  [
    "What can I use an online form for?",
    "Use forms to collect contact requests, registrations, newsletter sign-ups, resource requests, and other information your team needs."
  ],
  [
    "Can I customize the fields and wording?",
    "Yes. Choose the questions and copy that fit the page, offer, and audience."
  ],
  [
    "Can returning visitors see fewer questions?",
    "Forms can be designed to avoid asking for information your team already has, subject to the data and settings available in your account."
  ],
  [
    "Where do form responses go?",
    "Responses can be connected with your customer records and follow-up process, depending on your account configuration."
  ],
  [
    "Do I need technical experience to make a form?",
    "The form builder experience is designed to help teams create and update forms without building each one from scratch."
  ]
];

function FormShortening() {
  return (
    <>
    <main className="forms-page">
      <section className="forms-hero">
        <div className="forms-container forms-hero-layout">
          <div className="forms-hero-copy">
            <p className="forms-eyebrow">FREE ONLINE FORM BUILDER</p>
            <h1>Generate leads from your website with a powerful online form builder.</h1>
            <p>
              Create clear lead capture forms that make it easier for visitors
              to respond and for your team to follow up.
            </p>
            <div className="forms-actions">
              <a className="forms-button forms-button-primary" href="#form-workflow">
                Get started free
              </a>
              <Link className="forms-button forms-button-secondary" to="/marketing">
                Get a demo
              </Link>
            </div>
            <p className="forms-hero-note">
              No credit card required. Free and premium features are available.
            </p>
            <ul className="forms-hero-points">
              <li>Create lead capture forms with a drag-and-drop editor.</li>
              <li>Connect form submissions to your CRM for follow-up.</li>
              <li>Use templates, automation, and personalization to improve conversions.</li>
            </ul>
          </div>
          <div className="forms-hero-visual">
            <div
              className="forms-preview"
              role="img"
              aria-label="Example online form with name and email fields and a resource request button"
            >
              <span className="forms-preview-eyebrow">GET THE GUIDE</span>
              <h2>Make your next move with more context.</h2>
              <p>Share a few details to receive the guide.</p>
              <div className="forms-preview-field">First name</div>
              <div className="forms-preview-field">Work email</div>
              <div className="forms-preview-submit">Send me the guide</div>
              <small>Your information helps us follow up about this request.</small>
            </div>
            <div className="forms-visual-caption">
              <span>FORM PREVIEW</span>
              <strong>Simple for visitors. Useful for your team.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="forms-type-band" aria-label="Common form types">
        <div className="forms-container forms-type-content">
          <p>ONE BUILDER FOR THE MOMENTS THAT MATTER</p>
          <div>
            {formTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="forms-section" id="form-workflow">
        <div className="forms-container">
          <div className="forms-section-heading">
            <p className="forms-eyebrow">FROM FIRST CLICK TO FOLLOW-UP</p>
            <h2>Four steps to a more useful form experience.</h2>
            <p>
              Build a clear path for visitors to share what they need—and for
              your team to decide what happens next.
            </p>
          </div>
          <div className="forms-step-grid">
            {steps.map((step) => (
              <article className="forms-step-card" key={step.number}>
                <span className="forms-step-number">{step.number}</span>
                <p className="forms-step-label">{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="forms-section forms-shortening-section" id="form-shortening">
        <div className="forms-container forms-shortening-layout">
          <div className="forms-shortening-visual" aria-hidden="true">
            <div className="forms-visitor-card">
              <span>RETURNING VISITOR</span>
              <strong>Welcome back</strong>
              <p>Keep this form focused on what is new.</p>
              <div className="forms-visitor-field">Email address <b>Already known</b></div>
              <div className="forms-visitor-field">What are you interested in? <b>Ask next</b></div>
              <div className="forms-visitor-action">Continue</div>
            </div>
          </div>
          <div className="forms-copy-block">
            <p className="forms-eyebrow">ASK FOR WHAT YOU STILL NEED</p>
            <h2>Make returning visitors' next form feel shorter.</h2>
            <p>
              Avoid repeating questions when useful information is already
              available. Keep the form focused on what helps your team continue
              the conversation.
            </p>
            <ul className="forms-check-list">
              <li>Choose fields that fit the page and offer.</li>
              <li>Reduce unnecessary repeat questions for returning visitors.</li>
              <li>Keep the next step clear from start to finish.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="forms-section forms-follow-section" id="form-follow-up">
        <div className="forms-container forms-follow-layout">
          <div className="forms-copy-block">
            <p className="forms-eyebrow">AFTER THE SUBMISSION</p>
            <h2>Give every response a thoughtful next step.</h2>
            <p>
              Bring form responses into the context your team uses to follow
              up. Make it easier to understand what someone asked for and how
              to continue from there.
            </p>
            <Link to="/content-agent">
              Explore Content Agent for follow-up content <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="forms-follow-visual" aria-hidden="true">
            <div className="forms-follow-node">Form response</div>
            <span>→</span>
            <div className="forms-follow-node forms-follow-node-highlight">Customer record</div>
            <span>→</span>
            <div className="forms-follow-node">Team follow-up</div>
          </div>
        </div>
      </section>

      <section className="forms-section forms-resources">
        <div className="forms-container">
          <div className="forms-section-heading">
            <p className="forms-eyebrow">RELATED RESOURCES</p>
            <h2>Build a better path from interest to action.</h2>
          </div>
          <div className="forms-resource-grid">
            {resources.map((resource) => (
              <article className="forms-resource-card" key={resource.title}>
                <span>{resource.label}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.href}>Learn more <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="forms-section forms-faq-section" id="form-faq">
        <div className="forms-container forms-faq-layout">
          <div>
            <p className="forms-eyebrow">FORM BUILDER FAQ</p>
            <h2>Questions about online forms?</h2>
            <p>Find quick answers about creating forms and using responses.</p>
          </div>
          <div className="forms-faq-list">
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="forms-related-section">
        <div className="forms-container">
          <div className="forms-section-heading">
            <p className="forms-eyebrow">MORE IN MARKETING HUB</p>
            <h2>Keep your marketing work connected.</h2>
          </div>
          <div className="forms-related-grid">
            <Link to="/ads">
              <span>ADVERTISE</span>
              <strong>Ads Software</strong>
              <small>Plan campaigns and review their outcomes.</small>
            </Link>
            <Link to="/content-agent">
              <span>CREATE</span>
              <strong>Content Agent</strong>
              <small>Develop content for your audience and channels.</small>
            </Link>
            <Link to="/marketing">
              <span>EXPLORE</span>
              <strong>Marketing Hub</strong>
              <small>See more tools for your marketing team.</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="forms-final-cta">
        <div className="forms-container">
          <p className="forms-eyebrow">READY TO START BUILDING?</p>
          <h2>Create a clearer path from visit to response.</h2>
          <p>
            Explore how online forms fit into the Alchemize Technologies
            Marketing Hub workflow.
          </p>
          <Link className="forms-button forms-button-primary" to="/marketing">
            Explore Marketing Hub
          </Link>
        </div>
      </section>
    </main>
    <MarketingFooter />
    </>
  );
}

export default FormShortening;