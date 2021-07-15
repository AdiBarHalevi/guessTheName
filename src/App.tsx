import Home from "./pages/Home";

import { BrowserRouter, Route } from "react-router-dom";
import GamePlayApi from "./pages/game-play/GamePlayApi";
import Layout from "./components/Layout";

function App() {
  document.title = "guess the TV show name";
  return (
    <Layout>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/gameplay" component={GamePlayApi} />
        <Route path="/explain" exact component={Home} />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
