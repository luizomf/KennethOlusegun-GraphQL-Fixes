import { ApolloServer, gql } from 'apollo-server';

// eslint-disable-next-line prettier/prettier
const server = new ApolloServer({
            typeDefs: gql `
			type Query {
				id: ID!
                name: String!
                age: Int!
                average: Float!
                married: Boolean!
                arrayString: [String]

			}
		`,
            resolvers: {
                Query: {
                    id: () => '1asd987-9-a',
                    name: () => 'Kenneth',
                    age: () => 24,
                    average: () => 50.54,
                    married: () => false,
                    arrayString: () => ['A', 'B'],
                });

            server.listen(4003).then(({ url }) => {
                console.log(`Server listening on url ${url}`);
            });
