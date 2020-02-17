function createAnaytics() {
  let counter = 0;
  let isDestroyed = false;
  const listener = () => {
    counter += 1;
    return counter;
  };
  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) {
        return `Analytics is destroyed!!! Total clicks = ${counter}`;
      }
      return counter;
    }
  };
}

window.analytics = createAnaytics();
