import fetch from "node-fetch"


export const context = () => {
    return {
        getUsers: (path = '/') => {
            return {
                getUsers: (path = '/') => fetch(process.env.API_URL + '/users' + path),
                getPosts: (path = '/') => fetch(process.env.API_URL + '/posts' + path),
            }
        },
    };
};