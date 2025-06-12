export const tailwindDashboard = `function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <img className="h-8 w-8 rounded-full ring-2 ring-blue-500" 
                 src="/avatar.jpg" alt="User" />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {['Dashboard', 'Analytics', 'Users'].map((item, index) => (
                <li key={item}>
                  <a href="#" className={\`px-4 py-2 rounded-lg transition-colors \${
                      index === 0 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }\`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Users', value: '2,651', change: '+12%', positive: true },
              { title: 'Revenue', value: '$45,231', change: '+8%', positive: true }
            ].map((stat) => (
              <div key={stat.title} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={\`px-2 py-1 rounded-full text-xs \${
                      stat.positive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }\`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart Component Here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}`;
