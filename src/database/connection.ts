
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export async function getPermissionsSource() {
  return new DataSource({
    type: process.env.DB_TYPE as any || 'postgre',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME,
    migrations: ['src/database/migrations/*.ts'],
    synchronize: false, // Never change this to true or you will risk database destruction if entity is not set up.
    logging: true,
    driver: require('mysql2'),
    
    // MySQL: For newer version that uses caching_sha2_password.
    extra: {
      authPlugins: {
        caching_sha2_password: () => () => Buffer.from(""),
      },
    },

    // MySQL: For older version that uses mysql_native_password.
    // extra: {
    //   authPlugin: 'mysql_native_password'
    // },
  });

}

export default getPermissionsSource();