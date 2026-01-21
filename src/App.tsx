import { Sparkles, Users, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full p-6">
                <Users className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Welcome User!!
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 text-center mb-12 leading-relaxed">
            We're delighted to have you here. Your journey begins now.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Innovative</h3>
              <p className="text-gray-600 text-sm">Experience cutting-edge features</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Connected</h3>
              <p className="text-gray-600 text-sm">Join our vibrant community</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Supported</h3>
              <p className="text-gray-600 text-sm">We're here to help you succeed</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-blue-800">
              Get Started
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300">
              Learn More
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-500 text-sm">
          Made with care for an exceptional experience
        </p>
      </div>
    </div>
  );
}

export default App;
