import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TanStackProvider } from "./tanstack/TanStackProvider.tsx";
import { Root } from "./Root.tsx";
import '../src/styles/index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackProvider>
      <Root />
    </TanStackProvider>
  </StrictMode>
);
