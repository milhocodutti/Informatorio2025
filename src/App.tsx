// App.tsx
import './App.css';
import Card from './componentes/card.tsx';
import ContainerCard from './componentes/containerCard.tsx';
import Nav from './componentes/nav.tsx';
import { response } from './componentes/dataBase';
import { useState } from 'react';
import { useVideoPlayer } from './componentes/useVideoPlayer.tsx';
import { VideoPlayer } from './componentes/videoPayer.tsx';

function App() {
  const [filteredResults, setFilteredResults] = useState(response.categoria);
  const { currentVideo, playVideo, stopVideo } = useVideoPlayer();

  return (
    <div>
      <Nav onResultsChange={setFilteredResults} />
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
               onPlayVideo={playVideo}
            />
          ))}
        </ContainerCard>
      ))}
      {currentVideo && <VideoPlayer url={currentVideo} onClose={stopVideo} />}
    </div>
  );
}

export default App;
