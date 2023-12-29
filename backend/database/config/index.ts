import { drizzle } from "drizzle-orm/mysql2";
import myqsl from "mysql2/promise";

const connection = await mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT
});

const db = drizzle(connection);