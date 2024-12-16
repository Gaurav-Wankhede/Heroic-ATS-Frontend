import { API_CONFIG } from "@/lib/config";

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "APIError";
  }
}

export async function analyzeResume(file: File, jobDescription: string, experienceLevel: string) {
  const formData = new FormData();
  formData.append("pdf_file", file);  // Make sure the file field matches backend expectations
  formData.append("job_description", jobDescription);  // Ensure job description is properly passed
  formData.append("experience_level", experienceLevel);  // Corrected to match backend key

  // Send POST request with FormData, no manual Content-Type header
  const response = await fetch(`${API_CONFIG.baseUrl}/analyze_ats`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json", // Only this header is necessary for receiving JSON response
    },
  });

  if (!response.ok) {
    // If not successful, throw an error with the status and the message
    const errorData = await response.json().catch(() => null);  // Capture any additional error details from the backend
    throw new APIError(response.status, errorData?.message || "Failed to analyze resume");
  }

  const data = await response.json();
  return data.analysis_result;  // Assuming the result is contained here
}

export async function clearAnalysisMemory() {
  const response = await fetch(`${API_CONFIG.baseUrl}/clear_memory`, {
    method: "POST",
    headers: {
      Accept: "application/json", // Accepting JSON response
    },
  });

  if (!response.ok) {
    // Throw error if clearing memory fails
    const errorData = await response.json();  // Capture any error details
    throw new APIError(response.status, errorData.message || "Failed to clear memory");
  }

  return true;  // Return true if clearing memory was successful
}
