import Usuario from "./usuario";

class GestionUsuarios{
    registrarUsuario(nombreDeUsuario, contrasenia){
        return "¡Bienvenido " + nombreDeUsuario +"! Tu registro se ha completado con éxito.";
    }

    obtenerUsuario(nombreDeUsuario){
        return  new Usuario("usuario", "contrasenia");
    }
}
export default GestionUsuarios;