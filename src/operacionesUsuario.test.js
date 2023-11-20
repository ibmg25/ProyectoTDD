import GestionUsuarios from "./gestionUsuarios";

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
});
