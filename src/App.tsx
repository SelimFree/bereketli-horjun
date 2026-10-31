import { lazy, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import ServerErrorPage from "./pages/ServerErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AppContext, type AppProps } from "./context/AppContext";
import { Loading } from "./components/ui/Loading";
import { cn } from "./lib/utils";

const HomePage = lazy(() => import("./pages/HomePage"));

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiePage = lazy(() => import("./pages/CookiePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ServerErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },

      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "cookies", element: <CookiePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App(appProps: AppProps) {
  const [appState, setAppState] = useState<"loading" | "fading" | "ready">("loading");

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setAppState("fading");
    }, 3000);

    const readyTimer = setTimeout(() => {
      setAppState("ready");
    }, 3500); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  return (
    <AppContext.Provider value={appProps}>
      <RouterProvider router={router} />
      {appState !== "ready" && (
        <div 
          className={cn(
            "fixed inset-0 z-9999 transition-opacity duration-500 ease-in-out",
            appState === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <Loading className="min-h-screen h-screen w-screen bg-gray-50" />
        </div>
      )}

    </AppContext.Provider>
  );
}