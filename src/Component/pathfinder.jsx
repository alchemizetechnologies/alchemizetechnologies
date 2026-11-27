import { Link } from "react-router-dom";
import MarketingFooter from "./MarketingFooter";

const contents = [
  { id: "report-basics", label: "Report basics and limits" },
  { id: "template-report", label: "Start from a template" },
  { id: "assistant-report", label: "Build with Breeze Assistant" },
  { id: "pathfinder-report", label: "Use Pathfinder" },
  { id: "scratch-report", label: "Build a journey manually" },
  { id: "customize-report", label: "Customize the report" },
  { id: "run-report", label: "Run and save" },
  { id: "journey-example", label: "Example journey" }
];

const dataSources = [
  {
    name: "Contacts",
    access: "Marketing Hub Enterprise or Service Hub Enterprise",
    use: "Measure how marketing or service interactions lead to new contacts."
  },
  {
    name: "Deals",
    access: "Sales Hub Enterprise",
    use: "Follow interactions along the path to a new deal."
  },
  {
    name: "Tickets",
    access: "Service Hub Enterprise",
    use: "Review how tickets move through support stages."
  }
];

function Pathfinder() {
  return (
    <>
      <main className="pf-guide-page">
        <div className="pf-guide-breadcrumb">
          <div className="pf-guide-container">
            <Link to="/marketing">Marketing Hub</Link>
            <span aria-hidden="true">/</span>
            <Link to="/dashboard-reporting">Reporting &amp; Data</Link>
            <span aria-hidden="true">/</span>
            <span>Reports</span>
          </div>
        </div>

        <header className="pf-guide-header pf-guide-container">
          <p className="pf-guide-eyebrow">KNOWLEDGE BASE · REPORTING &amp; DATA</p>
          <h1>Create a customer journey report</h1>
          <p className="pf-guide-lede">
            Use journey analytics to see how contacts, deals, or tickets move
            through a sequence of interactions. Pathfinder can suggest common
            routes around a key event, so you can explore customer behavior
            without defining every stage from scratch.
          </p>
          <p className="pf-guide-updated">
            Last updated: <time dateTime="2026-10-08">October 8, 2026</time>
          </p>
        </header>

        <div className="pf-guide-container pf-guide-layout">
          <aside className="pf-guide-toc" aria-label="Article contents">
            <h2>In this article</h2>
            <nav>
              {contents.map(({ id, label }) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="pf-guide-article">
            <p>
              A customer journey report groups activity into stages and shows
              how many records continue from one stage to the next. Use it to
              spot common paths, understand where people pause, and compare
              how different interactions relate to an outcome.
            </p>

            <div className="pf-guide-notice">
              <strong>Access depends on your subscription.</strong>
              <p>
                Journey reporting is available with eligible Enterprise
                subscriptions. The report's data source determines which Hub
                subscription is required.
              </p>
            </div>

            <section id="report-basics">
              <h2>Report basics and limits</h2>
              <p>
                Choose a data source that matches the records you want to
                follow. Contacts, deals, and tickets may each have separate
                access requirements.
              </p>
              <div className="pf-guide-source-grid">
                {dataSources.map((source) => (
                  <section className="pf-guide-source-card" key={source.name}>
                    <h3>{source.name}</h3>
                    <p className="pf-guide-source-access">{source.access}</p>
                    <p>{source.use}</p>
                  </section>
                ))}
              </div>
              <ul>
                <li>
                  Stage and event limits can differ by report workflow. Some
                  template flows allow up to 15 stages and 15 unique steps;
                  manually configured journeys may allow up to 20 stages.
                  Check the builder for the limit that applies to your report.
                </li>
                <li>
                  Reports can analyze up to five years of activity and 20
                  million unique events. If the event volume exceeds that
                  ceiling, the available date range may be shortened.
                </li>
              </ul>
            </section>

            <section id="template-report">
              <h2>Start with a template</h2>
              <p>
                A sample report is a quick way to get a useful journey layout,
                then adjust its settings for your question.
              </p>
              <ol>
                <li>Open <strong>Reporting &gt; Reports</strong>.</li>
                <li>
                  Choose <strong>Create</strong>, then select the option to
                  create a report.
                </li>
                <li>
                  Open the template library and search for a journey report
                  that fits your goal.
                </li>
                <li>
                  Review its data source and settings. Edit the report if you
                  need to change its stages or filters.
                </li>
                <li>
                  Run the report, then save it with a clear name and access
                  settings.
                </li>
              </ol>
            </section>

            <section id="assistant-report">
              <h2>Build a report with Breeze Assistant</h2>
              <p>
                The beta assistant can turn a reporting question into a first
                draft of stages, filters, and event sources. Treat the
                generated report as a starting point and verify that it
                reflects your data and definitions.
              </p>
              <ol>
                <li>
                  Start a new customer journey report and choose the assistant
                  option.
                </li>
                <li>
                  Select Contacts, Deals, or Tickets when available for your
                  subscription.
                </li>
                <li>
                  Describe the question you want answered. Name the outcome,
                  stages, and date period when you know them.
                </li>
                <li>
                  Review the generated setup and summary. Refine the prompt or
                  edit the report manually if needed.
                </li>
                <li>
                  Save the report after confirming its name, dashboard
                  placement, tags, and access.
                </li>
              </ol>
              <div className="pf-guide-tip">
                <strong>Tip:</strong> A focused question is easier to validate.
                For example, ask where contacts drop off between two named
                lifecycle stages instead of requesting a broad overview.
              </div>
            </section>

            <section id="pathfinder-report">
              <h2>Use Pathfinder to discover common routes</h2>
              <p>
                Pathfinder helps suggest activity before or after a selected
                event. It is useful when you know an important milestone but
                want the report to surface the surrounding steps.
              </p>
              <ol>
                <li>
                  Create a customer journey report and begin with a contact
                  path.
                </li>
                <li>
                  Select an event for the first stage, such as a form
                  submission or meeting.
                </li>
                <li>
                  Choose whether to find common paths before or after that
                  event, then continue to generate the suggested journey.
                </li>
                <li>
                  Open the suggested stage's settings to include or remove
                  events and adjust how many paths or stages are returned.
                </li>
                <li>
                  Save the selected path and add more stages when they help
                  answer your question.
                </li>
              </ol>
            </section>

            <section id="scratch-report">
              <h2>Build a journey manually</h2>
              <ol>
                <li>
                  Choose the option to build a journey yourself and select a
                  supported primary data source.
                </li>
                <li>
                  Set the first event, then add stages from the timeline.
                </li>
                <li>
                  Add one or more events to a stage. Where available, use
                  suggested top events to discover frequent activity.
                </li>
                <li>
                  Decide whether each intermediate stage is required or
                  optional. Required stages must be completed; optional ones
                  can be skipped. The first and final stages cannot be
                  optional.
                </li>
                <li>
                  Continue adding stages while keeping the full journey within
                  the limits shown in the report builder.
                </li>
              </ol>
            </section>

            <section id="customize-report">
              <h2>Customize the report</h2>
              <h3>Filter events</h3>
              <p>
                Add an event filter to narrow the activity included in a
                stage. Campaign filters are supported for selected event
                types, including ads, calls to action, forms, marketing
                email, marketing events, and web pages.
              </p>
              <h3>Break down results by a property</h3>
              <p>
                Choose an event property to compare the paths that make up a
                stage. Journey reports support property breakdowns on up to
                ten stages. When a stage contains several events, results
                may be shown per event rather than as one combined total.
              </p>
              <h3>Filter records by object properties</h3>
              <p>
                Use object filters to limit the timeline to records with
                selected property values, then apply the filters before
                running the report.
              </p>
            </section>

            <section id="run-report">
              <h2>Run and save the report</h2>
              <ol>
                <li>
                  Review the stage order and filters, then run the report.
                </li>
                <li>
                  Use the report-level filters to refine the results and
                  confirm the data matches your question.
                </li>
                <li>
                  Save the report, choose who can access it, and add it to a
                  dashboard if useful.
                </li>
              </ol>
              <div className="pf-guide-caveats">
                <h3>Keep these reporting details in mind</h3>
                <ul>
                  <li>
                    A record must encounter stages in chronological order to
                    appear later in the journey.
                  </li>
                  <li>
                    Journey totals count unique contacts or deals following a
                    path, not every event occurrence.
                  </li>
                  <li>
                    Anonymous visitor tracking and connected third-party
                    activities are supported only in specific situations.
                    Check the selected events and integrations before drawing
                    conclusions.
                  </li>
                  <li>
                    Creating a static list from journey results is limited to
                    100,000 records.
                  </li>
                </ul>
              </div>
            </section>

            <section id="journey-example">
              <h2>Example: from a page visit to a new deal</h2>
              <p>
                To explore which website activity is associated with new
                business, build a contact journey with stages such as:
              </p>
              <ol className="pf-guide-example-list">
                <li>Visited a page</li>
                <li>Submitted a form</li>
                <li>Booked a meeting</li>
                <li>Had a deal created</li>
              </ol>
              <p>
                Add a page URL breakdown to the first stage, run the report,
                and compare which paths continue through the later milestones.
                Use the results as a prompt for investigation, not proof that
                one interaction alone caused the outcome.
              </p>
            </section>

            <div className="pf-guide-related">
              <p className="pf-guide-eyebrow">RELATED GUIDE</p>
              <h2>Explore advanced marketing reporting</h2>
              <p>
                Learn how attribution and journey analysis can help connect
                marketing activity with business outcomes.
              </p>
              <Link to="/advanced-marketing-reporting">
                View advanced marketing reporting
              </Link>
            </div>
          </article>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}

export default Pathfinder;