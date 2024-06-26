import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'sql302.infinityfree.com',
  user: 'if0_35421688',
  password: 'VrIgqHhW3lbJDb0',
  database: 'if0_35421688_stock',
  port:'3306',
  connectionLimit: 50, 
});

const executeQuery = async (query, params) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(query, params);
    return rows;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'exécution de la requête :', error);
    
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

export default executeQuery;