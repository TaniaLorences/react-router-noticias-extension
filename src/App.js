import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListadoNoticias from './componentes/ListadoNoticias';
import Noticia from './componentes/Noticia';
import BarraNavegacion from './componentes/BarraNavegacion';
import NoticiasCategoria from './componentes/NoticiasCategoria';

function App() {
  return (
    <BrowserRouter>
    <BarraNavegacion></BarraNavegacion>
      <Routes>
        <Route path="/" element={<ListadoNoticias />} />
        <Route path="/noticias/:id" element={<Noticia />} />
        <Route path="/categorias/:categoria" element={<NoticiasCategoria />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
