// Server Component
export default function Page() {
  return (
    <main>
      <h1>My Dashboard</h1> {/* Sent to browser instantly */}
      
      <Suspense fallback={<p>Loading list...</p>}>
        <SlowUserList /> {/* Streamed to browser later */}
      </Suspense>
    </main>
  );
}

async function SlowUserList() {
  const users = await fetch('...', { cache: 'no-store' }).then(res => res.json());
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}


/**
 * 1. The "Old" useEffect Way (Waterfall)
Server sends a blank HTML shell + a huge JavaScript bundle.
Browser parses JS, then starts the API fetch (Client-side).
Result: Long "Loading..." spinner after the page appears. Bad for SEO.
 * 
 * 2. The "New" React 19 Way (Streaming + Suspense)
You don't have to wait for the whole page. You can stream the HTML in chunks.
How it works: The server sends the "Layout" (header, sidebar) immediately.
The "Slow" Part: You wrap the slow data component in <Suspense>.
Result: The user sees the page structure instantly. The server keeps the connection open and "pushes" the HTML for the data component the second the API finishes.
**/