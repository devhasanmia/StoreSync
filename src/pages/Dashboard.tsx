const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Today Summary</h1>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Card 1: Total Customers */}
        <div className="bg-green-500 text-white text-center rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Today Sell Profit
          3,020</h2>
          <p className="text-3xl font-bold">500</p>
        </div>

        {/* Card 2: Total Orders */}
        <div className="bg-blue-500 text-white text-center rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold">1200</p>
        </div>

        {/* Card 3: Total Revenue */}
        <div className="bg-yellow-500 text-white text-center rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold">$45,000</p>
        </div>

        {/* Card 4: Active Users */}
        <div className="bg-red-500 text-white text-center rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Active Users</h2>
          <p className="text-3xl font-bold">120</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
