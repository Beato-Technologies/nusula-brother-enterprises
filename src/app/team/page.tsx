import React from 'react';

const TeamPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <p className="text-lg mb-4">
        Meet the dedicated individuals who make Nusula Brother Enterprises a success. Our team is comprised of
        experienced professionals passionate about baking and committed to delivering the best products and services.
      </p>
      {/* Placeholder for team member components from the theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="/placeholder-avatar.png" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">CEO & Founder</p>
          <p className="text-gray-700 mt-2">John has over 20 years of experience in the baking industry, leading our vision and innovation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="/placeholder-avatar.png" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Jane Smith</h2>
          <p className="text-gray-600">Head of Product Development</p>
          <p className="text-gray-700 mt-2">Jane is responsible for creating our innovative and high-quality baking ingredients.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="/placeholder-avatar.png" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Peter Jones</h2>
          <p className="text-gray-600">Sales Manager</p>
          <p className="text-gray-700 mt-2">Peter ensures our products reach bakers far and wide, building strong customer relationships.</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
