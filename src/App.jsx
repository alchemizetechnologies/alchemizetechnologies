import { BrowserRouter, Routes, Route } from "react-router-dom";

import MarketingHub from "./Component/MarketingHub";
import SalesHub from "./Component/SalesHub";
import ServiceHub from "./Component/ServiceHub";
import ContentHub from "./Component/ContentHub";
import DataHub from "./Component/DataHub";
import RevenueHub from "./Component/RevenueHub";
import SmartCrm from "./Component/SmartCrm";
import AgentHub from "./Component/AgentHub";
import SmallBuisness from "./Component/Small Buisness";
import HubspotCustomer from "./Component/HubspotCustomer";
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

        <Route path="/data" element={<DataHub />} />

        <Route path="/revenue" element={<RevenueHub />} />

        <Route path="/smartcrm" element={<SmartCrm />} />
        <Route path="/agent" element={<AgentHub />} />
        <Route path="/smallbuisness" element={<SmallBuisness />} />
        <Route path="/customerplatform" element={<HubspotCustomer />} />
        <Route path="/aeo" element={<AEO />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;