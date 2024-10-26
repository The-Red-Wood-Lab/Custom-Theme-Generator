// app/get-started/page.js
import { ArrowRight, Palette, Settings, Download, Eye } from 'lucide-react';
import Link from 'next/link';

export default function GetStarted() {
  const steps = [
    {
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
      title: "Choose Your Base Theme",
      description: "Start with one of our pre-built themes or create one from scratch."
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-600" />,
      title: "Customize Colors & Styles",
      description: "Adjust colors, typography, spacing, and other design elements to match your needs."
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-600" />,
      title: "Preview Your Changes",
      description: "See how your theme looks in real-time with our live preview feature."
    },
    {
      icon: <Download className="w-8 h-8 text-indigo-600" />,
      title: "Export & Use",
      description: "Download your custom theme in multiple formats ready for implementation."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started with Theme Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Follow our simple guide to create your perfect custom theme in minutes.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Launch Generator
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-lg p-3">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Detailed Documentation
          </h2>
          <div className="prose prose-indigo max-w-none">
            <p className="mb-4">
              Our comprehensive documentation covers everything you need to know about
              using Theme Generator effectively. Here are some helpful resources to
              get you started:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Quick Start Guide</li>
              <li>• Theme Customization Options</li>
              <li>• Export Formats & Integration</li>
              <li>• Best Practices & Tips</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                Need help? Check out our FAQ section or reach out to our support team
                for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}