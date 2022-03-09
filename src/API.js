import axios from 'axios';

const fetch = async () => axios.get('https://dog.ceo/api/breeds/image/random');

export default fetch;
