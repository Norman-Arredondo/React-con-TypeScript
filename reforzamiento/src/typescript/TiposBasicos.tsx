
export const TiposBasicos = () => {

    let nombre: string | number = 'nombre';
    nombre = 'Norman';

    const edad: number = 24;
    const estaActivo: boolean = true;
    const poderes: (string|number)[] = ['velocidad', 'volar', 'Fuerza'];


  return (
    <>
    <h3>Tipos Básicos</h3>

    {nombre}, {edad}, {(estaActivo) ? 'activo' : 'No activo'}
    <br/>
    {poderes.join(', ')}
    </>
  )
}
