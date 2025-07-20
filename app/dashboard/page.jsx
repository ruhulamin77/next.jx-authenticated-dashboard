import { cookies } from 'next/headers';
import Link from 'next/link';
import LogoutButton from '../../components/LogoutButton';

// 👇 New Function to fetch external user data from ReqRes
async function getExternalUser() {
  const res = await fetch('https://reqres.in/api/users/2');

  if (!res.ok) {
    throw new Error('Failed to fetch external user');
  }

  const json = await res.json();
  return json.data; // 'data' contains the user object
}

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return (
      <div className="p-8">
        <p>
          No token found. <Link href="/login">Go to Login</Link>
        </p>
      </div>
    );
  }
  let externalUser = null;
  try {
    externalUser = await getExternalUser();
  } catch (error) {
    console.error('Error fetching external user:', error.message);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded w-96">
        <h3 className="text-xl font-semibold mb-2 text-center">
          External User Info
        </h3>
        {externalUser ? (
          <div className="border-t border-gray-200 pt-4 mt-4">
            <img
              src={externalUser.avatar}
              alt={externalUser.first_name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p>
              Name: {externalUser.first_name} {externalUser.last_name}
            </p>
            <p>Email: {externalUser.email}</p>
          </div>
        ) : (
          <p className="text-red-500 mt-4">
            Could not load external user info.
          </p>
        )}

        <div className="mt-6">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
