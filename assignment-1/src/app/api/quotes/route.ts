import { NextResponse } from 'next/server';

const localQuotes = [
 { tag: 'success', content: 'Success usually comes to those who are too busy to be looking for it.' },
  { tag: 'success', content: 'Don’t be afraid to give up the good to go for the great.' },
  { tag: 'motivation', content: 'The harder you work for something, the greater you’ll feel when you achieve it.' },
  { tag: 'life', content: 'Life is what happens when you’re busy making other plans.' },
  { tag: 'dream', content: 'All our dreams can come true if we have the courage to pursue them.' },
  { tag: 'success', content: 'Success is not in what you have, but who you are.' },
  { tag: 'motivation', content: 'Push yourself, because no one else is going to do it for you.' },
  { tag: 'life', content: 'In the end, we only regret the chances we didn’t take.' },
  { tag: 'dream', content: 'Dream big and dare to fail.' },
  { tag: 'success', content: 'Opportunities don’t happen. You create them.' },
  { tag: 'motivation', content: 'Great things never come from comfort zones.' },

  
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = (searchParams.get('topic') || '').toLowerCase();

  const filtered = localQuotes.filter(q => q.tag.toLowerCase().includes(topic));

  return NextResponse.json({ results: filtered });
}
