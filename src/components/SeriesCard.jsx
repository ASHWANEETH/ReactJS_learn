import "../components/SeriesCard.css";
export const SeriesCard = ({data,
  // greeting,children
  })=>{
  
  const {name,
    img_url,
    rating,
    description,
    genre,
    watch_url} = data;

  return(
    <div className="card">

    <li className="card-cont">
 
      <div>
        <img src={img_url} alt={name} className="cardImg"/>
      </div>
      <div className="li-text">
      <h3>Name:{name}</h3>
      <h5><span className={`rating  ${rating>=8 ? "Good":"Avg"}`}>Rating:{rating}</span></h5>
      <p>{description}</p>
      <p>Genere:{genre}</p>
      <a href={watch_url} target="_blank"><button className="Watch">Watch Now</button></a>
      {/* <p>{greeting}</p>
      <p>{children}</p> */}
      </div>

      </li>
      </div>
      
    //for Inline CSS style will get objects in {} and attributes in camelCase
    );
}