import { useNavigate } from "react-router-dom";
import "./HeroesItem.css"

function HeroesItem({ hero }) {
  const navigate = useNavigate();

  // Step 3 : get Heroe data from props and display them
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const formattedAlignment = capitalizeFirstLetter(hero.biography.alignment);
  console.log(formattedAlignment);
  let alignmentClass = "";
  if (formattedAlignment == "Good") {
    alignmentClass = "goodAlignment";
  } else if (formattedAlignment === "Bad") {
    alignmentClass = "badAlignment";
  } else if (formattedAlignment === "-" || formattedAlignment === "Neutral") {
    alignmentClass = "neutralAlignment";
  }
  return (
    <>
      <p className="names">{hero.name}</p>
      <a onClick={() => navigate(`/heroes/${hero.id}`)}>
        {hero.images.md && <img src={hero.images.md} alt={hero.name} />}
      </a>
      <p className={`${alignmentClass}`}>{formattedAlignment}</p>
    </>
  );
}

export default HeroesItem;
