"use client";

import { useCallback, useState } from "react";
import { Upload, File as FileIcon, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { isValidPDF, formatFileSize } from "@/lib/utils/file";

interface FileUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export function FileUploader({ file, setFile }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback((file: File) => {
    if (!isValidPDF(file)) {
      setError("Please upload a PDF file");
      return;
    }
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError("File size should be less than 10MB");
      return;
    }
    setError(null);
    setFile(file);
  }, [setFile]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  }, [handleFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  }, [handleFile]);

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">Resume (PDF)</label>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 transition-colors ${
            dragActive
              ? "border-primary bg-primary/5"
              : "hover:border-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-2">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <div className="text-center">
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-sm text-primary hover:underline"
              >
                Click to upload
              </label>
              <span className="text-sm text-muted-foreground mx-1">or drag and drop</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={handleChange}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              PDF up to 10MB
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="shrink-0">
              <FileIcon className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {formatFileSize(file.size)}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setFile(null);
              setError(null);
            }}
            className="shrink-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      )}
    </div>
  );
}