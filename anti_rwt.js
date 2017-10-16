const anti = document.createElement("script");
anti.textContent = 'Object.defineProperty(window, "rwt", {value: (...args) => {return true;}, writable: false, configurable: false, enumerable: false});'
document.documentElement.appendChild(anti);
