function HeroesItem( { hero }) {

  // Step 3 : get Heroe data from props and display them

  return (
    <>
      <p>{hero.name}</p>
      {hero.images.xs && <img src={hero.images.xs} alt={hero.name} />}
      <p>{hero.biography.alignment}</p>
    </>
  )
}

export default HeroesItem;
