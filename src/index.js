import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
//CONTAINERS
import Albums from './containers/albums/Albums';
import Album from './containers/albums/Album';
//ROTAS
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import fresnoApp from './store/reducers';
import thunkMiddleware from 'redux-thunk';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/albums/:id" component={Album} />
      </div>
    </Router>
  </Provider>
)

const store = createStore(fresnoApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
