let playerNumber
let playerName
const inputName = document.getElementById('player-name')
const inputNumberShirt = document.getElementById('number-shirt')
const playerData = document.querySelector('.selection-players')

function selectionPlayerAndViewElements (number, name) {
  playerNumber = document.getElementById(number)
  playerName = document.getElementById(name) 

  if(playerNumber === undefined && playerName === undefined){
    alert('Por favor primeiro selecione um Jogador')
  }

  updateInput()

}

function submitDatePlayer(){
  if(playerNumber === undefined && playerName === undefined){
    alert('Por favor primeiro selecione um Jogador')
    return
  }
  playerName.innerText = inputName.value
  playerNumber.innerText = inputNumberShirt.value

  // playerData.classList.remove("view-elements")

  updateInput()
}

function clearDatePlayer(){
  if(playerNumber === undefined && playerName === undefined){
    alert('Por favor primeiro selecione um Jogador')
    return
  }
  playerName.innerText = ""
  playerNumber.innerText = ""

  updateInput()

}

function updateInput(){
  inputName.value = playerName.innerText
  inputNumberShirt.value = playerNumber.innerText

}
