import { Fragment } from 'react';
import NavBar from './Components/Navs/Nav';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
}

export default App;
