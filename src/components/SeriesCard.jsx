import styles from "../components/SeriesCard.module.css";

import styled from "styled-components";
export const SeriesCard = ({data,
  // greeting,children
  })=>{
  
  const {name,
    img_url,
    rating,
    description,
    genre,
    watch_url} = data;

  // Styled-components

  // const WatchBtn = styled.button(){}
  //-----OR----
  // pure css must be added in `...`
  // for conditional styling u can pass props and recieve as a function
  const WatchBtn = styled.button`
    padding: 2px;
    color: rgb(255, 255, 255);
    background-color: ${(props)=>props.color};
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover{
    background-color: rgb(83, 72, 72);
    transform: scale(1.2);
    }
  `

  return(
    <div className={styles.card}>

    <li className={styles["card-cont"]}>
    {/* //for classname like "card-cont" which cant be declared by '.' must be given in [] */}
 
      <div>
        <img src={img_url} alt={name} className={styles.cardImg}/>
      </div>

      <div className={styles["li-text"]}>
        <h3>Name:{name}</h3>
        <h5><span className={`${styles.rating}  ${rating>=8 ? styles.Good:styles.Avg}`}>Rating:{rating}</span></h5>
        <p>{description}</p>
        <p>Genere:{genre}</p>
        <a href={watch_url} target="_blank">
          <WatchBtn color={"black"} >Watch Now</WatchBtn>
        </a>
      
        {/* <p>{greeting}</p>
        <p>{children}</p> */}

      </div>

    </li>
    </div>
      
   
    );
}



//++++++++++++++++++++++++++++++++NOTES+++++++++++++++++++++++
 
    //for Inline CSS style will get objects in {} and attributes in camelCase

  // CSS Module
    //filename.module.css import as same, className is given as js objects..
    //for classname like "card-li" which cant be declared by '.' must be given in []
    //gives className that generates uniquely (internally)

  // Styled-components
    // const WatchBtn = styled.button(){}
    //-----OR----
    // pure css must be added in `...`
    // for conditional styling u can pass props and recieve as a function