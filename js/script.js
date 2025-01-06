let interval; // Declaração fora da função para manter referência global
const endSound = document.getElementById('end-sound'); // Referência ao áudio de finalização

function startTimer(minutes) {
    document.getElementById('hover-btn').style.display = 'none';
    document.getElementById('resetButton').style.display = 'block';

    const timerElement = document.getElementById('timer');
    let time = minutes * 60;
    timerElement.textContent = formatTime(time);

    const hoverSound = document.getElementById('hover-sound'); // Usando o mesmo som para o hover e o tic

    interval = setInterval(() => {
        time--;
        timerElement.textContent = formatTime(time);

        // Toca o som a cada segundo
        hoverSound.play(); // Reutilizando o som de hover a cada segundo

        if (time <= 0) {
            clearInterval(interval); // Para o cronômetro
            timerElement.textContent = 'Tempo terminado!';
            endSound.play(); // Toca o som de finalização
        }
    }, 1000);
}

// Função para formatar o tempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

// Função para resetar o cronômetro
function resetTimer() {
    clearInterval(interval); // Limpar o intervalo ao reiniciar
    document.getElementById('hover-btn').style.display = 'block';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('timer').textContent = '';

    // Parar o áudio de finalização e resetar para o início
    endSound.pause();
    endSound.currentTime = 0; // Reseta a posição do áudio para o início
}

