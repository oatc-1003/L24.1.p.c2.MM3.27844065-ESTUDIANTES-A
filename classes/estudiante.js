export default class Cl_estudiante{
    constructor({ nombre, acumuladoNotas, cantidadMaterias}){
        this.nombre=nombre;
        this.acumuladoNotas=acumuladoNotas;
        this.cantidadMaterias=cantidadMaterias
    }

    set nombre(n){
        return this._nombre=n;

    }
    get nombre(){
        return this._nombre

    }

    set acumuladoNotas(an){
        return this._acumuladoNotas=an;

    }
    get acumuladoNotas(){
        return this._acumuladoNotas;

    }

    set cantidadMaterias(cm){
        return this._cantidadMaterias=+cm;

    }
    get cantidadMaterias(){
        return this._cantidadMaterias;

    }

    promedio(){
        return (this._acumuladoNotas / this._cantidadMaterias).toFixed(2)
    }
}