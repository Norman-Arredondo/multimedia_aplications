const STATE_RUNNING = 1;
const STATE_LOSING = 2;
let contador;

const TICK = 80; // 80 milisegundos para el desplazamiento
const SQUARE_SIZE = 10; //Tamaño de los Cuadros que se van a ir dibujando en el juego
const BOARD_WIDTH = 50; //Para dterminar el ancho virtual del juego (cuántos cuadros caben)
const BOARD_HEIGHT = 50; //Para dterminar el alto virtual del juego (cuántos cuadros caben)

const GROW_SCALE = 10; //Los cuadros que creerá la serpiente cada vez que coma un cuadro

/*Mapa de teclas del teclado para la dirección a la que se moverá la serpiente
 *En mayusculas y minúsculas
 */
const DIRECTIONS_MAP = {
    'A': [-1, 0], //[Desplazamiento en X , Desplazamiento en Y]
    'D': [1, 0],
    'S': [0, 1],
    'W': [0, -1],
    'a': [-1, 0],
    'd': [1, 0],
    's': [0, 1],
    'w': [0, -1],
};

//Variables de estado del juego
let state = {
    canvas: null, //referencia al elemento canvas de html
    context: null, //derivado de la variable canvas
    snake: [{
        /*Arreglo que tiene las posiciones de todos los puntos
         * de espacio de juego donde se encuentra la serpiente
         * Tiene un valor por defecto de x:0, y:0 que se cambiará por uno aleatorio*/
        x: 0,
        y: 0
    }],
    direction: {
        x: 1,
        y: 0
    },
    prey: {
        x: 0,
        y: 0
    },
    growing: 0,
    runState: STATE_RUNNING
};


/*Funcion qu genera posiciones aleatorias
 * Retorna un objeto de X y Y aleatorio
 * Pero para X se multiplica por el ancho
 * Y se multiplica por el alto*/
function randomXY() {
    return {
        x: parseInt(Math.random() * BOARD_WIDTH),
        y: parseInt(Math.random() * BOARD_HEIGHT)
    };
}

function tick() {
    const head = state.snake[0];
    const dx = state.direction.x;
    const dy = state.direction.y;
    const highestIndex = state.snake.length - 1;
    let tail = {};
    let interval = TICK;

    Object.assign(tail,
        state.snake[state.snake.length - 1]);

    let didScore = (
        head.x === state.prey.x &&
        head.y === state.prey.y
        //Si la condición se cumple, se puede considerar que se puntuó 
    );

    /*Desplazamiento de la serpiente*/
    if (state.runState === STATE_RUNNING) {
        for (let idx = highestIndex; idx > -1; idx--) {
            const sq = state.snake[idx];

            if (idx === 0) {
                sq.x += dx;
                sq.y += dy;
            } else {
                sq.x = state.snake[idx - 1].x;
                sq.y = state.snake[idx - 1].y;
            }
        }
    } else if (state.runState === STATE_LOSING) {
        interval = 10;

        if (state.snake.length > 0) {
            state.snake.splice(0, 1);
        }

        if (state.snake.length === 0) {
            state.runState = STATE_RUNNING;
            state.snake.push(randomXY());
            state.prey = randomXY();
        }
    }

    if (detectCollision()) {
        state.runState = STATE_LOSING;
        state.growing = 0;
    }

    if (didScore) {
        state.growing += GROW_SCALE;
        state.prey = randomXY();

    }

    console.log(contador);

    if (state.growing > 0) {
        state.snake.push(tail);
        state.growing -= 1;
    }

    requestAnimationFrame(draw);
    setTimeout(tick, interval);
}

function detectCollision() {
    const head = state.snake[0];

    if (head.x < 0 ||
        head.x >= BOARD_WIDTH ||
        head.y >= BOARD_HEIGHT ||
        head.y < 0
    ) {
        return true;
    }

    for (var idx = 1; idx < state.snake.length; idx++) {
        const sq = state.snake[idx];

        if (sq.x === head.x && sq.y === head.y) {
            return true;
        }
    }

    return false;
}

/*Funciones para que hagan el trabajo de dibujado*/
function drawPixel(color, x, y) {
    state.context.fillStyle = color;
    state.context.fillRect(
        x * SQUARE_SIZE,
        y * SQUARE_SIZE,
        SQUARE_SIZE,
        SQUARE_SIZE
    );
}

function draw() {
    state.context.clearRect(0, 0, 500, 500);

    for (var idx = 0; idx < state.snake.length; idx++) {
        const {
            x,
            y
        } = state.snake[idx];
        drawPixel('#22dd22', x, y); //color de la serpiente
    }

    const {
        x,
        y
    } = state.prey;
    drawPixel('yellow', x, y); //color de la comida
}

window.onload = function() {
    state.canvas = document.querySelector('canvas');
    state.context = state.canvas.getContext('2d'); //Referenciacion del contexto de dibujo

    window.onkeydown = function(e) {
        const direction = DIRECTIONS_MAP[e.key];

        if (direction) {
            const [x, y] = direction;
            if (-x !== state.direction.x &&
                -y !== state.direction.y) {
                state.direction.x = x;
                state.direction.y = y;
            }
        }
    }

    tick();
};