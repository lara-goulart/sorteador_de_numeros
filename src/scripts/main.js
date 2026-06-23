document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(evento) {
        evento.preventDefault()
        let maxNumber = document.getElementById('numero-maximo').value
        maxNumber = parseInt(maxNumber)

        let randomNumber = Math.random() * maxNumber
        randomNumber = Math.floor(randomNumber + 1)
        document.getElementById('resultado-valor').innerText = randomNumber
        document.querySelector('.resultado').style.display = 'block'
    })
})