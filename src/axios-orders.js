import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8f81b.firebaseio.com/'
})

export default instance;