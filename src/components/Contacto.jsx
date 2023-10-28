import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  return (
    <div className='container m-5 mw-100 mx-0 d-flex flex-column justify-content-center align-items-center' style={{ height: '74.5vh'}}>
      <h1 className='mb-4 text-center' >Contactate</h1>
      <Form className='w-50' >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control className='border border-dark' type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control className='border border-dark' type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control className='border border-dark' as="textarea" rows={3} />
        </Form.Group>
        <Button className='w-100' variant="secondary">Enviar</Button>
      </Form>
    </div>
  );
};

export default Contacto;