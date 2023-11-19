import React, { useState } from "react";
import HeroesItem from "./HeroesItem"

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
      <h1>The Most powerfull heroes:</h1>
      <div>
        <label htmlFor="search">Who are you looking for?</label>
        <input
          type="text"
          id="search"
          value={searchBar}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filterHeroes.map((hero) => (
        <li key={hero.id}><HeroesItem hero={hero} /></li>
        ))}
      </ul>
    </>
  )
}

export default HeroesList;
