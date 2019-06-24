import React from "react";
import  withRouter  from "react-router-dom/withRouter";
import TagPresenter from "./TagPresenter";
import { useQuery } from "react-apollo-hooks";
import { TAG } from "./TagQueries";
import gql from "graphql-tag";
import PropTypes from "prop-types"

const GET_TAG_POST = gql`
  query searchPostWithTag($tag: String!){
    searchPostWithTag(tag: $tag){
      id
      user
      files{
        url
      }
      createAt
      likeCount
    }
  }
`
export default withRouter(({ match: { params: { tagname } } }) => {
  const { tag, data, loading } = useQuery(GET_TAG_POST, {variable:{tagname} });
  withRouter.propTypes ={
    tag: PropTypes.string,
    loading: PropTypes.string,
  }
  return <TagPresenter tag= {tag}loading={loading} data={data} />;
});
