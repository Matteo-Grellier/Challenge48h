import pkg from 'pg';
import { createTablesQuery } from './createTables.js';
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'root',
  database: 'marketplace',
  port: 5432
})

const execute = async (query) => {
  try {
      await pool.connect();     // gets connection
      await pool.query(query);  // sends queries
      return true;
  } catch (error) {
      console.error(error.stack);
      return false;
  }
};

execute(createTablesQuery).then(result => {
  if (result) {
      console.log('Tables created');
  }
});

export default pool;