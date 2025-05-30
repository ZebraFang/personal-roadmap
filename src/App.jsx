// app.jsx
import React, { useState } from "react";
import Button from "./components/ui/Button";
import "./styles/globals.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = (variant) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCount((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚗💰 Personal Roadmap Tracker
          </h1>
          <p className="text-lg text-gray-600">
            Testing our Button component - clicks: {count}
          </p>
        </div>

        {/* Button Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Primary Buttons */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Primary Buttons</h3>
            <div className="space-y-3">
              <Button
                variant="primary"
                onClick={() => handleClick("primary")}
                loading={loading}
              >
                Complete Milestone
              </Button>
              <Button variant="primary" size="sm">
                Small Primary
              </Button>
              <Button variant="primary" size="lg">
                Large Primary
              </Button>
            </div>
          </div>

          {/* Secondary & States */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="space-y-3">
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">✅ Goal Achieved</Button>
              <Button variant="danger">❌ Delete Item</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          {/* Interactive States */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">States</h3>
            <div className="space-y-3">
              <Button variant="outline">Outline Style</Button>
              <Button disabled>Disabled Button</Button>
              <Button variant="primary" loading>
                Loading...
              </Button>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-12 card">
          <h3 className="text-xl font-semibold mb-4">🎯 Roadmap Preview</h3>
          <p className="text-gray-600 mb-6">
            Here's how buttons will look in your actual roadmap:
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-success-50 border border-success-200 rounded-lg">
              <div>
                <h4 className="font-medium text-success-800">
                  June 2025: Secure New Vehicle
                </h4>
                <p className="text-sm text-success-600">
                  Collect CR-V, trade in Golf, set up loan payments
                </p>
              </div>
              <Button variant="success" size="sm">
                ✅ Complete
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-warning-50 border border-warning-200 rounded-lg">
              <div>
                <h4 className="font-medium text-warning-800">
                  July 2025: MacBook Fund Launch
                </h4>
                <p className="text-sm text-warning-600">
                  Start saving £300/month for MacBook Pro
                </p>
              </div>
              <Button variant="outline" size="sm">
                In Progress
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">
                  August 2025: NVQ Completion
                </h4>
                <p className="text-sm text-gray-600">
                  Finish NVQ Level 3, claim £625 bonus
                </p>
              </div>
              <Button variant="ghost" size="sm">
                Upcoming
              </Button>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 p-6 bg-primary-50 border border-primary-200 rounded-lg">
          <h3 className="text-lg font-semibold text-primary-800 mb-2">
            🚀 Ready for Authentication!
          </h3>
          <p className="text-primary-700 mb-4">
            Button component is working perfectly. Next steps:
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Set up Supabase Auth</Button>
            <Button variant="secondary">Create Login Form</Button>
            <Button variant="outline">Build Dashboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
