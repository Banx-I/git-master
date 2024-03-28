import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import Mewtwo from "./pages/mewtwo";
import Croatia from "./pages/croatia";
import ProfileMaker from "./pages/profile-maker";
import Vjezbe from "./pages/vjezbe";
import DataTypes from "./pages/data-types";
import Gallery from "./pages/gallery";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mewtwo" element={<Mewtwo />} />
          <Route path="croatia" element={<Croatia />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="vjezbe" element={<Vjezbe />} />
          <Route path="data-types" element={<DataTypes />} />
          <Route path="profile-maker" element={<ProfileMaker />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="contact" element={<Contact />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
