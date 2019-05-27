# OPCIONAL

### Jorge Castillo

## INSTRUCCIONES

1. Para cargar todos las dependencias abrir el cdm dentro de la carpeta y escribir:
```bash
    npm install
```
2. Para no hacer ninguna inscripción y solo mostrar las materias por la localhost se debe escribir
   en el cmd:
```bash
    node principal
```  
3. Para mostrar la inscripción de la materia sería con:
```bash
    node principal inscribir --id="numero de id del curso" --nombre="Nombre del paciente" --cedula="cedula del tipo o la tipa"
```  
4. Todo esto es con la localhost:3000 en el navegador.
    >Donde los id de los cursos son :10000001,10000002,10000003,10000004,10000005
5. si escribe mal inscribir saldra por default todos los cursos, y si escribe mal
    el id del curso entonces saldra que no existe tal curso y lista de nuevo los cursos.