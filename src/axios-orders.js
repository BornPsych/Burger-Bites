import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d1fc3-default-rtdb.firebaseio.com/'
});

export default instance;