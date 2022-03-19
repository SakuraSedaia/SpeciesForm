var rowOne = document.getElementById('rowOne')
var rowTwo = document.getElementById('rowTwo')
var rowThree = document.getElementById('rowThree')
var rowFour = document.getElementById('rowFour')
var rowFive = document.getElementById('rowFive')

// height of rows
var defaultHeight = "50px";
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
