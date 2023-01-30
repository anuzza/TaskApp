const doWorkCallback = () => {
  setTimeout(() => {
    callback("this is my error", undefined);
  }, 2000);
};

doWorkCallback((error, result) => {});

