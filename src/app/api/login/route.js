import { promises as fs } from 'fs';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'backend', 'users.json');

const readUserData = async () => {
    const filePath = getFilePath();
    const jsonData = await fs.readFile(filePath, 'utf8');
    return JSON.parse(jsonData);
};

export async function POST(req) {
    const { username, password } = await req.json();
    const users = await readUserData();

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        return new Response(JSON.stringify({ message: 'Login bem-sucedido' }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ message: 'Credenciais inválidas' }), { status: 401 });
    }
}
