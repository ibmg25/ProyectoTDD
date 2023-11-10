class Validador{

    validarTituloKata(kata){
        let valido = false;
        const longitudMinima = 3;
        const longitudMaxima = 100;
        const regex = /^[A-Za-z0-9\s]+$/;
        if (kata.getTitulo().length>longitudMinima && kata.getTitulo().length<longitudMaxima && regex.test(kata.getTitulo())) {
            valido = true;
        }
        return valido;
    }

    validarCategoriaKata(kata){
        let valido = false;
        const categorias = [
            "Ninguna",
            "Lógica y matematicas",
            "Validacion y formularios",
            "Lógica y matematicas"


        ];
        if (categorias.includes(kata.getCategoria())) {
            valido = true;
        }
        return valido;

    }

    validarDificultadKata(kata){
        let valido = false;
        const nivelesDificultad = [
            "Facil",
            "Media",
            "Dificil"
        ];
        if (nivelesDificultad.includes(kata.getDificultad())) {
            valido = true;
        }
        return valido;

    }

    validarDescripcionKata(kata){
        let valido = false;
    
        if (kata.getDescripcion().length > 0) {
            valido = true;
        }
        return valido;

    }

    validarKata(kata){
        let valido = false;
        if (this.validarTituloKata(kata) && 
        this.validarCategoriaKata(kata) && 
        this.validarDificultadKata(kata) && 
        this.validarDescripcionKata(kata)) {
            valido = true;
        }
        return valido;
    }
}


export default Validador;