import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MockupRenderer } from "./pages/RedesignMockups";

// Standalone Page Wrapper that renders the clean redesigned mockup page in full-screen (desktop mode)
function StandalonePage({ pageId }: { pageId: string }) {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <MockupRenderer pageId={pageId} mode="desktop" />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Map all corporate pages directly to the clean, standalone premium layouts */}
      <Route path="/">
        <StandalonePage pageId="home" />
      </Route>
      <Route path="/services">
        <StandalonePage pageId="services" />
      </Route>
      <Route path="/healthcare-it">
        <StandalonePage pageId="healthcare_it" />
      </Route>
      <Route path="/federal">
        <StandalonePage pageId="federal" />
      </Route>
      <Route path="/why-us">
        <StandalonePage pageId="why_us" />
      </Route>
      <Route path="/team">
        <StandalonePage pageId="team" />
      </Route>
      <Route path="/blog">
        <StandalonePage pageId="blog" />
      </Route>
      <Route path="/contact">
        <StandalonePage pageId="contact" />
      </Route>
      
      {/* 404 Route */}
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
