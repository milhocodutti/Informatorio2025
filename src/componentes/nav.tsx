import { useEffect, useState } from "react";
import styles from './nav.module.css';
import { response } from './dataBase';
import { useRef } from "react";


type NavProps = {
  onResultsChange: (results: typeof response.categoria) => void;
};

function Nav({ onResultsChange }: NavProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [ , setSearchResults] = useState(response.categoria);
  const inputRef = useRef <HTMLInputElement | null>(null);

  useEffect (()=>{
    if (inputRef.current){
      inputRef.current.focus();
    }
  },[]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setSearchResults(response.categoria);
      onResultsChange(response.categoria); // Notifica los resultados al componente padre
      return;
    }
    


    const filteredResults = response.categoria
      .map((categoria) => ({
        ...categoria,
        post: categoria.post.filter((post) =>
          post.titulo.toLowerCase().includes(query.toLowerCase()) ||
          post.descripcion.toLowerCase().includes(query.toLowerCase())
          ||
          post.genero.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((categoria) => categoria.post.length > 0);

    setSearchResults(filteredResults);
    onResultsChange(filteredResults); // Notifica los resultados filtrados
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <img className={styles.logo} alt="Logo" src="./imagenes/logo.jpg" />
         <li><a href="https://www.instagram.com/milhocodutti/" target="_blank" rel="noopener noreferrer">
    @milhocodutti
  </a></li>
          <li>
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleInputChange}
            className={styles.input}
          />
          </li>
        

        <li>
        <select
  onChange={(e) => {
    const categoriaSeleccionada = e.target.value;
    if (categoriaSeleccionada === "Todas") {
      onResultsChange(response.categoria);
    } else {
      const filtrado = response.categoria.filter(
        (cat) => cat.tituloCategoria === categoriaSeleccionada
      );
      onResultsChange(filtrado);
    }
  }}
  className={styles.select}
>
  <option value="Todas">Todas las categorías</option>
  {response.categoria.map((categoria) => (
    <option key={categoria.idCategoria} value={categoria.tituloCategoria}>
      {categoria.tituloCategoria}
    </option>
  ))}
</select>

</li>
      </ul>


    </nav>
  );
}

export default Nav;
