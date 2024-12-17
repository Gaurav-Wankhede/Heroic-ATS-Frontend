"use client";

import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import remarkGfm from "remark-gfm"; // Import remark-gfm to support GitHub-flavored markdown

interface AnalysisResultProps {
  analysis: any;
}

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  // Validate analysis data
  if (!analysis || typeof analysis !== "object") {
    return <div>Error: Analysis data is not available.</div>;
  }

  const suggestions = analysis.chat_history?.[1]?.content; // Extract suggestions (handling undefined case)

  return (
    <Card className="p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
      {suggestions ? (
        <div className="prose dark:prose-invert max-w-full w-full break-words whitespace-pre-wrap">
          {/* Render markdown content with support for GitHub-flavored markdown */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {suggestions}
          </ReactMarkdown>
        </div>
      ) : (
        <div>No suggestions available.</div> // Handle case when there are no suggestions
      )}
    </Card>
  );
}
