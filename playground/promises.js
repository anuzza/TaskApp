const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 5, 6]);
    reject("thngs went wrong");
  }, 2000);
});

doWorkPromise.then((result) => {
  console.log("success!", result);
}).catch((error)=>{
    console.log('Error', error);
});
