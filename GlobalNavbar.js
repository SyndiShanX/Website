var body = document.getElementsByTagName('body')[0]
var prepend = body.lang

/* TopNav */

var topnav = document.createElement('div')
topnav.className = 'topnav'
topnav.id = 'customTopnav'
var logo = document.createElement('a')
logo.id = 'logo'
logo.href = '/Website/'
var logoImg = document.createElement('img')
logoImg.className = 'logo'
logoImg.src = prepend + 'Images/Global/Icon.webp'
logoImg.alt = 'SyndiShanX'
var spacer = document.createElement('a')
spacer.className = 'spacer'
var spacerSmall = document.createElement('a')
spacerSmall.className = 'spacerSmall'
var spacerSmall2 = document.createElement('a')
spacerSmall2.className = 'spacerSmall'
var table = document.createElement('table')
var tbody = document.createElement('tbody')
tbody.className = 'nav-items'
var tr = document.createElement('tr')
tr.className = 'navTR'
topnav.appendChild(logo)
topnav.appendChild(logoImg)
topnav.appendChild(table)
table.appendChild(tbody)
tbody.appendChild(tr)

/* Functions */

var tempTD = ''
var tempA = ''

function createNavItem(classname, textContent, href) {
	tempTD = document.createElement('td')
	tempTD.className = 'navTD'
	tempA = document.createElement('a')
	tempA.className = 'nav-item ' + classname
	tempA.textContent = textContent
	tempA.href = href
	tr.appendChild(tempTD)
	tempTD.appendChild(tempA)
}

var tempDropdownTD = ''
var tempDropdownDiv = ''
var tempDropdownA = ''
var tempDropdownI = ''
var tempDropdownDiv1 = ''

function createNavDropdown(classname, textContent) {
	tempDropdownTD = document.createElement('td')
	tempDropdownTD.className = 'navTD'
	tempDropdownDiv = document.createElement('div')
	tempDropdownDiv.className = 'dropdown'
	tempDropdownA = document.createElement('a')
	tempDropdownA.href = 'javascript:void(0);'
	tempDropdownA.className = 'dropbtn'
	tempDropdownA.textContent = textContent + '...'
	tempDropdownI = document.createElement('i')
	tempDropdownI.className = 'fa fa-caret-down'
	tempDropdownDiv1 = document.createElement('div')
	tempDropdownDiv1.className = 'dropdown-content ' + classname + 'Dropdown'
	
	tempDropdownTD.appendChild(tempDropdownDiv)
	tempDropdownDiv.appendChild(tempDropdownA)
	tempDropdownA.appendChild(tempDropdownI)
	tempDropdownDiv.appendChild(tempDropdownDiv1)
	tr.appendChild(tempDropdownTD)
}

var tempItem = ''
var tempDropdown = ''

function createNavDropdownItems(itemNum, dropdownClassname, textContentArray, hrefArray) {
	for (let i = 0; i < itemNum; i++) {
		if (textContentArray[i] != undefined) {
			tempItem = document.createElement('a')
			tempItem.textContent = textContentArray[i]
			tempItem.href = prepend + hrefArray[i]
			tempDropdown = topnav.getElementsByClassName(dropdownClassname)[0]
			tempDropdown.appendChild(tempItem)
		} else {
			console.log('Invalid Number of Items (' + itemNum + ') specified for ' + dropdownClassname + ':Text Content was Blank, skipping...')
		}
	}
}

/* Nav Items */

createNavItem('home', 'Home', '/Website/')
createNavItem('minesweeper', 'Minesweeper', prepend + 'Minesweeper/Minesweeper.html')
createNavItem('dokustashGenerator', 'Dokustash Generator', prepend + 'Dokustash_Generator.html')
//createNavItem('zombies end', 'Zombies', prepend + 'Zombies/Selector.html')

/* Nav Dropdown Menus */

createNavDropdown('vanguard', 'Vanguard')
createNavDropdown('coldwar', 'Cold War')
createNavDropdown('bo4', 'Black Ops 4')
createNavDropdown('bo3', 'Black Ops 3')
//createNavDropdown('zombies', 'Zombies')
createNavDropdown('more', 'More')

/* Nav Dropdown Items */

