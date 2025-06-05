import styles from './card.module.css'



type CardProps = {
  idCard?: string;
  src?: string;
  titulo: string;
  descripcion?: string;
  año?: number;
  likes?: number;
  director?: string;
  genero?: string;
}



function Card(props: CardProps){
  const  {idCard, src, titulo, descripcion, director, año, likes = 0} = props;
  return(
    <article className={styles.card} id={idCard}>
      <img className={styles.imagen} src={src} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <p>{descripcion}</p>
      <h5>{año}</h5>
      {likes > 0 ? (
  <p className={styles.likes}>Le ha gustado a {likes} personas</p>
) : (
  <p className={styles.likes}>Director : {director}</p>
)}
    <button className={styles.ver}>Ver Ahora</button>
    </article>
  );
}

export default Card;