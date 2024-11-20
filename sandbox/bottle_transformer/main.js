import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';

const outputFile = 'import_data.sql';
const jsonFile = 'raw_bottles.json';

async function generateSQLFile() {
  try {
    const jsonData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    const apiKey = 'bottles';
    const sqlStatements = [];

    for (const item of jsonData) {
      const id = uuidv4();

      const value = JSON.stringify(item).replace(/'/g, "''");

      const sql = `INSERT INTO listener (id, api_key, value) VALUES ('${id}', '${apiKey}', '${value}');`;

      sqlStatements.push(sql);
    }

    fs.writeFileSync(outputFile, sqlStatements.join('\n'), 'utf8');

    console.log(`SQL file generated: ${outputFile}`);
  } catch (error) {
    console.error('Error generating SQL file:', error);
  }
}

generateSQLFile();
