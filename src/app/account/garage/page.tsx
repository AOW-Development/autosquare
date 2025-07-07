
"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

const vehicles = [
  { logo: '/Images/ford-logo.svg', name: 'Ford Bronco 1991' },
];

export default function GaragePage() {
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      <div className="md:w-1/4">
        <Sidebar activeKey="Garage" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <main className="bg-[#091B33] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 flex flex-col gap-6 max-w-lg mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">GARAGE</h1>
          <div className="flex flex-col gap-4">
            {vehicles.map((v, i) => (
              <div key={i} className="flex items-center bg-[#091627] rounded-2xl shadow p-4 gap-4">
                <Image src={v.logo} alt={v.name} width={32} height={32} className="rounded" />
                <span className="flex-1 font-semibold">{v.name}</span>
                <button className="text-blue-400 hover:text-blue-600 mr-2" title="Edit">✏️</button>
                <button className="text-red-400 hover:text-red-600" title="Delete">✖️</button>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 font-semibold transition-colors w-full">Add new vehicle</button>
        </main>
      </div>
    </div>
  );
}
