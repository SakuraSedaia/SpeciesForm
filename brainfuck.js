// Elements
var extraContain = document.getElementById('extras')
var extraPos = document.getElementById('extraPos')

// Species Selectors


var hybrid = document.getElementById('hybrid')
var hLab = document.getElementById('hybridLabel')
var hBox = document.getElementById('hybridToggle')
var maxAge

// Modify form based on Species Selection
function speciesSelect() {
    var returnSpeciesValue = document.getElementById('speciesSelectList').value
    var extraHeight = '1.4em'
    console.log('Species set to "' + returnSpeciesValue + '"')
    
    // Human Ruleset
    if (returnSpeciesValue == 'Human') {
        extraContain.style.height = extraHeight
        extraPos.style.transform = "translateY(0px)";
    } 
    
    // Ardoni Ruleset
    if (returnSpeciesValue == 'Ardoni') {
        extraContain.style.height = extraHeight
        extraPos.style.transform = "translateY(-25px)"
    } 

    // Cancel out Ardoni and Human Rulesets
    if (returnSpeciesValue != ('Human' && 'Ardoni')) {
        extraContain.style.height = "0em"
        extraPos.style.transform = "translateY(0px)"
    }

    // Magnorite Ruleset
    if (returnSpeciesValue == 'Magnorite') {
        // Activate Rulesets for when "Magnorite" is Selected

        hybrid.style.opacity = "0%"
        hBox.checked = false
        hBox.style.pointerEvents = "none"

        updateHybrid()
    } else {
        // Invert Rulesets when Species is changed off of "Magnorite"

        hybrid.style.opacity = "100%"
        hBox.checked = false
        hBox.style.pointerEvents = "auto"
    }
}

function updateHybrid() {
    if (hBox.checked == true) {
        hBox.checked = false

    } else {
        hBox.checked = true

    }
}