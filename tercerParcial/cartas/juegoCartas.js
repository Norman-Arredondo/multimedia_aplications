    var cartas = new Array( 
    {nombre: 'Diseño', seleccion: false}, {nombre: 'Prototipo', seleccion: false}, 
    {nombre: 'Interfaz', seleccion: false}, {nombre: 'Modelado', seleccion: false}, 
    {nombre: 'Usabilidad', seleccion: false}, {nombre: 'Ergonomia', seleccion: false}, 
    {nombre: 'Multimedia', seleccion: false}, {nombre: 'Manual', seleccion: false}, 
    {nombre: 'Diseño', seleccion: false}, {nombre: 'Prototipo', seleccion: false}, 
    {nombre: 'Interfaz', seleccion: false}, {nombre: 'Modelado', seleccion: false}, 
    {nombre: 'Usabilidad', seleccion: false}, {nombre: 'Ergonomia', seleccion: false}, 
    {nombre: 'Multimedia', seleccion: false}, {nombre: 'Manual', seleccion: false} );
    
    var intentos = 0;
    var jugada1 = "";
    var jugada2 = "";
    var identificadorJ1 = "";
    var identificadorJ2 = "";

    function iniciarJuego () {  
      var dato = document.getElementById("juego");
      dato.style.opacity = 1;

      cartas.sort(function() {return Math.random() - 0.5});
      for ( var i = 0 ; i < 16 ; i++ ) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById( i.toString() );
        dato.dataset.valor = carta;
      }
    };

    function resetearJuego () {
      cartas.sort(function() {return Math.random() - 0.5});
      for ( var i = 0 ; i < 16 ; i++ ) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById( i.toString() );
        dato.dataset.valor = carta;
        colorCambio( i, '#61045F', '?');
      } 
    }

    function girarCarta () {
      var evento = window.event;

      jugada2 = evento.target.dataset.valor;
      identificadorJ2 = evento.target.id;


      if ( jugada1 !== "" ) {

        if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true &&               cartas[parseInt(identificadorJ1)].seleccion != true) {
          
          cartas[parseInt(identificadorJ1)].seleccion = true;
          cartas[parseInt(identificadorJ2)].seleccion = true;

          colorCambio(identificadorJ2, "#AA076B", jugada2);
          vaciar();
          comprobar();
        }else if(identificadorJ1 !== identificadorJ2){
          var self = this;
          setTimeout(function(){
            colorCambio(self.identificadorJ1, "#61045F", "?")
            colorCambio(self.identificadorJ2, "#61045F", "?")
            vaciar()
          },200); 

          colorCambio(identificadorJ2, "#AA076B", jugada2);
        }
      } else if(jugada2 !== "valor") {

        colorCambio(identificadorJ2, "#AA076B", jugada2);

        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
      }
    };

    function vaciar ()  {
      jugada1 = ""; 
      jugada2 = ""; 

      identificadorJ1 = "";
      identificadorJ2 = "";
    }

    function colorCambio (posicion, color, contenido) {
      document.getElementById(posicion.toString()).style.backgroundColor = color;
      document.getElementById(posicion.toString()).innerHTML = contenido;
    } 

    function comprobar () {
      var aciertos = 0;
      for( var i = 0 ; i < 16 ; i++ ){
        if ( cartas[i].seleccion == true ) {
          aciertos ++;
        }

      }

      if(aciertos == 16){
        alert("GANASTE");
        //document.getElementById("juego").innerHTML = "GANASTE";
      }
    }

    function resetearJuego () {
          cartas.sort(function() { return Math.random() - 0.5});
          for ( var i = 0; i < 16 ; i++ ) {
            var carta = cartas[i].nombre;
            var dato = document.getElementById( i.toString() );
            dato.dataset.valor = carta;
            colorCambio(i, '#61045F', '?');
          }
        };
