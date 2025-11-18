function debounce(fn, delay, imme = false) {
    let timeId;
    let context = this;
    return function(...arg){
        clearTimeout(timeId)
        timeId = setTimeout(() => {
            fn.apply(context, arg)
        }, delay)
        if(imme) fn.apply(context, arg);
    }
}

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}


function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}