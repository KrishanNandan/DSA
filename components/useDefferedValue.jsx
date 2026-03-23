import { useState, useDeferredValue } from 'react';

function SearchResults({ query }) {
  // React will try to keep 'deferredQuery' at the old value 
  // while the screen is busy, then update it in the background.
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="results">
      {/* This component won't "lag" the input because it uses the deferred value */}
      <VeryHeavyList query={deferredQuery} />
    </div>
  );
}

function App() {
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SearchResults query={text} />
    </>
  );
}
