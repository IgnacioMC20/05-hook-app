import React, { useEffect, useState } from 'react'

export const Message = () => {

const [coords, setCoords] = useState({ x:0, y:0});

const { x, y } = coords;
    useEffect(() => {

        const mouseMove = (event) => {
              const coords = { x: event.x, y: event.y};
              setCoords(coords);
        }
        
        window.addEventListener('mousemove', mouseMove);
    
      return () => {
        console.log('Componente desmontado');
        window.removeEventListener('mousemove', mouseMove);
      }
    }, [])
    

  return (
    <div>
        <h3>Message</h3>
        x: {x} y: {y}
    </div>
  )
}
