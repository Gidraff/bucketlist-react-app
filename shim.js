global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 10000);
};
