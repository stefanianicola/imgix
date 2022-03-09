import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import ImgDetail from './components/ImgContainer/ImgDetail/ImgDetail';
import ImgContainer from './components/ImgContainer/ImgContainer';
import Footer from './components/Footer/Footer';
import DataContextProvider from './context/DataContext';



function App() {

  return (
    <Router>
      <DataContextProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact>
              <ImgContainer />
            </Route>
            <Route path="/:name" >
              <ImgDetail />
            </Route>
          </Switch>
          <Footer />
        </div>
      </DataContextProvider >
    </Router>
  );
}

export default App;
