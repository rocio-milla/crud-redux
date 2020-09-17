import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditItem from './Components/EditItem';
import Header from './Components/Header';
import Items from './Components/Items';
import NewItem from './Components/NewItem';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/items/new" component={NewItem} />
          <Route exact path="/items/edit/:id" component={EditItem} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
