//Example fetch using pokemonapi.co

let Did;
fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        Did = data.deck_id;
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



document.querySelector('button').addEventListener('click', getCards)

function getCards(){
  
  const url = `https://deckofcardsapi.com/api/deck/${Did}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.cards[0].image)
        console.log(data.cards[1].image)
        document.querySelector("#Player1").src = data.cards[0].image
        document.querySelector("#Player2").src = data.cards[1].image
      
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

