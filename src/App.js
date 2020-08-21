import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Service from './Service';
// import Navbar from './Navbar';
// import Signin from './Signin/Signin.js';
// import {Switch,Route, Redirect} from 'react-router-dom';
import './App.css';
// import './index.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };

  }
  render(){
    return (
      <>
      <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="https://www.google.com">hello world</NavbarBrand>
        </div>
        </Navbar>  
        <Menu dishes={this.state.dishes}/>
      </div>
      </>
    )
  }
}
// const  App = ()=> {
//   return (
//     <>
//     <div className="App">
//     <Navbar dark color="primary">
//       <div className="container">
//         <NavbarBrand href="https://www.google.com">hello world</NavbarBrand>
//       </div>
//       </Navbar>  
//       <Menu/>
//     </div>
    
/* <Switch>
  <div>
    <h1 className=""></h1>
  </div>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/Service' component={Service}/>
  <Route path='/contact' component={Contact}/>
   <Route path='/signin' component={Signin}/> 
  <Route path='/signup' component={Contact}/>

  <Redirect to="/"/>
</Switch> */

    //</>
      
    //);
//}

export default App;
