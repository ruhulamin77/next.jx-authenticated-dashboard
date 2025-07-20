import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex justify-center ">
      <div>
        <h1 className="text-2xl text-rose-500">Authenticated Dashboard</h1>
        <nav className="mt-5">
          <ul className="flex justify-center gap-4">
            <Link href="/" className="border-b">
              Home
            </Link>
            <Link href="/login" className="border-b">
              Login
            </Link>
            <Link href="/dashboard" className="border-b">
              Dashboard
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
