class Usuarios {

    constructor() {

        this.personas = [];

    }

    //Agregar persona al arreglo de personas
    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    //Obtener datos de una persona dentro del arreglo de personas
    getPersona(id) {

        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;

    }

    //Obtener todas las personas del arreglo personas
    getPersonas() {

        return this.personas;

    }

    //Obtener personas por sala
    getPersonasPorSala(sala) {

        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;

    }

    //Eliminar persona del arreglo de personas
    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;

    }

}

module.exports = {
    Usuarios
}