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
			if (elementNum == 4) {
				fontElement = document.createElement(json[i]['Element 1'])
				fontElement.className = json[i]['Element 2']
				fontElement.size = json[i]['Element 3']
				fontElement.innerText = json[i]['Element 4']
				mainWrapper.appendChild(fontElement)
			} else if (elementNum == 5) {
				fontElement = document.createElement(json[i]['Element 1'])
				fontElement.className = json[i]['Element 2']
				fontElement.size = json[i]['Element 3']
				fontElement.innerText = json[i]['Element 4']
				mainWrapper.appendChild(fontElement)
				brElement = document.createElement(json[i]['Element 5'])
				mainWrapper.appendChild(brElement)
			} else if (elementNum == 6 || elementNum == 8) {
				imgElement1 = document.createElement(json[i]['Element 1'])
				mainWrapper.appendChild(imgElement1)
				imgElement1.setAttribute('src', json[i]['Element 2'] + '.webp')
				imgElement2 = document.createElement(json[i]['Element 3'])
				mainWrapper.appendChild(imgElement2)
				imgElement2.setAttribute('src', json[i]['Element 4'] + '.webp')
				imgElement3 = document.createElement(json[i]['Element 5'])
				mainWrapper.appendChild(imgElement3)
				imgElement3.setAttribute('src', json[i]['Element 6'] + '.webp')
				if (json[i]['Element 19'] == 'br') {
					brElement = document.createElement(json[i]['Element 19'])
					mainWrapper.appendChild(brElement)
				}
				if (json[i]['Element 20'] == 'br') {
					brElement = document.createElement(json[i]['Element 20'])
					mainWrapper.appendChild(brElement)
				}
			} else if (elementNum == 12 || elementNum == 13 || elementNum == 14 || elementNum == 15 || elementNum == 16 || elementNum == 17 || elementNum == 18 || elementNum == 19 || elementNum == 20) {
				divElement = document.createElement(json[i]['Element 1'])
				divElement.className = json[i]['Element 2']
				mainWrapper.appendChild(divElement)
				imgElement1 = document.createElement(json[i]['Element 3'])
				divElement.appendChild(imgElement1)
				imgElement1.setAttribute('src', 'data:image/webp;base64, ' + json[i]['Element 4'])
				imgElement1.setAttribute("onclick", 'pinChallenges("' + json[i]['Element 5'] + ' challenges")');
				imgElement2 = document.createElement(json[i]['Element 6'])
				divElement.appendChild(imgElement2)
				imgElement2.setAttribute('src', json[i]['Element 7'] + '.webp')
				imgElement3 = document.createElement(json[i]['Element 8'])
				divElement.appendChild(imgElement3)
				imgElement3.setAttribute('src', json[i]['Element 9'] + '.webp')
				spanElement = document.createElement(json[i]['Element 10'])
				spanElement.className = json[i]['Element 5'] + ' ' + json[i]['Element 11']
				if (json[i]['Element 12'] != '') {element12String = json[i]['Element 12'] + '<br>'} else {element12String = ''}
				if (json[i]['Element 13'] != '') {element13String = json[i]['Element 13'] + '<br>'} else {element13String = ''}
				if (json[i]['Element 14'] != '') {element14String = json[i]['Element 14'] + '<br>'} else {element14String = ''}
				if (json[i]['Element 15'] != '') {element15String = json[i]['Element 15'] + '<br>'} else {element15String = ''}
				if (json[i]['Element 16'] != '') {element16String = json[i]['Element 16'] + '<br>'} else {element16String = ''}
				if (json[i]['Element 17'] != '') {element17String = json[i]['Element 17'] + '<br>'} else {element17String = ''}
				if (json[i]['Element 18'] != '') {element18String = json[i]['Element 18']} else {element18String = ''}
				spanElement.innerHTML = '<font size=4><strong>' + json[i]['Element 5'] + '</strong></font><br><br>' + element12String + // Challenge 1
																																																							element13String + // Challenge 2
																																																							element14String + // Challenge 3
																																																							element15String + // Challenge 4
																																																							element16String + // Mastery Challenge 1
																																																							element17String + // Mastery Challenge 2
																																																							element18String   // Mastery Challenge 3
				divElement.appendChild(spanElement)
				if (json[i]['Element 19'] == 'br') {
					brElement = document.createElement(json[i]['Element 19'])
					mainWrapper.appendChild(brElement)
				}
				if (json[i]['Element 20'] == 'br') {
					brElement = document.createElement(json[i]['Element 20'])
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