
let computerNumber //Inicia uma variável vazia.
let userNumbers = [] //Variavel que armazena os números que o usuário vai digitar
let attempts = 0 //Variável que armazena o número de tentativas
let maxguesses = 5

const button = document.getElementById('newGameButton')

button.addEventListener('click', function(){
    window.location.reload()
});



//Função para gerar números aleatórios de 0 a 100, toda vez que a página é carregada.
//Função chamada direto no html
function init() {
   computerNumber = Math.floor(Math.random() * 100 + 1)
//    console.log(computerNumber)
}

//Função que pega os valores digitados no input e os retorna na página HTML
function compareNumbers(){
   const userNumber = Number(document.getElementById('inputBox').value);
   
    if (userNumber <= 100) {
        userNumbers.push(' ' + userNumber)
        document.getElementById('guesses').innerHTML = userNumbers
        
    }else{
        alert('Digite um número válido entre 1 e 100')
        
    }

   
   if (attempts < maxguesses) {
    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too high'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
       }
       else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too low'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
       }
       else {
        document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
        attempts++
        document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
       }
}
else {
    document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
}

}