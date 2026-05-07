import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/MediaSlice'

const Tabs = () => {
  const tabItems = ['photos', 'videos', 'GIF']

  const dispatch = useDispatch()
  const { activeTab } = useSelector((store) => store.media)

  return (
    <div className="w-full flex items-center justify-center">

      {/* Tabs Container */}
      <div
        className="
          relative
          flex
          flex-wrap
          items-center
          justify-center
          gap-4
          rounded-[26px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-3
          shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        "
      >

        {/* Background Glow */}
        <div className="absolute inset-0 rounded-[26px] bg-gradient-to-r from-cyan-500/5 via-fuchsia-500/5 to-blue-500/5 blur-2xl opacity-60"></div>

        {tabItems.map((elem) => {
          const isActive = activeTab === elem

          return (
            <button
              key={elem}
              onClick={() => dispatch(setActiveTabs(elem))}
              className={`
                group
                relative
                overflow-hidden
                px-7
                sm:px-8
                py-3
                rounded-2xl
                font-semibold
                capitalize
                tracking-wide
                transition-all
                duration-300
                transform
                border
                backdrop-blur-xl
                min-w-[120px]
                flex
                items-center
                justify-center
                gap-2

                ${
                  isActive
                    ? `
                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-500
                      to-fuchsia-500
                      text-white
                      border-transparent
                      scale-105
                      shadow-[0_8px_30px_rgba(59,130,246,0.45)]
                    `
                    : `
                      bg-black/30
                      border-white/10
                      text-gray-300
                      hover:text-white
                      hover:border-cyan-400/40
                      hover:bg-white/[0.05]
                      hover:scale-105
                    `
                }
              `}
            >

              {/* Active Glow */}
              {isActive && (
                <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              )}

              {/* Shine Animation */}
              <span className="absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_4s_linear_infinite]"></span>
              </span>

              {/* Icon */}
              <span className="relative z-10 text-lg">
                {elem === 'photos' && '📸'}
                {elem === 'videos' && '🎬'}
                {elem === 'GIF' && '✨'}
              </span>

              {/* Text */}
              <span className="relative z-10">
                {elem}
              </span>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/5 transition duration-300 rounded-2xl"></div>

            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs