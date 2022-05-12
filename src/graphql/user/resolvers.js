const users: () => {
    return [{
            id: '1',
            username: 'Kenneth 1'
        },
        {
            id: '2',
            username: 'Kenneth 2'
        },
        {
            id: '3'.
            username: 'Kenneth 3'
        },
    ];
};

const user: () => {
    return {
        id: '1'
        username: 'Luiz'
    };
};

export const userResolvers = {
    Query: {
        user,
        users,
    };
};