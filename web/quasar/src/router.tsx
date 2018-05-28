import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './app';
import { About, NotesPageContainer, NotePageContainer, Home } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/notes" component={NotesPageContainer} />
          <Route path="/note" component={NotePageContainer} />
          <Route path="/note/:id" component={NotePageContainer} />
          <Route path="/note/edit/:id" component={NotePageContainer} />
          <Route path="/note/remove/:id" component={NotePageContainer} />
        </Route>
      </Router>
    </Provider>
  );
}
