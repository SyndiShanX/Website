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
				backgroundImage.outerHTML = '<img src="../Images/Gold_Weapons/CW/Empty.webp" class="weapon_background">'
				// Create Main Weapon Element
				imgElement1 = document.createElement('img')
				divElement.appendChild(imgElement1)
				imgElement1.setAttribute('src', '../Images/Gold_Weapons/CW/NO_GUN.webp')
				// Create Weapon Camo Element
				imgElement2 = document.createElement(json[i]['Element 3'])
				divElement.appendChild(imgElement2)
				imgElement2.setAttribute('src', json[i]['Element 4'] + '.webp')
				imgElement2.style = 'position: relative; left: -19px;'
				// Create BR Element(s)
				if (json[i]['Element 24'] == 'br') {
					brElement = document.createElement(json[i]['Element 24'])
					mainWrapper.appendChild(brElement)
				}
				if (json[i]['Element 25'] == 'br') {
					brElement = document.createElement(json[i]['Element 25'])
					mainWrapper.appendChild(brElement)
				}
			} else if (elementNum >= 12) {
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
				backgroundImage.outerHTML = '<img src="../Images/Gold_Weapons/CW/Empty.webp" class="weapon_background">'

				// Create Main Weapon Element
				imgElement1 = document.createElement(json[i]['Element 3'])
				divElement.appendChild(imgElement1)
				imgElement1.setAttribute('src', 'data:image/webp;base64, ' + json[i]['Element 4'])
				imgElement1.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")')
				imgElement1.style = 'position: relative; left: -19px;'
				
				// Create Weapon Camo Element
				if(json[i]['Element 7'] != 'Mixed') {
					imgElement2 = document.createElement(json[i]['Element 6'])
					divElement.appendChild(imgElement2)
				
					imgSrc = json[i]['Element 7']
					if (imgSrc == "Grunge" || imgSrc == "Liquid" || imgSrc == "Brushstroke" || imgSrc == "Vintage" || imgSrc == "Fauna" || imgSrc == "Topography" || imgSrc == "Infection") {
						imgPath = '../Images/Gold_Weapons/CW/Progression/' + json[i]['Element 7']
					} else {
						imgPath = imgSrc
					}
					
					imgElement2.setAttribute('src', imgPath + '.webp')
					imgElement2.style = 'position: relative; left: -19px;'
					imgElement2.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")')
				}
				
				// Camo Category Checkmarks
				if(json[i]['Element 7'] == 'Mixed') {
					checkmarkDivElement = document.createElement('div')
					checkmarkDivElement.style = 'position: relative; left: -19px;'
					checkmarkDivElement.className = 'checkmark_wrapper'
					checkmarkDivElement.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")')
					
					checkmarkColumnDivElement1 = document.createElement('div')
					checkmarkColumnDivElement1.className = 'checkmark_column'
					
					checkmarkColumnDivElement2 = document.createElement('div')
					checkmarkColumnDivElement2.className = 'checkmark_column'
					
					checkmarkColumnDivElement3 = document.createElement('div')
					checkmarkColumnDivElement3.className = 'checkmark_column'
					
					checkmarkElement1 = document.createElement('img')
					checkmarkElement2 = document.createElement('img')
					checkmarkElement3 = document.createElement('img')
					checkmarkElement4 = document.createElement('img')
					checkmarkElement5 = document.createElement('img')
					checkmarkElement6 = document.createElement('img')
					checkmarkElement7 = document.createElement('img')
				
					checkmarkElement1.className = 'camo_checkmark'
					checkmarkElement2.className = 'camo_checkmark'
					checkmarkElement3.className = 'camo_checkmark'
					checkmarkElement4.className = 'camo_checkmark'
					checkmarkElement5.className = 'camo_checkmark'
					checkmarkElement6.className = 'camo_checkmark'
					checkmarkElement7.className = 'camo_checkmark'
					
					checkmarkElement1.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Grunge_Locked.webp')
					checkmarkElement2.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Liquid_Locked.webp')
					checkmarkElement3.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Brushstroke_Locked.webp')
					checkmarkElement4.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Vintage_Locked.webp')
					checkmarkElement5.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Fauna_Locked.webp')
					checkmarkElement6.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Topography_Locked.webp')
					checkmarkElement7.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Infection_Locked.webp')
					
					if (json[i]['Element 8'] == 'TRUE') {
						checkmarkElement1.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Grunge.webp')
					}
					if (json[i]['Element 9'] == 'TRUE') {
						checkmarkElement2.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Liquid.webp')
					}
					if (json[i]['Element 10'] == 'TRUE') {
						checkmarkElement3.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Brushstroke.webp')
					}
					if (json[i]['Element 11'] == 'TRUE') {
						checkmarkElement4.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Vintage.webp')
					}
					if (json[i]['Element 12'] == 'TRUE') {
						checkmarkElement5.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Fauna.webp')
					}
					if (json[i]['Element 13'] == 'TRUE') {
						checkmarkElement6.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Topography.webp')
					}
					if (json[i]['Element 14'] == 'TRUE') {
						checkmarkElement7.setAttribute('src', '../Images/Gold_Weapons/CW/Progression/Infection.webp')
					}
					
					checkmarkColumnDivElement1.appendChild(checkmarkElement1)
					checkmarkColumnDivElement1.appendChild(checkmarkElement2)
					checkmarkColumnDivElement1.appendChild(checkmarkElement3)
					checkmarkColumnDivElement2.appendChild(checkmarkElement4)
					checkmarkColumnDivElement2.appendChild(checkmarkElement5)
					checkmarkColumnDivElement2.appendChild(checkmarkElement6)
					checkmarkColumnDivElement3.appendChild(checkmarkElement7)
					
					checkmarkDivElement.appendChild(checkmarkColumnDivElement1)
					checkmarkDivElement.appendChild(checkmarkColumnDivElement2)
					checkmarkDivElement.appendChild(checkmarkColumnDivElement3)
					
					divElement.appendChild(checkmarkDivElement)
				}
				
				// Create Weapon Challenges Element
				spanElement = document.createElement(json[i]['Element 15'])
				spanElement.className = json[i]['Element 5'] + ' ' + json[i]['Element 16']
				
				// Challenges
				if (json[i]['Element 19'] != '') {element12String = json[i]['Element 19'] + '<br>'} else {element12String = ''}
				if (json[i]['Element 20'] != '') {element13String = json[i]['Element 20'] + '<br>'} else {element13String = ''}
				if (json[i]['Element 21'] != '') {element16String = json[i]['Element 21'] + '<br>'} else {element16String = ''}
				if (json[i]['Element 22'] != '') {element17String = json[i]['Element 22'] + '<br>'} else {element17String = ''}
				if (json[i]['Element 23'] != '') {element18String = json[i]['Element 23'] + '<br>'} else {element18String = ''}
				
				spanElement.innerHTML = '<font size=4><strong>' + json[i]['Element 5'] + '</strong></font><br><br>' + element12String + // Challenge 1
																																																							element13String + // Challenge 2
																																																							element16String + // Challenge 3
																																																							element17String + // Challenge 4
																																																							element18String   // Challenge 5
				divElement.appendChild(spanElement)
				
				// Create BR Element(s)
				if (json[i]['Element 24'] == 'br') {
					brElement = document.createElement(json[i]['Element 24'])
					mainWrapper.appendChild(brElement)
				}
				if (json[i]['Element 25'] == 'br') {
					brElement = document.createElement(json[i]['Element 25'])
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