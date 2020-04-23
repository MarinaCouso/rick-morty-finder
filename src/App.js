import React from 'react';
import getDataFromApi from './service/Api';
import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Filter from './components/Filter';
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
        <ul className='list'>
          {filteredItems.map((item) => (
            <li className='item' key={item.id}>
              <img className='item__img' src={item.image} alt={item.name} title={`picture of ${item.name}`}></img>
              <div className='item__text'>
                <h2 className='item__name'>{item.name}</h2>
                <p className='item__attribute'>{item.specie}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
export default App;
