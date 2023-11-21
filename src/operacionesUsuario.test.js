import GestionUsuarios from "./gestionUsuarios";
import Usuario from "./usuario";

describe("Registrar con usuario y contraseña", () => {

    let gestionUsuarios;
    beforeEach(() => {
        gestionUsuarios = new GestionUsuarios();
    });
  
    it("deberia devolverme un mensaje de bienvenida", () => {
        const mensajeEsperado = "¡Bienvenido usuario! Tu registro se ha completado con éxito.";
        expect(gestionUsuarios.registrarUsuario("usuario", "estudiante","contrasenia")).toEqual(mensajeEsperado);
    });

    it("deberia devolverme un mensaje de bienvenida con el nombre del usuario", () => {
        const mensajeEsperado = "¡Bienvenido user123! Tu registro se ha completado con éxito.";
        expect(gestionUsuarios.registrarUsuario("user123", "estudiante", "contrasenia")).toEqual(mensajeEsperado);
    });

    it("deberia devolverme la informacion del usuario registrado", () => {
        const usuarioEsperado = new Usuario("usuario", "estudiante", "contrasenia");
        gestionUsuarios.registrarUsuario("usuario", "estudiante", "contrasenia");
        expect(gestionUsuarios.obtenerUsuario("usuario")).toEqual(usuarioEsperado);
    });
    
    it("deberia devolverme la lista de usuarios registrados", () => {
        const usuario1 = new Usuario("usuario1", "estudiante", "contrasenia");
        const usuario2 = new Usuario("usuario2", "estudiante", "contrasenia");
        const usuariosEsperados = [usuario1, usuario2];
        gestionUsuarios.registrarUsuario("usuario1", "estudiante", "contrasenia");
        gestionUsuarios.registrarUsuario("usuario2", "estudiante", "contrasenia");
        expect(gestionUsuarios.obtenerUsuarios()).toEqual(usuariosEsperados);
    });

    it("deberia devolver un mensaje de error si se trata de registrar otro usuario con el mismo nombre de usuario", () => {
        const mensajeEsperado = "Lo sentimos, este nombre de usuario ya está siendo utilizado."
        gestionUsuarios.registrarUsuario("usuario1","estudiante", "contrasenia");
        expect(gestionUsuarios.registrarUsuario("usuario1", "estudiante", "contrasenia")).toEqual(mensajeEsperado);

    });
 
    it("deberia aceptar el login de un usuario", () => {
        gestionUsuarios.registrarUsuario("usuario1", "estudiante", "contrasenia");
        expect(gestionUsuarios.VerficarUsuario("usuario1", "contrasenia")).toEqual(true);
        
    });
    it("deberia mostrar mensaje de error en el login de un usuario", () => {
        const mensajeEsperado = "Lo sentimos, usuario o contrasenia incorrectos."
        gestionUsuarios.registrarUsuario("usuario1", "estudiante", "contrasenia");
        expect(gestionUsuarios.VerficarUsuario("usuario1", "contrasenia2")).toEqual(mensajeEsperado);
        
    });

});


describe("Editar datos de usuario", () => {

    let gestionUsuarios;
    beforeEach(() => {
        gestionUsuarios = new GestionUsuarios();
        gestionUsuarios.registrarUsuario("usuario", "contrasenia");
    });
  
    it("deberia devolverme un mensaje si se han editado los datos del usuario con exito", () => {
        const mensajeEsperado = "¡Datos actualizados con éxito, nuevoUsername!";
        expect(gestionUsuarios.editarUsuario("usuario","nuevoUsername", "nuevaContrasenia")).toEqual(mensajeEsperado);
    });

    it("deberia devolverme un mensaje de error si el nuevo nombre de usuario ya existe", () => {
        const mensajeEsperado = "Lo sentimos, ese nombre de usuario ya está en uso.";
        gestionUsuarios.registrarUsuario("usernameExistente", "contrasenia");
        expect(gestionUsuarios.editarUsuario("usuario","usernameExistente", "nuevaContrasenia")).toEqual(mensajeEsperado);
    });
    
    it("deberia devolverme la nueva informacion del usuario", () => {
        const usuarioEsperado = new Usuario("nuevoUsername", "nuevaContrasenia");
        gestionUsuarios.editarUsuario("usuario","nuevoUsername", "nuevaContrasenia")
        expect(gestionUsuarios.obtenerUsuario("nuevoUsername")).toEqual(usuarioEsperado);
    });
});