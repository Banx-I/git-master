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
import Tabs from "./pages/tabs";
import Games from "./pages/games";
import GameInfo from "./pages/game-info";
import Cars from "./pages/cars";
import Glovo from "./pages/glovo";
import Vjezba25042024 from "./pages/vjezba25042024";
import Phones from "./pages/phones";
import PhonesCreate from "./pages/phones-create";
import Spotify from "./pages/spotify";

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
          <Route path="glovo" element={<Glovo />} />
          <Route path="profile-maker" element={<ProfileMaker />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="cars" element={<Cars />} />
          <Route path="phones" element={<Phones />} />
          <Route path="spotify" element={<Spotify />} />
          <Route path="phones">
            <Route index element={<Phones />} />
            <Route path="new" element={<PhonesCreate isEdit={false} />} />
            <Route path=":id" element={<PhonesCreate isEdit={true} />} />
          </Route>
          <Route path="vjezba25042024" element={<Vjezba25042024 />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>
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
