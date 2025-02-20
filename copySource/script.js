document.addEventListener('copy', copyHandler);
let storeRange = document.createRange();
let copyContainer = document.getElementById('copyContainer');

function copyHandler() {
    let selection = document.getSelection();
    console.log(selection);
    let txt = selection.toString() + ' Copied from ' + window.location.href;

    storeRange.setStart(selection.anchorNode, selection.anchorOffset);
    storeRange.setEnd(selection.focusNode, selection.focusOffset);

    copyContainer.innerHTML = txt;

    selection.selectAllChildren(copyContainer);
    setTimeout(() =>{
        let selection = document.getSelection();
        selection.removeAllRanges();
        selection.addRange(storeRange);
    }, 100)
}