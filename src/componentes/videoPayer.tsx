// componentes/VideoPlayer.tsx
import styles from './videoPlayer.module.css';

type VideoPlayerProps = {
  url: string;
  onClose: () => void;
};

export function VideoPlayer({ url, onClose }: VideoPlayerProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ❌ Cerrar
        </button>
        <video src={url} controls autoPlay className={styles.video}></video>
      </div>
    </div>
  );
}
