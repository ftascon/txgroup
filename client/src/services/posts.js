import {settings} from "../config/settings";

const getPosts = async () => {
    return await fetch(`${settings.api_url}/posts`, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
};

const getPostById = async (id) => {
    return await fetch(`${settings.api_url}/posts/${id}`, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
};

export {
    getPosts,
    getPostById
};
