function addTemplate() {

    console.log("***********************contact helper")
    let desc = $('textarea[data-id="description.fieldControl-text-box-text"]');

    if (typeof desc === 'undefined' || desc === null) {
        // variable is undefined or null
        return
    }

    desc.focus();
    desc.scrollTop = desc.scrollHeight;
    let template = '\nDEVICE 1\nBrand:\nModel:\nOS:\n\n'
    + 'DEVICE 2\nBrand:\nModel:\nOS:\n\n'
    + 'DEVICE 3\nBrand:\nModel:\nOS:\n\n'
    + 'DEVICE 4\nBrand:\nModel:\nOS:\n'

    // Execute after 0.1 seconds
    setTimeout(()=>{
        let existingDesc = desc.val()
        desc.val(existingDesc + template)
    },100);
}

addTemplate();