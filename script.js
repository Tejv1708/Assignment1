// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorContainer = document.getElementById("color-container");
const changeColorButton = document.getElementById("change-color-button");

// Event listener for the button click
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomColor();
  colorContainer.style.backgroundColor = randomColor;
});
