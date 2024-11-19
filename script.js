// script.js

let interval; // Declaração fora da função para manter referência global

function startTimer(minutes) {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('resetButton').style.display = 'block';

    const timerElement = document.getElementById('timer');
    let time = minutes * 60;
    timerElement.textContent = formatTime(time);

    interval = setInterval(() => {
        time--;
        timerElement.textContent = formatTime(time);

        if (time <= 0) {
            clearInterval(interval);
            timerElement.textContent = 'Tempo terminado!';
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function resetTimer() {
    clearInterval(interval); // Limpar o intervalo ao reiniciar
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('timer').textContent = '';
}
