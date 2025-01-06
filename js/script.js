let interval; // Declaração fora da função para manter referência global
const endSound = document.getElementById('end-sound'); // Referência ao áudio de finalização

function startTimer(minutes) {
    document.getElementById('hover-btn').style.display = 'none';
    document.getElementById('resetButton').style.display = 'block';

    const timerElement = document.getElementById('timer');
    let time = minutes * 60;
    timerElement.textContent = formatTime(time);

    const hoverSound = document.getElementById('hover-sound');

    interval = setInterval(() => {
        time--;
        timerElement.textContent = formatTime(time);

       
        hoverSound.play(); 

        if (time <= 0) {
            clearInterval(interval);
            timerElement.textContent = 'Bom trabalho, bom apetite!';
            endSound.play(); 
        }
    }, 1000);
}

//   formatar o tempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

//   resetar o cronômetro
function resetTimer() {
    clearInterval(interval); 
    document.getElementById('hover-btn').style.display = 'block';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('timer').textContent = '';


    endSound.pause();
    endSound.currentTime = 0; 
}

