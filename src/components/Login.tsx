'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            alert(response.data.message);
        } catch (error) {
            alert('Erro ao logar: ' + error.response.data.message);
        }
    };
    return(
                <form className="bg-white rounded-xl" onSubmit={handleSubmit}>
                    <h2 className="mr-4 text-gray-700 font-bold inline-block mb-8 text-2xl">Login</h2>
                    <div className="mb-6">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Username</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Password</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200 cursor-pointer">Forget my Password</span>
                    <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300" type="submit">LOGIN</button>
                    <Link href="/register" className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200 cursor-pointer">Don't have an account? Register</Link>
                </form>
    );
};

export default Login;