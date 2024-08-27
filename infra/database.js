import { Client } from 'pg'; // Todo: resolver erro: 'Cannot use import statement outside a module'

async function query(queryObject) {
    console.log('queryObject: ', queryObject)
    const client = new Client({
        host: "localhost",
        port: 5432,
        user: "postgres",
        database: "postgres",
        password: "local_password",
    });
    await client.connect();
    const result = await client.query(queryObject);
    await client.end();
    return result;
}

export const database = { // Todo : atualizar para 'export default'
    query: query
}