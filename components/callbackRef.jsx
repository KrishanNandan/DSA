import { useCallback } from 'react';

function SearchBar() {
  // Use useCallback so the function reference stays stable
  const inputRef = useCallback((node) => {
    if (node !== null) {
      // 'node' is the actual HTML <input> element
      node.focus();
      console.log("Input is now in the DOM and focused!");
    }
  }, []); // Empty deps means this function instance never changes

  return (
    <div>
      <label>Search: </label>
      {/* Pass the function to the ref prop */}
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}

/**Value of node will be element during mount and at the time of unMount it will be null*/

/**
 * use case:
 * 1.) Measurement problem: whenever an element will load and unload we will know like during drop-down etc.
 * 2.) Integrating non-react libs: can be use to render these lib only when container is ready
 * 3.) Ref-in-list problem: storing dynamic list in map, below is example for the same.
 */

import { useRef } from 'react';

function TodoList({ todos }) {
  // 1. Create a single ref to hold a Map of all items
  const itemsRef = useRef(new Map());

  function scrollToId(id) {
    const node = itemsRef.current.get(id);
    node?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <button onClick={() => scrollToId(5)}>Scroll to #5</button>
      
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            // 2. The Callback Ref:
            ref={(node) => {
              if (node) {
                itemsRef.current.set(todo.id, node); // Add to Map
              } else {
                itemsRef.current.delete(todo.id);    // Cleanup when removed
              }
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
