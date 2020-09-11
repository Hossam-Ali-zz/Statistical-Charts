import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Routes from './routes';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Router>
        <NavBar />
        <React.Suspense fallback={<Spinner color="dark" />}>
          <Switch>
            {Routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                private={route.private}
                render={(props) => <route.component {...props} />}
              />
            ))}
          </Switch>
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
