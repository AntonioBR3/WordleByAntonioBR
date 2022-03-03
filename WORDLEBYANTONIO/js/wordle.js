/*********************************************************************************************************************
    *Este fichero contiene todas las funciones y variables del juego woordle
*/
//Esto es una prueba de random
    var listaPalabras = ['bebes', 'besen', 'beses', 'besos', 'betas', 'cuñas', 'crees', 'cojos', 'ajito','ayuda','adobo','añejo','algas', 'avion', 'copas', 'duelo'];
//Esto es una prueba de seleccion random
//Palabra a descifrar para poder ganar
    var palabraBuscada = [];
//Ultima palabra añadida. Sirve para recorrer la lista de palabras.
    var n = 0;

    var nombreJugador = [];

/**ocultar las casillas del input */
function ocultarCasillas() {
    for(let i=1;i<6;i++){
        $('#fila' + i).css('display', 'none');
    }
}

//Muestra la siguiente fila y bloquea la actual
function mostrarSiguientesCasillas(){
    //desabilitar input anteriores a este
    $('#fila' + n).children().prop('disabled', true);
    n++;
    //Muestra el siguiente section
    $('#fila' + n).css('display','block');
}
//Esta función de lo que se encarga es de comprobar si la palabara contiene las letras
function comprobarPalabra() {
    var inputs = $('#fila' + n).children();
    //Aquí recogemos la palabra de los inputs
    var palabra = [];
    //
    var posicionesCorrectas = 0;

    //
    for(i = 0; i < 5; i++) {
        palabra [i] = inputs.eq(i).val();
       
        //
        for (j = 0; j < 5; j++) {
            if (palabra[i] == palabraBuscada[j]) {
                if (i == j) {
                    //Si el input es igual a i se colorea el fondo
                    inputs.eq(i).css('background-color', '#198754');
                    posicionesCorrectas++;
                    //
                    if(posicionesCorrectas == 5) return true;
                    break; //termina el bucle y continua
                }
                else {
                    //Se encuentra en otra posición
                    inputs.eq(i).css('background-color', '#ffc107');
                }
            }
        }
    }
}
function palabraAleatoria(){
    palabraBuscada = listaPalabras[ Math.floor( Math.random() * listaPalabras.length) ]
    console.log(palabraBuscada);
}

function puntuacionPalabra(){
//Esta variable se encargará de recoger los puntos que se van acumulando.
    var puntos = 0;
//Esta varible recoje el nombre del jugador para almacenarlo.

    $('.boton1').click(function(){
                
        if( comprobarPalabra()){ 
           puntos = puntos + 5;
           $('#escribirPuntos').text(puntos);

        }
        else {
            puntos = 0;
        }
    
    });
}

function nombreJugador0(){
    
    $('.boton2').click(function(){
        
    var nombreJugador = $('#inputWin').val();
    console.log(nombreJugador);     
    });
}