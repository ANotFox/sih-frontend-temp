import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertClassificationRecordSchema } from "@shared/schema";
import multer from "multer";
import path from "path";

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all classification records
  app.get('/api/classifications', async (req, res) => {
    try {
      const { userId, limit } = req.query;
      let records;
      
      if (limit) {
        records = await storage.getRecentClassifications(parseInt(limit as string));
      } else {
        records = await storage.getClassificationRecords(userId as string);
      }
      
      res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch classification records' });
    }
  });

  // Get a specific classification record
  app.get('/api/classifications/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const record = await storage.getClassificationRecord(id);
      
      if (!record) {
        return res.status(404).json({ message: 'Classification record not found' });
      }
      
      res.json(record);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch classification record' });
    }
  });

  // Create a new classification record
  app.post('/api/classifications', upload.single('image'), async (req, res) => {
    try {
      const { animalType, classificationScore, measurements, measurementPoints, userId } = req.body;
      
      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required' });
      }

      // In a real implementation, you would upload the file to cloud storage
      // For now, we'll use a placeholder URL
      const imageUrl = `/uploads/${req.file.filename}`;

      const recordData = {
        userId: userId || null,
        imageUrl,
        animalType,
        classificationScore: parseFloat(classificationScore),
        measurements: JSON.parse(measurements),
        measurementPoints: measurementPoints ? JSON.parse(measurementPoints) : null,
        status: 'completed'
      };

      // Validate the data
      const validatedData = insertClassificationRecordSchema.parse(recordData);
      
      const record = await storage.createClassificationRecord(validatedData);
      res.status(201).json(record);
    } catch (error) {
      console.error('Error creating classification record:', error);
      res.status(400).json({ message: 'Invalid data provided' });
    }
  });

  // Simulate AI analysis endpoint
  app.post('/api/analyze-image', upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required' });
      }

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate AI analysis results
      const mockResults = {
        animalType: 'Holstein Dairy Cow',
        classificationScore: 94.2,
        measurements: {
          heightAtWithers: 142.3,
          bodyLength: 186.7,
          rumpAngle: 23.5,
          bodyConditionScore: 3.2,
          estimatedWeight: 542
        },
        measurementPoints: [
          { x: 25, y: 15, label: 'Height at Withers' },
          { x: 15, y: 45, label: 'Body Length Start' },
          { x: 85, y: 45, label: 'Body Length End' },
          { x: 75, y: 25, label: 'Rump Angle' }
        ],
        imageUrl: `/uploads/${req.file.filename}`
      };

      res.json(mockResults);
    } catch (error) {
      console.error('Error analyzing image:', error);
      res.status(500).json({ message: 'Failed to analyze image' });
    }
  });

  // Delete a classification record
  app.delete('/api/classifications/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteClassificationRecord(id);
      
      if (!success) {
        return res.status(404).json({ message: 'Classification record not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete classification record' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
