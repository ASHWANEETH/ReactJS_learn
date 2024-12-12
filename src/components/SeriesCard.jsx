import styles from "../components/SeriesCard.module.css";
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
    <div className={styles.card}>

    <li className={styles["card-cont"]}>
 
      <div>
        <img src={img_url} alt={name} className={styles.cardImg}/>
      </div>
      <div className={styles["li-text"]}>
      <h3>Name:{name}</h3>
      <h5><span className={`${styles.rating}  ${rating>=8 ? styles.Good:styles.Avg}`}>Rating:{rating}</span></h5>
      <p>{description}</p>
      <p>Genere:{genre}</p>
      <a href={watch_url} target="_blank"><button className={styles.Watch}>Watch Now</button></a>
      {/* <p>{greeting}</p>
      <p>{children}</p> */}
      </div>

      </li>
      </div>
      
    //for Inline CSS style will get objects in {} and attributes in camelCase

    //CSS---------MODULE______________________________
    //filename.module.css import as same, className is given as js objects..
    //for classname like "card-li" which cant be declared by '.' must be given in []
    );
}