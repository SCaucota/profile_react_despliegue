//generar componente about
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const AcercaDe = () => {

  const dataProgramador = {
    nombre: "María Sofia",
    apellido: "Caucota",
    edad: 20,
    profesion: "Programadora Web Front-end",
    pais: "Argentina",
    descripcion: "Soy una persona curiosa y disfruto mucho aprender cosas nuevas. Siempre busco hacer cursos para mantener mi conocimiento actualizado",
    lenguajes: "Python, JavaScript, Java, C#",
    tecnologias: "React, .Net, Angular, Node.js"
  }

  return (
    <div className='container my-5 mw-100 d-flex flex-column justify-content-center align-items-center' style={{ height: '74.5vh' }}>
      <h1 className='text-center pb-3'>Acerca De</h1>
      <div>
        <Card style={{ width: '50rem' }}>
          <Card.Body className='p-4' >
            <Card.Title className='fs-2'> {dataProgramador.nombre + " " + dataProgramador.apellido}</Card.Title>
            <Card.Text className='fs-4'>{dataProgramador.descripcion}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush p-3 fs-5">
            <ListGroup.Item> <span className='fw-semibold' >Edad: </span> {dataProgramador.edad} años</ListGroup.Item>
            <ListGroup.Item> <span className='fw-semibold' >Profesional: </span> {dataProgramador.profesion}</ListGroup.Item>
            <ListGroup.Item> <span className='fw-semibold' >País: </span> {dataProgramador.pais}</ListGroup.Item>
            <ListGroup.Item> <span className='fw-semibold' >Lenguajes: </span> {dataProgramador.lenguajes}</ListGroup.Item>
            <ListGroup.Item> <span className='fw-semibold' >Tecnologías: </span> {dataProgramador.tecnologias}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default AcercaDe;