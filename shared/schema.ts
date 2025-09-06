import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, real, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const classificationRecords = pgTable("classification_records", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id"),
  imageUrl: text("image_url").notNull(),
  animalType: text("animal_type").notNull(),
  classificationScore: real("classification_score").notNull(),
  measurements: jsonb("measurements").notNull(),
  measurementPoints: jsonb("measurement_points"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").default("completed").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertClassificationRecordSchema = createInsertSchema(classificationRecords).omit({
  id: true,
  createdAt: true,
});

export const classificationMeasurementsSchema = z.object({
  heightAtWithers: z.number(),
  bodyLength: z.number(),
  rumpAngle: z.number(),
  bodyConditionScore: z.number(),
  estimatedWeight: z.number(),
});

export const measurementPointSchema = z.object({
  x: z.number(),
  y: z.number(),
  label: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ClassificationRecord = typeof classificationRecords.$inferSelect;
export type InsertClassificationRecord = z.infer<typeof insertClassificationRecordSchema>;
export type ClassificationMeasurements = z.infer<typeof classificationMeasurementsSchema>;
export type MeasurementPoint = z.infer<typeof measurementPointSchema>;
