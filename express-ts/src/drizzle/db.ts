import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import * as schema from "./schema";
import logger from "../utils/logger";
dotenv.config();

const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const checkConnection = async () => {
  try {
    const connection = await poolConnection.getConnection();
    await connection.ping();
    connection.release();
    logger.info("✅ Database connection successful");
  } catch (error: any) {
    logger.error(`❌ Database connection failed: ${error.message}`, { error });
  }
};
checkConnection();

export const db = drizzle(poolConnection, { schema, mode: "default" });
