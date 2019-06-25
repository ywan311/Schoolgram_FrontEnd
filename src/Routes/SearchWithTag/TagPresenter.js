import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "rl-react-helmet";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../Components/Loader";
import Post from "../../Components/Post";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const GET_TAG_POST = gql`
  query searchPostWithTag($tag: String!){
    searchPostWithTag(tag: $tag){
      id
      location
      caption
      user{
          id
          avartar
          username
      }
      files{
        id
        url
      }
      isLiked
      createAt
      likeCount
      comments{
          id
          text
          user{
              id
              username
          }
      }
    }
  }
`
const TagPresenter =({tag}) =>{
    const {  data, loading } = useQuery(GET_TAG_POST,{
        variables :{tag}
    });
    console.log(data.searchPostWithTag)
    return (
        <Wrapper>
          <Helmet>
            <title>tag</title>
          </Helmet>
          {loading && <Loader />}
          {!loading &&
            data &&
            data.searchPostWithTag&&
            data.searchPostWithTag.map(post => (
              <Post
                key={post.id}
                id={post.id}
                location={post.location}
                caption={post.caption}
                user={post.user}
                files={post.files}
                likeCount={post.likeCount}
                isLiked={post.isLiked}
                comments={post.comments}
                createdAt={post.createdAt}
              />
            ))}
        </Wrapper>
      );
    }

export default TagPresenter;