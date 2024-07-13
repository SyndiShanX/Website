/* Google Analytics */
var head = document.getElementsByTagName('head')[0]

var analyticsScript = document.createElement('script')
analyticsScript.type = 'text/javascript'
analyticsScript.text = `
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PFSPNKGTLN');`
head.prepend(analyticsScript);

var gtagScript = document.createElement('script')
gtagScript.async = true
gtagScript.type = 'text/javascript'
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PFSPNKGTLN'
head.prepend(gtagScript);

/* Main Navbar */

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
			tempItem.className = 'dropdown-item'
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
createNavItem('blackjack', 'Blackjack', prepend + 'Blackjack.html')
createNavItem('dokustashGenerator', 'Dokustash Generator', prepend + 'Dokustash_Generator.html')
createNavItem('zombies end', 'Zombies Easter Eggs', prepend + 'Zombies/Selector.html')

/* Nav Dropdown Menus */

createNavDropdown('more', 'More')

/* Nav Dropdown Items */

createNavDropdownItems(5, 'moreDropdown', ['Dokucraft Banner Editor', 'Gold Weapons Selector', 'Console Dokucraft', 'Downloads', 'Update Classes'], ['Dokucraft/Banner_Editor.html', 'Gold_Weapons/Selector.html', 'Downloads/Console_Dokucraft.html', 'Downloads/Downloads.html', 'Update_Classes.html'])

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
