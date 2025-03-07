import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

function NoticiasCategoria(){
    const[noticiasCategoria, setNoticiasCategoria]=useState([])

    const params = useParams();
    let categoriaUrl = params.categoria;
    

    const cargarCategoria = async() => {
        try {
            const response = await fetch("/noticias.json");
            const data = await response.json();
            setNoticiasCategoria(data.filter((n) => n.categoria===categoriaUrl))
              
        } catch (error) {
            console.log("Error al cargar las noticias", error)
        }
    }

    useEffect(() => {
        cargarCategoria();
    }, [categoriaUrl])


    return(
        <ListGroup>
           {noticiasCategoria
           .map((n) => (
            <ListGroup.Item>
                <h3>{n.titulo}</h3>
                <p>{n.contenido}</p>
                <p>{n.categoria}</p>
                <p>{n.autor}</p>
                <p>{n.fecha}</p>
            </ListGroup.Item>
           ))}
        </ListGroup>
    )
}

export default NoticiasCategoria;