import React from 'react'
import SearchBar from './componets/SearchBar'
import Tabs from './componets/Tabs'
import ResultGrid from './componets/ResultGrid'

const App = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]"></div>

      {/* Floating Blur Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Hero Section */}
        <div className="text-center mb-14">

          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg mb-6 hover:scale-105 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            <span className="text-sm tracking-wide text-gray-300">
              AI Powered Media Explorer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
              Search Photos,
            </span>

            <br />

            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Videos & GIFs
            </span>

          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
            Instantly discover stunning visuals, trending videos, animated GIFs,
            and creative media assets from across the internet with a premium
            ultra-fast search experience.
          </p>

        </div>

        {/* Main Glass Container */}
        <div className="relative rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.65)]">

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-[36px] border border-white/5 pointer-events-none"></div>

          {/* Top Gradient Line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">

            {/* Search Area */}
            <div className="group relative rounded-3xl border border-white/10 bg-black/20 p-5 hover:border-cyan-400/40 transition-all duration-500">

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <SearchBar />
              </div>

            </div>

            {/* Tabs */}
            <div className="group relative rounded-3xl border border-white/10 bg-black/20 p-5 hover:border-fuchsia-400/40 transition-all duration-500">

              <div className="absolute inset-0 rounded-3xl bg-fuchsia-500/0 group-hover:bg-fuchsia-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <Tabs />
              </div>

            </div>

            {/* Results */}
            <div className="group relative rounded-[30px] border border-white/10 bg-black/20 min-h-[500px] overflow-hidden hover:border-blue-400/40 transition-all duration-500">

              {/* Animated Shine */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-[40%] top-0 h-full w-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-2xl animate-[shine_6s_linear_infinite]"></div>
              </div>

              {/* Results Content */}
              <div className="relative z-10 p-6">
                <ResultGrid />
              </div>

            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-all duration-300">

            <span className="text-gray-400">
              Crafted & Designed by
            </span>

            <a
              href="https://github.com/kunalgupta21"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent hover:opacity-80 transition"
            >
              @kunalgupta21
            </a>

          </div>

        </footer>

      </div>
    </div>
  )
}

export default App