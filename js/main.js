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
        console.log(data)
        console.log(data.cards[0].image)
        console.log(data.cards[1].image)
        document.querySelector("#Player1").src = data.cards[0].image
        document.querySelector("#Player2").src = data.cards[1].image
        let player1Val = valOfCard(data.cards[0].value)
        let player2Val = valOfCard(data.cards[1].value)
        if(player1Val>player2Val){
          document.querySelector("h3").innerText = "🏆 The Winner Is Player 1"

        }
        else if(player1Val==player2Val){
          document.querySelector("h3").innerText = "🏆 The Winner Is Player 2"
        }
        else{
          document.querySelector("h3").innerText = "Lets go to War"
        }
      
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function valOfCard(val){
  if(val == "KING"){
    return 13
  }
  else if(val=="JACK"){
    return 11
  }
  else if(val=="QUEEN"){
    return 12
  }
  else if(val=="ACE"){
    return 14
  }
  else{
    return val
  }
    

}


