// Elements
var extraContain = document.getElementById('extras')
var extraPos = document.getElementById('extraPos')

// Species Selectors
var extraHeight = '1.4em'
var returnSpeciesValue
// Which list should I show?
function list () {
  returnSpeciesValue = document.getElementById('speciesSelect').value

  if (returnSpeciesValue == 'Human') {
    extraContain.style.height = extraHeight
    console.log('Human')
    extraPos.style.transform = 'translateY(0em)'
  } else if (returnSpeciesValue == 'Ardoni') {
    extraContain.style.height = extraHeight
    console.log('Ardoni')
    extraPos.style.transform = 'translateY(-25px)'
  } else {
    extraContain.style.height = '0em'
    console.log(null)
  }
}

function submit() {

}