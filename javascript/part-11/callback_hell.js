function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

//callback hell

saveToDb(
  "apna clg",
  () => {
    console.log("Success 1");
    saveToDb(
      "hello world",
      () => {
        console.log("success 2");
        saveToDb(
          "hello India",
          () => {
            console.log("success 3");
          },
          () => {
            console.log("failure 3");
          }
        );
      },
      () => {
        console.log("failure 2");
      }
    );
  },
  () => {
    console.log("Failure 1");
  }
);
