//---------------------------React Basic Rules-------------------------------------------
//return only one element if multi elements enclose(wrap) it in one tag (div) for non closing tags like img tag enclose it in div tag

//-----------------------------React Fragments-----------------------
//react fragments <React.Fragments></React.Fragments> or <Fragments></Fragments> or just <></>
//this eliminates the node <div> and makes faster render , helps to return multiple elemnts without extra tag
export const App = ()=>{
  return (
    <>
      <NetFLixCard/>
      <NetFLixCard/>
      <NetFLixCard/>
      <NetFLixCard/>
      <NetFLixCard/>

    </>
  )
};

//---------------------------React Components----------------------------------------
//for img images are stored in public folder and can be directly accesed by name
//Below is componet
//component is function which returns jsx element
const NetFLixCard = ()=>{
  return(
    <>
      <>
      <img src="img1.jpg" alt="" width="20%" height="30%"/>
      </>
      <h3>Name:Outsider</h3>
      <h5>Rating:9</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus tempora eveniet eligendi! Adipisci, veritatis.</p>
    </>
  )
}