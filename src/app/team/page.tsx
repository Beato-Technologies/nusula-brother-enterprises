import React from 'react';
import AppImage from '../../components/AppImage';

const TeamPage = () => {
  return (
    <div className="portal-shell container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Leadership &amp; Functional Teams</h1>
      <p className="text-lg mb-8">
        Meet the leadership and specialist teams driving Nusula and Brothers Enterprises forward through operational discipline,
        product quality, and long-term client partnerships across Uganda and Tanzania.
      </p>

      {/* Executive Leadership */}
      <h2 className="text-2xl font-semibold mb-4">Executive Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="portal-card bg-white p-6 rounded-lg shadow-md text-center">
          <AppImage src="/assets/img/team/Nusula.webp" alt="Hajjati Nemwa Nusula Njogi" width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-xl font-semibold">Hajjati Nemwa Nusula Njogi</h3>
          <p className="text-gray-600 font-medium">Chief Executive Officer</p>
        </div>
        <div className="portal-card bg-white p-6 rounded-lg shadow-md text-center">
          <AppImage src="/assets/img/team/Lujja.webp" alt="Mr. Lujja Nasur Wawire" width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-xl font-semibold">Mr. Lujja Nasur Wawire</h3>
          <p className="text-gray-600 font-medium">Executive Director (General Manager)</p>
        </div>
        <div className="portal-card bg-white p-6 rounded-lg shadow-md text-center">
          <AppImage src="/assets/img/team/Ismail.webp" alt="Dr. Ismail Tijjani Kabwanga" width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-xl font-semibold">Dr. Ismail Tijjani Kabwanga, PhD</h3>
          <p className="text-gray-600 font-medium">Director, Quality Control &amp; Human Resources</p>
        </div>
      </div>

      {/* Uganda Operations */}
      <h2 className="text-2xl font-semibold mb-4">Uganda Operations Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[
          { name: 'Mirembe Mida', role: 'General Manager — Factory' },
          { name: 'Walujjo Yusufu', role: 'Production Manager' },
          { name: 'Mutanda Mark', role: 'Assistant Quality Control' },
          { name: 'Wanyenze Mariam', role: 'Sales Manager' },
          { name: 'Muyonjo Adam', role: 'Sales Executive' },
          { name: 'Nabosa Mariam', role: 'Sales Executive' },
          { name: 'Ngiira Ben', role: 'Head of Stores' },
          { name: 'Ochweda Musa Abdallah', role: 'Head of Transport & Delivery' },
          { name: 'Ahumuza Afiswa', role: 'Accounts Manager' },
          { name: 'Answer Ivan', role: 'Assistant Accountant' },
        ].map((member) => (
          <div key={member.name} className="portal-card bg-white p-5 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Tanzania Team */}
      <h2 className="text-2xl font-semibold mb-4">Tanzania Team — Dar es Salaam</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Lilia Reuben', role: 'Country General Manager' },
          { name: 'Patrick Fidelis', role: 'Production / QC Manager' },
          { name: 'Jenifer Mushi', role: 'Sales Executive' },
          { name: 'Hellena Felix', role: 'Sales Executive' },
        ].map((member) => (
          <div key={member.name} className="portal-card bg-white p-5 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
