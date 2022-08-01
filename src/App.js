import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import ListadoNoticias from "./components/ListadoNoticias";



function App() {

  //definit la categoria y noticias
  const [categoria, guardarCategoria] = useState('')
  const [noticias, setNoticias] = useState([])
  
  useEffect(() => {

    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=ecedbd8a49e2442d9b1d0ef6b7806ae7`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    }
    consultarAPI()
  }, [categoria])


  return (
    <>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
