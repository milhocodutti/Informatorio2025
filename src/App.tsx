import './App.css';
import Card from './componentes/card';
import ContainerCard from './componentes/containerCard';
import Nav from './componentes/nav';
import ReproductorVideo from './componentes/reproductorVideo';
import { response } from './componentes/dataBase';
import { useState, useRef, useEffect } from 'react';
import styles from "./componentes/reproductorVideo.module.css";

function App() {
  const [filteredResults, setFilteredResults] = useState(response.categoria);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const handlePlayVideo = (url: string) => {
    setActiveVideoUrl(url);
  };

  // Este efecto asegura que el scroll ocurra cuando se active un video
  useEffect(() => {
    if (activeVideoUrl && videoContainerRef.current) {
      videoContainerRef.current.style.marginTop = "25px";
      videoContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeVideoUrl]);

  return (
    <div>
      <Nav onResultsChange={setFilteredResults} />

      {activeVideoUrl && (
        <div
          ref={videoContainerRef} // Referencia al contenedor del video
          className={styles.reproductor}
        >
          <ReproductorVideo url={activeVideoUrl} onClose={() => setActiveVideoUrl(null)} />
        </div>
      )}

      {filteredResults.map((categoria) => (
        <ContainerCard
          key={categoria.idCategoria}
          tituloContainer={categoria.tituloCategoria}
          descripcionContainer={categoria.descripcionCategoria}
        >
          {categoria.post.map((post) => (
            <Card
              key={post.id}
              titulo={post.titulo}
              descripcion={post.descripcion}
              src={post.src}
              likes={post.likes}
              director={post.director}
              url={post.url}
              onPlayVideo={handlePlayVideo} // Pasamos la función al Card
            />
          ))}
        </ContainerCard>
      ))}
    </div>
  );
}

export default App;
