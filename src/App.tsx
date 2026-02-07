import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyHumanEdge from "./pages/WhyHumanEdge";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import HRAudit from "./pages/services/HRAudit";
import HROnDemand from "./pages/services/HROnDemand";
import HRPolicies from "./pages/services/HRPolicies";
import PayrollCompliance from "./pages/services/PayrollCompliance";
import TalentPerformance from "./pages/services/TalentPerformance";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Disclaimer from "./pages/legal/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/hr-audit" element={<HRAudit />} />
          <Route path="/services/hr-on-demand" element={<HROnDemand />} />
          <Route path="/services/hr-policies" element={<HRPolicies />} />
          <Route path="/services/payroll-compliance" element={<PayrollCompliance />} />
          <Route path="/services/talent-performance" element={<TalentPerformance />} />
          <Route path="/why-humanedge" element={<WhyHumanEdge />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
