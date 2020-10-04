import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, SingleNote, Create, Archive, Edit } from './pages';

import { Header } from './commons';
import { NoteContextProvider } from './context/notes';

function App() {

  return (
    <Router>
      <Header/>
      <NoteContextProvider>
        <Switch>
          <Route exact path="/notes-app" component={Homepage} />  
          <Route path="/single-note/:id" component={SingleNote} />
          <Route path="/create" component={Create} /> 
          <Route path="/archive" component={Archive} /> 
          <Route path = "/edit/:id" component = {Edit} />
        </Switch>
      </NoteContextProvider>
    </Router>
  );

}

export default App;
