//return only one element if multi elements enclose it in one tag (div) for non closing tags like img tag enclose it in div tag

export const App = ()=>{
  return (
    <div>
      <NetFLixCard/>
      <NetFLixCard/>
      <NetFLixCard/>
      <NetFLixCard/>
      <NetFLixCard/>

    </div>
  )
};
//for img images are stored in public folder and can be directly accesed by name
//Below is componet
//component is function which returns jsx element
const NetFLixCard = ()=>{
  return(
    <div>
      <div>
      <img src="img1.jpg" alt="" width="20%" height="30%"/>
      </div>
      <h3>Name:Outsider</h3>
      <h5>Rating:9</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus tempora eveniet eligendi! Adipisci, veritatis.</p>
    </div>
  )
}