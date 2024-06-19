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
    const { name, lastName, username, email, password, confirmPassword } = await req.json();
    const users = await readUserData();

    if (users.find(user => user.username === username)) {
        return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    if (password != confirmPassword) {
        return new Response(JSON.stringify({ message: 'Passwords are different' }), { status: 400 });
    }

    if (users.find(user => user.email === email)) {
        return new Response(JSON.stringify({ message: 'E-mail already registered' }), { status: 400 });
    }

    users.push({ name, lastName, username, email, password });
    await writeUserData(users);

    return new Response(JSON.stringify({ message: 'Successfully registered' }), { status: 201 });
}