let rightAnswer;
            let currentQuestionindex = 0;
            let rightAnswers =0; 
            let wrongAnswers =0;
            let timeInterval;
            let time =11;
        
            const cuestionary = [
                {
                    "question": "Fase en la que se evaluan diferentes aspectos de un prototipo",
                    "audio": "./cuestionario/audio/pregunta1.mp3",
                    "answers": ["Experimentacion y validacion", "Analisis", "Diseño", "Desarrollo"]   
                },
                {
                    "question": "Se utiliza como planificacion grafica y documento organizador",
                    "audio": "./cuestionario/audio/pregunta2.mp3",
                    "answers": ["Guion Grafico", "Propuesta grafica", "Diseño Multimedia", "Justificacion"]
                },
                {
                    "question": "Es un proceso de esquematizacion",
                    "audio": "./cuestionario/audio/pregunta3.mp3",
                    "answers": ["Propuesta Grafica", "Guion Grafico", "Diseño Multimedia", "Justificacion"] 
                },
                {
                    "question": "Se define como la apariencia o estilo propuesto",
                    "audio": "./cuestionario/audio/pregunta4.mp3",
                    "answers": ["Justificacion", "Propuesta grafica", "Diseño Multimedia", "Guion Grafico"]
                },
                {
                    "question": "Si hablamos de comunicar información por medios visuales y auditivos hablamos de ",
                    "audio": "./cuestionario/audio/pregunta5.mp3",
                    "answers": ["Diseño Multimedia ", "Propuesta grafica", "Guion Grafico", "Justificacion"]
                },
                {
                    "question": "Fase que consiste en la realizacion de una version inicial del programa",
                    "audio": "./cuestionario/audio/pregunta6.mp3",
                    "answers": ["Desarrollo", "Analisis", "Diseño", "Experimentacion y validacion"]   
                },
                {
                    "question": "Tiene como finalidad recabar informacion sobre los usuarios",
                    "audio": "./cuestionario/audio/pregunta7.mp3",
                    "answers": ["Analisis", "Desarrollo", "Diseño", "Experimentacion y validacion"]   
                },
                {
                    "question": "Es fase vital pues se realiza un manual de consulta para el usuario",
                    "audio": "./cuestionario/audio/pregunta8.mp3",
                    "answers": ["Elaboracion", "Analisis", "Diseño", "Experimentacion y validacion"]   
                },
            ];
           
    const printHTMLQuestion = (i) => {
        currentQuestionindex++;
        const q = cuestionary[i];
        let a = q.answers;
        rightAnswer = a[0];
        a = a.sort((a,b) => Math.floor(Math.random() *3 ) -1);

        let audio =new Audio(q.audio);
        audio.play();

        
        const htmlAnswersArray = a.map( currentA => `<p class= "answer"><button onClick="evaluateAnswer('${currentA}', this)">X</button> <span>${currentA}
            </span><p>`);
            const htmlAnswers = htmlAnswersArray.join('');


            let htmlQuestionCode = `<p>${q.question}</p><div>${htmlAnswers}</div>`; 
        document.querySelector('.question').innerHTML = htmlQuestionCode;

        time=11;
        clearInterval(timeInterval);
        timeInterval = setInterval( ()=>{
            time--;
            if(time==0){
                alert("Has Perdido");
                clearInterval(timeInterval);
            }
            document.querySelector('.time').innerHTML = time;
        },1000)
    }  

    const evaluateAnswer = (answer, obj)=>{
        document.querySelectorAll('.answer').forEach( a => a.classList.remove('right', 'wrong'));

        const parentP = obj.parentNode;
        console.log ('answer: ' + answer + ', rightAnswer: ' + rightAnswer)
        if (answer == rightAnswer){
            parentP.classList.add('right'); 
            rightAnswers++;
            document.querySelector('.rightCounter').innerHTML = rightAnswers;
            alert("CORRECTO");
        }else{
            parentP.classList.add('wrong');
            wrongAnswers++;
            document.querySelector('.wrongCounter').innerHTML = wrongAnswers;
            alert("RESPUESTA ERRONEA");
        }
    }
    const nextQuestion = _ =>{
    }
    const iniciarTest = _ =>{
        printHTMLQuestion(0);
        document.querySelector('.btnIniciar').style.display = 'none';
        document.querySelector('.mamotreto').style.display = 'block';

    } 