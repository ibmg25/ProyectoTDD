class Usuario{

    constructor(nombreDeUsuario, contrasenia) {
        this.nombreDeUsuario = nombreDeUsuario;
        this.contrasenia = contrasenia;
    }

    obtenerNombreDeUsuario(){
        return this.nombreDeUsuario;
    }
}

export default Usuario;