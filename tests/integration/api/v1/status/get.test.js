import { database } from "../../../../../infra/database.js" // Todo: resolver erro: 'Cannot use import statement outside a module'

test("GET to /api/v1/status returns 200", async () => {
    const result = await database.query("SELECT 1 + 1;");
    console.log(result)
    const response = await fetch("http://localhost:3000/api/v1/status")
    expect(response.status).toBe(200)
});