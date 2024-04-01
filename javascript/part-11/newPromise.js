function saveToDb(data) {
  return new Promise(function (resolve, reject) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        resolve("Data saved successfully");
    } else {
        reject("weak internet speed");
    }
  });
}

console.log(saveToDb("Apna Clg"));