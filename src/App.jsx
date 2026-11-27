import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MarketingHub from "./Component/MarketingHub";
import SalesHub from "./Component/SalesHub";
import ServiceHub from "./Component/ServiceHub";
import ContentHub from "./Component/ContentHub";
import ContentAgent from "./Component/contentagent";
import Ads from "./Component/ads";
import FormShortening from "./Component/formshortening";
import SocialMediaManagement from "./Component/socialmediamanagement";
const AudienceSegments = lazy(() => import("./Component/audiencesegment"));
const ProspectingAgent = lazy(() => import("./Component/prospectingagent"));
const LeadManagement = lazy(() => import("./Component/leadmanagement"));
const FreeMeetingScheduler = lazy(() => import("./Component/freemeetingscheduler"));
const FreeEmailTracking = lazy(() => import("./Component/freeemailtracking"));
const SalesAutomation = lazy(() => import("./Component/salesautomation"));
const BuyingIntent = lazy(() => import("./Component/buyingintent"));
const PersonalOutreach = lazy(() => import("./Component/personaloutreach"));
const DataAgent = lazy(() => import("./Component/DataAgent"));
const EnrichContact = lazy(() => import("./Component/enrichcontact"));
const CaptureQualifyLeads = lazy(() => import("./Component/capturequalityleads"));
const CustomerAgent = lazy(() => import("./Component/customeragent"));
const BreezeAssistant = lazy(() => import("./Component/breezeassistant"));
const NurtureAgent = lazy(() => import("./Component/nurtureagent"));
const AIPoweredEmails = lazy(() => import("./Component/aipoweredemails"));
const MobileMessaging = lazy(() => import("./Component/mobilemessaging"));
const MobileMarketingGuide = lazy(() => import("./Component/mobilemarketingguide"));
const LookalikeLists = lazy(() => import("./Component/lookalike"));
const CustomerSegmentation = lazy(() => import("./Component/customersegmentation"));
const CreateAndUseList = lazy(() => import("./Component/createanduselist"));
const TipsFindingAudience = lazy(() => import("./Component/tipsfindingaudience"));
const Personalization = lazy(() => import("./Component/personalization"));
const GuidePersonalizationApp = lazy(() => import("./Component/guidepersonalizationapp"));
const ContentVariants = lazy(() => import("./Component/contentvariants"));
const LoopMarketing = lazy(() => import("./Component/loopmarketing"));
const MarketingStudio = lazy(() => import("./Component/marketingstudio"));
const MarketingAnalytics = lazy(() => import("./Component/marketinganalytics"));
const WebAnalytics = lazy(() => import("./Component/webanalytics"));
const CampaignReports = lazy(() => import("./Component/campaighnreports"));
const DashboardReporting = lazy(() => import("./Component/dashboardreporting"));
const MarketingReports = lazy(() => import("./Component/marketingreports"));
const AdvancedMarketingReport = lazy(() => import("./Component/advancedmarketingreport"));
const Pathfinder = lazy(() => import("./Component/pathfinder"));
import DataHub from "./Component/DataHub";
import RevenueHub from "./Component/RevenueHub";
import SmartCrm from "./Component/SmartCrm";
import AgentHub from "./Component/AgentHub";
import SmallBuisness from "./Component/Small Buisness";
import AlchemizeCustomerPlatform from "./Component/AlchemizeCustomerPlatform";
import AEO from "./Component/AEO";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MarketingHub />} />

        <Route path="/marketing" element={<MarketingHub />} />

        <Route path="/sales" element={<SalesHub />} />

        <Route path="/service" element={<ServiceHub />} />

        <Route path="/content" element={<ContentHub />} />
        <Route path="/content-agent" element={<ContentAgent />} />
        <Route
          path="/nurture-agent"
          element={
            <Suspense fallback={null}>
              <NurtureAgent />
            </Suspense>
          }
        />
        <Route
          path="/ai-powered-emails"
          element={
            <Suspense fallback={<div className="na-loading">Loading AI-Powered Email...</div>}>
              <AIPoweredEmails />
            </Suspense>
          }
        />
        <Route
          path="/mobile-messaging"
          element={
            <Suspense fallback={null}>
              <MobileMessaging />
            </Suspense>
          }
        />
        <Route
          path="/mobile-marketing-guide"
          element={
            <Suspense fallback={null}>
              <MobileMarketingGuide />
            </Suspense>
          }
        />
        <Route
          path="/lookalike-lists"
          element={
            <Suspense fallback={null}>
              <LookalikeLists />
            </Suspense>
          }
        />
        <Route
          path="/customer-segmentation"
          element={
            <Suspense fallback={null}>
              <CustomerSegmentation />
            </Suspense>
          }
        />
        <Route
          path="/create-and-use-lists"
          element={
            <Suspense fallback={null}>
              <CreateAndUseList />
            </Suspense>
          }
        />
        <Route
          path="/tips-finding-audience"
          element={
            <Suspense fallback={null}>
              <TipsFindingAudience />
            </Suspense>
          }
        />
        <Route
          path="/personalization"
          element={
            <Suspense fallback={null}>
              <Personalization />
            </Suspense>
          }
        />
        <Route
          path="/personalization-app-guide"
          element={
            <Suspense fallback={null}>
              <GuidePersonalizationApp />
            </Suspense>
          }
        />
        <Route
          path="/content-personalization-variants"
          element={
            <Suspense fallback={null}>
              <ContentVariants />
            </Suspense>
          }
        />
        <Route
          path="/loop-marketing"
          element={
            <Suspense fallback={null}>
              <LoopMarketing />
            </Suspense>
          }
        />
        <Route
          path="/marketing-studio"
          element={
            <Suspense fallback={null}>
              <MarketingStudio />
            </Suspense>
          }
        />
        <Route
          path="/marketing-analytics"
          element={
            <Suspense fallback={null}>
              <MarketingAnalytics />
            </Suspense>
          }
        />
        <Route
          path="/web-analytics"
          element={
            <Suspense fallback={null}>
              <WebAnalytics />
            </Suspense>
          }
        />
        <Route
          path="/campaign-reports"
          element={
            <Suspense fallback={null}>
              <CampaignReports />
            </Suspense>
          }
        />
        <Route
          path="/dashboard-reporting"
          element={
            <Suspense fallback={null}>
              <DashboardReporting />
            </Suspense>
          }
        />
        <Route
          path="/marketing-reports"
          element={
            <Suspense fallback={null}>
              <MarketingReports />
            </Suspense>
          }
        />
        <Route
          path="/advanced-marketing-reporting"
          element={
            <Suspense fallback={null}>
              <AdvancedMarketingReport />
            </Suspense>
          }
        />
        <Route
          path="/pathfinder"
          element={
            <Suspense fallback={null}>
              <Pathfinder />
            </Suspense>
          }
        />
        <Route path="/ads" element={<Ads />} />
        <Route path="/form-shortening" element={<FormShortening />} />
        <Route path="/social-media-management" element={<SocialMediaManagement />} />
        <Route
          path="/audience-segments"
          element={
            <Suspense fallback={<div className="aud-loading">Loading audience segments...</div>}>
              <AudienceSegments />
            </Suspense>
          }
        />
        <Route
          path="/prospecting-agent"
          element={
            <Suspense fallback={<div className="pa-loading">Loading Prospecting Agent...</div>}>
              <ProspectingAgent />
            </Suspense>
          }
        />
        <Route
          path="/lead-management"
          element={
            <Suspense fallback={null}>
              <LeadManagement />
            </Suspense>
          }
        />
        <Route
          path="/free-meeting-scheduler"
          element={
            <Suspense fallback={null}>
              <FreeMeetingScheduler />
            </Suspense>
          }
        />
        <Route
          path="/free-email-tracking"
          element={
            <Suspense fallback={null}>
              <FreeEmailTracking />
            </Suspense>
          }
        />
        <Route
          path="/sales-automation"
          element={
            <Suspense fallback={null}>
              <SalesAutomation />
            </Suspense>
          }
        />
        <Route
          path="/buying-intent"
          element={
            <Suspense fallback={<div className="bi-loading">Loading Buyer Intent...</div>}>
              <BuyingIntent />
            </Suspense>
          }
        />
        <Route
          path="/personal-outreach"
          element={
            <Suspense fallback={<div className="po-loading">Loading Personal Outreach...</div>}>
              <PersonalOutreach />
            </Suspense>
          }
        />
        <Route
          path="/data-agent"
          element={
            <Suspense fallback={<div className="da-loading">Loading Data Agent...</div>}>
              <DataAgent />
            </Suspense>
          }
        />
        <Route
          path="/enrich-contact"
          element={
            <Suspense fallback={<div className="ec-loading">Loading Data Enrichment...</div>}>
              <EnrichContact />
            </Suspense>
          }
        />
        <Route
          path="/capture-qualify-leads"
          element={
            <Suspense fallback={<div className="cq-loading">Loading lead qualification...</div>}>
              <CaptureQualifyLeads />
            </Suspense>
          }
        />
        <Route
          path="/customer-agent"
          element={
            <Suspense fallback={<div className="ca-loading">Loading Customer Agent...</div>}>
              <CustomerAgent />
            </Suspense>
          }
        />
        <Route
          path="/alchemize-assistant"
          element={
            <Suspense fallback={<div className="ba-loading">Loading Alchemize Assistant...</div>}>
              <BreezeAssistant />
            </Suspense>
          }
        />

        <Route path="/data" element={<DataHub />} />

        <Route path="/revenue" element={<RevenueHub />} />

        <Route path="/smartcrm" element={<SmartCrm />} />
        <Route path="/agent" element={<AgentHub />} />
        <Route path="/smallbuisness" element={<SmallBuisness />} />
        <Route path="/customerplatform" element={<AlchemizeCustomerPlatform />} />
        <Route path="/aeo" element={<AEO />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;