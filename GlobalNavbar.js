var body = document.getElementsByTagName('body')[0]
var prepend = body.lang

/* TopNav */

var topnav = document.createElement('div')
topnav.className = 'topnav'
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
var table = document.createElement('table')
var tbody = document.createElement('tbody')
tbody.className = 'nav-items'
var tr = document.createElement('tr')
topnav.appendChild(spacerSmall)
topnav.appendChild(table)
table.appendChild(tbody)
tbody.appendChild(tr)
topnav.appendChild(spacer)
topnav.appendChild(logo)
topnav.appendChild(logoImg)

/* Home */

var homeTD = document.createElement('td')
var homeA = document.createElement('a')
homeA.className = 'nav-item home'
homeA.textContent = 'Home'
homeA.href = '/Website/'
tr.appendChild(homeTD)
homeTD.appendChild(homeA)

/* Minesweeper */

var minesweeperTD = document.createElement('td')
var minesweeperA = document.createElement('a')
minesweeperA.className = 'nav-item minesweeper'
minesweeperA.textContent = 'Minesweeper'
minesweeperA.href = prepend + 'Minesweeper/Minesweeper.html'
tr.appendChild(minesweeperTD)
minesweeperTD.appendChild(minesweeperA)

/* Dokustash Generator */

var dokustashGeneratorTD = document.createElement('td')
var dokustashGeneratorA = document.createElement('a')
dokustashGeneratorA.className = 'nav-item dokustashGenerator end'
dokustashGeneratorA.textContent = 'Dokustash Generator'
dokustashGeneratorA.href = prepend + 'Dokustash_Generator.html'
tr.appendChild(dokustashGeneratorTD)
dokustashGeneratorTD.appendChild(dokustashGeneratorA)

/* Cold War Dropdown Menu */

var coldwarDropdownTD = document.createElement('td')
var coldwarDropdownDiv = document.createElement('div')
coldwarDropdownDiv.className = 'dropdown'
var coldwarDropdownA = document.createElement('a')
coldwarDropdownA.href = 'javascript:void(0);'
coldwarDropdownA.className = 'dropbtn'
coldwarDropdownA.textContent = 'Cold War...'
var coldwarDropdownI = document.createElement('i')
coldwarDropdownI.className = 'fa fa-caret-down'
var coldwarDropdownDiv1 = document.createElement('div')
coldwarDropdownDiv1.className = 'dropdown-content coldwarDropdown'

coldwarDropdownTD.appendChild(coldwarDropdownDiv)
coldwarDropdownDiv.appendChild(coldwarDropdownA)
coldwarDropdownA.appendChild(coldwarDropdownI)
coldwarDropdownDiv.appendChild(coldwarDropdownDiv1)
tr.appendChild(coldwarDropdownTD)

/* Black Ops 4 Dropdown Menu */

var bo4DropdownTD = document.createElement('td')
var bo4DropdownDiv = document.createElement('div')
bo4DropdownDiv.className = 'dropdown'
var bo4DropdownA = document.createElement('a')
bo4DropdownA.href = 'javascript:void(0);'
bo4DropdownA.className = 'dropbtn'
bo4DropdownA.textContent = 'Black Ops 4...'
var bo4DropdownI = document.createElement('i')
bo4DropdownI.className = 'fa fa-caret-down'
var bo4DropdownDiv1 = document.createElement('div')
bo4DropdownDiv1.className = 'dropdown-content bo4Dropdown'

bo4DropdownTD.appendChild(bo4DropdownDiv)
bo4DropdownDiv.appendChild(bo4DropdownA)
bo4DropdownA.appendChild(bo4DropdownI)
bo4DropdownDiv.appendChild(bo4DropdownDiv1)
tr.appendChild(bo4DropdownTD)

/* More Dropdown Menu */

var moreDropdownTD = document.createElement('td')
var moreDropdownDiv = document.createElement('div')
moreDropdownDiv.className = 'dropdown'
var moreDropdownA = document.createElement('a')
moreDropdownA.href = 'javascript:void(0);'
moreDropdownA.className = 'dropbtn'
moreDropdownA.textContent = 'More...'
var moreDropdownI = document.createElement('i')
moreDropdownI.className = 'fa fa-caret-down'
var moreDropdownDiv1 = document.createElement('div')
moreDropdownDiv1.className = 'dropdown-content moreDropdown'

moreDropdownTD.appendChild(moreDropdownDiv)
moreDropdownDiv.appendChild(moreDropdownA)
moreDropdownA.appendChild(moreDropdownI)
moreDropdownDiv.appendChild(moreDropdownDiv1)
tr.appendChild(moreDropdownTD)

/* Dropdown Items */

/* Cold War Items */

var coldWarItem1 = document.createElement('a')
var coldWarItem2 = document.createElement('a')
var coldWarItem3 = document.createElement('a')
var coldWarItem4 = document.createElement('a')
var coldWarItem5 = document.createElement('a')

coldWarItem1.textContent = 'Die Maschine'
coldWarItem1.href = prepend + 'ColdWar/Die_Maschine.html'
coldWarItem2.textContent = 'Firebase Z'
coldWarItem2.href = prepend + 'ColdWar/Firebase_Z.html'
coldWarItem3.textContent = 'Mauer Der Toten'
coldWarItem3.href = prepend + 'ColdWar/Mauer_Der_Toten.html'
coldWarItem4.textContent = 'Outbreak'
coldWarItem4.href = prepend + 'ColdWar/Outbreak.html'
coldWarItem5.textContent = 'Cold War Gold Weapons'
coldWarItem5.href = prepend + 'ColdWar/Gold_Weapons.html'

