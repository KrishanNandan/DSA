import { useLayoutEffect, useEffect } from 'react';

// 1. Create the helper hook
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function MyComponent() {
  // 2. Use it just like useLayoutEffect
  useIsomorphicLayoutEffect(() => {
    console.log("This runs before paint on the client, and skips warning on the server!");
    // Example: Measuring an element
    const element = document.getElementById('my-box');
    if (element) {
      const { height } = element.getBoundingClientRect();
      console.log('Height is:', height);
    }
  }, []);

  return <div id="my-box">Hello World</div>;
}
