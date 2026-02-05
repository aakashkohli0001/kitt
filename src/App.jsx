import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Message from "./pages/Message";
import { useEffect } from "react";

function ForceHomeOnRefresh({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.location.replace("/");
    }
  }, []);

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <ForceHomeOnRefresh>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </ForceHomeOnRefresh>
    </BrowserRouter>
  );
}
