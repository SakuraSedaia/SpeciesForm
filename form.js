// Elements
var extraContain = document.getElementById('extras')
var extraPos = document.getElementById('extraPos')

// Species Selectors
var extraHeight = '1.4em'
var returnSpeciesValue

var hybrid = document.getElementById('hybrid')
var hLab = document.getElementById('hybridLabel')
var hBox = document.getElementById('hybridToggle')
var maxAge
// Which list should I show?
function list() {
    returnSpeciesValue = document.getElementById('speciesSelectList').value
    console.log("Fuck You")

    if (returnSpeciesValue == 'Human') {
    } 
    
    
    if (returnSpeciesValue == 'Magnorite') {
        hybrid.style.visibility = "hidden"
    } else {
        hybrid.style.visibility = "initial"
        hBox.checked = false;
    }
}

function updateHybrid() {
    if (hBox.checked == true) {
        hBox.checked = false
        console.log('I fucking hate you')
    } else {
        hBox.checked = true
    }
}