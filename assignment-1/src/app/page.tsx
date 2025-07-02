export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Motivational Quote Generator</h1>
      <form className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter a topic..."
          className="w-full px-4 py-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        >
          Get Quotes
        </button>
      </form>
    </main>
  );
}
