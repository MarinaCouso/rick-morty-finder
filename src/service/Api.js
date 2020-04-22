const getDataFromApi = () => {
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results.map((item) => (item = { id: item.id, name: item.name, image: item.image, specie: item.species }));
    });
};

export default getDataFromApi;
