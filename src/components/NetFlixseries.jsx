import dataSeries from "../api/dataSeries.json"

export const NetFLixCard = ()=>{
 
  return(
    <ul>
      {dataSeries.map((curEle)=> {
        return(
          <>
          <li key={curEle.id}>
            <div>
              <img src={curEle.img_url} alt={curEle.name} width="20%" height="30%"/>
            </div>
            <h3>Name:{curEle.name}</h3>
            <h5>Rating:{curEle.rating}</h5>
            <p>{curEle.description}</p>
            <p>Genere:{curEle.genre}</p>
            <a href={curEle.watch_url}><button>Watch Now</button></a>
            </li>
            <hr />
          </>
          );
      })}
      
    </ul>
  );
}