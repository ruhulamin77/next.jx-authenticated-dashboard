'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // * যদি সার্ভার থেকে httpOnly cookie clear করতে চাই তাহলে সার্ভারে রিকুয়েস্ট পাঠাতে হবে।
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include', // কুকি সহ রিকুয়েস্ট যাবে
    });

    //* যদি cookie httpOnly না হয়, শুধুমাত্র ব্রাউজার থেকে সেট করা কুকি হলে নরমাল্ভাবে ব্রাউজার থেকেই expired করে দিতে হবে।
    // document.cookie = `token=; max-age=0; path=/`;

    router.push('/login'); // redirect to the login page
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded w-full"
    >
      Logout
    </button>
  );
}
