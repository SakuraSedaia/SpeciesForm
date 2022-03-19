// Default Values
var defaultGender = "Male"
var defaultSpecies = "Human"
var defaultSecondSpecies = "None"
var maxAges = [
  [0, null],
  [100, "Human"],
  [100, "Felina"],
  [300, "Ardoni"],
  [800, "Netheran"],
  [1000, "Glacian"],
  [100, "Jaggathan"],
  [30, "Magnorite"],
  // =-=-=-=-=-= //
  [400, "Enderknight"]
]
// =-=-=-=-=-= //

// Internal Variables
var activeSpe
var activeCroSpe = 0

// Create HTML References
// _Names
var name
var alias
var surname

// _Age
var age = document.getElementById("age") // Age Input
var maxAge = document.getElementById("maxAge") // Maximum Age Text

// _Species
var mainSpecies = document.getElementById("spe")
var crossSpecies = document.getElementById("croSpe")
var necro = document.getElementById("nec")
var ender = document.getElementById("end")
var clan = document.getElementById("ardoClan")
var clanDos = document.getElementById("secondArdoClan")
var animal
var animalText
// =-=-=-=-=-= //

// Startup Functions
setMainSpecies()
// setCrossSpecies()

// =-=-=-=-=-= //
// Functions
function setMaxAge() {
  if (activeCroSpe == 0) {
    activeCroSpe = activeSpe

    console.log("Cross Species Lifespan Equalized")
  }
  maximumAgeValue = ((maxAges[activeSpe + 1][0] + maxAges[activeCroSpe][0]) / 2)
  maxAge.innerText = maximumAgeValue
  age.setAttribute('max',maximumAgeValue);
  
  if (age.value > maximumAgeValue) {
    window.alert("Maximum age for your Species selection is " + maximumAgeValue );
  }

}

function setMainSpecies() {
  var i = 0
  while (i < mainSpecies.length) {
    if (mainSpecies.value == maxAges[i][1]) {
      console.log("Active Main Species = " + maxAges[i][1])
      activeSpe = i
    }
    i++
  }

  setMaxAge()
  disableEnderknight()
}



function setEnderknight() {}

function disableEnderknight() {
  if (activeSpe /= 0) {
    ender.setAttribute('disabled', '')
  } else if (activeSpe == 0) {
    ender.removeAttribute('disabled')
  }
}

function animalToggle() {}

/* Accordian JS */
var rowOne = document.getElementById("rowOne")
var rowTwo = document.getElementById("rowTwo")
var rowThree = document.getElementById("rowThree")
var rowFour = document.getElementById("rowFour")
var rowFive = document.getElementById("rowFive")

// height of rows
var defaultHeight = "50px"
var rowOneHeight = "160.225px"
var rowTwoHeight = "209.425px"
var rowThreeHeight = "158.425px"
var rowFourHeight = "158.425px"
var rowFiveHeight = "154.825px"

function openRow(row) {
  if (row == 0) {
    if (rowOne.style.height == rowOneHeight) {
      rowOne.style.height = defaultHeight
    } else {
      rowOne.style.height = rowOneHeight
    }
  }

  if (row == 1) {
    if (rowTwo.style.height == rowTwoHeight) {
      rowTwo.style.height = defaultHeight
    } else {
      rowTwo.style.height = rowTwoHeight
    }
  }

  if (row == 2) {
    if (rowThree.style.height == rowThreeHeight) {
      rowThree.style.height = defaultHeight
    } else {
      rowThree.style.height = rowThreeHeight
    }
  }

  if (row == 3) {
    if (rowFour.style.height == rowFourHeight) {
      rowFour.style.height = defaultHeight
    } else {
      rowFour.style.height = rowFourHeight
    }
  }

  if (row == 4) {
    if (rowFive.style.height == rowFiveHeight) {
      rowFive.style.height = defaultHeight
    } else {
      rowFive.style.height = rowFiveHeight
    }
  }
}