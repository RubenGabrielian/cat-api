import React from "react";
import { Category } from "../../Interfaces/Categories";
import styled from "styled-components";

const StyledCat = styled.div`
    img {
        width: 100%;
        height: 350px;
        object-fit: cover;
    }
`

const Cat = (props: any) => {

    const {cat} = props;

   return (
       <StyledCat className="item">
           <img src={cat.url} />
       </StyledCat>
   )
}


export default Cat;