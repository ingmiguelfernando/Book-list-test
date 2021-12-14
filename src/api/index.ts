import axios from 'axios';

const url = "https://api.itbook.store/1.0";
export const getBooks = async () => axios.get(`${url}/new`);