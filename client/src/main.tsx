import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import posthog from "posthog-js";

posthog.init(
  "phc_CEdbVrcP8cEuWMAZMsCfnUJuZvSugKnYxgqARA25XrPs",
  {
    api_host: "https://app.posthog.com",
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
  }
);

posthog.register({
  app_domain: "site.acueapp.com.br",
  app_type: "landing",
});

createRoot(document.getElementById("root")!).render(<App />);
