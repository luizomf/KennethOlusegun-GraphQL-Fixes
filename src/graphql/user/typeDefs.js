import { gql } from 'apollo-server-core';

export const userTypeDefs = gql `
  extend type Query {
    user: String
    users: [User!]!
  }
`;

type User = {
    id: Id!
        firstName: String!
        lastName: String!
        username: String!
        indexRef: Int!
        createdAt: String!
        //  posts: [Post!] !
}