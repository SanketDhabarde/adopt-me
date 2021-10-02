import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      ) : (
        <h2>No pets found</h2>
      )}
    </div>
  );
};

export default Results;
