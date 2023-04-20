var text = document.getElementsByClassName('text');
for (i = 0; i < text.length; i++) {
	var iRemainder = i % 8;
	if (iRemainder == 0) {
		text[i].color = '#8d5024'
	} else if (iRemainder == 1) {
		text[i].color = '#8d7824'
	} else if (iRemainder == 2) {
		text[i].color = '#508d24'
	} else if (iRemainder == 3) {
		text[i].color = '#248d6c'
	} else if (iRemainder == 4) {
		text[i].color = '#24678d'
	} else if (iRemainder == 5) {
		text[i].color = '#5040ae'
	} else if (iRemainder == 6) {
		text[i].color = '#8640ae'
	} else if (iRemainder == 7) {
		text[i].color = '#ae40a5'
	}
}