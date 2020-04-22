const getDataFromApi = () => {
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return { id: data.results };
    });
};

export default getDataFromApi;
