import React from 'react';
import getDataFromApi from './service/Api';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './images/logo.png';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Error from './components/Error';

const App = () => {
  let [items, setItems] = useState([]);
  let [search, setSearch] = useState('');
  useEffect(() => {
    getDataFromApi().then((data) => {
      setItems(data);
    });
  }, []);

  const handleFilter = (value) => {
    setSearch(value);
  };

  let filterItems = items.filter((i) => {
    return i.name.toUpperCase().includes(search.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = items.find((i) => i.id.toString() === characterId);
    if (foundCharacter === undefined) {
      return <Error search={search} />;
    } else if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  return (
    <>
      <header>
        <img className='logo' src={logo} alt='logo' title='Logo de Rick y Morty'></img>
      </header>
      <main>
        <Switch>
          <Route path='/character/:id' render={renderCharacterDetail}></Route>
          <Route exact path='/'>
            <Filter handleFilter={handleFilter} search={search} />
            <CharacterList filterItems={filterItems} />
          </Route>
        </Switch>
      </main>
    </>
  );
};
export default App;
