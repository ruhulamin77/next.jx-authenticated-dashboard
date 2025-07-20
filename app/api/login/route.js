import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, password } = await request.json();

  // Call mock API
  const res = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const data = await res.json();
  const token = data.token;

  // Save token in HttpOnly cookie
  // * সার্ভারের মাধ্যমে httpOnly cookie সেট করা
  const cookieStore = await cookies();
  cookieStore.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60, // 1 hour
  });

  //* Not httpOnly cookie, শুধুমাত্র ব্রাউজার থেকে কুকি সেট করা
  //   document.cookie = "token=abc123; path=/; max-age=3600";

  return NextResponse.json({ success: true });
}
