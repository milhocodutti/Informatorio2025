// dataBase.ts
export type Post = {
  id: string;
  titulo: string;
  descripcion: string;
  src: string;
  año: number;
  likes?: number;
  director: string;
  genero: string;
};

export type Categoria = {
  idCategoria: number;
  tituloCategoria: string;
  descripcionCategoria: string;
  post: Post[];
};

export type Response = {
  categoria: Categoria[];
};

export const response: Response ={
  categoria: [{
    idCategoria:1,
    tituloCategoria: "Lo Más Visto",
    descripcionCategoria: "Aquí encontraras los más gustados del publico",
    post:[
    {
      id: "1001",
      titulo: "Avengers: Endgame",
      descripcion: "Los héroes más poderosos de la Tierra se enfrentan a Thanos.",
      src:'https://static.posters.cz/image/750webp/122136.webp',
      likes: 1500000,
      año: 2019,
      genero: "Acción, Ciencia ficción",
      director: "Anthony y Joe Russo",
    },
    {
      id: "1002",
      titulo: "Avatar: El Camino del Agua",
      descripcion: "Una nueva aventura en Pandora con la familia Sully.",
      src:'https://storage.googleapis.com/pod_public/800webp/262965.webp',
      likes: 127000,
      año: 2022,
      genero: "Ciencia ficción, Aventura",
      director: "James Cameron",
    },
    {
      id: "1003",
      titulo: "El Hombre Araña: Sin Camino a Casa",
      descripcion: "Peter Parker enfrenta las consecuencias del multiverso.",
      src:'https://storage.googleapis.com/pod_public/800webp/263686.webp',
      likes: 2257477,
      año: 2021,
      genero: "Acción, Aventura",
      director: "Jon Watts",
    },
    {
      id: "1004",
      titulo: "Jurassic World: Dominio",
      descripcion: "Humanos y dinosaurios conviven en un mundo caótico.",
      src:'https://static.posters.cz/image/350webp/130733.webp',
      likes: 546781,
      año: 2022,
      genero: "Ciencia ficción, Aventura",
      director: "Colin Trevorrow",
    },
    {
      id: "1005",
      titulo: "El Rey León (Live Action)",
      descripcion: "Simba debe recuperar su lugar como rey de la sabana.",
      src:'https://static.posters.cz/image/350webp/97648.webp',
      likes: 5546700,
      año: 2019,
      genero: "Acción, Aventura",
      director: "Jon Favreau",
    },
    {
      id: "1006",
      titulo: "Black Panther: Wakanda Forever",
      descripcion: "La nación de Wakanda lucha por protegerse tras la pérdida de su rey.",
      src:'https://storage.googleapis.com/pod_public/800webp/262993.webp',
      likes: 854687,
      año: 2022,
      genero: "Acción, Drama",
      director: "Ryan Coogler",
    },
    {
      id: "1007",
      titulo: "Rápidos y Furiosos 10",
      descripcion: "La familia Toretto enfrenta una nueva amenaza global.",
      src:'https://storage.googleapis.com/pod_public/800webp/263069.webp',
      likes: 6589785,
      año: 2023,
      genero: "Acción, Aventura",
      director: "Louis Leterrier",
    },
  ]
  },
    {
    idCategoria:2,
    tituloCategoria: "Independientes",
    descripcionCategoria: "Peliculas seleccionadas especialmente para ti",
    post: [
      {
      id: "2001",
      titulo: "Parásitos",
      descripcion: "Una sátira social que explora las desigualdades económicas.",
      src:'https://www.revistaclinicacontemporanea.org/jats_files/1989-9912-cc-11-2-e16-gf01.jpg',
      
      año: 2019,
      genero: "Drama, Comedia negra",
      director: "Bong Joon-ho",
    },
    {
      id: "2002",
      titulo: "La Bruja",
      descripcion: "Un thriller psicológico ambientado en el siglo XVII.",
      src:'https://es.web.img3.acsta.net/c_310_420/pictures/16/02/02/12/33/062603.jpg',
      
      año: 2015,
      genero: "Terror, Suspenso",
      director: "Robert Eggers",
    },
    {
      id: "2003",
      titulo: "Moonligth",
      descripcion: "Una historia de crecimiento y autodescubrimiento en Miami.",
      src:'https://ascot-elite.ch/modules/AscotElite/movies/2058/de/archive/cover_detail.jpg',
      
      año: 2019,
      genero: "Drama",
      director: "Barry Jenkins",
    },
    {
      id: "2004",
      titulo: "El Faro",
      descripcion: "Dos cuidadores de un faro enfrentan tensiones psicológicas.",
      src:'https://es.web.img3.acsta.net/c_310_420/pictures/19/10/28/16/45/5520153.jpg',
      
      año: 2019,
      genero: "Terror, Drama",
      director: "Robert Eggers",
    },
    {
      id: "2005",
      titulo: "Lady Bird",
      descripcion: "La transición a la adultez de una joven en Sacramento.",
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWxxFaZC_Z8pv98-Ui_dnVjUw_zGrJ-qWXA&s',
     
      año: 2019,
      genero: "Drama, Comedia",
      director: "Anthony y Joe Russo",
    },
    {
      id: "2006",
      titulo: "El Secreto De Sus Ojos",
      descripcion: " Un thriller argentino sobre justicia y recuerdos.",
      src:'https://m.media-amazon.com/images/S/pv-target-images/4396cc2ce854e81eb1ffa97433856cc866ebd2cb01f612746633a06dd52809a9.jpg',
      
      año: 2009,
      genero: "Drama, Misterio",
      director: "Juan José Campanella",
    },
    {
      id: "2007",
      titulo: "Driver",
      descripcion: "Un conductor de acrobacias se ve envuelto en problemas criminales.",
      src:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*rkRMDB4G5WHlT7TaQ3Ihdg.jpeg',
      
      año: 2011,
      genero: "Acción, Crimen",
      director: "Nicolas Winding Refn",
    },
    ],
  },
 {
    idCategoria: 3,
    tituloCategoria: "Clasicos",
    descripcionCategoria: "Aquí encontraras las peliculas con las que crecimos",
    post:[
            {
      id: "3001",
      titulo: "El Padrino",
      descripcion: "La vida de una familia mafiosa en Nueva York.",
      src:'https://static.posters.cz/image/350webp/241387.webp',
      likes: 54896547,
      año: 1972,
      genero: "Crimen, Drama",
      director: "Francis Ford Coppola",
    },
    {
      id: "3002",
      titulo: "Casablanca",
      descripcion: "Un romance inmortal durante la Segunda Guerra Mundial.",
      src:'https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg',
      likes: 758965,
      año: 1942,
      genero: "Romance, Drama",
      director: "Michael Curtiz",
    },
    {
      id: "3003",
      titulo: "Lo que el Viento se Llevó",
      descripcion: "Una historia de amor y guerra en el sur de Estados Unidos.",
      src:'https://pics.filmaffinity.com/gone_with_the_wind-432251527-mmed.jpg',
      likes: 458856,
      año: 1939,
      genero: "Romance, Drama",
      director: "Victor Fleming",
    },
    {
      id: "3004",
      titulo: "Psicosis",
      descripcion: "Un thriller psicológico dirigido por Alfred Hitchcock.",
      src:'https://storage.googleapis.com/pod_public/800webp/264404.webp',
      likes: 96845698,
      año: 1960,
      genero: "Suspenso, Terror",
      director: "Alfred Hitchcock",
    },
    {
      id: "3005",
      titulo: "2001: Odisea del Espacio",
      descripcion: "La humanidad explora los límites del universo.",
      src:'https://storage.googleapis.com/pod_public/800webp/262664.webp',
      likes: 1500000,
      año: 1968,
      genero: "Ciencia ficción",
      director: "Stanley Kubrick",
    },
    {
      id: "3006",
      titulo: "Ciudadano Kane",
      descripcion: "La vida del magnate Charles Foster Kane.",
      src:'https://storage.googleapis.com/pod_public/800webp/144104.webp',
      likes: 658965654,
      año: 1941,
      genero: "Drama, Misterio",
      director: "Orson Welles",
    },
    {
      id: "3007",
      titulo: "Cantando Bajo la Lluvia",
      descripcion: "Un musical sobre la transición del cine mudo al sonoro.",
      src:'https://storage.googleapis.com/pod_public/800webp/264407.webp',
      likes: 4855587,
      año: 1952,
      genero: "Musical, Comedia",
      director: "Stanley Donen y Gene Kelly",
    },
    ],
  },
    {
    idCategoria:4,
    tituloCategoria: "Infantiles",
    descripcionCategoria: "Aquí encontraras las pelis para ver en familia",
    post:[
            {
      id: "4001",
      titulo: "Frozen",
      descripcion: "Elsa y Anna enfrentan nuevos desafíos.",
      src:'https://static.posters.cz/image/350webp/81189.webp',
      likes: 5488621,
      año: 2013,
      genero: "Animación, Musical",
      director: "Chris Buck y Jennifer Lee",
    },
    {
      id: "4002",
      titulo: "Toy Story",
      descripcion: "Las aventuras de Woody y Buzz Lightyear.",
      src:'https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      likes: 8789115,
      año: 1995,
      genero: "Animación, Comedia",
      director: "John Lasseter",
    },
    {
      id: "4003",
      titulo: "Shrek",
      descripcion: "Un ogro busca rescatar a una princesa con la ayuda de un burro.",
      src:'https://m.media-amazon.com/images/I/81lCnhTXpRL._AC_UF894,1000_QL80_.jpg',
      likes: 55488999,
      año: 2001,
      genero: "Animación, Comedia",
      director: "Andrew Adamson y Vicky Jenson",
    },
    {
      id: "4004",
      titulo: "El Rey León",
      descripcion: "Simba aprende sobre la responsabilidad y el liderazgo.",
      src:'https://m.media-amazon.com/images/S/pv-target-images/718fb4b485380298f244f41909db1f00bbe2e2a561e36a2fa24052122577be92.jpg',
      likes: 548896,
      año: 2019,
      genero: "Animación, Aventura",
      director: "Roger Allers y Rob Minkoff",
    },
    {
      id: "4005",
      titulo: "Buscando a Nemo",
      descripcion: "Un pez payaso busca a su hijo perdido.",
      src:'https://es.web.img2.acsta.net/c_310_420/pictures/14/02/13/11/08/054573.jpg',
      likes: 54888955,
      año: 2003,
      genero: "Animación, Aventura",
      director: "Andrew Stanton",
    },
    {
      id: "4006",
      titulo: "Encanto",
      descripcion: "La familia Madrigal descubre secretos mágicos.",
      src:'https://es.web.img3.acsta.net/c_310_420/pictures/21/09/29/16/57/5761354.jpg',
      likes: 548889888,
      año: 2001,
      genero: "Animación, Musical",
      director: "Jared Bush y Byron Howard",
    },
    {
      id: "4007",
      titulo: "Ratatouille",
      descripcion: "Un ratón con talento culinario en París.",
      src:'https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg',
      likes: 1500000,
      año: 2007,
      genero: "Animación, Comedia",
      director: "Brad Bird",
    },
    ],
    }
    
  ]
};
