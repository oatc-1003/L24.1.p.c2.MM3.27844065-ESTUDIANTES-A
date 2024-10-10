import Cl_becado from "./classes/becado.js";
import Cl_estudiante from "./classes/estudiante.js";

export default class Cl_main {

    reportar(){
        let estudianteA=new Cl_becado({nombre:"Mary", acumuladoNotas:132, cantidadMaterias:8})
        let estudianteB=new Cl_becado({nombre:"Alirio", acumuladoNotas:315, cantidadMaterias:35})

        document.body.innerHTML+=`
            <br>
            nombre: ${estudianteA._nombre}
            <br>
            acumulado de notas: ${estudianteA._acumuladoNotas}
            <br>
            cantidad de materias: ${estudianteA._cantidadMaterias}
            <br>
            Nota promedio: ${estudianteA.promedio()}
            <br>
            ${estudianteA.reportarBeca()}
            <br>
            <br>
            nombre: ${estudianteB._nombre}
            <br>
            acumulado de notas: ${estudianteB._acumuladoNotas}
            <br>
            cantidad de materias: ${estudianteB._cantidadMaterias}
            <br>
            Nota promedio: ${estudianteB.promedio()}
            <br>
            ${estudianteB.reportarBeca()}

        `

    }
}   