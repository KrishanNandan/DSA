// app/api/auth/login/route.js
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  // 1. Authenticate your user (e.g., check DB, verify password)
  // const user = await authenticateUser(request.body);
  const token = "your-generated-jwt-token";

  // 2. Set the cookie using the cookies() function
  const cookieStore = await cookies();
  
  cookieStore.set('auth-token', token, {
    httpOnly: true,     // Prevents JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === 'production', // Only send over HTTPS
    sameSite: 'strict', // Prevents CSRF
    path: '/',          // Available across the whole site
    maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
  });

  return NextResponse.json({ message: "Logged in successfully" }, { status: 200 });
}
