import React from "react";
import  withRouter  from "react-router-dom/withRouter";
import TagPresenter from "./TagPresenter";
import { useQuery } from "react-apollo-hooks";
import { TAG } from "./TagQueries";
import gql from "graphql-tag";
import PropTypes from "prop-types"

export default withRouter(({ match: { params: { tag } } }) => {
  withRouter.propTypes ={
    tag: PropTypes.string
    }
  return <TagPresenter tag= {tag} />;
});
