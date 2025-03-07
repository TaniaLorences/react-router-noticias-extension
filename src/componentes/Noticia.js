import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Noticia(){
    const[noticia, setNoticiaSeleccionada]=useState(null);

    // Setear la noticia seleccionada con aquella cuyo id, coincida con params.

    let params = useParams();
    const id = params.id;

    const cargarNoticia = async () => {
    try {
        const response = await fetch("/noticias.json");
        const data = await response.json();
        setNoticiaSeleccionada(data[id])    // No se puede mapear, porque los objetos noticia no tienen id!!
    } catch (error) {
        console.log("Error al cargar la noticia", error)
    }
    }

    useEffect(() => {
        cargarNoticia();
    }, [id])

    if (!noticia){
        return <h2>Se está cargando la noticia. </h2>
    }

    return (
        <Card>
            <Card.Title>{noticia.titulo}</Card.Title>
            <Card.Text>{noticia.contenido}</Card.Text>
            <Card.Text>{noticia.categoria}</Card.Text>
            <Card.Text>{noticia.autor}</Card.Text>
            <Card.Text>{noticia.fecha}</Card.Text>
            <Link to="/">Volver</Link>
        </Card>
    )
}

export default Noticia;