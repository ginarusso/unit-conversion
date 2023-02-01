/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById('inputNum')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass') 
const btn = document.getElementById('btn')
// let unit = 0

resetPage()

btn.addEventListener("click", convertUnit)
inputEl.addEventListener('click', reset)

function resetPage() {
    lengthEl.textContent = `0 meters = 0 feet | 0 feet = 0 meters`
    volumeEl.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`
    massEl.textContent = `0 kilos = 0 pounds | 0 pounds = 0 kilos`
}

function convertUnit() {
    let unit = inputEl.textContent
    
    lengthEl.innerHTML = `${unit} meters = ${(unit * 3.281).toFixed(3)} feet | ${unit} feet = ${(unit / 3.281).toFixed(3)} meters`
    volumeEl.innerHTML = `${unit} liters = ${(unit * 0.264).toFixed(3)} gallons | ${unit} gallons = ${(unit / 0.264).toFixed(3)} liters`
    massEl.innerHTML = `${unit} kilos = ${(unit * 2.204).toFixed(3)} pounds | ${unit} pounds = ${(unit / 2.204).toFixed(3)} kilos`
}

function reset() {
    inputEl.textContent = ''
    resetPage()
}

// add
// numbers only


