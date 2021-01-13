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
        }else{
            parentP.classList.add('wrong');
            wrongAnswers++;
            document.querySelector('.wrongCounter').innerHTML = wrongAnswers;
        }
    }
    const nextQuestion = _ =>{
    }
    const iniciarTest = _ =>{
        printHTMLQuestion(0);
        document.querySelector('.btnIniciar').style.display = 'none';
        document.querySelector('.mamotreto').style.display = 'block';
    } 