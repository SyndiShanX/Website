function navSwapper() {
	if (document.getElementsByClassName("minesweeper")[0] != undefined) {
		var minesweeperHTML = document.getElementsByClassName("minesweeper")[0].outerHTML
		var dokustashGeneratorHTML = document.getElementsByClassName("dokustashGenerator")[0].outerHTML
		var body = document.getElementsByTagName('body')[0]
		var hiddenHTML = document.createElement('div')
		hiddenHTML.className = 'hiddenHTML'
		hiddenHTML.style = 'display: none;'
		var minesweeperA = document.createElement('a')
		var dokustashGeneratorA = document.createElement('a')
		minesweeperA.className = 'minesweeperA'
		dokustashGeneratorA.className = 'dokustashGeneratorA'
		hiddenHTML.appendChild(minesweeperA)
		hiddenHTML.appendChild(dokustashGeneratorA)
		body.insertBefore(hiddenHTML, body.childNodes[3])
		document.getElementsByClassName("minesweeperA")[0].outerHTML = minesweeperHTML
		document.getElementsByClassName("dokustashGeneratorA")[0].outerHTML = dokustashGeneratorHTML
	}
	if (window.innerWidth >= 1000) {
		var moreHTML = document.getElementsByClassName("moreDropdown")[0].outerHTML
		if (document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML == '\n	') {
			if (moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>			').length > 1) {
				var minesweeperSplit = moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>			')[0] + moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>			')[1]
				var dokustashGeneratorSplit = minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>			')[0] + minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>			')[1]
				document.getElementsByClassName("moreDropdown")[0].outerHTML = dokustashGeneratorSplit
			}
			minesweeperHTML = document.getElementsByClassName("minesweeper")[0].outerHTML
			dokustashGeneratorHTML = document.getElementsByClassName("dokustashGenerator")[0].outerHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML = minesweeperHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[2].innerHTML = dokustashGeneratorHTML
			document.getElementsByClassName("hiddenHTML")[0].outerHTML = ""
		} else if (document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML == '') {
			if (moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>			').length > 1) {
				var minesweeperSplit = moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>			')[0] + moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>			')[1]
				var dokustashGeneratorSplit = minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>			')[0] + minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>			')[1]
				document.getElementsByClassName("moreDropdown")[0].outerHTML = dokustashGeneratorSplit
			}
			minesweeperHTML = document.getElementsByClassName("minesweeper")[0].outerHTML
			dokustashGeneratorHTML = document.getElementsByClassName("dokustashGenerator")[0].outerHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML = minesweeperHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[2].innerHTML = dokustashGeneratorHTML
			document.getElementsByClassName("hiddenHTML")[0].outerHTML = ""
		} else {
			document.getElementsByClassName("hiddenHTML")[0].outerHTML = ""
		}
		if (window.location.href.split('Minesweeper').length != 1) {
			document.getElementsByClassName('minesweeper')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		} else if (window.location.href == 'https://syndishanx.github.io/Website/') {
			document.getElementsByClassName('home')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		} else if (window.location.href == 'file:///C:/Users/SyndiShanX/Desktop/HTML/Website/index.html') {
			document.getElementsByClassName('home')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		} else if (window.location.href.split('Dokustash_Generator').length != 1) {
			document.getElementsByClassName('dokustashGenerator')[0].style = 'border: 1px solid white; border-radius: 20px!important;'
		}
	} else {
		if (document.getElementsByClassName("minesweeper")[0] != undefined) {
			document.getElementsByClassName("minesweeper")[0].remove()
			document.getElementsByClassName("dokustashGenerator")[0].remove()
		}
		var moreHTML1 = document.getElementsByClassName("moreDropdown")[0].outerHTML
		if (moreHTML1.split('Minesweeper').length == 1) {
			var moreHTML2 = moreHTML1.split('The Final Reich</a>')[0] + 'The Final Reich</a>' + dokustashGeneratorHTML + moreHTML1.split('The Final Reich</a>')[1]
			var moreHTML3 = moreHTML2.split('Dokucraft Banner Editor</a>')[0] + 'Dokucraft Banner Editor</a>' + minesweeperHTML + moreHTML2.split('Dokucraft Banner Editor</a>')[1]
			var moreHTML4 = moreHTML3.replaceAll('class="nav-item dokustashGenerator end" ', '').replaceAll('class="nav-item minesweeper" ', '')
			document.getElementsByClassName("moreDropdown")[0].outerHTML = moreHTML4
			if (window.location.href.split('Minesweeper').length != 1) {
			document.getElementsByClassName('minesweeper')[0].style = ''
		} else if (window.location.href == 'https://syndishanx.github.io/Website/') {
			document.getElementsByClassName('home')[0].style = ''
		} else if (window.location.href == 'file:///C:/Users/SyndiShanX/Desktop/HTML/Website/index.html') {
			document.getElementsByClassName('home')[0].style = ''
		} else if (window.location.href.split('Dokustash_Generator').length != 1) {
			document.getElementsByClassName('dokustashGenerator')[0].style = ''
		}
		}
	}
}
window.onresize = navSwapper;
navSwapper()