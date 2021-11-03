import React from "react";
import FilterBar from "./FilterBar";
import InputForm from "./InputForm";
import List from "./List"

const Home = () => {
    return (
        <article className="home">
            <InputForm />
            <List />
            <FilterBar />
        </article>
    )
}

export default Home 