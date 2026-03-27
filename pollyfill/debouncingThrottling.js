function Debouncing(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    //timer = setTimeout(func(args),delay) -> simple implementation
    timer = setTimeout(() => func.apply(this, args), delay);//** Whenever func will be called in an object literal or class and 
    // func is internally using this then this is required else value of this will be undefined */
  };
}

const throttle = (func, delayMillSec) => {
  let lastCall = 0;
  return function (...args) {/**Here this gets captured because obj.thisfunction gets called hence this's value gets captured */
    let now = new Date().getTime();
    if (now - lastCall >= delayMillSec) {
      lastCall = now;
      return func.apply(this,args);
    }
  }
}


//Feature    	      Debouncing                	                                      Throttling
//Main Goal	     Execute after the "noise" stops.	                                Execute at a steady, fixed rate.
//Execution	     Only once (at the end).	                                        Multiple times (spread out).
//Wait Time	     Resets with every trigger.	                                      Constant regardless of triggers.
//Best Used      For	Typing, form validation, resizing.	                        Scrolling, mouse movement, button mashing.