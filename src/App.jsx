//---------------------------React Basic Rules-------------------------------------------
//return only one element if multi elements enclose(wrap) it in one tag (div) for non closing tags like img tag enclose it in div tag
//React never renders false,null,undefined,NaN values

//-----------------------------React Fragments-----------------------
//react fragments <React.Fragments></React.Fragments> or <Fragments></Fragments> or just <></>
//this eliminates the node <div> and makes faster render , helps to return multiple elemnts without extra tag

//---------------------------React Components----------------------------------------
//for img images are stored in public folder and can be directly accesed by name
//component is function which returns jsx element

//---------------------------JS in Html-----------Dynamic Values,Conditional Values
//by giving {} js can be written in tags , variabes, expressions and function call can be done in that.. that return a value

//--------------------------Import and Export-------------------------------------
//Default Export and Import:export a single component with ease. !! only single default export for one file
//------export default component_name------cant be imported in { } and can use any name while importing

// Named Export and Import: export multiple components using named exports.
//------export const component_name = ()=>{} ------must be imported in { } and must use same name while importing

// Combined Export and Import: combine default and named exports in a single file for more efficient code management.
//-----Use both exports one default and many named------for import--- import default,{named_1,named_n...} from ".."
import { NetFLixCard } from "./components/NetFlixseries";
import "./App.css"

export const App = ()=>{
  return (
    <>
    <h2 className="title">Best Netflix Series</h2>
    <div className="container">
      <NetFLixCard/>
    </div>
      </>
  )
};


