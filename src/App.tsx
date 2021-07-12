import './App.css';
import Home from './pages/Home';

import { BrowserRouter , Route } from "react-router-dom";
import GamePlayApi from './components/GamePlayApi';

function App() {
  document.title = 'guess the name'
  return (
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/gameplay" component={GamePlayApi}/>
        <Route path="/explain" exact component={Home}/>
      </BrowserRouter>
  );
}

export default App;
