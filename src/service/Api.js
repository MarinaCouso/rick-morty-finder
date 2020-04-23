const getDataFromApi = async () => {
  const response = await fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json');
  const data = await response.json();
  return data.results.map((item) => (item = { id: item.id, name: item.name, image: item.image, specie: item.species, status: item.status, origin: item.origin.name, episodes: item.episode.length }));
};

export default getDataFromApi;