coldwarDropdownDiv1.appendChild(coldWarItem1)
coldwarDropdownDiv1.appendChild(coldWarItem2)
coldwarDropdownDiv1.appendChild(coldWarItem3)
coldwarDropdownDiv1.appendChild(coldWarItem4)
coldwarDropdownDiv1.appendChild(coldWarItem5)

/* Black Ops 4 Items */

var bo4Item1 = document.createElement('a')
var bo4Item2 = document.createElement('a')
var bo4Item3 = document.createElement('a')
var bo4Item4 = document.createElement('a')
var bo4Item5 = document.createElement('a')
var bo4Item6 = document.createElement('a')
var bo4Item7 = document.createElement('a')
var bo4Item8 = document.createElement('a')
var bo4Item9 = document.createElement('a')
var bo4Item10 = document.createElement('a')
var bo4Item11 = document.createElement('a')
var bo4Item12 = document.createElement('a')

bo4Item1.textContent = 'Voyage of Despair'
bo4Item1.href = prepend + 'BlackOps4/Voyage_of_Despair.html'
bo4Item2.textContent = 'Voyage of Despair Tool'
bo4Item2.href = prepend + 'BlackOps4/Voyage_of_Despair_Tool.html'
bo4Item3.textContent = 'IX'
bo4Item3.href = prepend + 'BlackOps4/IX.html'
bo4Item4.textContent = 'Blood of The Dead'
bo4Item4.href = prepend + 'BlackOps4/Blood_of_The_Dead.html'
bo4Item5.textContent = 'Classified'
bo4Item5.href = prepend + 'BlackOps4/Classified.html'
bo4Item6.textContent = 'Dead of The Night'
bo4Item6.href = prepend + 'BlackOps4/Dead_of_The_Night.html'
bo4Item7.textContent = 'Stake Knife'
bo4Item7.href = prepend + 'BlackOps4/Stake_Knife.html'
bo4Item8.textContent = 'Ancient Evil'
bo4Item8.href = prepend + 'BlackOps4/Ancient_Evil.html'
bo4Item9.textContent = 'Alpha Omega'
bo4Item9.href = prepend + 'BlackOps4/Alpha_Omega.html'
bo4Item10.textContent = 'Alpha Omega Tool'
bo4Item10.href = prepend + 'BlackOps4/Alpha_Omega_Tool.html'
bo4Item11.textContent = 'Tag Der Toten'
bo4Item11.href = prepend + 'BlackOps4/Tag_Der_Toten.html'
bo4Item12.textContent = 'Random Map'
bo4Item12.href = prepend + 'BlackOps4/Random_Map.html'

bo4DropdownDiv1.appendChild(bo4Item1)
bo4DropdownDiv1.appendChild(bo4Item2)
bo4DropdownDiv1.appendChild(bo4Item3)
bo4DropdownDiv1.appendChild(bo4Item4)
bo4DropdownDiv1.appendChild(bo4Item5)
bo4DropdownDiv1.appendChild(bo4Item6)
bo4DropdownDiv1.appendChild(bo4Item7)
bo4DropdownDiv1.appendChild(bo4Item8)
bo4DropdownDiv1.appendChild(bo4Item9)
bo4DropdownDiv1.appendChild(bo4Item10)
bo4DropdownDiv1.appendChild(bo4Item11)
bo4DropdownDiv1.appendChild(bo4Item12)

/* More Items */

var moreItem1 = document.createElement('a')
var moreItem2 = document.createElement('a')
var moreItem3 = document.createElement('a')
var moreItem4 = document.createElement('a')
var moreItem5 = document.createElement('a')

moreItem1.textContent = 'MW Gold Weapons'
moreItem1.href = prepend + 'MW_Gold_Weapons.html'
moreItem2.textContent = 'Shadows of Evil'
moreItem2.href = prepend + 'Shadows_of_Evil.html'
moreItem3.textContent = 'The Final Reich'
moreItem3.href = prepend + 'The_Final_Riech.html'
moreItem4.textContent = 'Dokucraft Banner Editor'
moreItem4.href = prepend + 'DokucraftBannerEditor/Dokucraft_Banner_Editor.html'
moreItem5.textContent = 'Downloads'
moreItem5.href = prepend + 'Downloads/Downloads.html'

moreDropdownDiv1.appendChild(moreItem1)
moreDropdownDiv1.appendChild(moreItem2)
moreDropdownDiv1.appendChild(moreItem3)
moreDropdownDiv1.appendChild(moreItem4)
moreDropdownDiv1.appendChild(moreItem5)

topnav.innerHTML = topnav.innerHTML.split('href="/Website/"></a>')[0] + 'href="/Website/">' + topnav.innerHTML.split('href="/Website/"></a>')[1]
topnav.innerHTML = topnav.innerHTML.split('alt="SyndiShanX">')[0] + 'alt="SyndiShanX">' + topnav.innerHTML.split('alt="SyndiShanX">')[1] + '</a>'

body.insertBefore(topnav, body.childNodes[0])
