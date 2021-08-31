import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';
import NotFound from './components/NotFound';
import { MyPokeListProvider } from './context/MyPokemonListContext';
import './assets/App.css';
import './assets/animate.css';

const App = () => {
  return (

    <Router>
      <MyPokeListProvider>
        <Navigation />
        <Switch>
          <Route path='/pokepedia-app/pokemon/:name' exact component={ PokemonDetail }></Route>
          <Route path='/pokepedia-app/my-pokemon-list' exact component={ MyPokemonList }></Route>
          <Route path='/pokepedia-app/' exact component={ Home }></Route>
          <Route component={ NotFound }></Route>
        </Switch>
      </MyPokeListProvider>
    </Router>
    
  );
}

export default App;
