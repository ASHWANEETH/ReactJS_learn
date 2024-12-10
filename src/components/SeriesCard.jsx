
export const SeriesCard = ({data})=>{
  // console.log(props);
  const {name,
    img_url,
    rating,
    description,
    cast,
    genre,
    watch_url} = data;

  return(
          
    <li>
      <div>
        <img src={img_url} alt={name} width="20%" height="30%"/>
      </div>
      <h3>Name:{name}</h3>
      <h5>Rating:{rating}</h5>
      <p>{description}</p>
      <p>Genere:{genre}</p>
      <a href={watch_url} target="_blank"><button>Watch Now</button></a>
      <hr />
      </li>
      
    
    );
}