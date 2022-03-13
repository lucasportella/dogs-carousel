import axios from 'axios';

const fetchInitialDogs = async () => axios.get('https://dog.ceo/api/breeds/image/random/3');

const fetchMoreDogs = async () => axios.get('https://dog.ceo/api/breeds/image/random');

export { fetchInitialDogs, fetchMoreDogs };
