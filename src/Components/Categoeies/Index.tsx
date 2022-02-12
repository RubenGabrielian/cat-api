import React, { useEffect, useState } from "react";
import { Category } from "../../Interfaces/Categories";
import Cat from "../Cats/Cat";
import Loader from "../loader";
import CategoryItem from "./Category";

const Categories = (props: any) => {

    const {changeCategory} = props;

    const [categories, SetCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/categories")
            .then(res => res.json())
            .then(result => SetCategories(result));
    }, []);

  
   

    return (
        <div>
            <h4>Categories</h4>
            {
                categories.length ? (
                    categories.map((item:Category, key) => <CategoryItem changeCategory={changeCategory} key={key} item={item} /> )
                ) : <Loader />

            }
        </div>
    );
}


export default Categories;