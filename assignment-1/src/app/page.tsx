'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dff1f7] via-[#f5e9ff] to-[#e3f5e9]">
      <div className="text-center px-4">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow mb-4">
          💡 Welcome to the Motivational Quote App
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get inspired by quotes on your favorite topics.
        </p>

        {/* Floating lines */}
        <div className="flex flex-col gap-4 items-center mb-10">
          <div className="w-48 h-1 bg-gradient-to-r from-purple-400 to-pink-400 animate-float-updown rounded-full" />
          <div className="w-40 h-1 bg-gradient-to-r from-green-400 to-blue-400 animate-float-leftright rounded-full" />
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 animate-float-updown rounded-full" />
        </div>

        <button
          onClick={() => router.push('/quotes')}
          className="px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 text-lg"
        >
          Get Quotes
        </button>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float-text text-gray-700 text-md text-center">
          Categorized into <span className="font-semibold">success</span>, <span className="font-semibold">motivation</span>, <span className="font-semibold">life</span>, and <span className="font-semibold">dream</span>.
        </div>

      </div>
    </main>
  );
}
