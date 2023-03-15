import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { PageProvider } from "./contexts/PageContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <PageProvider>
        <Home />
    </PageProvider>
);
