import fetch from 'node-fetch'
'

const users = async(_, __, { fetch }) => {
    const externalUsers = await fetch('http://localhost:3000/users')
    return externalUsers.json()
};

const user = async(_, __, { fetch }) => {
    const externalUsers = await fetch('http://localhost:3000/users/602')
    return externalUsers.json()
};

export const userResolvers = {
    Query: {
        user,
        users,
    };
};