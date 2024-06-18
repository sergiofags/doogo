import { promises as fs } from 'fs';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'backend', 'users.json');

const readUserData = async () => {
    const filePath = getFilePath();
    const jsonData = await fs.readFile(filePath, 'utf8');
    return JSON.parse(jsonData);
};

const writeUserData = async (data) => {
    const filePath = getFilePath();
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

export async function POST(req) {
    const { username, password } = await req.json();
    const users = await readUserData();

    if (users.find(user => user.username === username)) {
        return new Response(JSON.stringify({ message: 'Usuário já existe' }), { status: 400 });
    }

    users.push({ username, password });
    await writeUserData(users);

    return new Response(JSON.stringify({ message: 'Registrado com sucesso' }), { status: 201 });
}
