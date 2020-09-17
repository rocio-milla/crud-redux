import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditItem from './components/EditItem';
import Header from './components/Header';
import Items from './components/Items';
import NewItem from './components/NewItem';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/items/new" component={NewItem} />
            <Route exact path="/items/edit/:id" component={EditItem} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
