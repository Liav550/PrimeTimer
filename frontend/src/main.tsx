import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrambleProvider } from "./contexts/scramble/ScrambleProvider.tsx";
import { EventProvider } from "./contexts/event/EventProvider.tsx";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";

const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <EventProvider>
        <ScrambleProvider>
          <App />
        </ScrambleProvider>
      </EventProvider>
    </QueryClientProvider>
  </StrictMode>,
);
