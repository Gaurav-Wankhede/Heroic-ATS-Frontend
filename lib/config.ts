export const API_CONFIG = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedFileTypes: ["application/pdf"],
  } as const;