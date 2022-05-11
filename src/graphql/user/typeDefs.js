import { gql } from 'apollo-server-core';

export const userTypeDefs = gql `
  type Query {
    user: String
    users: [User!]!
  }
`;

type User {
    id: Id!
        username: String!
}