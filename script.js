document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    let countdownInterval;

    function startCountdown() {
        // Defina a data alvo da contagem regressiva (substitua com a sua data)
        const targetDate = new Date('2024-12-31T23:59:59').getTime();

        clearInterval(countdownInterval); // Limpa qualquer intervalo existente

        countdownInterval = setInterval(function() {
            const currentDate = new Date().getTime();
            const timeRemaining = targetDate - currentDate;

            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            const formattedTime = ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};

            countdownElement.textContent = formattedTime;
        }, 1000);
    }

    // Inicialize a contagem regressiva
    startCountdown();
});