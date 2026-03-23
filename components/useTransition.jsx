import { useState, useTransition } from 'react';

function SearchPage() {
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState('');
  const [list, setList] = useState([]);

  function handleChange(e) {
    // 1. High Priority: Update the input field immediately
    setFilter(e.target.value);

    // 2. Low Priority: Wrap the "heavy" update in a transition
    startTransition(() => {
      // Imagine fetching or processing a huge array here
      setList(generateHugeList(e.target.value));
    });
  }

  return (
    <div style={{ opacity: isPending ? 0.5 : 1 }}>
      <input type="text" onChange={handleChange} />
      {isPending && <p>Updating list...</p>}
      <HeavyList items={list} />
    </div>
  );
}