createNavDropdownItems(3, 'vanguardDropdown', ['Der Anfang', 'Terra Maledicta', 'Shi No Numa'], ['Zombies/Vanguard/Der_Anfang.html', 'Zombies/Vanguard/Terra_Maledicta.html', 'Zombies/Vanguard/Shi_No_Numa.html'])
createNavDropdownItems(5, 'coldwarDropdown', ['Die Maschine', 'Firebase Z', 'Mauer Der Toten', 'Forsaken', 'Outbreak'], ['Zombies/ColdWar/Die_Maschine.html', 'Zombies/ColdWar/Firebase_Z.html', 'Zombies/ColdWar/Mauer_Der_Toten.html', 'Zombies/ColdWar/Forsaken.html', 'Zombies/ColdWar/Outbreak.html'])
createNavDropdownItems(12, 'bo4Dropdown', ['Voyage of Despair', 'Voyage of Despair Tool', 'IX', 'Blood of The Dead', 'Classified', 'Dead of The Night', 'Stake Knife', 'Ancient Evil', 'Alpha Omega', 'Alpha Omega Tool', 'Tag Der Toten', 'Random Map'], ['Zombies/BlackOps4/Voyage_of_Despair.html', 'Zombies/BlackOps4/Voyage_of_Despair_Tool.html', 'Zombies/BlackOps4/IX.html', 'Zombies/BlackOps4/Blood_of_The_Dead.html', 'Zombies/BlackOps4/Classified.html', 'Zombies/BlackOps4/Dead_of_The_Night.html', 'Zombies/BlackOps4/Stake_Knife.html', 'Zombies/BlackOps4/Ancient_Evil.html', 'Zombies/BlackOps4/Alpha_Omega.html', 'Zombies/BlackOps4/Alpha_Omega_Tool.html', 'Zombies/BlackOps4/Tag_Der_Toten.html', 'Zombies/BlackOps4/Random_Map.html'])
createNavDropdownItems(7, 'bo3Dropdown', ['Shadows of Evil', 'Shadows of Evil Tool', 'The Giant', 'Der Eisendrache', 'Zetsubou No Shima', 'Gorod Krovi', 'Revelations'], ['Zombies/BlackOps3/Shadows_of_Evil.html', 'Zombies/BlackOps3/Shadows_of_Evil_Tool.html', 'Zombies/BlackOps3/The_Giant.html', 'Zombies/BlackOps3/Der_Eisendrache.html', 'Zombies/BlackOps3/Zetsubou_No_Shima.html', 'Zombies/BlackOps3/Gorod_Krovi.html', 'Zombies/BlackOps3/Revelations.html'])
//createNavDropdownItems(9, 'zombiesDropdown', ['Black Ops 1', 'Black Ops 2', 'Advanced Warfare', 'Black Ops 3', 'Infinite Warfare', 'World War 2', 'Black Ops 4', 'Cold War', 'Vanguard'], ['Zombies/BlackOps1/Selection.html', 'Zombies/BlackOps2/Selection.html','Zombies/AW/Selection.html','Zombies/BlackOps3/Selection.html', 'Zombies/IW/Selection.html', 'Zombies/WW2/Selection.html', 'Zombies/BlackOps4/Selection.html', 'Zombies/ColdWar/Selection.html', 'Zombies/Vanguard/Selection.html'])
createNavDropdownItems(4, 'moreDropdown', ['The Final Reich', 'Dokucraft Banner Editor', 'Console Dokucraft', 'Downloads'], ['Zombies/WW2/The_Final_Riech.html', 'DokucraftBannerEditor/Dokucraft_Banner_Editor.html', 'Downloads/Console_Dokucraft.html', 'Downloads/Downloads.html'])

/* Nav Finalization */

tr.appendChild(spacer)

var spacerTD = document.createElement('td')
spacerTD.className = 'navTD'
spacerTD.appendChild(spacerSmall)
tr.appendChild(spacerTD)
var spacerTD2 = document.createElement('td')
spacerTD2.className = 'navTD'
spacerTD2.appendChild(spacerSmall2)
tr.appendChild(spacerTD2)

topnav.innerHTML = topnav.innerHTML.split('href="/Website/"></a>')[0] + 'href="/Website/">' + topnav.innerHTML.split('href="/Website/"></a>')[1]
topnav.innerHTML = topnav.innerHTML.split('alt="SyndiShanX">')[0] + 'alt="SyndiShanX"></a>' + topnav.innerHTML.split('alt="SyndiShanX">')[1]

body.insertBefore(topnav, body.childNodes[0])
