import dataSeries from "../api/dataSeries.json"
import { SeriesCard } from "./SeriesCard";
export const NetFLixCard = ()=>{
 
  return(
    <ul>
      {dataSeries.map((curEle)=> <SeriesCard  key={curEle.id} data={curEle}/>
      )}
      
    </ul>
  );
}