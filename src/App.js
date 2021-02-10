import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import CreateNurseData from './components/CreateNurseData';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div >
      <Router>
        
        <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route path="/" exact component={CreateNurseData}></Route>
              <Route path="/nurses" component={CreateNurseData}></Route>
            </Switch>
          
          </div>
        < FooterComponent/>
      
      </Router>
    </div>
  );
}

export default App;
