import GestionUsuarios from "./gestionUsuarios";
import Usuario from "./usuario";

describe("Registrar con usuario y contraseña", () => {

    let gestionUsuarios;
    beforeEach(() => {
        gestionUsuarios = new GestionUsuarios();
    });
  
    it("deberia devolverme un mensaje de bienvenida", () => {
        const mensajeEsperado = "¡Bienvenido usuario! Tu registro se ha completado con éxito.";
        expect(gestionUsuarios.registrarUsuario("usuario", "contrasenia")).toEqual(mensajeEsperado);
    });

    it("deberia devolverme un mensaje de bienvenida con el nombre del usuario", () => {
        const mensajeEsperado = "¡Bienvenido user123! Tu registro se ha completado con éxito.";
        expect(gestionUsuarios.registrarUsuario("user123", "contrasenia")).toEqual(mensajeEsperado);
    });

    it("deberia devolverme la informacion del usuario registrado", () => {
        const usuarioEsperado = new Usuario("usuario", "contrasenia");
        gestionUsuarios.registrarUsuario("usuario", "contrasenia");
        expect(gestionUsuarios.obtenerUsuario("usuario")).toEqual(usuarioEsperado);
    });
    
    it("deberia devolverme la lista de usuarios registrados", () => {
        const usuario1 = new Usuario("usuario1", "contrasenia");
        const usuario2 = new Usuario("usuario2", "contrasenia");
        const usuariosEsperados = [usuario1, usuario2];
        gestionUsuarios.registrarUsuario("usuario1", "contrasenia");
        gestionUsuarios.registrarUsuario("usuario2", "contrasenia");
        expect(gestionUsuarios.obtenerUsuarios()).toEqual(usuariosEsperados);
    });

    it("deberia devolver un mensaje de error si se trata de registrar otro usuario con el mismo nombre de usuario", () => {
        const mensajeEsperado = "Lo sentimos, este nombre de usuario ya está siendo utilizado."
        gestionUsuarios.registrarUsuario("usuario1", "contrasenia");
        expect(gestionUsuarios.registrarUsuario("usuario1", "contrasenia")).toEqual(mensajeEsperado);
        
    });
 
    it("deberia aceptar el login de un usuario", () => {
        gestionUsuarios.registrarUsuario("usuario1", "contrasenia");
        expect(gestionUsuarios.VerficarUsuario("usuario1", "contrasenia")).toEqual(true);
        
    });
   

});
