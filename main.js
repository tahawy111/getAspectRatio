const aspect = document.getElementById("aspect");
const form = document.querySelector("#form");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");

const getFraction = (decimal) => {
  for (var denominator = 1; (decimal * denominator) % 1 !== 0; denominator++);
  return { numerator: decimal * denominator, denominator: denominator };
};

const getAspectRatio = (width, height) => {
  const aspect = getFraction(+width / +height);
  return aspect;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const aspectValues = getAspectRatio(widthInput.value, heightInput.value);
  aspect.innerHTML = `${aspectValues.numerator}:${aspectValues.denominator}`;
});
