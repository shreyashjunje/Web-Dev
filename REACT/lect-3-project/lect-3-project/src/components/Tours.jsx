import Card from "./card.jsx";

function Tours({ tours, removeTour }) {
  return (
    <div className="tours-container">
      <div>
        <h1 className="title">Plan with shreyash</h1>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
