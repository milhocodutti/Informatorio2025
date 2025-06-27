import { useRef, useState } from "react";
import styles from "./reproductorVideo.module.css"

type ReproductorVideoProps = {
  url: string;
  onClose: () => void;
};

export default function ReproductorVideo({ url, onClose }: ReproductorVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [sliderValue, setSliderValue] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleReplay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    };

    const handleStop = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reinicia el video al inicio
        }
    };

    const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setSliderValue(newValue);
        if (videoRef.current) {
            videoRef.current.currentTime = newValue;
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setSliderValue(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setVideoDuration(videoRef.current.duration);
        }
    };

    const handleFullScreen = () => {
    if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) { // Safari
            (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).mozRequestFullScreen) { // Firefox
            (videoRef.current as any).mozRequestFullScreen();
        } else if ((videoRef.current as any).msRequestFullscreen) { // IE/Edge
            (videoRef.current as any).msRequestFullscreen();
        }
    };
    };

    // Función para mutear/desmutear
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  // Función para subir el volumen
  const handleVolumeUp = () => {
    if (videoRef.current) {
      videoRef.current.volume = Math.min(videoRef.current.volume + 0.1, 1); // Máximo 1
    }
  };

  // Función para bajar el volumen
  const handleVolumeDown = () => {
    if (videoRef.current) {
      videoRef.current.volume = Math.max(videoRef.current.volume - 0.1, 0); // Mínimo 0
    }
  };



    return (
        <div
        className={styles.reproductor}
        >
            
            <div className={styles.botonera}>
            <input
                className={styles.slider}
                type="range"
                value={sliderValue}
                onChange={handleSlider}
                min={0}
                max={videoDuration || 100} // Asegura un valor predeterminado
                step="0.1" // Define la precisión del slider
            />
            
            <button onClick={handlePlay}>Reproducir</button>
            <button onClick={handlePause}>Pausa</button>
            <button onClick={handleReplay}>Reiniciar</button>
            <button onClick={handleStop}>Detener</button>
            <button onClick={handleMuteToggle}>{videoRef.current?.muted ? "Desmutear" : "Mutear"}</button>
            <button onClick={handleVolumeUp}>Subir Volumen</button>
            <button onClick={handleVolumeDown}>Bajar Volumen</button>
            <button onClick={handleFullScreen}>Pantalla Completa</button>
            <button onClick={onClose}>Cerrar Reproductor</button>
            </div>

            <video
                autoPlay
                src={url}
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className={styles.video}
            >
            </video>
        </div>
    );
}

