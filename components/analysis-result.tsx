"use client";

import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import remarkGfm from "remark-gfm"; // Import remark-gfm to support GitHub-flavored markdown

interface AnalysisResultProps {
  analysis: any;
}

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  // Check if analysis is defined and has the expected properties
  if (!analysis || typeof analysis !== 'object') {
    return <div>Error: Analysis data is not available.</div>;
  }

  const suggestions = analysis.chat_history[1]?.content; // Get suggestions

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
      <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
        {suggestions ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {suggestions}
          </ReactMarkdown>
        ) : (
          'No suggestions available.'
        )}
      </div>
    </Card>
  );
}
