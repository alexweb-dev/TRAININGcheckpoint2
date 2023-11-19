import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function HeroesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setHeroData(data);
        });
    }
  }, [id]);

  const handleBackToList = () => {
    navigate("/heroes/1");
  };

  return (
    <main>
      {heroData && (
        <div>
          <h1>{heroData.name}</h1>
          <p>Intelligence: {heroData.powerstats.intelligence}</p>
          <p>Strength: {heroData.powerstats.strength}</p>
          <p>Speed: {heroData.powerstats.speed}</p>
          <p>Durability: {heroData.powerstats.durability}</p>
          <p>Power: {heroData.powerstats.power}</p>
          <p>Combat: {heroData.powerstats.combat}</p>
        </div>
      )}
      <button onClick={handleBackToList}>Back to the list</button>
    </main>
  );
}

export default HeroesDetail;
