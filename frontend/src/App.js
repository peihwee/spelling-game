import logo from './logo.svg';
import './App.css';
import NavControl from './components/NavControl.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import PlayScreen from './screens/PlayScreen';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {

    }
  }

  componentDidMount()
  {
    
  }

  render()
  {
    return (
      <div className="App container-fluid">
        <NavControl/>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeScreen/>} exact></Route>
              <Route path="play/" element={<PlayScreen/>} exact></Route>
            </Routes>
            
          </BrowserRouter>
        </main>
        <footer className="page-footer white">
          <div className="footer-copyright blue darken-1">
            <div className="container">
              <p>© 2022, Siah Peih Wee, All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
