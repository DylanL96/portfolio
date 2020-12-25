import React from 'react';
//Components
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/Navbar';
//Pages
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
//Routing
import {Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/project/:id' component={ProjectDetail} />
        </Switch>
    </div>
  )
}
export default App;
