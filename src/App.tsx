import './App.css'; 
import Card from './componentes/card.tsx';
import ContainerCard from './componentes/containerCard.tsx';
import Nav from './componentes/nav.tsx';
import { response } from './componentes/dataBase';
import { useState } from 'react';


function App() {
  const [filteredResults, setFilteredResults] = useState(response.categoria);

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
            />
          ))}
        </ContainerCard>
      ))}
    </div>
  );
}

export default App;