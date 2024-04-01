const h1 = document.getElementById("heading");

const changeColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    // Check if color is valid
    if (typeof color !== "string" || !color.match(/^#[0-9A-F]{6}$/i)) {
      reject("Invalid color format. Please provide a valid hexadecimal color.");
      return; // Stop execution
    }

    setTimeout(() => {
      h1.style.fontSize = "100px";
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
};

changeColor("#FF0000", 1000)
  .then((result) => {
    console.log("color changed to red :", result);
    return changeColor("#00FF00", 1000);
  })
  .then((result) => {
    console.log("color changed to green :", result);
    return changeColor("#0000FF", 1000);
  })
  .then((result) => {
    console.log("color changed to blue :", result);
  })
  .catch((err) => {
    console.log(err);
  });