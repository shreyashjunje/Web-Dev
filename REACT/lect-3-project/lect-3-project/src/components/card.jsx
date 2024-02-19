import { useState } from "react";

function Card({ id, image, price, name, info, removeTour }) {
  const [Readmore, setReadmore] = useState(false);

  const description = Readmore ? info : `${info.substring(0, 200)}....`;

  let readmorehandler = () => {
    setReadmore(!Readmore);
  };

  return (
    <div className="card">
      <img src={image} alt="" className="card-image" />

      <div className="card-detail">
        <h4> ${price}</h4>
        <h2>{name}</h2>
      </div>

      <div className="card-description">
        {description}
        <span onClick={readmorehandler}>
          {Readmore ? "Show less" : "Read more"}
        </span>
      </div>

      <button
        className="btn-not-interested"
        onClick={() => {
          removeTour(id);
        }}
      >
        {" "}
        Not interested{" "}
      </button>
    </div>
  );
}

export default Card;
