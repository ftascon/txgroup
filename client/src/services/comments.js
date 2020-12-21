import {settings} from "../config/settings";

const getComments = async () => {
    return await fetch(`${settings.api_url}/comments`, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
};

const getCommentsByPostId = async (postId) => {
    return await fetch(`${settings.api_url}/posts/${postId}/comments`, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
};

export {
    getComments,
    getCommentsByPostId
};
