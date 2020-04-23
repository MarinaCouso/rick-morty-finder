import React from 'react';
import getDataFromApi from './service/Api';
import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';

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

  let filteredItems = items.filter((i) => {
    return i.name.toUpperCase().includes(search.toUpperCase());
  });

  return (
    <>
      <header>
        <img className='logo' src={logo} alt='logo' title='Logo de Rick y Morty'></img>
      </header>
      <main>
        <Filter handleFilter={handleFilter} />
        <CharacterList filteredItems={filteredItems} />
      </main>
    </>
  );
};
export default App;
