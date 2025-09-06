import { type User, type InsertUser, type ClassificationRecord, type InsertClassificationRecord } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getClassificationRecord(id: string): Promise<ClassificationRecord | undefined>;
  getClassificationRecords(userId?: string): Promise<ClassificationRecord[]>;
  createClassificationRecord(record: InsertClassificationRecord): Promise<ClassificationRecord>;
  deleteClassificationRecord(id: string): Promise<boolean>;
  getRecentClassifications(limit?: number): Promise<ClassificationRecord[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private classificationRecords: Map<string, ClassificationRecord>;

  constructor() {
    this.users = new Map();
    this.classificationRecords = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getClassificationRecord(id: string): Promise<ClassificationRecord | undefined> {
    return this.classificationRecords.get(id);
  }

  async getClassificationRecords(userId?: string): Promise<ClassificationRecord[]> {
    const records = Array.from(this.classificationRecords.values());
    if (userId) {
      return records.filter(record => record.userId === userId);
    }
    return records.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createClassificationRecord(insertRecord: InsertClassificationRecord): Promise<ClassificationRecord> {
    const id = randomUUID();
    const record: ClassificationRecord = {
      ...insertRecord,
      id,
      createdAt: new Date(),
      status: insertRecord.status || 'completed',
    };
    this.classificationRecords.set(id, record);
    return record;
  }

  async deleteClassificationRecord(id: string): Promise<boolean> {
    return this.classificationRecords.delete(id);
  }

  async getRecentClassifications(limit: number = 3): Promise<ClassificationRecord[]> {
    const records = Array.from(this.classificationRecords.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
    return records;
  }
}

export const storage = new MemStorage();
