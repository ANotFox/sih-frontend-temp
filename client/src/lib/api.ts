import { apiRequest } from "./queryClient";
import { ClassificationRecord, InsertClassificationRecord } from "@shared/schema";

export const api = {
  classifications: {
    getAll: (): Promise<ClassificationRecord[]> =>
      fetch('/api/classifications').then(res => res.json()),
    
    getById: (id: string): Promise<ClassificationRecord> =>
      fetch(`/api/classifications/${id}`).then(res => res.json()),
    
    create: (data: FormData): Promise<ClassificationRecord> =>
      fetch('/api/classifications', {
        method: 'POST',
        body: data,
      }).then(res => res.json()),
    
    delete: (id: string): Promise<void> =>
      apiRequest('DELETE', `/api/classifications/${id}`).then(() => undefined),
  },
  
  analysis: {
    analyzeImage: (file: File): Promise<any> => {
      const formData = new FormData();
      formData.append('image', file);
      return fetch('/api/analyze-image', {
        method: 'POST',
        body: formData,
      }).then(res => res.json());
    },
  },
};
