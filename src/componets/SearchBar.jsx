import React, { useState } from 'react'
import { setQuery } from '../redux/features/MediaSlice'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submithandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
  }

  return (
    <div className="w-full flex items-center justify-center">

      <form
        onSubmit={submithandler}
        className="
          group
          relative
          flex
          flex-col
          sm:flex-row
          items-center
          gap-4
          w-full
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-4
          sm:p-5
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
          hover:border-cyan-400/40
          transition-all
          duration-500
        "
      >

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:via-fuchsia-500/5 group-hover:to-blue-500/5 transition-all duration-700"></div>

        {/* Search Input Wrapper */}
        <div className="relative flex-1 w-full">

          {/* Search Icon */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
            🔍
          </div>

          <input
            type="text"
            placeholder="Search photos, videos, GIFs..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/30
              text-white
              placeholder:text-gray-500
              px-14
              py-4
              text-base
              sm:text-lg
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400/60
              focus:ring-4
              focus:ring-cyan-500/10
              hover:border-white/20
              shadow-inner
            "
          />

          {/* Typing Glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 focus-within:opacity-100 bg-cyan-500/5 blur-xl transition duration-500 pointer-events-none"></div>

        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="
            relative
            overflow-hidden
            rounded-2xl
            px-8
            py-4
            font-semibold
            tracking-wide
            text-white
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-fuchsia-500
            shadow-[0_8px_30px_rgba(59,130,246,0.35)]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_10px_40px_rgba(168,85,247,0.45)]
            active:scale-95
            min-w-[140px]
          "
        >

          {/* Shine Animation */}
          <span className="absolute inset-0 overflow-hidden rounded-2xl">
            <span className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_3s_linear_infinite]"></span>
          </span>

          <span className="relative z-10 flex items-center justify-center gap-2">
            Search
            <span className="text-lg">✨</span>
          </span>

        </button>

      </form>

    </div>
  )
}

export default SearchBar