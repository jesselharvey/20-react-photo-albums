import React, { useState, useEffect } from 'react';
import axios from "axios"
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AlbumHome from "./AlbumHome.js"
import Album from "./Album.js"
import './App.css';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AlbumHome />
        </Route>
        <Route path="/albums/:id">
          <Album />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
