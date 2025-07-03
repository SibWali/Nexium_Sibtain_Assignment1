'use client';

import { useState } from 'react';
import { quotes } from '@/data/quotes';

export default function QuotesPage() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([]);

  const handleGetQuotes = () => {
    const results = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .map(q => q.quote);
    setFilteredQuotes(results);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Motivational Quotes</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter topic (e.g. success, life)"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
        />
        <button
          onClick={handleGetQuotes}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Quotes
        </button>
      </div>

      <ul className="space-y-2">
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote, idx) => (
            <li key={idx} className="bg-black-100 p-3 rounded">
              "{quote}"
            </li>
          ))
        ) : (
          <p className="text-gray-500">No quotes to display.</p>
        )}
      </ul>
    </main>
  );
}
