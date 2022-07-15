let mainGrid = document.querySelector(".mainGrid");
let slider = document.querySelector(".slider");
let colorPicker = document.querySelector(".color-picker");
let clearButton = document.querySelector(".clear");

// This is for the default grid when the page is first openned
for (i = 1; i < 256; i++) {
  let smallB = document.createElement("div");
  smallB.classList.add("smallBox");
  mainGrid.appendChild(smallB);

  smallB.addEventListener("mouseover", () => {
    smallB.style.backgroundColor = colorPicker.value;
  });
}

slider.addEventListener("click", () => {
  mainGrid.style.cssText = `grid-template-columns: repeat(${slider.value}, 1fr)`;
  mainGrid.innerHTML = "";
  for (i = 1; i < slider.value * slider.value + 1; i++) {
    let smallB = document.createElement("div");
    smallB.classList.add("smallBox");
    mainGrid.appendChild(smallB);

    // Hover effect added in smallBox
    smallB.addEventListener("mouseover", () => {
      smallB.style.backgroundColor = colorPicker.value;
    });
  }
});

clearButton.addEventListener("click", () => {
  mainGrid.style.cssText = `grid-template-columns: repeat(${slider.value}, 1fr)`;
  mainGrid.innerHTML = "";
  for (i = 1; i < slider.value * slider.value + 1; i++) {
    let smallB = document.createElement("div");
    smallB.classList.add("smallBox");
    mainGrid.appendChild(smallB);

    // Hover effect added in smallBox
    smallB.addEventListener("mouseover", () => {
      smallB.style.backgroundColor = colorPicker.value;
    });
  }
});
