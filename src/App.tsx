import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NoPage from "./pages/NoPage";
import Playground from "./pages/Playground";

// to hide boba
// function testScroll(ev: any) {
//   if (window.pageYOffset > 200) {
//     document
//       .querySelectorAll(".boba-float")
//       .forEach((c) => ((c as any).style.visibility = "hidden"));
//   }
// }
// window.onscroll = testScroll;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/playground" element={<Playground />} />

          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
