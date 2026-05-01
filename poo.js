// Programación Orientada a Objetos en JavaScript

class Estudiante {
    constructor(nombre, carrera, semestre) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.semestre = semestre;
    }

    mostrarInformacion() {
        console.log("Nombre: " + this.nombre);
        console.log("Carrera: " + this.carrera);
        console.log("Semestre: " + this.semestre);
    }
    estudiar() {
        console.log(this.nombre + " está estudiando.");
    }
}
const estudiante1 = new Estudiante(
    "Fernando",
    "Ingeniería de Sistemas",
    5
);
const estudiante2 = new Estudiante(
    "Carlos",
    "Ingeniería de Software",
    3
);
estudiante1.mostrarInformacion();
estudiante1.estudiar();
console.log("----------------");
estudiante2.mostrarInformacion();
estudiante2.estudiar();