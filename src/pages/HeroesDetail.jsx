import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./HeroesDetail.css";

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
    navigate("/");
  };

  return (
    <main>
      {heroData && (
        <div>
          <h1 className="names">{heroData.name}</h1>
          <a onClick={() => navigate(`/heroes/${hero.id}`)}>
            {heroData.images.xs && <img src={heroData.images.xs} alt={heroData.name} />}
          </a>
          <p className="intelligence">
            Intelligence:{" "}
            <span
              className={`colored-stat ${
                heroData.powerstats.intelligence < 20
                  ? "low-value"
                  : heroData.powerstats.intelligence > 80
                  ? "high-value"
                  : "medium-value"
              }`}
            >
              {heroData.powerstats.intelligence}
            </span>
          </p>
          <p className="strength">
            Strength:{" "}
            <span
              className={`colored-stat ${
                heroData.powerstats.strength < 20
                  ? "low-value"
                  : heroData.powerstats.strength > 80
                  ? "high-value"
                  : "medium-value"
              }`}
            >
              {heroData.powerstats.strength}
            </span>
          </p>
          <p className="durability">
            Durability:{" "}
            <span
              className={`colored-stat ${
                heroData.powerstats.durability < 20
                  ? "low-value"
                  : heroData.powerstats.durability > 80
                  ? "high-value"
                  : "medium-value"
              }`}
            >
              {heroData.powerstats.durability}
            </span>
          </p>
          <p className="power">
            Power:{" "}
            <span
              className={`colored-stat ${
                heroData.powerstats.power < 20
                  ? "low-value"
                  : heroData.powerstats.power > 80
                  ? "high-value"
                  : "medium-value"
              }`}
            >
              {heroData.powerstats.power}
            </span>
          </p>
          <p className="combat">
            Combat:{" "}
            <span
              className={`colored-stat ${
                heroData.powerstats.combat < 20
                  ? "low-value"
                  : heroData.powerstats.combat > 80
                  ? "high-value"
                  : "medium-value"
              }`}
            >
              {heroData.powerstats.combat}
            </span>
          </p>
        </div>
      )}
      <button onClick={handleBackToList}>Back to the list</button>
    </main>
  );
}

export const HeroesDetailLoader = async () => {
  const heroes = await fetch(
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  const data = await heroes.json();
  return data;
};

export default HeroesDetail;
