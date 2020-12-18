import apiConfig from '../src/api';

const getPosts = () => {
    return fetch(`${apiConfig.apiUrl}/all`).then(res => res.json());
};

export {
    getPosts
};
