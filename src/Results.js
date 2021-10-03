import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 grig-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
