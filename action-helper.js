//description.fieldControl-text-box-text
setTimeout(() => {
    let actionNotes = $('textarea[data-id="description.fieldControl-text-box-text"]')
    console.log("-******************************", actionNotes.val())
    actionNotes.attr("height", "50vh")
}, 3000);
