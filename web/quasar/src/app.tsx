import * as React from 'react';
import { Header } from './components';
import { Footer } from "./components/footer";

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      {props.children}
      {/* <Footer /> */}
    </div>

  );
}
