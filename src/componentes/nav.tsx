import { useState } from "react";
import styles from './nav.module.css';
import { response } from './dataBase';



type NavProps = {
  onResultsChange: (results: typeof response.categoria) => void;
};

function Nav({ onResultsChange }: NavProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [ , setSearchResults] = useState(response.categoria);

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
        <img className={styles.logo} alt="Logo" />
        <li className={styles.navlink}>
          Novedades
        </li>
          <li>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleInputChange}
            className={styles.input}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
