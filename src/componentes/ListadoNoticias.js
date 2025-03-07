import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function ListadoNoticias(){
    const[noticias, setNoticias]=useState([]);
    
    // Variante propagando el índice a cada noticia
    const cargarNoticias= async () => {
    try {
        const response = await fetch("/noticias.json");
        const data = await response.json();
        const noticiasConTodo = data.map((n, index) => ({
            ...n,
            indice:index,
        }))
        setNoticias(noticiasConTodo)
    } catch (error) {
        console.log("Error al cargar las noticias", error)
    }
    }

    useEffect(() => {
        if(noticias.length===0){
        cargarNoticias();
        }
    }, [])

// Cada título es un enlace que redirige hacia el detalle de la noticia

    return(
        <ul>
        {noticias.map((noticia) => 
        <li key={noticia.indice}>
            <Link to={"/noticias/"+noticia.indice}>{noticia.titulo}</Link>
        </li>
        )}
        </ul>
    )

}

export default ListadoNoticias;
