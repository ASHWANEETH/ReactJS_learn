import dataSeries from "../../api/dataSeries.json"
import { SeriesCard } from "./SeriesCard";
export const NetFLixCard = ()=>{
 
  return(
    <ul className="grid grid3">
      {dataSeries.map((curEle)=> <SeriesCard  
      key={curEle.id} 
      data={curEle} 

      // greeting={<div>
      //   <h5>Hii JSX is given as props</h5>
      // </div>}
      
      >

      {/* <p>This can be accessed by using children keyword</p> */}
      </SeriesCard>
      )}
      
    </ul>
  );
}