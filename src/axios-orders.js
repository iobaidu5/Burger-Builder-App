import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burgerapp-3bc4d-default-rtdb.firebaseio.com/"
});

export default instance;