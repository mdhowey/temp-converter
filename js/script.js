// ===== Variable ===== //
const f = document.querySelector('#fahrenheit')
const c = document.querySelector('#celsius')
const submitButton = document.querySelector('.submit')
const clearButton = document.querySelector('.clear')
const inputTemp = document.querySelector('#tempValue')

// ===== Event Listeners ===== //
submitButton.addEventListener("click", (event) => {
  const li = document.createElement("li");
  const input = document.querySelector("input");
  document.querySelector("ul").appendChild(li);
  if (c.checked === true) {
    li.textContent = temperatureFahrenheit(input.value);
    console.log(c.checked);
  } else if (f.checked === true) {
    li.textContent = temperatureCelsius(input.value);
    console.log(f.checked);
  } else {
    li.textContent = input.value;
    console.log(f.checked);
    console.log(c.checked);
  }
});

// ===== Functions ===== //
function temperatureCelsius(value) {
  value = parseInt(inputTemp.value)
  let temp;
  if (value) {
    temp = (value - 32) * .5556
  } else {
    'Please check input Value'
  }
  return `${temp}° C`
}

function temperatureFahrenheit(value) {
  value = parseInt(inputTemp.value)
  let temp;
  if (value) {
    temp = (value + 32) / .5556
  } else {
    'Please check input Value'
  }
  return `${temp}° F`
}


// create a function to handla a submit
submitButton.addEventListener("click", (event) => {
  // define a variable for li element
  const li = document.createElement("li");
  // define a variable for input
  const input = document.querySelector("input");
  // get ul element and append child li
  document.querySelector("ul").appendChild(li);
  // if --> celsius === true
  if (c.checked === true) {
    // show converted user input value
    li.textContent = temperatureFahrenheit(input.value);
  // if --> fahrenheit === true
  } else if (f.checked === true) {
    // show converted user input value
    li.textContent = temperatureCelsius(input.value);
  // if --> neither celsius nor fahrenheit === true
  } else {
    // show user input value
    li.textContent = input.value;
  }
});


/**
 * convert user input to celsius
 * 
 * farhenheit = (value + 32) / .5556
 * 
 * converst user input to fahrenheit
 * 
 * celsius = (value - 32) * .5556
 * 
 */