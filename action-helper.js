console.log('in action helper script');
$(document).ready(function () {
	setTimeout(() => {
		let actionNotes = $('textarea[data-id="description.fieldControl-text-box-text"]');
		console.log('-******************************', actionNotes.val());
		actionNotes.height('55vh');
	}, 500);
});
