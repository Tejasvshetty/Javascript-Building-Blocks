//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', drawTwo)


let deckId = " "


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId= data.deck_id
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


function drawTwo(){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        localStorage.clear()
        localStorage.setItem('card',data.cards[0].image)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

