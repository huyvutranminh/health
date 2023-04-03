import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const Records = lazy(() => import("./pages/Records"));
const Columns = lazy(() => import("./pages/Columns"));

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Header />
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/records" element={<Records />} />
            <Route path="/columns" element={<Columns />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
