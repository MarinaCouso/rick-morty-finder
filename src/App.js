import React from 'react';
import getDataFromApi from './service/Api';
import { useState, useEffect } from 'react';
import logo from './info/logo.png';
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
      <img className='logo' src={logo} alt='logo' title='Logo de Rick y Morty'></img>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} title={`picture of ${item.name}`}></img>
            <h2>{item.name}</h2>
            <p>{item.specie}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
