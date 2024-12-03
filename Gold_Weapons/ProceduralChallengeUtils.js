function resetPage() {
	document.getElementsByClassName('MainWrapper')[0].remove()
	mainWrapperDiv = document.createElement('div')
	mainWrapperDiv.className = 'MainWrapper'
	mainWrapperDiv.align = 'center'
	document.getElementsByTagName('body')[0].appendChild(mainWrapperDiv)
}
function fetchData(spreadsheetID, pageNum) {
	fetch('https://opensheet.elk.sh/' + spreadsheetID + '/' + pageNum).then((response) => response.json()).then((data) => {
		json = data
		mainWrapper = document.getElementsByClassName('MainWrapper')[0]
		for (i = 0; i < json.length; i++) {
			elementNum = json[i]['Element Num']
			if (elementNum == 5) { // Font Element without a Line Break
				fontElement = document.createElement(json[i]['Element 1'])
				fontElement.className = json[i]['Element 2']
				fontElement.size = json[i]['Element 3']
				fontElement.innerText = json[i]['Element 4']
				mainWrapper.appendChild(fontElement)
			} else if (elementNum == 6) { // Font Element with a Line Break
				fontElement = document.createElement(json[i]['Element 1'])
				fontElement.className = json[i]['Element 2']
				fontElement.size = json[i]['Element 3']
				fontElement.innerText = json[i]['Element 4']
				mainWrapper.appendChild(fontElement)
				brElement = document.createElement(json[i]['Element 5'])
				mainWrapper.appendChild(brElement)
			} else if (elementNum == 7 || elementNum == 9) { // Empty Weapon Image Element
				// Create Main Weapon Div
				divElement = document.createElement('div')
				divElement.className = 'weapon'
				mainWrapper.appendChild(divElement)
				// Create Background Container
				backgroundDivElement1 = document.createElement('div')
				backgroundDivElement1.style = 'position: relative; width: 0; height: 0'
				// Create Background Element Container
				backgroundDivElement2 = document.createElement('div')
				backgroundDivElement2.style = 'position: absolute; pointer-events: none;'
				// Append Elements
				backgroundDivElement1.appendChild(backgroundDivElement2)
				divElement.appendChild(backgroundDivElement1)
				// Create Background Image
				backgroundImage = document.createElement('img')
				backgroundDivElement2.appendChild(backgroundImage)
				backgroundImage.outerHTML = '<img src="Empty.webp" class="weapon_background">'
				// Create Main Weapon Element
				imgElement1 = document.createElement('img')
				divElement.appendChild(imgElement1)
				imgElement1.setAttribute('src', '../Images/Gold_Weapons/BO6/NO_GUN.webp')
				// Create Weapon Camo Element
				imgElement2 = document.createElement(json[i]['Element 3'])
				divElement.appendChild(imgElement2)
				imgElement2.setAttribute('src', json[i]['Element 4'] + '.webp')
				imgElement2.style = 'position: relative; left: -19px;'
				// Create BR Element(s)
				if (json[i]['Element 21'] == 'br') {
					brElement = document.createElement(json[i]['Element 21'])
					mainWrapper.appendChild(brElement)
				}
				if (json[i]['Element 22'] == 'br') {
					brElement = document.createElement(json[i]['Element 22'])
					mainWrapper.appendChild(brElement)
				}
			} else if (elementNum == 12 || elementNum == 13 || elementNum == 14 || elementNum == 15 || elementNum == 16 || elementNum == 17 || elementNum == 18 || elementNum == 19 || elementNum == 20 || elementNum == 21 || elementNum == 22 || elementNum == 23) {
				// Create Main Weapon Div
				divElement = document.createElement(json[i]['Element 1'])
				divElement.className = json[i]['Element 2'] + ' ' + json[i]['Element 5']
				//divElement.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")');
				mainWrapper.appendChild(divElement)
				// Create Background Container
				backgroundDivElement1 = document.createElement('div')
				backgroundDivElement1.style = 'position: relative; width: 0; height: 0'
				// Create Background Element Container
				backgroundDivElement2 = document.createElement('div')
				backgroundDivElement2.style = 'position: absolute; pointer-events: none;'
				// Create Background Image
				backgroundImage = document.createElement('img')
				backgroundDivElement2.appendChild(backgroundImage)
				backgroundImage.outerHTML = '<img src="Empty.webp" class="weapon_background">'
				// Create Weapon Name Textarea
				backgroundGunName = document.createElement('textarea')
				backgroundDivElement2.appendChild(backgroundGunName)
				backgroundGunName.outerHTML = '<textarea class="weapon_name" disabled>' + json[i]['Element 5'] + '</textarea>'
				// Append Elements
				backgroundDivElement1.appendChild(backgroundDivElement2)
				divElement.appendChild(backgroundDivElement1)
				// Create Main Weapon Element
				imgElement1 = document.createElement(json[i]['Element 3'])
				divElement.appendChild(imgElement1)
				imgElement1.setAttribute('src', 'data:image/webp;base64, ' + json[i]['Element 4'])
				imgElement1.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")')
				// Create Weapon Camo Element
				imgElement2 = document.createElement(json[i]['Element 6'])
				divElement.appendChild(imgElement2)
				imgElement2.setAttribute('src', json[i]['Element 7'] + '.webp')
				imgElement2.style = 'position: relative; left: -19px;'
				imgElement2.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")')
				// Create Weapon Challenges Element
				spanElement = document.createElement(json[i]['Element 10'])
				spanElement.className = json[i]['Element 5'] + ' ' + json[i]['Element 11']
				
				// Challenges
				if (json[i]['Element 12'] != '') {element12String = json[i]['Element 12'] + '<br>'} else {element12String = ''}
				if (json[i]['Element 14'] != '') {element13String = json[i]['Element 14'] + '<br>'} else {element13String = ''}
				if (json[i]['Element 16'] != '') {element16String = json[i]['Element 16'] + '<br>'} else {element16String = ''}
				if (json[i]['Element 17'] != '') {element17String = json[i]['Element 17'] + '<br>'} else {element17String = ''}
				if (json[i]['Element 18'] != '') {element18String = json[i]['Element 18'] + '<br>'} else {element18String = ''}
				if (json[i]['Element 19'] != '') {element19String = json[i]['Element 19'] + '<br>'} else {element19String = ''}
				if (json[i]['Element 20'] != '') {element20String = json[i]['Element 20']} else {element20String = ''}
				
				spanElement.innerHTML = '<font size=4><strong>' + json[i]['Element 5'] + '</strong></font><br><br>' + 															element12String + // Challenge 1
																																																							json[i]['Element 13'] + ': '+ element13String + // Challenge 2
																																																							json[i]['Element 15'] + ': '+ element16String + // Challenge 3
																																																																						element17String + // Challenge 4
																																																																						element18String + // Mastery Challenge 1
																																																																						element19String + // Mastery Challenge 2
																																																																						element20String   // Mastery Challenge 3
				divElement.appendChild(spanElement)
				// Create BR Element(s)
				if (json[i]['Element 21'] == 'br') {
					brElement = document.createElement(json[i]['Element 21'])
					mainWrapper.appendChild(brElement)
				}
				if (json[i]['Element 22'] == 'br') {
					brElement = document.createElement(json[i]['Element 22'])
					mainWrapper.appendChild(brElement)
				}
			}
		}
		setPaths()
	});
}
function pinChallenges(elemClasses) {
	if (document.getElementsByClassName(elemClasses)[0].style.visibility == 'hidden' && document.getElementsByClassName(elemClasses)[0].style.accentColor == 'rgb(0, 0, 0)') {
		document.getElementsByClassName(elemClasses)[0].style = 'visibility: visible; accent-color: rgb(255, 255, 255);'
	} if (document.getElementsByClassName(elemClasses)[0].style.visibility == 'visible' && document.getElementsByClassName(elemClasses)[0].style.accentColor == 'rgb(255, 255, 255)') {
		document.getElementsByClassName(elemClasses)[0].style = 'accent-color: rgb(0, 0, 0);'
	} else {
		document.getElementsByClassName(elemClasses)[0].style = 'visibility: visible; accent-color: rgb(255, 255, 255);'
	}
}