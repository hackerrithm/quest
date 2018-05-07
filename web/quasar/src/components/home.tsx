import * as React from 'react';
import { Footer } from "./footer";

export const Home: React.StatelessComponent<{}> = () => {
  return (
    <div>
            <div className="home-page">
              <div className="">
                <div className="row">
                  <div className="col s12 m7 l6">          
                    <h2 className="blue-text">Make a note</h2>
                    <h2 className="orange-text">Transform your life</h2>
                    <h5 className="teal-text"><i className="material-icons blue-text Tiny">room</i>Keep track of your progress</h5>
                    <h5 className="gray-text">
                      <p>Are you a property owner?</p>
                        <ul>
                          <li><i className="material-icons blue-text Tiny">check_box</i>Extend your mind</li>
                          <li><i className="material-icons green-text Tiny">check_box</i>Organize your thoughts</li>
                          <li><i className="material-icons green-text Tiny">check_box</i>Write Once, Keep forever</li>
                          <li><i className="material-icons green-text Tiny">check_box</i>Remember when, where, what, who and how</li>
                        </ul>
                    </h5>
                  </div>
                  <div className="col s12 m1 l1">
                    
                  </div>
                  <div className="col s12 m4 l5">
                      <div className="card">
                        <div className="card-content grey lighten-4">
                          <div id="test4">
                            <h4 className="blue-text">Subscribe to receive updates on our service</h4>
                            <br/>
                              <form method="POST" acceptCharset="utf-8">
                                <input type="email" name="emailReceiver" placeholder="markzukerburge@example.com" className="validate" />
                                <button className="btn btn-flat yellow black-text" name="sendemail">Subscribe</button>                    
                              </form>
                          </div>
                          <div id="test5">

                              <h3>QR reader here</h3>
                          </div>
                        </div>
                        <div className="card-content">

                        </div>
                        <div className="card-tabs">
                          <ul className="tabs tabs-fixed-width">
                            <li className="tab"><a className="active" href="/#test4">Subscribe</a></li>
                            <li className="tab"><a href="/#test5">Scan</a></li>
                          </ul>
                        </div>

                      </div>
                  </div>
            </div>
            <div className="row grey lighten-3">
              <div className="col s12 m4 l4">
                <h4>test 1</h4>
                <p>Information and steps you may take to protect your organization 
                  from Spectre and Meltdown.</p>
              </div>
              <div className="col s12 m4 l4">
                <h4>test 2</h4>
                <p>Information and steps you may take to protect your organization 
                  from Spectre and Meltdown.</p>
              </div>
              <div className="col s12 m4 l4">
                <h4>test 2</h4>
                <p>Information and steps you may take to protect your organization 
                  from Spectre and Meltdown.</p>
              </div>
            </div>
            <div>
              <h3 className="center-align">Why Quest?</h3>
              <div className="row">
                <div className="col s12 m4 l4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text">
                      <i className="material-icons">flash_on</i>
                    </h2>
                    <h5 className="center">Speeds up development</h5>
                    <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="icon-block">
                      <h2 className="center light-blue-text">
                        <i className="material-icons">flash_on</i>
                      </h2>
                      <h5 className="center">Speeds up development</h5>
                      <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                    </div>
                  </div>
                <div className="col s12 m4 l4">
                  <div className="icon-block">
                      <h2 className="center light-blue-text">
                        <i className="material-icons">flash_on</i>
                      </h2>
                      <h5 className="center">Speeds up development</h5>
                      <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                    </div>
                </div>
              </div>
            </div>
{/*

*/}

            <div className="row blue">
              <h3 className="center-align">What others have to say</h3>
              <div className="">
                <div className="col s12 m4 l4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text">
                      <i className="material-icons">flash_on</i>
                    </h2>
                    <h5 className="center">Speeds up development</h5>
                    <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="icon-block">
                      <h2 className="center light-blue-text">
                        <i className="material-icons">flash_on</i>
                      </h2>
                      <h5 className="center">Speeds up development</h5>
                      <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                    </div>
                  </div>
                <div className="col s12 m4 l4">
                  <div className="icon-block">
                      <h2 className="center light-blue-text">
                        <i className="material-icons">flash_on</i>
                      </h2>
                      <h5 className="center">Speeds up development</h5>
                      <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="center-align">
              <button className="btn btn-flat blue white-text" type="button">Try now</button>
            </div>
            <br/>
          </div>
        </div>
    </div>

  );
}
