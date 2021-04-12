
('use strict');
// DOM is loaded
$(document).ready(function () {
	// Wait 3 seconds for CRM to load

	console.log('in dashboard helper script');
	setTimeout(() => {
		createNextButton();

		//window.location = firstCallackA.find('a').attr('href')
		
	}, 3000);
	
});

function createNextButton() {
	let container = $('div[id="dataSetRoot_Component1334444"]')
	let table = $('div[data-id="data-set-body-container"]');
	let firstCallback = table.find('div[aria-rowindex="2"]')
	let firstCallackA = firstCallback.find('div[aria-colindex="3"]');

	let btn = document.createElement('button');
	// let btnClass = $('textarea[data-id="ttg_customerfacingnote.fieldControl-text-box-text"]').attr('class');
	// btn.className = btnClass;
	btn.onclick = () => {
		window.location = firstCallackA.find('a').attr('href');
	};
	console.log("************** adding next button")
	btn.setAttribute('id', 'tech2nextbutton');
	btn.innerHTML = 'Next Callback';
	container.children().first().append(btn);
	// table.remove();
}