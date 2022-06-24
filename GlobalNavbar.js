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
createNavItem('dokustashGenerator end', 'Dokustash Generator', prepend + 'Dokustash_Generator.html')

/* Nav Dropdown Menus */

createNavDropdown('vanguard', 'Vanguard')
createNavDropdown('coldwar', 'Cold War')
createNavDropdown('bo4', 'Black Ops 4')
createNavDropdown('bo3', 'Black Ops 3')
createNavDropdown('more', 'More')

/* Nav Dropdown Items */

createNavDropdownItems(3, 'vanguardDropdown', ['Der Anfang', 'Terra Maledicta', 'Shi No Numa'], ['Vanguard/Der_Anfang.html', 'Vanguard/Terra_Maledicta.html', 'Vanguard/Shi_No_Numa.html'])
createNavDropdownItems(6, 'coldwarDropdown', ['Die Maschine', 'Firebase Z', 'Mauer Der Toten', 'Forsaken', 'Outbreak'], ['Cold_War/Die_Maschine.html', 'Cold_War/Firebase_Z.html', 'Cold_War/Mauer_Der_Toten.html', 'Cold_War/Forsaken.html', 'Cold_War/Outbreak.html'])
createNavDropdownItems(12, 'bo4Dropdown', ['Voyage of Despair', 'Voyage of Despair Tool', 'IX', 'Blood of The Dead', 'Classified', 'Dead of The Night', 'Stake Knife', 'Ancient Evil', 'Alpha Omega', 'Alpha Omega Tool', 'Tag Der Toten', 'Random Map'], ['BlackOps4/Voyage_of_Despair.html', 'BlackOps4/Voyage_of_Despair_Tool.html', 'BlackOps4/IX.html', 'BlackOps4/Blood_of_The_Dead.html', 'BlackOps4/Classified.html', 'BlackOps4/Dead_of_The_Night.html', 'BlackOps4/Stake_Knife.html', 'BlackOps4/Ancient_Evil.html', 'BlackOps4/Alpha_Omega.html', 'BlackOps4/Alpha_Omega_Tool.html', 'BlackOps4/Tag_Der_Toten.html', 'BlackOps4/Random_Map.html'])
createNavDropdownItems(7, 'bo3Dropdown', ['Shadows of Evil', 'Shadows of Evil Tool', 'The Giant', 'Der Eisendrache', 'Zetsubou No Shima', 'Gorod Krovi', 'Revelations'], ['BlackOps3/Shadows_of_Evil.html', 'BlackOps3/Shadows_of_Evil_Tool.html', 'BlackOps3/The_Giant.html', 'BlackOps3/Der_Eisendrache.html', 'BlackOps3/Zetsubou_No_Shima.html', 'BlackOps3/Gorod_Krovi.html', 'BlackOps3/Revelations.html'])
createNavDropdownItems(5, 'moreDropdown', ['The Final Reich', 'Dokucraft Banner Editor', 'Console Dokucraft', 'Downloads'], ['The_Final_Riech.html', 'DokucraftBannerEditor/Dokucraft_Banner_Editor.html', 'Downloads/Console_Dokucraft.html', 'Downloads/Downloads.html'])

/* Nav Finalization */

tr.appendChild(spacer)

var spacerTD = document.createElement('td')
spacerTD.appendChild(spacerSmall)
tr.appendChild(spacerTD)
var spacerTD2 = document.createElement('td')
spacerTD2.appendChild(spacerSmall2)
tr.appendChild(spacerTD2)

topnav.innerHTML = topnav.innerHTML.split('href="/Website/"></a>')[0] + 'href="/Website/">' + topnav.innerHTML.split('href="/Website/"></a>')[1]
topnav.innerHTML = topnav.innerHTML.split('alt="SyndiShanX">')[0] + 'alt="SyndiShanX"></a>' + topnav.innerHTML.split('alt="SyndiShanX">')[1]

body.insertBefore(topnav, body.childNodes[0])
