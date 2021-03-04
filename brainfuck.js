// Elements
var extraContain = document.getElementById('extras')
var extraPos = document.getElementById('extraPos')

var extraContainTwo = document.getElementById('extrasTwo')
var extraPosTwo = document.getElementById('extraPosTwo')

// Species Selectors
var returnSpeciesValue = document.getElementById('speciesSelectList').value
var currentID =
  returnSpeciesValue
    .substr(0, 3)
    .toString()
    .toLowerCase() + 'CB'
var hybrid = document.getElementById('hybrid')
var hLab = document.getElementById('hybridLabel')
var hBox = document.getElementById('hybridToggle')
var crossContain = document.getElementById('crossbreed')
var secondSpeciesList = document.getElementById('speciesSelectListTwo')

// Miscellaneous Variables
var maxAge
var speciesCount = secondSpeciesList.childElementCount
var disabledSpecies = []

// Modify form based on Species Selection
function speciesSelect () {
  returnSpeciesValue = document.getElementById('speciesSelectList').value
  currentID =
    returnSpeciesValue
      .substr(0, 3)
      .toString()
      .toLowerCase() + 'CB'

  var extraHeight = '1.4em'
  // Human/Ardoni Clan/Class Tags
  if (returnSpeciesValue == 'Human' || returnSpeciesValue == 'Ardoni') {
    // Apply Height
    extraContain.style.height = extraHeight
  }
  if (returnSpeciesValue == 'Human') {
    // Apply Human Ruleset
    extraPos.style.transform = 'translateY(0px)'
  } else if (returnSpeciesValue == 'Ardoni') {
    // Apply Ardoni Rulesets
    extraPos.style.transform = 'translateY(-25px)'
  } else {
    extraContain.style.height = '0em'
    extraPos.style.transform = 'translateY(0px)'
  }
  createSpeciesFilter()
  console.log('Species set to "' + returnSpeciesValue + '"')
}

// Modify CB form based on Species Selection
function speciesSelectTwo () {
  returnSpeciesValueTwo = document.getElementById('speciesSelectListTwo').value

  var extraHeightTwo = '1.4em'
  // Human/Ardoni Clan/Class Tags
  if (returnSpeciesValueTwo == 'Human' || returnSpeciesValueTwo == 'Ardoni') {
    // Apply Height
    extraContainTwo.style.height = extraHeightTwo
  }
  if (returnSpeciesValueTwo == 'Human') {
    // Apply Human Ruleset
    extraPosTwo.style.transform = 'translateY(0px)'
  } else if (returnSpeciesValueTwo == 'Ardoni') {
    // Apply Ardoni Rulesets
    extraPosTwo.style.transform = 'translateY(-25px)'
  } else {
    // Revert Ardoni/Human Rulesets
    extraContainTwo.style.height = '0em'
    extraPosTwo.style.transform = 'translateY(0px)'
  }
  console.log('Species set to "' + returnSpeciesValueTwo + '"')
}

function updateHybrid () {
  if (hBox.checked == true) {
    hBox.checked = false // Sets the Form Value to "False"

    console.info('Crossbreed Disabled')
    // Style the Hybrid Toggle Button
    hLab.style.color = 'black'

    // Hide CB Options and reset them
    crossContain.style.height = '0px'
  } else {
    hBox.checked = true // Sets the Form Value to "True"

    console.info('Crossbreed Enabled')
    // Style the Hybrid Toggle Button
    hLab.style.color = 'red'

    // Show CB Options
    crossContain.style.height = '100px'
  }
  createSpeciesFilter()
}

var mainList = document
  .getElementById('speciesSelectList')
  .getElementsByTagName('option')

// Crossbreed Species Filters
function createSpeciesFilter () {
  console.group('Filter Update')

  // Get List Elements
  var cbList = secondSpeciesList
  var listSubElms = cbList.getElementsByTagName('option')

  disabledSpecies.splice(0, disabledSpecies.length) // Reset Array

  disabledSpecies.push(currentID)

  // Apply Filters
  if (returnSpeciesValue == 'Netheran') {
    disabledSpecies.push('glaCB') // Remove Glacian from Netheran CB Options
  } else if (returnSpeciesValue == 'Glacian') {
    disabledSpecies.push('netCB') // Remove Netheran from Glacian CB Options
  } else if (returnSpeciesValue == 'Magnorite') {
    // Remove everything from form when Magnorite is selected
    for (var i = 0; i < mainList.length - 1; i++) {
      disabledSpecies.push(
        mainList[i].innerText
          .substr(0, 3)
          .toString()
          .toLowerCase() + 'CB'
      )
    }

    // Disable and Hide Crossbreed Section
    hybrid.style.opacity = '0%'
    hybrid.style.pointerEvents = 'none'
    hBox.checked = false
    hBox.style.pointerEvents = 'none'
    console.info('Crossbreed Disabled')
    hLab.style.color = 'black'
    crossContain.style.height = '0px'
  } else {
    // Invert Rulesets when Species is changed off of "Magnorite"

    hybrid.style.opacity = '100%'
    hybrid.style.pointerEvents = 'auto'
    hBox.style.pointerEvents = 'auto'
  }
  console.info('Crossbreed Filter Updated')
  console.log(disabledSpecies)

  // Reset Filter
  for (var i = 0; i < speciesCount; i++) {
    // Total of 7 Elements
    listSubElms[i].removeAttribute('disabled', '')
    listSubElms[i].style.display = 'initial'
  }
  console.warn('Crossbreed Filter Reset')

  // Disable Elements
  for (var i = 0; i < disabledSpecies.length; i++) {
    document
      .getElementById(disabledSpecies[i].toString())
      .setAttribute('disabled', '')
    document
      .getElementById(disabledSpecies[i].toString())
      .setAttribute('hidden', '')
  }
  console.info('Filter Applied')
  console.groupEnd('Filter Update')
}

// Necromancer Stuff
var nLab = document.getElementById('necroButton')
var nBox = document.getElementById('necroToggle')

function updateNecro () {
  if (nBox.checked == true) {
    nBox.checked = false // Sets the Form Value to "False"

    console.info('Necromancer Disabled')
    // Style the Hybrid Toggle Button
    nLab.style.color = 'black'
  } else {
    nBox.checked = true // Sets the Form Value to "True"

    console.info('Necromancer Enabled')
    nLab.style.color = 'red'
  }
}

// Run Filters once to set Default Values
speciesSelect()
speciesSelectTwo()
createSpeciesFilter()
