import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import { Home, NotFound } from "./components";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  const [HomeView, setHomeView] = useState([
    {
      value:
        "If you could count the skeletons in my closet. Under my bed and up under my faucet. Then you would know I've completely lost it. Is he nuts? No, he's insane. If you could count the skeletons in my closet. Under my bed and up under my faucet. Then you would know I've completely lost it. Is he nuts? No, he's insane.",
      isPic: false,
      id: 1,
    },
    { value: "/images/logo.jpg", isPic: true, id: 7 },
    { value: "/images/lobby.jpg", isPic: true, id: 8 },
    {
      value:
        "My tea's gone cold. I'm wondering why I got out of bed at all. The morning rain clouds up my window. And I can't see at all. And even if I could it'd all be gray. But your picture on my wall. It reminds me that it's not so bad, it's not so bad.",
      isPic: false,
      id: 2,
    },
    {
      value:
        "I'm beginning to feel like a Rap God, Rap God. All my people from the front to the back nod, back nod. The way I'm racing around the track, call me NASCAR, NASCAR. Dale Earnhardt of the trailer park, the White Trash God. Kneel before General Zod. This planet's Krypton – no, Asgard, Asgard.",
      isPic: false,
      id: 3,
    },
    { value: "/images/slogan.jpg", isPic: true, id: 9 },
    { value: "forth", isPic: false, id: 4 },
    { value: "sixth", isPic: false, id: 6 },
    { value: "fifth", isPic: false, id: 5 },
  ]);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home content={HomeView} />
          </Route>

          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/AboutUs">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
