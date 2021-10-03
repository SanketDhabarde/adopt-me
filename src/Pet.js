import { Link } from "react-router-dom"; //eslint-disable-line

const Pet = ({ name, animal, breed, location, images, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparant pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
