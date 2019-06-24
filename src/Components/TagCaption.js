import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const Tag = styled.span`    
    text-decoration:underline;
    color: blue;
`


export default withRouter(({ caption }) => {
    const arr = [];
    const tmp = caption.split(" ");
    tmp.forEach(x => {
        if (x.includes("#")) {
            let tmp2 = x.split("#");
            if (tmp2[0].charAt(0) !== "") {
                arr.push(" ".concat(tmp2[0]));
                tmp2[0] = "";
            }
            tmp2.forEach(y => {
                if (y !== "") {
                    arr.push("#".concat(y));
                }
            });
        } else {
            arr.push(" ".concat(x.concat(" ")));
        }
    });
    return arr.map(
        (x, i) => (x.charAt(0) === "#" 
        ? 
            <Link key={i} to= {"/tag/"+ x.slice(1) }><Tag key={i}>{x}</Tag></Link>
        : <span key={i}>{x}</span>)
    );

});