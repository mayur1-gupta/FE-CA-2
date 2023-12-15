document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    const cardArray = [
      {
        name: 'fries',
        img: './images/fries.png'
      },
      {
        name: 'fries',
        img: './images/fries.png'
      },
      {
        name: 'fries',
        img: './images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
      },
      {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
      },
      {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: './images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: './images/pizza.png'
      },
      {
        name: 'milkshake',
        img: './images/milkshake.png'},
      {
        name: 'hotdog',
        img: './images/hotdog.png'},
        {
            name: 'fries',
            img: './images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: './images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: './images/pizza.png'
          },
          {
            name: 'milkshake',
            img: './images/milkshake.png'},
          {
            name: 'hotdog',
            img: './images/hotdog.png'},
       
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        
        card.setAttribute('src', 'images/box-image.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    // check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/box-image.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/box-image.jpeg')
      
        
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/box-image.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/box-image.jpeg')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        window.location.href = "./resultPage.html";
      }
      localStorage.setItem("score", cardsWon.length);

    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 350)
      }
    }
    createBoard()
  })



//setTimeOut
  let count = 30;
  const setTimeo = document.getElementById('setTimeOut');
  function setTime() {
    count--;
    setTime.innerText = count;
    if (count == 0) {
      window.location.href = "./resultPage.html";
    }
  }

// time count
  setInterval(() => {
    count--
    document.getElementById('timeLeft').innerHTML = count;
    if(count == 0) {
      window.location.href = "./resultPage.html";
    }
    
  }, 1000);



// player name 
var playerName= document.getElementById('playerName')
names = localStorage.getItem('name');
playerName.innerHTML = names;