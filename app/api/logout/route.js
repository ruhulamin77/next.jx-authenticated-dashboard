// import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// console.log('logout');
// export async function POST() {
//   cookies().delete('token');
//   return NextResponse.redirect('/login');
// }

// app/api/logout/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const response = NextResponse.redirect(new URL('/login', request.url));

  // কুকি clear করার জন্য maxAge = 0 করে দেই
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
  });

  return response;
}
