import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header/Header';
import ImgDetail from './components/ImgContainer/ImgDetail/ImgDetail';
import DataContextProvider from './context/DataContext';
import ImgContainer from './components/ImgContainer/ImgContainer';


function App() {

  return (
    <Router>
      <DataContextProvider>
        <div className="App m-0 p-0" fluid>
          <Header />

          <Switch>
            <Route path="/" exact>
              <ImgContainer />
            </Route>
            <Route path="/:name" >
              <ImgDetail />
            </Route>
          </Switch>
        </div>
      </DataContextProvider >
    </Router>
  );
}

export default App;
