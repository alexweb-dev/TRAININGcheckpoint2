import React, { useState } from "react";
import HeroesItem from "./HeroesItem"
import "./HeroesList.css"

function HeroesList({ heroesData }) {

  console.log(heroesData);
  // Step 2 : get heroes data from props and map it to generate HeroesItem

  // Step 6 : add filters input for filter heroes by name
  const [searchBar, setSearchBar] = useState("");
  const [filterHeroes, setFilterHeroes] = useState(heroesData);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchBar(value);

    const filtered = heroesData.filter((hero) =>
    hero.name.toLowerCase().includes(value.toLowerCase())
  );
  setFilterHeroes(filtered);
};

  return (
    <>
      <h2>These are the most powerfull</h2>
      <br />
      <div>
        <label htmlFor="search" className="italic-label">"Who are you looking for?"</label>
        <br />
        <input
          type="text"
          id="search"
          value={searchBar}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="hero-list">
        {filterHeroes.map((hero) => (
        <li key={hero.id}><HeroesItem hero={hero} /></li>
        ))}
      </ul>
    </>
  )
}


export default HeroesList;
