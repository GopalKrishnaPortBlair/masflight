import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import FuelProfitabilityResults from "./pages/FuelProfitabilityResults";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/files" element={<Dashboard />} />
          <Route path="/reporting" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/fuel-profitability-results" element={<Dashboard />} />
          <Route path="/outlierdata" element={<Dashboard />} />
          <Route path="/outliertable" element={<Dashboard />} />

          {/* Custom Routes */}
          

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
