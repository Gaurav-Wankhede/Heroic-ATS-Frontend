"use client";

import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub-flavored markdown

interface AnalysisResultProps {
  analysis?: {
    chat_history?: Array<{ content?: string }>;
  };
}

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  if (!analysis || !Array.isArray(analysis.chat_history)) {
    return <div>Error: Analysis data is unavailable or invalid.</div>;
  }

  const suggestions = analysis.chat_history?.[1]?.content;

  console.log(suggestions); // Debug: Verify if suggestions contains proper markdown text

  return (
    <Card className="p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
      {suggestions ? (
        <div className="prose dark:prose-invert max-w-full w-full break-words whitespace-pre-wrap">
          {/* Render markdown content */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {suggestions}
          </ReactMarkdown>
        </div>
      ) : (
        <div>No suggestions available.</div>
      )}
    </Card>
  );
}
