const area = document.querySelector('.area');
let move = 0;
let result = '';
const content = document.getElementById('content');
const modal = document.getElementById('modal-result');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
const btn = document.getElementById('btn');
const info = document.querySelector('.info');
let currentPlayer = document.getElementById('currentPlayer');
const header = document.querySelector('.header');

// Fill the box 

area.addEventListener('click', e => {
        if (!e.target.innerHTML) {
            if (e.target.className = 'box') {
                // console.log(e.target);
                move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
                move++;  
                check();
                changeTurn();
                playAudio()
              }
        } else {
            alert('The box is already filled');
        }
})  

// Who is the winner

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const array = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]

    for (i = 0; i < array.length; i++) {
        if (
            boxes[array[i][0]].innerHTML == 'X' && boxes[array[i][1]].innerHTML == 'X' && boxes[array[i][2]].innerHTML == 'X'
        ) {
            result = 'X';
            preResult(result);
        } else if (
            boxes[array[i][0]].innerHTML == 'O' && boxes[array[i][1]].innerHTML == 'O' && boxes[array[i][2]].innerHTML == 'O'
        ) {
            result = 'O';
            preResult(result);
        } else if (
            move == 9
        ){
            result = 'In a Draw!'
            preResult2(result);
        }   
    }
}

const preResult = winner => {
    // console.log(winner);
    content.innerHTML = `Won ${winner} !`;
    modal.style.display = 'block';
} 

const preResult2 = draw => {
    content.innerHTML = `${draw}`;
    modal.style.display = 'block';
} 

// Change turn

const changeTurn = () => {
    switch (currentPlayer.innerText) {
        case 'X': currentPlayer.innerText = 'O' 
        break;
        default: currentPlayer.innerText = 'X'
    }
}

// Modal 

const closeModal = () => {
    modal.style.display = 'none';
    location.reload();
}

overlay.addEventListener ('click' , closeModal);
btnClose.addEventListener ('click' , closeModal);

// Reset Game 

btn.addEventListener('click', () => {
    location.reload();
});

header.addEventListener('click', () => {
    location.reload();
});

// Day or Night 

const dayNightMode = () => {
    const date =  new Date();
    const hour = date.getHours();

    if (hour >= 7 && hour <= 21) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        info.style.color = 'white';
    }
}

window.addEventListener('load', dayNightMode);

// Audio click

const audio = new Audio();

function playAudio() {
  audio.src = 'assets/click.mp3'
  audio.currentTime = 0;
  audio.play();
}