"use client";

import { useState } from "react";

export default function SermonExcerpt() {
  const [excerpts, setExcerpts] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const generateExcerpt = async () => {
    const res = await fetch("/api/excerpt", {
      method: "POST",
      body: JSON.stringify({ transcriptChunk: input }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setExcerpts((prev) => [...prev, data.summary]);
    setInput("");
  };

  return (
    <div className="mt-6">
      <h2 className="font-bold text-lg mb-2">Sermon Excerpts</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste sermon transcript chunk here..."
        className="w-full p-2 border rounded mb-2"
      />

      <button
        onClick={generateExcerpt}
        className="px-4 py-2 bg-[#222357] text-white rounded"
      >
        Generate Excerpt
      </button>

      <div className="mt-4 space-y-2">
        {excerpts.map((ex, idx) => (
          <p key={idx} className="p-2 bg-gray-100 rounded">
            {ex}
          </p>
        ))}
      </div>
    </div>
  );
}
