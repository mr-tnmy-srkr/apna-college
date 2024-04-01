function saveToDb(data) {
  return new Promise(function (resolve, reject) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
      resolve("Data saved successfully");
    } else {
      reject("Weak internet speed");
    }
  });
}

/* saveToDb("Apna college")
  .then((message) => {
    console.log("resolved");
    console.log(message); //Data saved successfully
  })
  .catch((error) => {
    console.log("rejected"); //Weak internet speed
    console.log(error);
  });
 */

//   improved version

/* saveToDb("Apna College")
  .then(() => {
    console.log("data1 saved successfully");
    saveToDb("Hello World")
    .then(() => {
      console.log("data2 saved successfully");
    });
  })
  .catch(() => {
    console.log("rejected");
  });
 */

//more improved version .then er vitor return kore again call korbo

saveToDb("Apna College")
  .then((result) => {
    console.log("data1 saved successfully", result);
    return saveToDb("Hello World");
  })
  .then((result) => {
    console.log("data2 saved successfully", result);
    return saveToDb("Hello Earth");
  })
  .then((result) => {
    console.log("data3 saved successfully", result);
  })
  .catch((error) => {
    console.log("rejected", error);
  });
