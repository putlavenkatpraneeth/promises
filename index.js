let a = new Promise((resolve, reject) => {
  data = 10;
  if (data == 10) {
    resolve("promises is resolve");
  } else {
    reject("promises is rejected");
  }
});
a.then((resolve) => {
  console.log(resolve);
}).catch((reject) => {
  console.log(reject);
});
