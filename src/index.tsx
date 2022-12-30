import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

import "./input.css";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { TutorialPage } from "./pages/Tutorial";
import { AboutPage } from "./pages/About";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="tutorial" element={<TutorialPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
