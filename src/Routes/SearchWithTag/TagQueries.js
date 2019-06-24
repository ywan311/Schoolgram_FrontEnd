import {gql} from "apollo-boost";

export const TAG = gql`
  query Tag($tag: String!) {
    searchPostWithTag(tag: $tag) {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
  }
`;