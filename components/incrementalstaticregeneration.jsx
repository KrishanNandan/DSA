// app/blog/[id]/page.js

async function getPost(id) {
  // 1. Fetch data and set a revalidation timer (e.g., 60 seconds)
  const res = await fetch(`https://api.example.com{id}`, {
    next: { revalidate: 60 } 
  });
  
  return res.json();
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* This timestamp will only update once every 60 seconds */}
      <footer>Rendered at: {new Date().toLocaleTimeString()}</footer>
    </article>
  );
}
