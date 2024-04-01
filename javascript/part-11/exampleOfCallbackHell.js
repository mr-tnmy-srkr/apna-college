const h1 = document.getElementById("heading");

const changeColor = (color, delay, success, reject) => {
  if (color === "red" || color === "green" || color === "blue") {
    setTimeout(() => {
      h1.style.fontSize = "100px";
      h1.style.color = color;
      success();
    }, delay);
  } else {
    reject();
  }
};

changeColor(
  "red",
  1000,
  () => {
    console.log("success 1");
    changeColor(
      "green",
      1000,
      () => {
        console.log("success 2");
        changeColor(
          "blue",
          1000,
          () => {
            console.log("success 3");
          },
          () => {
            console.log("reject 3");
          }
        );
      },
      () => {
        console.log("reject 2");
      }
    );
  },
  () => {
    console.log("reject 1");
  }
);
