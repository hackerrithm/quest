import * as React from 'react';
import { Link } from 'react-router';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <nav className="blue">
          <div className="nav-wrapper">
            <Link to="/home" className="brand-logo">Quest</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/notes">Notes</Link></li>
              <li><Link to="/about">About</Link></li>
              {/* <li><Link to="/members">Members</Link></li> */}
              
              {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
            </ul>
          </div>
        </nav>
    </div>
  );
}
