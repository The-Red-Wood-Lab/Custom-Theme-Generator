"use client";
import React from 'react';
import { ArrowRight, Palette, Zap, Code } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: <Palette className="w-6 h-6 text-indigo-500" />,
      title: "Custom Color Schemes",
      description: "Generate beautiful and harmonious color palettes for your projects"
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "Instant Preview",
      description: "See your theme changes in real-time with our live preview feature"
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      title: "Export Ready Code",
      description: "Get production-ready code for your chosen theme instantly"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Theme Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create stunning, customized themes for your applications in minutes. 
            No design experience needed.
          </p>
          <button
            onClick={() => router.push('/generator')}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Perfect Theme?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of developers who are creating beautiful themes with our generator.
          </p>
          <button
            onClick={() => router.push('/generator')}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Start Generating
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}