import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Footer from "../footer";
import Counter from "../counter";
import Login from "../login";
import Register from "../register";
import Profile from '../profile';

const App = () => (
  <div>
    <header>
      <div className="navbar-fixed">
      <nav className="blue">
        <div className="nav-wrapper">
         
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route path="/about-us" component={About} />
      <Route path="/counter" component={Counter} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
    </main>

    <div>
      <Footer />
    </div>
  </div>
)

export default App;