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
const BuyingIntent = lazy(() => import("./Component/buyingintent"));
const PersonalOutreach = lazy(() => import("./Component/personaloutreach"));
const DataAgent = lazy(() => import("./Component/DataAgent"));
const EnrichContact = lazy(() => import("./Component/enrichcontact"));
const CaptureQualifyLeads = lazy(() => import("./Component/capturequalityleads"));
const CustomerAgent = lazy(() => import("./Component/customeragent"));
const BreezeAssistant = lazy(() => import("./Component/breezeassistant"));
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