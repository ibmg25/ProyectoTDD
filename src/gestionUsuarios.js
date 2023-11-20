import Usuario from "./usuario";

class GestionUsuarios{
    constructor(){
        this.usuariosRegistrados = [];
    }

    registrarUsuario(nombreDeUsuario, contrasenia){
        const nuevoUsuario = new Usuario(nombreDeUsuario, contrasenia);
        this.usuariosRegistrados.push(nuevoUsuario);
        return "¡Bienvenido " + nombreDeUsuario +"! Tu registro se ha completado con éxito.";
    }

    obtenerUsuario(nombreDeUsuario){
        return  new Usuario("usuario", "contrasenia");
    }


    obtenerUsuarios(){
        return this.usuariosRegistrados;
    }
}
export default GestionUsuarios;