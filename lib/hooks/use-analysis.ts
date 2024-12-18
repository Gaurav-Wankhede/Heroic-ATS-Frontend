import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { analyzeResume, clearAnalysisMemory } from "@/lib/api/client";

interface Analysis {
  chat_history?: Array<{ content?: string }>;
}

export function useAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null); // Updated to match the expected structure
  const { toast } = useToast();

  const analyze = async (file: File, jobDescription: string, experienceLevel: string) => {
    setIsLoading(true);
    try {
      // Include experienceLevel in the API request
      const result: Analysis = await analyzeResume(file, jobDescription, experienceLevel);
      console.log("Analysis Result", result);
      setAnalysis(result);
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze resume. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const clearMemory = async () => {
    try {
      await clearAnalysisMemory();
      setAnalysis(null);
      toast({
        title: "Reset Complete",
        description: "All data has been cleared successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to clear memory. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return {
    isLoading,
    analysis,
    analyze,
    clearMemory,
  };
}
