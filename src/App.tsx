import Home from "./pages/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import GamePlayApi from "./pages/game-play/GamePlayApi";
import Layout from "./components/Layout";
import { createGlobalStyle } from 'styled-components'
import Explain from "./pages/Explain/Explain";

function App() {
  document.title = "guess the TV show name";
  return (
    <BrowserRouter>
      <GlobalStyle/>

        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gameplay" component={GamePlayApi} />
            <Route path="/explain" exact component={Explain} />
          </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Yomogi", cursive, Arial, Helvetica, sans-serif;

  }
`
