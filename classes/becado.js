import Cl_estudiante from "./estudiante.js";

export default class Cl_becado extends Cl_estudiante{
    constructor({nombre, acumuladoNotas, cantidadMaterias}){
        super({nombre, acumuladoNotas, cantidadMaterias})
        this.BECA_MAYOR_15=30;
        this.BECA_IGUAL_10=20;
        this.BECA_MENOR_10=0;
    }

    beca(){
        const PROMEDIO = super.promedio();

        if(PROMEDIO<10)return this.BECA_MENOR_10
        if(PROMEDIO>=10 && PROMEDIO<15)return this.BECA_IGUAL_10

        return this.BECA_MAYOR_15

    }

    reportarBeca() {
        let mensaje=this.beca()===0?`${this._nombre} no recibe beca`: `${this._nombre} recibe una beca de ${this.beca()}$`

        return mensaje
    }

}