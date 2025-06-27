// componentes/card.tsx
import styles from './card.module.css';

type CardProps = {
  idCard?: string;
  src?: string;
  titulo: string;
  descripcion?: string;
  año?: number;
  likes?: number;
  director?: string;
  genero?: string;
  url?: string;
  onPlayVideo: (url: string) => void; // Nueva prop para manejar reproducción
};

function Card(props: CardProps) {
  const { idCard, src, titulo, descripcion, director, año, likes = 0, url, onPlayVideo } = props;

  return (
    <article className={styles.card} id={idCard} style={{ backgroundImage: `url(${src})`}}>
      <img className={styles.hide} src={src} alt={titulo} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.hide}>{descripcion}</p>
      <button className={styles.ver} onClick={() => url && onPlayVideo(url)}>
        Ver Ahora
      </button>
      <h5 className={styles.hide}>{año}</h5>
      {likes > 0 ? (
        <p className={styles.hide}>👍 {likes}</p>
      ) : (
        <p className={styles.hide}>Director: {director}</p>
      )}
    </article>
  );
}

export default Card;
