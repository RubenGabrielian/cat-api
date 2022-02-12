import React, { useState, useEffect } from "react";
import './App.css';
import Categories from './Components/Categoeies/Index';
import Cats from './Components/Cats';
import Header from "./Components/Header/Index";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {

  const [cats, SetCats] = useState([]);
  const [limit, setLimit] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState<string | number>('');

  const addLimit = () => {
    setLimit(limit + 10);
  }

  const changeCategory = (id: number) => {
    setSelectedCategory(id);
  }


  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${selectedCategory}`)
      .then(res => res.json())
      .then(result => SetCats(result))
  }, [limit, selectedCategory]);

  return (
    <>
      <Header />
      <Layout>
        <Cats cats={cats} addLimit={addLimit} />
        <Categories changeCategory={changeCategory} />
      </Layout>
    </>
  );
}

export default App;
