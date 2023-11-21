class Usuario{

    constructor(nombreDeUsuario, rol, contrasenia) {
        this.nombreDeUsuario = nombreDeUsuario;
        this.rol = rol;
        this.contrasenia = contrasenia;
    }

    obtenerNombreDeUsuario(){
        return this.nombreDeUsuario;
    }
}

export default Usuario;