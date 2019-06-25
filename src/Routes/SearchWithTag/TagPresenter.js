import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
    padding:15px;
    display : felx;
`
const TagPresenter =({ tag, loading , data}) =>{
    console.log(tag);
    console.log(data);
    return data.map(x => (
        <p key = {x.id}> {data}</p>
    ))
    }
TagPresenter.propTypes ={
    searchTerm:PropTypes.string,
    loading:PropTypes.bool
}

export default TagPresenter;