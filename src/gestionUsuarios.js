import { version } from "@babel/core";
import Usuario from "./usuario";

class GestionUsuarios{
    constructor(){
        this.usuariosRegistrados = [];
    }

    obtenerUsuario(nombreDeUsuario){
        const usuario = this.usuariosRegistrados.find(u => nombreDeUsuario === u.obtenerNombreDeUsuario() ); 
        return usuario;
    }

    registrarUsuario(nombreDeUsuario, contrasenia){
        let mensaje = "¡Bienvenido " + nombreDeUsuario +"! Tu registro se ha completado con éxito.";
        
        if (this.obtenerUsuario(nombreDeUsuario) != undefined){
            mensaje = "Lo sentimos, este nombre de usuario ya está siendo utilizado.";
        }
        else{
            const nuevoUsuario = new Usuario(nombreDeUsuario, contrasenia);
            this.usuariosRegistrados.push(nuevoUsuario);
        }
        return mensaje;
    }
    VerficarUsuario(nombre,contrasenia) {
        let verificar=false;        
        let mensaje = "Lo sentimos, usuario o contrasenia incorrectos.";
        for (let i = 0; i < this.usuariosRegistrados.length; i++) {
           if(this.usuariosRegistrados[i].obtenerNombreDeUsuario()==nombre)
           {
                if(this.usuariosRegistrados[i].obtenerContrasenia()==contrasenia)
                {
                    verificar=true;
                }
           }
        }
        if(verificar==true)
        {
            return verificar;
           
        }
        return mensaje;
       
    }


    obtenerUsuarios(){
        return this.usuariosRegistrados;
    }
}
export default GestionUsuarios;