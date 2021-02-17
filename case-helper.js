//console.log('*****************CHROME EXTRENSION ');

('use strict');
// DOM is loaded
$(document).ready(function () {
	// Wait 3 seconds for CRM to load

	setTimeout(() => {
		let cutButton = document.getElementById('tech2cutbutton');
		// check if action button already exists id = tech2cutbutton
		// Inject Jquery
		cutButton == null && createCutButton();
	}, 3000);
});

// Create the Cut button next to Customer Facing Note
function createCutButton() {
	let btn = document.createElement('button');
	let btnClass = $('textarea[data-id="ttg_customerfacingnote.fieldControl-text-box-text"]').attr('class');
	btn.className = btnClass;
	btn.onclick = () => {
		onCutButtonPressed(btn);
	};
	btn.setAttribute('id', 'tech2cutbutton');
	btn.innerHTML = 'Action Template';
	$('textarea[data-id="ttg_customerfacingnote.fieldControl-text-box-text"]').parent().append(btn);
	btn.className = btnClass;
	//console.log('creating cut button *************************');
}

function onCutButtonPressed() {
	let textArea = $('textarea[data-id="ttg_customerfacingnote.fieldControl-text-box-text"]');
	textArea.focus();
	createTemplate();
	textArea.select();
	document.execCommand('copy');
}

// Set Customer Facing Note to pre generated template
function createTemplate() {
	$('textarea[data-id="ttg_customerfacingnote.fieldControl-text-box-text"]').focus();
	$('textarea[data-id="ttg_customerfacingnote.fieldControl-text-box-text"]').val(
		'Subscription: ' +
			getSub() +
			'\nCase: ' +
			$('input[data-id="ticketnumber.fieldControl-text-box-text"]').val() +
			'\n' +
			'\nIssue:' +
			'\n- ' +
			$('textarea[data-id="description.fieldControl-text-box-text"]').val() +
			'\n' +
			'\nActions:' +
			'\n- ' +
			'\n' +
			'\nOutcomes:' +
			'\n- Issue(s) addressed'
	);
}

// Return the CRM generated Subscription ID
function getSub() {
	let sub = $('div[data-id="entitlementid.fieldControl-LookupResultsDropdown_entitlementid_selected_tag_text"]').text();
	// Splits the string "NAME - INVOICE - tech2-####
	// Into an array
	// 0 - NAME, 1 - INVOICE, 2 - tech2-####
	let res = sub.split(' - ');
	if (res.length > 1) return res[2];
	return res[0];
}
