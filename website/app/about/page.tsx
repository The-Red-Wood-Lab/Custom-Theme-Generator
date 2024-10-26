// app/about/page.js
import { Coffee, Palette, Users, Zap } from 'lucide-react';

export default function About() {
  const benefits = [
    {
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
      title: "Custom Themes",
      description: "Create unique, personalized themes that match your brand identity perfectly."
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Instant Preview",
      description: "See your changes in real-time with our live preview feature."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "User-Friendly",
      description: "No coding experience required. Our intuitive interface makes theme creation simple."
    },
    {
      icon: <Coffee className="w-8 h-8 text-indigo-600" />,
      title: "Time-Saving",
      description: "Generate complete themes in minutes instead of hours of manual coding."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Theme Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re on a mission to make custom theme creation accessible to everyone,
            whether you&apos;re a seasoned developer or just starting out.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Theme Generator?
          </h2>
          <div className="prose prose-indigo max-w-none">
            <p className="mb-4">
              Theme Generator was born from the need to simplify the process of creating
              custom themes for websites and applications. We understand that not everyone
              has the time or technical expertise to build themes from scratch, yet
              everyone deserves to have a beautiful, personalized design.
            </p>
            <p className="mb-4">
              Our tool combines the power of modern design principles with an
              easy-to-use interface, making it possible for anyone to create
              professional-looking themes in minutes. Whether you&apos;re building a personal
              blog, an e-commerce site, or a corporate website, Theme Generator helps
              you achieve your design goals efficiently.
            </p>
            <p>
              We&apos;re constantly improving our platform based on user feedback and
              industry trends, ensuring that you always have access to the latest
              design capabilities and features.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}