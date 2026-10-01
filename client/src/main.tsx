import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// posthog-js sozinho responde por quase metade do bundle da página (recursos
// de session recording/surveys/toolbar que nem usamos aqui, mas vêm juntos no
// pacote). Carregado via import() dinâmico, vira um chunk separado que o
// navegador busca em paralelo, sem segurar o primeiro render — numa conexão
// lenta, o usuário vê a página antes do analytics terminar de chegar.
import("posthog-js").then(({ default: posthog }) => {
  posthog.init("phc_CEdbVrcP8cEuWMAZMsCfnUJuZvSugKnYxgqARA25XrPs", {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
  });

  posthog.register({
    app_domain: "site.acueapp.com.br",
    app_type: "landing",
  });
});
