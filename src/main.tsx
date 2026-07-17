import { createRoot } from 'react-dom/client';
import { Route, Switch } from 'wouter';

import App from './App';
import About from './pages/About';
import Favorites from './pages/Favorites';
import ErrorBoundary from './components/ErrorBoundary';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/sobre" component={About} />
      <Route path="/favoritos" component={Favorites} />
      <Route>
        <App />
      </Route>
    </Switch>
  </ErrorBoundary>
);
