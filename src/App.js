import React from 'react';
import getDataFromApi from './service/Api';
import { useState, useEffect } from 'react';
import logo from './images/logo.png';
const App = () => {
  let [items, setItems] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => {
      console.log(data);
      setItems(data);
    });
  }, []);

  return (
    <>
      <header>
        <img className='logo' src={logo} alt='logo' title='Logo de Rick y Morty'></img>
      </header>
      <main>
        <form>
          <label for='search'></label>
          <input type='text' name='search'></input>
        </form>
        <ul className='list'>
          {items.map((item) => (
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
