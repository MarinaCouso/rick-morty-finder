import React from 'react';
import getDataFromApi from './service/Api';
const App = () => {
  getDataFromApi().then((data) => console.log(data));
  return (
    <>
      <img src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='logo' title='Logo de Rick y Morty'></img>
      <ul></ul>
    </>
  );
};
export default App;
