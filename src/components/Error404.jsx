import React from 'react';

const Error404 = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center' style={{ height: '84.5vh' }}>
    <div className=" border border-danger p-5 text-center"  >
        <h1 className='pb-3 text-danger'>Error 404 - Página no Encontrada</h1>
        <h5 className='pb-3 text-danger'>La página que está buscando no existe</h5>
    </div>
  </div>
  );
};

export default Error404;