/**Child component*/
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // We only expose 'focus' and 'clear' to the parent
  useImperativeHandle(ref, () => {
    return {
      focusInput() {
        inputRef.current.focus();
      },
      clear() {
        inputRef.current.value = '';
      }
    };
  }, []); // Dependencies: usually empty unless you use props/state inside

  return <input ref={inputRef} {...props} />;
});

export default MyInput;

/**Parent component*/
import React, { useRef } from 'react';
import MyInput from './MyInput';

function App() {
  const customInputRef = useRef(null);

  return (
    <div>
      <MyInput ref={customInputRef} />
      
      <button onClick={() => customInputRef.current.focusInput()}>
        Focus the Input
      </button>
      
      <button onClick={() => customInputRef.current.clear()}>
        Clear text
      </button>
    </div>
  );
}

