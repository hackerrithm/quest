import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
          <nav className="blue">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">Logo</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
            </div>
            <div class="row">
              <div class="col s12"><p>s12</p></div>
              <div class="col s12 m4 l2"><p>s12 m4</p></div>
              <div class="col s12 m4 l8"><p>s12 m4</p></div>
              <div class="col s12 m4 l2"><p>s12 m4</p></div>
            </div>
            <div class="row">
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
            </div>
          </div>
      </div>
    );
  }
}