'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', { name, lastName, username, email, password, confirmPassword });
            alert(response.data.message);
        } catch (error) {
            alert('Erro ao registrar: ' + error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center">
            <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                <form className="py-12 p-10 bg-white rounded-xl" onSubmit={handleSubmit}>
                    <h2 className="mr-4 text-gray-700 font-bold inline-block mb-8 text-2xl">Register</h2>
                    <div className="mb-6">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Name</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Last name</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Username</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Email</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Password</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2">Confirm password</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300" type="submit">REGISTER</button>
                    <Link href="/" className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200 cursor-pointer">Already have an account? Log in</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;