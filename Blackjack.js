var finalCard = 'Back'
var cardfinal = 'A'
var suitfinal = 'Clubs-'
console.log('Card Images: http://acbl.mybigcommerce.com/52-playing-cards/')

var cards_dict = [
	"Clubs-A",
	"Clubs-2",
	"Clubs-3",
	"Clubs-4",
	"Clubs-5",
	"Clubs-6",
	"Clubs-7",
	"Clubs-8",
	"Clubs-9",
	"Clubs-10",
	"Clubs-J",
	"Clubs-Q",
	"Clubs-K",
	"Diamonds-A",
	"Diamonds-2",
	"Diamonds-3",
	"Diamonds-4",
	"Diamonds-5",
	"Diamonds-6",
	"Diamonds-7",
	"Diamonds-8",
	"Diamonds-9",
	"Diamonds-10",
	"Diamonds-J",
	"Diamonds-Q",
	"Diamonds-K",
	"Hearts-A",
	"Hearts-2",
	"Hearts-3",
	"Hearts-4",
	"Hearts-5",
	"Hearts-6",
	"Hearts-7",
	"Hearts-8",
	"Hearts-9",
	"Hearts-10",
	"Hearts-J",
	"Hearts-Q",
	"Hearts-K",
	"Spades-A",
	"Spades-2",
	"Spades-3",
	"Spades-4",
	"Spades-5",
	"Spades-6",
	"Spades-7",
	"Spades-8",
	"Spades-9",
	"Spades-10",
	"Spades-J",
	"Spades-Q",
	"Spades-K",
	"Back",
	"Blank"
]

var cards_reset = [
	"Clubs-A",
	"Clubs-2",
	"Clubs-3",
	"Clubs-4",
	"Clubs-5",
	"Clubs-6",
	"Clubs-7",
	"Clubs-8",
	"Clubs-9",
	"Clubs-10",
	"Clubs-J",
	"Clubs-Q",
	"Clubs-K",
	"Diamonds-A",
	"Diamonds-2",
	"Diamonds-3",
	"Diamonds-4",
	"Diamonds-5",
	"Diamonds-6",
	"Diamonds-7",
	"Diamonds-8",
	"Diamonds-9",
	"Diamonds-10",
	"Diamonds-J",
	"Diamonds-Q",
	"Diamonds-K",
	"Hearts-A",
	"Hearts-2",
	"Hearts-3",
	"Hearts-4",
	"Hearts-5",
	"Hearts-6",
	"Hearts-7",
	"Hearts-8",
	"Hearts-9",
	"Hearts-10",
	"Hearts-J",
	"Hearts-Q",
	"Hearts-K",
	"Spades-A",
	"Spades-2",
	"Spades-3",
	"Spades-4",
	"Spades-5",
	"Spades-6",
	"Spades-7",
	"Spades-8",
	"Spades-9",
	"Spades-10",
	"Spades-J",
	"Spades-Q",
	"Spades-K",
	"Back",
	"Blank"
]

cards = {}

