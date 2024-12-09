
export const SeriesCard = (props)=>{
  console.log(props);
  return(
          
    <li>
      <div>
        <img src={props.curEle.img_url} alt={props.curEle.name} width="20%" height="30%"/>
      </div>
      <h3>Name:{props.curEle.name}</h3>
      <h5>Rating:{props.curEle.rating}</h5>
      <p>{props.curEle.description}</p>
      <p>Genere:{props.curEle.genre}</p>
      <a href={props.curEle.watch_url} target="_blank"><button>Watch Now</button></a>
      <hr />
      </li>
      
    
    );
}