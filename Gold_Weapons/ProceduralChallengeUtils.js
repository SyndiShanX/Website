async function sendData(data) {
	const formData = new FormData(form);
	//data = Object.fromEntries(formData)
	//console.log(Object.fromEntries(formData));
	//test = new URLSearchParams(data)
	//console.log(test.toString())
	//console.log(data)
	try {
		const response = await fetch("https://script.google.com/macros/s/AKfycby9Oqjw8V3uCGAmEybSuGbl92exwZ_pWPr0_ytvC839XUMnnfviMy3D0Uj5rr1CmQd5hw/exec", {
			method: "POST",
			body: new URLSearchParams(data)
		});
		const responseText = await response.text();
		console.log(responseText);
	}
	catch (error) {
		alert(error);
	}
}

//for (const pair of temp1.entries()) {
//  console.log(pair[0], pair[1]);
//}

//sendData()

function resetPage() {
	document.getElementsByClassName('MainWrapper')[0].remove()
	mainWrapperDiv = document.createElement('div')
	mainWrapperDiv.className = 'MainWrapper'
	mainWrapperDiv.align = 'center'
	mainFormElement = document.createElement('form')
	mainFormElement.id = 'form'
	mainWrapperDiv.appendChild(mainFormElement)
	document.getElementsByTagName('body')[0].appendChild(mainWrapperDiv)
}
function fetchData(spreadsheetID, pageNum) {
	fetch('https://opensheet.elk.sh/' + spreadsheetID + '/' + pageNum).then((response) => response.json()).then((data) => {
		json = data
		mainWrapperDiv = document.getElementsByClassName('MainWrapper')[0]
		mainFormElement = document.createElement('form')
		mainFormElement.id = 'form'
		mainWrapperDiv.appendChild(mainFormElement)
		mainForm = document.getElementById('form')
		for (i = 0; i < json.length; i++) {
			elementNum = json[i]['Element Num']
			if (elementNum == 4) { // Font Element without a Line Break
				fontElement = document.createElement(json[i]['Element 1'])
				fontElement.className = json[i]['Element 2']
				fontElement.size = json[i]['Element 3']
				fontElement.innerText = json[i]['Element 4']
				mainForm.appendChild(fontElement)
			} else if (elementNum == 5) { // Font Element with a Line Break
				fontElement = document.createElement(json[i]['Element 1'])
				fontElement.className = json[i]['Element 2']
				fontElement.size = json[i]['Element 3']
				fontElement.innerText = json[i]['Element 4']
				mainForm.appendChild(fontElement)
				brElement = document.createElement(json[i]['Element 5'])
				mainForm.appendChild(brElement)
			} else if (elementNum == 6 || elementNum == 8) { // Empty Weapon Image Element
				// Create Main Weapon Div
				divElement = document.createElement('div')
				divElement.className = 'weapon'
				mainForm.appendChild(divElement)
				// Create Empty Weapon Element
				imgElement1 = document.createElement(json[i]['Element 1'])
				divElement.appendChild(imgElement1)
				imgElement1.setAttribute('src', json[i]['Element 2'] + '.webp')
				// Create Weapon Camo Element
				imgElement2 = document.createElement(json[i]['Element 3'])
				divElement.appendChild(imgElement2)
				imgElement2.setAttribute('src', json[i]['Element 4'] + '.webp')
				// Create Weapon Mastery Element
				imgElement3 = document.createElement(json[i]['Element 5'])
				divElement.appendChild(imgElement3)
				imgElement3.setAttribute('src', json[i]['Element 6'] + '.webp')
				// Create BR Element(s)
				if (json[i]['Element 21'] == 'br') {
					brElement = document.createElement(json[i]['Element 21'])
					mainForm.appendChild(brElement)
				}
				if (json[i]['Element 22'] == 'br') {
					brElement = document.createElement(json[i]['Element 22'])
					mainForm.appendChild(brElement)
				}
			} else if (elementNum == 12 || elementNum == 13 || elementNum == 14 || elementNum == 15 || elementNum == 16 || elementNum == 17 || elementNum == 18 || elementNum == 19 || elementNum == 20|| elementNum == 21|| elementNum == 22) {
				// Create Main Weapon Div
				divElement = document.createElement(json[i]['Element 1'])
				divElement.className = json[i]['Element 2'] + ' ' + json[i]['Element 5']
				//divElement.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")');
				mainForm.appendChild(divElement)
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
				// Create Weapon Mastery Element
				imgElement3 = document.createElement(json[i]['Element 8'])
				divElement.appendChild(imgElement3)
				imgElement3.setAttribute('src', json[i]['Element 9'] + '.webp')
				imgElement3.setAttribute("onclick", 'incrementMastery("' + json[i]['Element 5'] + ' weapon")')
				// Create Spreadsheet Update Elements
				formElement1 = document.createElement('input')
				formElement1.className = 'hidden'
				formElement1.name = 'Element_Notation'
				formElement1.setAttribute("value", 'J' + (parseInt(i + 2)))
				divElement.appendChild(formElement1)
				formElement2 = document.createElement('input')
				formElement2.className = 'hidden'
				formElement2.name = 'Element_Value'
				formElement2.value = ''
				divElement.appendChild(formElement2)
				// Create Weapon Challenges Element
				spanElement = document.createElement(json[i]['Element 10'])
				spanElement.className = json[i]['Element 5'] + ' ' + json[i]['Element 11']
				
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
					mainForm.appendChild(brElement)
				}
				if (json[i]['Element 22'] == 'br') {
					brElement = document.createElement(json[i]['Element 22'])
					mainForm.appendChild(brElement)
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
function incrementMastery(elemClasses) {
	currentElement = document.getElementsByClassName(elemClasses)[0]
	//console.log(elemClasses)
	//console.log(currentElement)
	split1 = currentElement.children[3].src
	if (split1.split('ZM/').length != 1) {
		split2 = split1.split('ZM/')
		splitString = 'ZM/'
		sheetName = 'BO6 ZM'
	} else if (split1.split('MP/').length != 1) {
		split2 = split1.split('MP/')
		splitString = 'MP/'
		sheetName = 'BO6 MP'
	} else if (split1.split('WZ/').length != 1) {
		split2 = split1.split('WZ/')
		splitString = 'WZ/'
		sheetName = 'BO6 WZ'
	}
	starNum = split2[1].split('_Star')[0]
	if (starNum < 4) {
		if (parseInt(starNum) + 1 != 1) {
			currentElement.children[3].src = split2[0] + splitString + (parseInt(starNum) + 1) + '_Stars.webp'
			currentElement.children[5].value = (parseInt(starNum) + 1)
		} else {
			currentElement.children[3].src = split2[0] + splitString + (parseInt(starNum) + 1) + '_Star.webp'
			currentElement.children[5].value = (parseInt(starNum) + 1)
		}
	} else {
		currentElement.children[3].src = split2[0] + splitString + '0_Stars.webp'
		currentElement.children[5].value = 0
	}
	sendData("Element_Notation=" + currentElement.children[4].value + "&Element_Value=" + currentElement.children[5].value + "&Sheet_Name=" + sheetName)
}