class Usuario{

    constructor(nombreDeUsuario, rol, contrasenia) {
        this.nombreDeUsuario = nombreDeUsuario;
        this.rol = rol;
        this.contrasenia = contrasenia;
    }

    obtenerNombreDeUsuario(){
        return this.nombreDeUsuario;
    }
    obtenerContrasenia()
    {
        return this.contrasenia;
    }
    validarContraseniaParaUnUsuario(nombre)
    {
        if(nombre==this.nombreDeUsuario)
        {
            return this.contrasenia;
        }
    }
}

export default Usuario;