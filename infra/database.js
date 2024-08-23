import { Client } from 'pg'; // Todo: resolver erro: 'Cannot use import statement outside a module'

async function query(queryObject) {
    const client = new Client();
    await client.connect();
    const result = await client.query(queryObject);
    await client.end();
    return result;
}

export const database = { // Todo : atualizar para 'export default'
    query: query
}