import React, { FC, ReactElement, useEffect, useState } from 'react';
import { CatInterface } from '../../Interfaces/Cats';
import Loader from '../loader';
import Cat from './Cat';
import styled from "styled-components";

const StyledCats = styled.div`
    .cats-grid {
        display: flex;
        flex-wrap: wrap;
        .item {
            padding: 15px;
            width: calc(100% / 4 - 45px);
        }
    }
    button {
        background: green;
        padding: 10px 15px;
        color:white;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
    }
`

const Cats = (props: any) => {

    const { cats, addLimit } = props;


    return (
        <StyledCats>
            <div className="cats-grid">
                {
                    cats.length ? (
                        cats.map((item: CatInterface, key: any) => {
                            return (
                                <Cat cat={item} key={key} />
                            )
                        })
                    ) : <Loader />
                }
            </div>
            <button onClick={addLimit}>Load More</button>
        </StyledCats>
    )
}



export default Cats;