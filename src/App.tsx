import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

import About from "./pages/About";
import Resume from "./pages/Resume";
import NoPage from "./pages/NoPage";
import Playground from "./pages/Playground";
import Home1 from "./pages/Home";

import {Analytics} from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/playground" element={<Playground />} />

          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
