'use client';

import { useState } from 'react';

export default function QuotesPage() {
  const [topic, setTopic] = useState('');
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    if (!topic.trim()) return;

    try {
      const res = await fetch(`/api/quotes?topic=${encodeURIComponent(topic)}`);
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setQuote(data.results[randomIndex].content);
      } else {
        setQuote("No quotes found for this topic.");
      }
    } catch (err) {
      setQuote("⚠️ Failed to fetch quotes. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dff1f7] via-[#f5e9ff] to-[#e3f5e9]">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 drop-shadow-md">
        💥 Motivational Quotes 💥
      </h1>
      <div className="flex flex-col items-center space-y-4 w-full max-w-md px-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic (e.g. success)"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchQuote}
          className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        >
          Get Quotes
        </button>
        {quote && (
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg text-center italic text-gray-700 border border-gray-200">
            “{quote}”
          </div>
        )}
      </div>
    </div>
  );
}
