// src/App.js

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

// Component to track page views
function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    if (analytics) {
      console.log("Logging pageview for", location.pathname);
      logEvent(analytics, "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

function TrackUserClicks() {
  useEffect(() => {
    const handleClick = (event) => {
      // Log the click event to Firebase Analytics
      if (analytics) {
        const element = event.target;
        const elementType = element.tagName.toLowerCase();
        const elementId = element.id ? element.id : "no-id";
        const elementClass = element.className ? element.className : "no-class";

        console.log(
          `Clicked element: ${elementType}, ID: ${elementId}, Class: ${elementClass}`
        );

        // Log event to Firebase Analytics
        logEvent(analytics, "user_click", {
          element_type: elementType,
          element_id: elementId,
          element_class: elementClass,
        });
      }
    };

    // Attach the click event listener to the document
    document.addEventListener("click", handleClick);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

function App() {
  return (
    <>
      <main className="">
        <NavBar />

        <div className="main-wrapper">
          {/* Track page views */}
          <TrackPageView />
          <TrackUserClicks />
          {/* Define routes for the application */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
          </Routes>
        </div>

        <div className="main-wrapper">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
