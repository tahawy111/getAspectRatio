const aspect = document.getElementById("aspect");
const btn = document.querySelector(".btn");
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

btn.addEventListener("click", () => {
  const aspectValues = getAspectRatio(widthInput.value, heightInput.value);
  aspect.innerHTML = `${aspectValues.numerator}:${aspectValues.denominator}`;
});
