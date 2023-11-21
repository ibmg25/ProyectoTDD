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
});
