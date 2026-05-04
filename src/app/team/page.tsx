import React from 'react';
import AppImage from '../../components/AppImage';

const TeamPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <p className="text-lg mb-4">
        Meet the experienced leadership driving Nusula and Brother Enterprises forward. Our team combines deep expertise
        in food ingredient trading, manufacturing, and regional client partnerships.
      </p>
      {/* Placeholder for team member components from the theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <AppImage src="/placeholder-avatar.png" alt="Team Member" width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Nusula Leadership Team</h2>
          <p className="text-gray-600">Executive Direction</p>
          <p className="text-gray-700 mt-2">Guiding strategy, growth, and long-term partnerships across Uganda and East Africa.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <AppImage src="/placeholder-avatar.png" alt="Team Member" width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Manufacturing & Quality</h2>
          <p className="text-gray-600">Operations Team</p>
          <p className="text-gray-700 mt-2">Ensuring Fastbakes products meet strict quality standards from sourcing to production.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <AppImage src="/placeholder-avatar.png" alt="Team Member" width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Sales & Distribution</h2>
          <p className="text-gray-600">Regional Growth Team</p>
          <p className="text-gray-700 mt-2">Expanding access to specialized food ingredients through strong customer support and timely delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
