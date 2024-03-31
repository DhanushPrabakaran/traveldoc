import React from 'react';

const Dashboard: React.FC = () => {
  // Sample user data
  const totalExpenses = 4500;
  const traveledLocations = [
    { name: 'Paris, France', duration: '5 days', expenses: 2000 },
    { name: 'Tokyo, Japan', duration: '7 days', expenses: 2500 },
    { name: 'Rome, Italy', duration: '3 days', expenses: 1000 },
    // Add more traveled locations as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* Total Expenses */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Total Expenses</h2>
        <p className="text-2xl font-bold">${totalExpenses}</p>
      </div>

      {/* Traveled Locations */}
      <div>
        <h2 className="text-xl font-bold mb-4">Traveled Locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {traveledLocations.map((location, index) => (
            <div
              key={index}
              className="border rounded-md p-4 bg-white shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{location.name}</h3>
              <p className="mb-2">
                <span className="font-semibold">Duration:</span>{' '}
                {location.duration}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Expenses:</span> $
                {location.expenses}
              </p>
              {/* Add more details about each location as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
