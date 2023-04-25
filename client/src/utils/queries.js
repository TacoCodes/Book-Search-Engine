import gql from 'graphql-tag';

export const GET_ME = gql`
  query users($username: String) {
    users(username: $username) {
      _id
      username
      email
      savedBooks {
          bookId
          description
          title
          image
          link
      }
    }
  }
`;