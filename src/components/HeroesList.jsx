function HeroesList({ heroesData }) {

  console.log(heroesData);
  // Step 2 : get heroes data from props and map it to generate HeroesItem

  // Step 6 : add filters input for filter heroes by name

  return (
    <>
      <h1>The Most powerfull heroes:</h1>
      <ul>
        {heroesData.map((hero) => (
        <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </>
  )
}

export default HeroesList;
