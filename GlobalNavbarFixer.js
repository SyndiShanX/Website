/* Checks the Orientation of the Display */
previousScreenOrientation = ''
currentScreenOrientation = ''

/* Checks for any Screen Size Changes and Runs navSwapper if any are found */
if (window.matchMedia("(orientation: portrait)").matches) {
	previousScreenOrientation = currentScreenOrientation
	currentScreenOrientation = 'Portrait'
}
if (window.matchMedia("(orientation: landscape)").matches) {
	previousScreenOrientation = currentScreenOrientation
	currentScreenOrientation = 'Landscape'
}
if (currentScreenOrientation != previousScreenOrientation) {navSwapper()}

/* Add Selection Border to Selector Page in Navbar */
if (window.location.href.split('Zombies/Selector').length != 1) {
	document.getElementsByClassName('zombies')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
}

function navSwapper() {
	/* Creates Minesweeper and Dokustash Generator A Elements */
	if (document.getElementsByClassName("minesweeper")[0] != undefined) {
		minesweeperHTML = document.getElementsByClassName("minesweeper")[0].outerHTML
		blackjackHTML = document.getElementsByClassName("blackjack")[0].outerHTML
		dokustashGeneratorHTML = document.getElementsByClassName("dokustashGenerator")[0].outerHTML
		zombiesHTML = document.getElementsByClassName("zombies")[0].outerHTML
		body = document.getElementsByTagName('body')[0]
		hiddenHTML = document.createElement('div')
		hiddenHTML.className = 'hiddenHTML'
		hiddenHTML.style = 'display: none;'
		minesweeperA = document.createElement('a')
		blackjackA = document.createElement('a')
		dokustashGeneratorA = document.createElement('a')
		zombiesA = document.createElement('a')
		minesweeperA.className = 'minesweeperA'
		blackjackA.className = 'blackjackA'
		dokustashGeneratorA.className = 'dokustashGeneratorA'
		zombiesA.className = 'zombiesA'
		hiddenHTML.appendChild(minesweeperA)
		hiddenHTML.appendChild(blackjackA)
		hiddenHTML.appendChild(dokustashGeneratorA)
		hiddenHTML.appendChild(zombiesA)
		body.insertBefore(hiddenHTML, body.childNodes[3])
		document.getElementsByClassName("minesweeperA")[0].outerHTML = minesweeperHTML
		document.getElementsByClassName("blackjackA")[0].outerHTML = blackjackHTML
		document.getElementsByClassName("dokustashGeneratorA")[0].outerHTML = dokustashGeneratorHTML
		document.getElementsByClassName("zombiesA")[0].outerHTML = zombiesHTML
	}
	if (window.innerWidth >= 1000) {
		/* Check if the Minesweeper Navbar Item HTMl is Empty and Refills it if the Screen is larger than 1000px */
		if (document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML == '') {
			minesweeperHTML = document.getElementsByClassName("minesweeper")[0].outerHTML
			blackjackHTML = document.getElementsByClassName("blackjack")[0].outerHTML
			dokustashGeneratorHTML = document.getElementsByClassName("dokustashGenerator")[0].outerHTML
			zombiesHTML = document.getElementsByClassName("zombies")[0].outerHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML = minesweeperHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[2].innerHTML = blackjackHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[3].innerHTML = dokustashGeneratorHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[4].innerHTML = zombiesHTML
			document.getElementsByClassName("hiddenHTML")[0].outerHTML = ""
			/* Removes Pages from More Dropdown */
			moreHTML = document.getElementsByClassName("moreDropdown")[0].outerHTML
			if (moreHTML.split('Minesweeper').length > 1) {
				document.getElementsByClassName("moreDropdown")[0].outerHTML = moreHTML.split('Minesweeper/')[0] + 'DokucraftBannerEditor/' + moreHTML.split('DokucraftBannerEditor/')[1]
			}
		} else {
			document.getElementsByClassName("hiddenHTML")[0].outerHTML = ""
		}
		/* Add Selection Border to Current Page in Navbar */
		if (window.location.href == 'https://syndishanx.github.io/Website/') {
			document.getElementsByClassName('home')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		} else if (window.location.href.split('Minesweeper').length != 1) {
			document.getElementsByClassName('minesweeper')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		} else if (window.location.href.split('Blackjack').length != 1) {
			document.getElementsByClassName('blackjack')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		} else if (window.location.href.split('Dokustash_Generator').length != 1) {
			document.getElementsByClassName('dokustashGenerator')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		} else if (window.location.href.split('Zombies').length != 1) {
			document.getElementsByClassName('zombies')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		}
	} else {
		/* Removes Pages from the Navabar */
		if (document.getElementsByClassName("minesweeper")[0] != undefined) {
			document.getElementsByClassName("minesweeper")[0].remove()
			document.getElementsByClassName("blackjack")[0].remove()
			document.getElementsByClassName("dokustashGenerator")[0].remove()
			document.getElementsByClassName("zombies")[0].remove()
		}
		/* Checks if Minesweeper is already in the More Dropdown */
		moreHTML = document.getElementsByClassName("moreDropdown")[0].outerHTML
		if (moreHTML.split('Minesweeper').length == 1) {
			/* Adds Pages to the More Dropdown */
			moreHTML1 = moreHTML.split('moreDropdown">')[0] + 'moreDropdown">' + minesweeperHTML + blackjackHTML + dokustashGeneratorHTML + zombiesHTML + moreHTML.split('moreDropdown">')[1]
			/* Removes the Navbar Classes from the Pages Elements */
			moreHTML2 = moreHTML1.replaceAll('class="nav-item dokustashGenerator" ', '').replaceAll('class="nav-item minesweeper" ', '').replaceAll('class="nav-item blackjack" ', '').replaceAll('class="nav-item zombies end" ', '')
			document.getElementsByClassName("moreDropdown")[0].outerHTML = moreHTML2
			/* Removes the Selection Border from the Pages Elements */
			if (window.location.href == 'https://syndishanx.github.io/Website/') {
				document.getElementsByClassName('home')[0].style = ''
			} else if (window.location.href.split('Minesweeper').length != 1) {
				document.getElementsByClassName('minesweeper')[0].style = ''
			} else if (window.location.href.split('Blackjack').length != 1) {
				document.getElementsByClassName('blackjack')[0].style = ''
			} else if (window.location.href.split('Dokustash_Generator').length != 1) {
				document.getElementsByClassName('dokustashGenerator')[0].style = ''
			} else if (window.location.href.split('Zombies').length != 1) {
				document.getElementsByClassName('zombies')[0].style = ''
			}
		}
	}
}

window.onresize = navSwapper;
navSwapper()