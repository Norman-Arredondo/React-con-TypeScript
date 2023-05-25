/**Las interfaces funcionan para ponerle reglas de validación a los objetos */

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}



export const ObjetosLiterales = () => {

const persona: Persona = {
  nombreCompleto: 'Norman',
  edad: 24,
  direccion: {
    pais: 'Mexico',
    casaNo: 11
  }
}

  return (
    <>
    <h3>Objetos Literales</h3>
    {/**JSON.stringify transforma un objeto a su representación JSON como si fuera un string */}
    <code>
      <pre>
      {JSON.stringify (persona, null, 2)} 
      </pre>
    </code>
    
    </>
  )
}

