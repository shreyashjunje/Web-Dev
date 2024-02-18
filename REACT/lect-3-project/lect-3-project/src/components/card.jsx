

function Card({data}){
    return (
        <div>
            <img src={data.image} alt="" />;
            <p>{data.price}</p>;
            <h2>{data.name}</h2>;
            <p>{data.info}</p>;
            
        </div>
    )
}

export default Card;