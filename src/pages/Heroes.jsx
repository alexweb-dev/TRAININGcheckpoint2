import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import HeroesList from "../components/HeroesList";


function Heroes() {
  const heroesData = useLoaderData();
  // Step 1 : Get Heroes data from loader
  useEffect(() => {
    console.log(heroesData);
  }, [heroesData]);

  return (
    <main>
      <HeroesList heroesData={heroesData} />
    </main>
  );
}

export const HeroesLoader = async () => {
  const heroes = await fetch(
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  const data = await heroes.json();
  return data;
};
export default Heroes;
