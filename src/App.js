import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import CreateNurseData from './components/CreateNurseData';
import FooterComponent from './components/FooterComponent';
import ListNurseComponent from './components/ListNurseComponent';
import ViewNurseComponent from './components/ViewNurseComponent';

function App() {
  return (
    <div >
      <Router>
        
        <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route path="/" exact component={ListNurseComponent}></Route>
              <Route path="/nurses" component={ListNurseComponent}></Route>
              <Route path="/add-nurse/:id" component={CreateNurseData}></Route>
              <Route path="/view-nurse/:id" component={ViewNurseComponent}></Route>
              {/* <Route path="/view-nurse-on-particular-day/:id" component={ViewNurseOnParticularDayComponent}></Route> */}
            </Switch>
          
          </div>
        {/* <FooterComponent/> */}
      
      </Router>
    </div>
  );
}

export default App;
