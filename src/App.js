import { Component } from 'react';
import './App.css';
import Users from './components/Users';
import Navbar from './layout/Navbar';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './pages/NotFound'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contribute from './pages/Contribute';
/*
const Home = () => {
  return(
    <h3>Home Page</h3>
  )
}
const About = () => {
  return(
    <h3>About Page</h3>
  )
}
*/
class App extends Component {


        render(){
      return(
        <Router>    
        <div className="container">

        <hr/>
        <Navbar/>
        <hr/>

        <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/github" component={Contribute} />
        <Route exact path="/edit/:id" component={UpdateUser} />
        <Route component= {NotFound} />
        </Switch> 


        <hr/>
        

        


        {/*
        <Route exact path= "/" component = {Home} />

        <Route exact path= "/about" component = {About}/>

        */}
          
        </div>
        </Router>  
        );

  }
}


export default App;
