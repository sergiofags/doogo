import Login from "@/components/Login";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 bg-indigo-600 flex justify-center items-center">
      </div>
      <div className="w-1/2 h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-2/4 h-auto bg-white py-12 p-10 bg-white rounded-xl">
          <h1 className="mr-4 text-gray-700 font-bold inline-block mb-8 text-3xl">Welcome</h1>
          <Login />
        </div>
      </div>
    </div>
  );
}