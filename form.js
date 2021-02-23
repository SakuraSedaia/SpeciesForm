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

// Modify form based on Species Selection
function speciesSelect() {
    returnSpeciesValue = document.getElementById('speciesSelectList').value
    console.log('Species set to "' + returnSpeciesValue + '"')
    
    // Human Ruleset
    if (returnSpeciesValue == 'Human') {
    } 
    
    // Ardoni Ruleset

    // Magnorite Ruleset
    if (returnSpeciesValue == 'Magnorite') {
        // Activate Rulesets for when "Magnorite" is Selected
        hybrid.style.opacity = "0%"
        hBox.checked = false;
        hBox.style.pointerEvents = "none"

        updateHybrid()
    } else {
        // Invert Rulesets when Species is changed off of "Magnorite"

        hybrid.style.opacity = "100%"
        hBox.checked = false;
        hBox.style.pointerEvents = "auto"
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