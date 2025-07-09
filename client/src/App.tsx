import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ConfigProvider } from 'antd';
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import "./i18n/i18n";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 8,
          },
        }}
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
