import Common from './Common';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import ResNav from './ResNav'
import Myskill from './Myskill';


// import './App.css';
function App() {
  return (
    <div className="App">
      
     
    
      <Switch>
     
        <Route exact path='/' component={Common} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skill' component={Myskill} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      
    </div>
  );
}

export default App;
