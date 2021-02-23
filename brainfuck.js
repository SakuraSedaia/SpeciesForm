// Elements
var extraContain = document.getElementById('extras')
var extraPos = document.getElementById('extraPos')

var extraContainTwo = document.getElementById('extrasTwo')
var extraPosTwo = document.getElementById('extraPosTwo')
// Species Selectors

var hybrid = document.getElementById('hybrid')
var hLab = document.getElementById('hybridLabel')
var hBox = document.getElementById('hybridToggle')
var crossContain = document.getElementById('crossbreed')


var maxAge

// Modify form based on Species Selection
function speciesSelect() {
    var returnSpeciesValue = document.getElementById('speciesSelectList').value
    var extraHeight = '1.4em'

    // Human/Ardoni Clan/Class Tags
    if (returnSpeciesValue == ('Human' || "Ardoni")) {
        // Apply Height
        extraContain.style.height = extraHeight

    } if (returnSpeciesValue == 'Human') {

        // Apply Human Ruleset
        extraPos.style.transform = 'translateY(0px)'

    } else if (returnSpeciesValue == 'Ardoni') {
        // Apply Ardoni Rulesets
        extraPos.style.transform = 'translateY(-25px)'

    } else {

        extraContain.style.height = '0em'
        extraPos.style.transform = 'translateY(0px)'
    }

    // Magnorite Ruleset
    if (returnSpeciesValue == 'Magnorite') {
        // Activate Rulesets for when "Magnorite" is Selected

        hybrid.style.opacity = '0%'
        hBox.checked = false
        hBox.style.pointerEvents = 'none'

        updateHybrid()
    } else {
        // Invert Rulesets when Species is changed off of "Magnorite"

        hybrid.style.opacity = '100%'
        hBox.checked = false
        hBox.style.pointerEvents = 'auto'
    }

    console.log('Species set to "' + returnSpeciesValue + '"')
}

function speciesSelectTwo() {
    var returnSpeciesValue = document.getElementById('speciesSelectListTwo').value
    var extraHeight = '1.4em'

    // Human/Ardoni Clan/Class Tags
    if (returnSpeciesValue == ('Human' || "Ardoni")) {
        // Apply Height
        extraContainTwo.style.height = extraHeight

    } if (returnSpeciesValue == 'Human') {

        // Apply Human Ruleset
        extraPosTwo.style.transform = 'translateY(0px)'

    } else if (returnSpeciesValue == 'Ardoni') {
        // Apply Ardoni Rulesets
        extraPosTwo.style.transform = 'translateY(-25px)'

    } else {

        extraContainTwo.style.height = '0em'
        extraPosTwo.style.transform = 'translateY(0px)'
    }

    console.log('Species set to "' + returnSpeciesValue + '"')
}

function updateHybrid() {
    if (hBox.checked == true) {
        hBox.checked = false // Sets the Form Value to "False"

        // Style the Hybrid Toggle Button
        hLab.style.color = "black"

        // Hide CB Options and reset them
        crossContain.style.height = "0px" 
    } else {
        hBox.checked = true // Sets the Form Value to "True"

        // Style the Hybrid Toggle Button
        hLab.style.color = "red"

        // Show CB Options
        crossContain.style.height = "100px"
    }
}
