//generar componente hobbies
import React from 'react';

const Hobbies = () => {

    const hobbies = [
        {
            id: 1,
            nombre: 'Natación',
            descripcion: 'Natación para liberarme del estrés y mantenerme en forma.',
        },
        {
            id: 2,
            nombre: 'Dibujo',
            descripcion: 'Dibujar para apreciar lo que me rodea.',
        },
        {
            id: 3,
            nombre: 'Tocar Instrumentos',
            descripcion: 'Para expresar emociones que las palabras no pueden.',
        },
        {
            id: 4,
            nombre: 'Cantar',
            descripcion: 'Para liberarme ciertas emociones.',
        },
        {
            id: 5,
            nombre: 'Leer',
            descripcion: 'Me ayuda a alejarme un poco de la realidad.',
        }
    ];

    return (
        <div className='container my-5 mw-100 d-flex flex-column justify-content-center align-items-center' style={{ height: '74.5vh' }}>
            <div className="list-group">
                <div className="list-group-item list-group-item-action active bg-dark bg-opacity-75" aria-current="true" style={{ width: '50rem' }}>
                    <h3>Hobbies</h3>
                </div>
                <div style={{ width: '50rem' }} >
                    {
                        hobbies.map((hobby) => (
                            <div className="list-group-item list-group-item-action border border-dark border-opacity-25" key={hobby.id}>
                                <h4>{hobby.nombre}</h4>
                                <p>{hobby.descripcion}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Hobbies;