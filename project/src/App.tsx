import React from 'react';
import { 
  Scale, 
  FileText, 
  Globe2, 
  Shield, 
  ChevronRight,
  Users,
  Building2,
  FileCheck
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Rural Communities Through AI-Powered Legal Transcription
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transform community meetings into validated legal documents with our innovative AI solution
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center mx-auto">
            Learn How It Works
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Bridging the Gap Between Communities and Legal Documentation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multi-Language Support</h3>
              <p className="text-gray-600">
                Seamlessly transcribe and translate community discussions in multiple regional languages
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Legal Validation</h3>
              <p className="text-gray-600">
                AI-powered verification ensures compliance with legal standards and requirements
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Documentation</h3>
              <p className="text-gray-600">
                Store and manage all community documents in a secure, easily accessible platform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <Users className="mb-4 text-green-500" size={32} />
              <h3 className="text-xl font-semibold mb-2">Record Meeting</h3>
              <p className="text-gray-600">
                Capture community discussions using our simple recording interface
              </p>
            </div>

            <div className="relative p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <Building2 className="mb-4 text-green-500" size={32} />
              <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
              <p className="text-gray-600">
                Our AI system transcribes and formats the content into legal documents
              </p>
            </div>

            <div className="relative p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <FileCheck className="mb-4 text-green-500" size={32} />
              <h3 className="text-xl font-semibold mb-2">Legal Validation</h3>
              <p className="text-gray-600">
                Get your documents validated and ready for official use
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Start Empowering Your Community Today
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-green-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-green-500"
                placeholder="Tell us about your community needs"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-all"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 AI Legal Transcription. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;