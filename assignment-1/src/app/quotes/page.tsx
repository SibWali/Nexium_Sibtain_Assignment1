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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-xl p-8 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-white/30">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 drop-shadow-lg">
          💫 Motivational Quotes 💫
        </h1>

        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g. success)"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800 placeholder-gray-500"
          />

          <button
            onClick={fetchQuote}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out"
          >
            ✨ Get Quote
          </button>

          {quote && (
            <div className="mt-4 w-full bg-white/80 border border-purple-200 p-6 rounded-2xl shadow-lg text-center italic text-gray-800 transition-all duration-300">
              “{quote}”
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
