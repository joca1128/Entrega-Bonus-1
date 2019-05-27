const express = require('express')
const app = express()
const opciones = {
    id:{
        demand:true,
        alias:'i'        
    },
    nombre:{
        demand:true
    },
    cedula:{
        demand:true
    }
}
const cursos=[{
    id:10000001,
    nombre:"Fundamentos de HTML",
    duracion:"Tiene una duración de 4 semanas",
    valor:250000
},
{
    id:10000002,
    nombre:"Fundamentos de CSS",
    duracion:"Tiene una duración de 4 semanas",
    valor:250000
},
{
    id:10000003,
    nombre:"Fundamentos de JavaScript",
    duracion:"Tiene una duración de 4 semanas",
    valor:250000
},
{
    id:10000004,
    nombre:"Avanzados de HTML",
    duracion:"Tiene una duración de 7 semanas",
    valor:250000
},
{
    id:10000005,
    nombre:"Avanzados de JavaScript",
    duracion:"Tiene una duración de 7 semanas",
    valor:250000
}]


function buscarCursos(id){
    let i;
    for(i=0;i<cursos.length;i++){
        if(cursos[i].id===id){
            break;
        }
    }
    if(i===cursos.length){
        return false;
    }
    else{return true;}
}
function recuperarCurso(id){
    for(let i=0;i<cursos.length;i++){
        if(cursos[i].id===id){
            return cursos[i];
        }
    }
}
function escribir(curso,cedula,nombre,cursos){
    texto=nombre+" con cedula "+cedula+" está interesado en el curso con id"+curso+" con nombre "
    +cursos.nombre+" "+cursos.duracion+" y tiene un valor de "+cursos.valor;
    app.get('/', function (req, res) {
        res.send(texto)
      });
    app.listen(3000);
}
const comando=  require("yargs")
                .alias('i','id')
                .command("inscrbir","Este comando es para inscripción",opciones)
                .argv;

if(comando._[0]==="inscribir"){
    if(buscarCursos(comando.id)){
        let cursos=recuperarCurso(comando.id)
        escribir(comando.id,comando.cedula,comando.nombre,cursos);
    }
    else{
        let texto="";
        for(i=0;i<cursos.length;i++){
            texto=texto+"<p>"+String(cursos[i].id)+" "+String(cursos[i].nombre)+" "+String(cursos[i].duracion)+" "
            +String(cursos[i].valor+"</p>");
        }
        app.get('/', function (req, res) {
            res.send("Este curso no existe por favor vea uno de los siguientes: "+texto )
          });
        app.listen(3000);
        
    }
}
else{
    let texto="";
    for(i=0;i<cursos.length;i++){
        texto=texto+"<p>"+String(cursos[i].id)+" "+String(cursos[i].nombre)+" "+String(cursos[i].duracion)+" "
        +String(cursos[i].valor+"</p>");
    }
    app.get('/', function (req, res) {
        res.send(texto)
      });
    app.listen(3000);
}