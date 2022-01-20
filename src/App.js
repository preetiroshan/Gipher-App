import React, { useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom"
import { useRoute } from 'wouter'
import Header from "./components/Header/Header.jsx";
import 'antd/dist/antd.css';
import Login from './components/Login'
import Register from './components/Register'
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard";
import Entertainment from "./components/Entertainment";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Moods from "./components/Moods";
import Reactions from "./components/Reactions";
import Trending from "./components/Trending";
import { addToFavouritesApi } from "./services/FavouritesServices";
import Favourites from "./components/Favourites";
import MyGifs from "./components/MyGifs";
import PrivateRoute from "./components/PrivateRoute";
import SearchResult from "./components/SearchResult";
import PageNotFound from "./components/PageNotFound";

function App() {
  const history = useHistory()
  const [matchLogin, params] = useRoute("/Login");
  const [matchReg, params2] = useRoute("/Register")
  const addToFav = (original) => {
    if (!localStorage.getItem('token')) {
      alert("Please Login to Add GIFs to Favourites")
    }
    else {
      addToFavouritesApi(original)
        .then((data) => {
          alert("added")
        });
    }
  }

  const [searchTerm, setSearchTerm] = useState("")
  const passSearchValue = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <Router>
        <Container style={{ width: "100vw" }} disableGutters>
          {
            (!matchLogin) && (!matchReg) &&
            <Header passSearchValue={passSearchValue} />
          }

          <Switch>

            <Route path="/login" component={Login} />
            <Route exact path='/dashboard' render={() => <Dashboard addToFav={addToFav} />} />
            <Route exact path='/' render={() => <Dashboard addToFav={addToFav} />} />
            <Route exact path='/Login' addToFav={addToFav} component={Login} />
            <Route exact path='/Register' addToFav={addToFav} component={Register} />
            <Route exact path='/trending' render={() => <Trending addToFav={addToFav} />} />
            <Route exact path='/entertainment' render={() => <Entertainment addToFav={addToFav} />} />
            <Route exact path='/sports' render={() => <Sports addToFav={addToFav} />} />
            <Route exact path='/reactions' render={() => <Reactions addToFav={addToFav} />} />
            <Route exact path='/technology' render={() => <Technology addToFav={addToFav} />} />
            <Route exact path='/moods' render={() => <Moods addToFav={addToFav} />} />
            <Route exact path='/trending' render={() => <Trending addToFav={addToFav} />} />
            <PrivateRoute path="/favourites" component={Favourites} />
            <PrivateRoute path="/myGifs" component={MyGifs} />
            <Route exact path='/search_results' render={() => <SearchResult mySearchTerm={searchTerm} addToFav={addToFav} />} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;