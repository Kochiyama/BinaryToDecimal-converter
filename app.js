
function convert() {
  var input = document.querySelector(".binaryEntry").value;
  
  if (!input) {
    window.alert("ERROR: You must Provide at least one digit.")
    return;
  }

  for (char in input) {
    if (input[char] != 0 && input[char] != 1) {
      window.alert("ERROR: You must Provide a valid binary number.")
      return;
    }  
  }

  const resultContainer = document.querySelector(".result")
  resultContainer.innerHTML = parseInt(input, 2);
}