function cardImg(cardName) {
	//console.log('Card Name: ' + cardName)
	cardImgSrc = 'Images/Cards/' + cardName.replaceAll('-', '/') + '.png';
	return cardImgSrc;
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function resetVars() {
	finalCard = 'Back'
	finalCardNum = 0
	hitNum = 2
	dealerCard = 2
	card1 = 0
	card2 = 0
	card3 = 0
	card4 = 0
	card5 = 0
	card6 = 0
	card7 = 0
	cardTotal = 0
	dealer1 = 0
	dealer2 = 0
	dealer3 = 0
	dealer4 = 0
	dealer5 = 0
	dealer6 = 0
	dealer7 = 0
	dealerTotal = 0
	dealersCard2 = 0
	document.getElementById('DealerCard1').src = cardImg('Back')
	document.getElementById('DealerCard2').src = cardImg('Back')
	document.getElementById('DealerCard3').src = cardImg('Blank')
	document.getElementById('DealerCard4').src = cardImg('Blank')
	document.getElementById('DealerCard5').src = cardImg('Blank')
	document.getElementById('DealerCard6').src = cardImg('Blank')
	document.getElementById('DealerCard7').src = cardImg('Blank')
	document.getElementById('Card1').src = cardImg('Back')
	document.getElementById('Card2').src = cardImg('Back')
	document.getElementById('Card3').src = cardImg('Blank')
	document.getElementById('Card4').src = cardImg('Blank')
	document.getElementById('Card5').src = cardImg('Blank')
	document.getElementById('Card6').src = cardImg('Blank')
	document.getElementById('Card7').src = cardImg('Blank')
	document.getElementById('PlayerTotal').value = '0'
	document.getElementById('DealerTotal').value = '0'
	document.getElementById("Hit").disabled = false;
	document.getElementById("Stand").disabled = false;
	document.getElementById("Play_Again").disabled = true;
	document.getElementById("-").disabled = false;
	document.getElementById("+").disabled = false;
}

function resetDeck() {
	cards = cards_reset;
	cards.splice(52, 2);
	//console.log(cards)
}

function generateNewCard() {
	if (cards.length == 0) {
	  resetDeck()
	}
	maxNum = cards.length
	//console.log('Max Num:', maxNum)
	cardGen = String(generateRandomNumber(maxNum - 1))
	//console.log('Card Gen:', cardGen)
	finalCard = String(cards[parseInt(cardGen)])
	//console.log('Final Card:', finalCard)
	finalCardNum = finalCard.split('-')[1]
	//console.log('Final Card Num:', finalCardNum)
	if (finalCardNum == 'J' || finalCardNum == 'Q' || finalCardNum == 'K') {
	  finalCardNum = '10'
	} else if (finalCardNum == 'A') {
	  finalCardNum = '1'
	}
	//console.log(parseInt(cardGen))
	cards.splice(cards.indexOf(parseInt(cardGen)), 1)
	//del cards[parseInt(cardGen)]
}

function addcards() {
	cardTotal = parseInt(card1) + parseInt(card2) + parseInt(card3) + parseInt(card4) + parseInt(card5) + parseInt(card6) + parseInt(card7)
	//console.log("Player 1:", card1)
	//console.log("Player 2:", card2)
	//console.log("Player 3:", card3)
	//console.log("Player 4:", card4)
	//console.log("Player 5:", card5)
	//console.log("Player 6:", card6)
	//console.log("Player 7:", card7)
	dealerTotal = parseInt(dealer1) + parseInt(dealer2) + parseInt(dealer3) + parseInt(dealer4) + parseInt(dealer5) + parseInt(dealer6) + parseInt(dealer7)
	//console.log("Dealer 1:", dealer1)
	//console.log("Dealer 2:", dealer2)
	//console.log("Dealer 3:", dealer3)
	//console.log("Dealer 4:", dealer4)
	//console.log("Dealer 5:", dealer5)
	//console.log("Dealer 6:", dealer6)
	//console.log("Dealer 7:", dealer7)
	if (cardTotal > 21) {
		document.getElementById('Status').value = 'Status: Player Busted!'
		document.getElementById("Hit").disabled = true;
		document.getElementById("Stand").disabled = true;
		document.getElementById("Play_Again").disabled = false;
		coins = coins - bet
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
		
	} else if (cardTotal == 21) {
		document.getElementById('Status').value = 'Status: Player Wins!'
		document.getElementById("Hit").disabled = true;
		document.getElementById("Stand").disabled = true;
		document.getElementById("Play_Again").disabled = false;
		coins = parseInt(coins + bet + bet)
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	}
}

function increaseBet() {
	bet = bet + 10
	if (bet > coins) {
		bet = coins
	}
	document.getElementById('Bet').value = 'Current Bet: ' + String(bet)
}

function decreaseBet() {
	bet = bet - 10
	if (bet <= 0) {
		bet = 10
	}
	document.getElementById('Bet').value = 'Current Bet: ' + String(bet)
}

function playerHit() {
	document.getElementById("-").disabled = true;
	document.getElementById("+").disabled = true;
	hitNum = hitNum + 1
	if (hitNum == 8) {
		return
	}
	generateNewCard()
	if (hitNum == 3) {
		card3 = finalCardNum
		addcards()
	} else if (hitNum == 4) {
		card4 = finalCardNum
		addcards()
	} else if (hitNum == 5) {
		card5 = finalCardNum
		addcards()
	} else if (hitNum == 6) {
		card6 = finalCardNum
		addcards()
	} else if (hitNum == 7) {
		card7 = finalCardNum
		addcards()
	}
	document.getElementById('Card' + String(hitNum)).src = cardImg(finalCard)
	document.getElementById('PlayerTotal').value = 'Total: ' + String(cardTotal)
}

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

function playerStand() {
	document.getElementById("-").disabled = true;
	document.getElementById("+").disabled = true;
	document.getElementById("Hit").disabled = true;
	document.getElementById("Stand").disabled = true;
	document.getElementById('Status').value = 'Status: Waiting on Dealer...'
	document.getElementById('DealerCard2').src = cardImg(finalCard)
	addcards()
	while (dealerTotal <= cardTotal && dealerTotal < 18) {
		generateNewCard()
		dealerCard = dealerCard + 1
			document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
		if (dealerCard == 8) {
			break
		} else if (dealerCard == 3) {
			dealer3 = finalCardNum
			addcards()
		} else if (dealerCard == 4) {
			dealer4 = finalCardNum
			addcards()
		} else if (dealerCard == 5) {
			dealer5 = finalCardNum
			addcards()
		} else if (dealerCard == 6) {
			dealer6 = finalCardNum
			addcards()
		} else if (dealerCard == 7) {
			dealer7 = finalCardNum
			addcards()
		}
		document.getElementById('DealerCard' + String(dealerCard)).src = cardImg(finalCard)
	}
	if (dealerTotal == 18 && cardTotal == 18 || dealerTotal == cardTotal) {
		document.getElementById('Status').value = 'Status: Draw!'
		document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
		document.getElementById("Play_Again").disabled = false;
		coins = coins
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	} else if (dealerTotal > 21) {
		document.getElementById('Status').value = 'Status: Dealer Busted!'
		document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
		document.getElementById("Play_Again").disabled = false;
		coins = coins + bet
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	} else if (dealerTotal == 21) {
		document.getElementById('Status').value = 'Status: Dealer Wins!'
		document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
		document.getElementById("Play_Again").disabled = false;
		coins = coins - bet
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	} else if (dealerTotal == 18 && inRange(cardTotal, 19, 22)) {
		document.getElementById('Status').value = 'Status: Player Wins!'
		document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
		document.getElementById('DealerCard2').src = cards_reset[parseInt(dealersCard2)]
		document.getElementById("Play_Again").disabled = false;
		coins = coins + bet
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	} else if (cardTotal > 21) {
		document.getElementById('Status').value = 'Status: Player Busted!'
		document.getElementById("Hit").disabled = true;
		document.getElementById("Stand").disabled = true;
		document.getElementById("Play_Again").disabled = false;
		coins = coins - bet
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	} else if (cardTotal == 21) {
		document.getElementById('Status').value = 'Status: Player Wins!'
		document.getElementById("Hit").disabled = true;
		document.getElementById("Stand").disabled = true;
		document.getElementById("Play_Again").disabled = false;
		coins = coins + bet + bet
		coins = parseInt(coins)
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	} else {
		document.getElementById('Status').value = 'Status: Dealer Wins!'
		document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
		document.getElementById("Play_Again").disabled = false;
		coins = coins - bet
		document.getElementById('Coins').value = 'Coins: ' + String(coins)
	}
}

function playAgain() {
	document.getElementById('Status').value = 'Status: New Round Started!'
	resetVars()
	generateNewCard()
	card1 = finalCardNum
	document.getElementById('Card1').src = cardImg(finalCard)
	generateNewCard()
	card2 = finalCardNum
	document.getElementById('Card2').src = cardImg(finalCard)
	generateNewCard()
	dealer1 = finalCardNum
	document.getElementById('DealerCard1').src = cardImg(finalCard)
	addcards()
	document.getElementById('PlayerTotal').value = 'Total: ' + String(cardTotal)
	document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
	generateNewCard()
	dealer2 = finalCardNum
	dealersCard2 = finalCardNum
}

function newGame() {
	document.getElementById('Status').value = 'Status: New Game Started!'
	resetVars()
	resetDeck()
	coins = 100
	document.getElementById('Coins').value = 'Coins: ' + String(coins)
	generateNewCard()
	card1 = finalCardNum
	document.getElementById('Card1').src = cardImg(finalCard)
	generateNewCard()
	card2 = finalCardNum
	document.getElementById('Card2').src = cardImg(finalCard)
	generateNewCard()
	dealer1 = finalCardNum
	document.getElementById('DealerCard1').src = cardImg(finalCard)
	addcards()
	document.getElementById('PlayerTotal').value = 'Total: ' + String(cardTotal)
	document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
	generateNewCard()
	dealer2 = finalCardNum
	dealersCard2 = finalCardNum
}

resetVars()
resetDeck()
coins = 100
document.getElementById('Coins').value = 'Coins: ' + String(coins)
bet = 10
document.getElementById("Hit").disabled = false;
document.getElementById("Stand").disabled = false;
generateNewCard()
//console.log(finalCard)
card1 = finalCardNum
document.getElementById('Card1').src = cardImg(finalCard)
generateNewCard()
//console.log(finalCard)
card2 = finalCardNum
document.getElementById('Card2').src = cardImg(finalCard)
generateNewCard()
dealer1 = finalCardNum
document.getElementById('DealerCard1').src = cardImg(finalCard)
addcards()
document.getElementById('PlayerTotal').value = 'Total: ' + String(cardTotal)
document.getElementById('DealerTotal').value = 'Total: ' + String(dealerTotal)
generateNewCard()
dealer2 = finalCardNum
dealersCard2 = finalCardNum

document.getElementById('Status').value = 'Status: Waiting on Player...'
document.getElementById('Coins').value = 'Coins: ' + String(coins)

if (coins <= 0) {
	document.getElementById("Hit").disabled = true;
	document.getElementById("Stand").disabled = true;
	document.getElementById("Play_Again").disabled = true;
}