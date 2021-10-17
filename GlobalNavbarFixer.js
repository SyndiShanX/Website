var screenSize
function spacerSize(screenSize) {
	if (screenSize == undefined) {var screenSize = 0}
  var spacerWidth = window.outerWidth - (document.getElementsByClassName("logo")[0].offsetWidth + document.getElementsByClassName("nav-items")[0].offsetWidth) - screenSize
  document.getElementsByClassName("spacer")[0].style = "margin-left: " + spacerWidth + "px;"
	if (document.getElementById("customTopnav").className === "topnav responsive") {
    document.getElementsByClassName("responsive")[0].style = "position: relative; max-height: 1000px; height: " + (document.getElementsByClassName("nav-items")[0].clientHeight + 98) + ";"
	} else {
		document.getElementsByClassName("topnav")[0].style = "position: fixed; top: 0; z-index: 10; width: 100%; max-width: 100%; padding: 4px 40px; background-color: #000; max-height: 64px; height: 64px;"
	}
}
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
		if (document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML == '\n  ') {
			if (moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>      ').length > 1) {
				var minesweeperSplit = moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>      ')[0] + moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>      ')[1]
				var dokustashGeneratorSplit = minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>      ')[0] + minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>      ')[1]
				document.getElementsByClassName("moreDropdown")[0].outerHTML = dokustashGeneratorSplit
			}
			minesweeperHTML = document.getElementsByClassName("minesweeper")[0].outerHTML
			dokustashGeneratorHTML = document.getElementsByClassName("dokustashGenerator")[0].outerHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML = minesweeperHTML
			document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[2].innerHTML = dokustashGeneratorHTML
			document.getElementsByClassName("hiddenHTML")[0].outerHTML = ""
		} else if (document.getElementsByClassName('topnav')[0].children[2].children[0].children[0].children[1].innerHTML == '') {
			if (moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>      ').length > 1) {
				var minesweeperSplit = moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>      ')[0] + moreHTML.split('<a href="../Minesweeper/Minesweeper.html">Minesweeper</a>      ')[1]
				var dokustashGeneratorSplit = minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>      ')[0] + minesweeperSplit.split('<a href="../Dokustash_Generator.html">Dokustash Generator</a>      ')[1]
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
		var screenSize = 0
		spacerSize(screenSize)
	} else {
		if (document.getElementsByClassName("minesweeper")[0] != undefined) {
			document.getElementsByClassName("minesweeper")[0].remove()
			document.getElementsByClassName("dokustashGenerator")[0].remove()
		}
		var moreHTML1 = document.getElementsByClassName("moreDropdown")[0].outerHTML
		if (moreHTML1.split('Minesweeper').length == 1) {
			var moreHTML2 = moreHTML1.split('The Final Reich</a>\n')[0] + 'The Final Reich</a>\n      ' + dokustashGeneratorHTML + moreHTML1.split('The Final Reich</a>\n')[1]
			var moreHTML3 = moreHTML2.split('Dokucraft Banner Editor</a>\n')[0] + 'Dokucraft Banner Editor</a>\n      <' + minesweeperHTML + moreHTML2.split('Dokucraft Banner Editor</a>\n')[1]
			var moreHTML4 = moreHTML3.replaceAll('class="nav-item dokustashGenerator end" ', '').replaceAll('class="nav-item minesweeper" ', '').replaceAll('<<', '<')
			document.getElementsByClassName("moreDropdown")[0].outerHTML = moreHTML4
		}
		var screenSize = 78
		spacerSize(screenSize)
	}
}
window.onresize = spacerSize(screenSize);
window.onmousemove = spacerSize(screenSize);
window.onscroll = spacerSize(screenSize);
window.onresize = navSwapper;
let resizeSpacer
resizeSpacer = setInterval(spacerSize(screenSize), 1000);
navSwapper()