"use client";

import { useState } from "react";
import { Send, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnalysisResult } from "@/components/analysis-result";
import { FileUploader } from "@/components/file-uploader";
import { useAnalysis } from "@/lib/hooks/use-analysis";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Fresher"); // New state for experience level
  const { isLoading, analysis, analyze, clearMemory } = useAnalysis();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!file || !jobDescription) {
      toast({
        title: "Missing Information",
        description: "Please upload a resume and provide a job description.",
        variant: "destructive",
      });
      return;
    }

    try {
      await analyze(file, jobDescription, experienceLevel); // Pass experienceLevel to analyze function
    } catch (error) {
      console.error("Analysis failed:", error);
    }
  };

  const handleClear = async () => {
    try {
      await clearMemory();
      setFile(null);
      setJobDescription("");
      setExperienceLevel("Fresher"); // Reset experience level when clearing memory
    } catch (error) {
      console.error("Clear memory failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Resume ATS Analyzer</h1>
        </div>

        {/* Main Content Card */}
        <Card className="p-6 space-y-6">
          <FileUploader file={file} setFile={setFile} />

          {/* Job Description Textarea */}
          <div className="space-y-2">
            <label htmlFor="jobDescription" className="text-sm font-medium">
              Job Description
            </label>
            <Textarea
              id="jobDescription"
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="min-h-[200px]"
            />
          </div>

          {/* Experience Level Select */}
          <div className="space-y-2">
            <label htmlFor="experienceLevel" className="text-sm font-medium">
              Experience Level
            </label>
            <select
              id="experienceLevel"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="border p-2 rounded-md w-full"
            >
              <option value="Fresher">Fresher</option>
              <option value="2 Years of Experience">2 Years of Experience</option>
              <option value="More than 2 Years of Experience">More than 2 Years of Experience</option>
            </select>
          </div>

          {/* Submit and Clear Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={handleSubmit}
              disabled={isLoading || !file || !jobDescription}
              className="flex-1 sm:flex-none"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Analyze Resume
                </>
              )}
            </Button>
            <Button
              onClick={handleClear}
              variant="outline"
              className="flex-1 sm:flex-none"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Clear Memory
            </Button>
          </div>
        </Card>

        {/* Display Analysis Result */}
        {analysis && <AnalysisResult analysis={analysis} />}
      </div>
    </main>
  );
}
