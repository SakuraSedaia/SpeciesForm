// Default Values
var defaultGender = "Male";
var defaultSpecies = "Human";
var defaultSecondSpecies = "None";
var maxAges = [
  "100", // Human
  "100", // Felina
  "300", // Ardoni
  "800", // Netheran
  "1000", // Glacian
  "100", // Jagathan
  "30", // Magnorite
];
var defaultHumanClass = "None";
var defaultArdoniClan = "Clanless";
var hybridOnByDefault = false;
var necroOnByDefault = false;

// AUTOMATED SCRIPT PROCESS, DO NOT EDIT
console.log("Script Information:\n> SoW OC Form Script\n> Created by: Sakura Sedaia\n> Version: V1.1 (Script Rewrite)\n=====================\n");
console.group("Importing Hardcoded HTML Elements to Script");
var grabMainSpecies = document.getElementById("speciesSelect");
var mainSpeciesID = [];
console.log("Pulled MainSpecies Select from HTML");

var grabSecondSpecies = document.getElementById("crossbreed");
var secondSpeciesID = [];
console.log("Pulled SecondSpecies Select from HTML");

var extras = document.getElementById("extras");
console.log("Pulled Extras Container (Main) from HTML");

var extraPos = document.getElementById("extraPos");
console.log("Pulled Extras Position (Main) from HTML");

var humExt = document.getElementById("humExt");
console.log("Pulled Human Extras (Main) from HTML");

var ardoClan = document.getElementById("ardoClan");
console.log("Pulled Ardoni Clans (Main) from HTML");

console.groupEnd("Importing Hardcoded HTML Elements to Script");
console.log("=====================");
console.group("Create Primary Species Element Variables");

var i = 0;
while (i < 7) {
  var grabValues = grabMainSpecies.getElementsByTagName("option")[i].innerText.toLowerCase().substring(0, 3);
  var currentID = grabValues + "Main";
  grabMainSpecies.getElementsByTagName("option")[i].setAttribute("id", currentID);
  mainSpeciesID.push(document.getElementById(currentID));
  console.log("ID Created: " + currentID);
  i++;
}
console.groupEnd("Create Primary Species Element Variables");

console.group("Create Secondary Species Element Variables");
var i = 1;
while (i < 8) {
  var grabValues = grabSecondSpecies.getElementsByTagName("option")[i].innerText.toLowerCase().substring(0, 3);
  var currentID = grabValues + "Second";
  grabSecondSpecies.getElementsByTagName("option")[i].setAttribute("id", currentID);
  secondSpeciesID.push(document.getElementById(currentID));
  console.log("ID Created: " + currentID);
  i++;
}
console.groupEnd("Create Secondary Species Element Variables");
console.log("=====================");
var defaultConsole = console.group("Set Default Values");

console.log('Default Gender Set to "' + defaultGender + '"\n');
console.log('Default Primary Species Set to "' + defaultSpecies + '"\n');
console.log('Default Secondary Species Set to "' + defaultSecondSpecies + '"\n');
var ageConsole = console.group("Default Ages");
var i = 0;
while (i < maxAges.length) {
  console.log(mainSpeciesID[i].innerText.toString() + " Max age set to " + maxAges[i]);
  i++;
}
console.groupEnd(ageConsole);
console.log('Default Human Class Set to "' + defaultHumanClass + '"\n');
console.log('Default Ardoni Clan Set to "' + defaultArdoniClan + '"\n');
console.log('Default Hybdrid State Set to "' + hybridOnByDefault + '"\n');
console.log('Default Necromancer State Set to "' + necroOnByDefault + '"\n');
console.groupEnd(defaultConsole);
console.log("=====================\nSetup complete\n=====================\n");
// ALL RESPONSIVE SCRIPT GOES UNDER HERE